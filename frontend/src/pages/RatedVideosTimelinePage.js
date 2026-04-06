import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Flex, Select, Checkbox, Spinner, useToast, Alert, AlertIcon, AlertTitle, AlertDescription, useColorModeValue, Tooltip, } from '@chakra-ui/react';
import { videoApi } from '../api/client';
// Define time period options
const TIME_PERIODS = [
    { value: '3', label: 'Last 3 Months' },
    { value: '6', label: 'Last 6 Months' },
    { value: '12', label: 'Last 12 Months' },
    { value: '24', label: 'Last 2 Years' },
    { value: '60', label: 'Last 5 Years' },
    { value: 'all', label: 'All Time' },
];
// Define grouping options
const GROUPING_OPTIONS = [
    { value: 'auto', label: 'Auto' },
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'quarter', label: 'Quarter' },
    { value: 'year', label: 'Year' },
];
const RatedVideosTimelinePage = () => {
    const navigate = useNavigate();
    const [videos, setVideos] = useState([]);
    const [groupedData, setGroupedData] = useState([]);
    const [timePeriod, setTimePeriod] = useState('12'); // Default to 12 months
    const [grouping, setGrouping] = useState('auto'); // Default to auto grouping
    const [showUnreviewed, setShowUnreviewed] = useState(false);
    const [loading, setLoading] = useState(true);
    const toast = useToast();
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const barEmptyColor = useColorModeValue('gray.100', 'gray.700');
    // Fetch videos when component mounts or filters change
    useEffect(() => {
        fetchVideos();
    }, [timePeriod, showUnreviewed]);
    // Fetch videos from API
    const fetchVideos = async () => {
        setLoading(true);
        try {
            // Calculate date range based on selected time period
            const endDate = new Date();
            let startDate = null;
            if (timePeriod !== 'all') {
                startDate = new Date();
                startDate.setMonth(startDate.getMonth() - parseInt(timePeriod));
            }
            // Prepare search params
            const params = {
                limit: 1000, // Get a large number of videos
                unreviewed: showUnreviewed ? undefined : false, // If showUnreviewed is false, exclude unreviewed videos
            };
            // Add date range if not "all time"
            if (startDate) {
                params.start_date = startDate.toISOString().split('T')[0];
                params.end_date = endDate.toISOString().split('T')[0];
            }
            const results = await videoApi.searchVideos(params);
            // Filter out videos without ratings if not showing unreviewed
            const filteredVideos = showUnreviewed
                ? results
                : results.filter(video => video.rating !== undefined && video.rating > 0);
            setVideos(filteredVideos);
            // Group the videos based on the selected grouping
            groupVideos(filteredVideos);
        }
        catch (error) {
            console.error('Error fetching videos:', error);
            toast({
                title: 'Error fetching videos',
                description: 'There was an error fetching the videos. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
        finally {
            setLoading(false);
        }
    };
    // Group videos based on selected grouping
    const groupVideos = (videos) => {
        if (videos.length === 0) {
            setGroupedData([]);
            return;
        }
        // Determine appropriate grouping if auto is selected
        let effectiveGrouping = grouping;
        if (grouping === 'auto') {
            // Logic to determine the best grouping based on date range
            const dateRange = parseInt(timePeriod);
            if (timePeriod === 'all' || dateRange > 24) {
                effectiveGrouping = 'year';
            }
            else if (dateRange > 6) {
                effectiveGrouping = 'quarter';
            }
            else if (dateRange > 3) {
                effectiveGrouping = 'month';
            }
            else if (dateRange > 1) {
                effectiveGrouping = 'week';
            }
            else {
                effectiveGrouping = 'day';
            }
        }
        // Group videos by the determined period
        const grouped = {};
        videos.forEach(video => {
            if (!video.created_date)
                return;
            const date = new Date(video.created_date);
            let periodKey;
            switch (effectiveGrouping) {
                case 'day':
                    periodKey = date.toISOString().split('T')[0]; // YYYY-MM-DD
                    break;
                case 'week': {
                    // Get the first day of the week (Sunday)
                    const day = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
                    const diff = date.getDate() - day;
                    const firstDayOfWeek = new Date(date);
                    firstDayOfWeek.setDate(diff);
                    periodKey = `${firstDayOfWeek.toISOString().split('T')[0]}-week`; // YYYY-MM-DD-week
                    break;
                }
                case 'month':
                    periodKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`; // YYYY-MM
                    break;
                case 'quarter':
                    const quarter = Math.floor(date.getMonth() / 3) + 1;
                    periodKey = `${date.getFullYear()}-Q${quarter}`; // YYYY-Q#
                    break;
                case 'year':
                default:
                    periodKey = `${date.getFullYear()}`; // YYYY
                    break;
            }
            if (!grouped[periodKey]) {
                grouped[periodKey] = [];
            }
            grouped[periodKey].push(video);
        });
        // Convert grouped object to array and calculate stats
        const groupedArray = Object.keys(grouped)
            .sort() // Sort periods chronologically
            .map(period => {
            const periodVideos = grouped[period];
            const ratings = periodVideos
                .map(v => v.rating || 0)
                .filter(r => r > 0); // Filter out unrated videos for average calculation
            const maxRating = Math.max(...periodVideos.map(v => v.rating || 0));
            const avgRating = ratings.length > 0
                ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
                : 0;
            return {
                period,
                videos: periodVideos,
                maxRating,
                avgRating,
                count: periodVideos.length,
            };
        });
        setGroupedData(groupedArray);
    };
    // Update grouping when it changes
    useEffect(() => {
        if (videos.length > 0) {
            groupVideos(videos);
        }
    }, [grouping]);
    // Format period label based on grouping
    const formatPeriodLabel = (period, effectiveGrouping) => {
        switch (effectiveGrouping) {
            case 'day':
                return new Date(period).toLocaleDateString();
            case 'week': {
                const weekDate = period.split('-week')[0]; // Extract the date part
                const date = new Date(weekDate);
                // Calculate the end of the week (Saturday)
                const endOfWeek = new Date(date);
                endOfWeek.setDate(date.getDate() + 6);
                // Format as "MMM D - MMM D, YYYY" (e.g., "Jan 1 - Jan 7, 2023")
                const startMonth = date.toLocaleString('default', { month: 'short' });
                const endMonth = endOfWeek.toLocaleString('default', { month: 'short' });
                const startDay = date.getDate();
                const endDay = endOfWeek.getDate();
                const year = date.getFullYear();
                if (startMonth === endMonth) {
                    return `${startMonth} ${startDay}-${endDay}, ${year}`;
                }
                else {
                    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`;
                }
            }
            case 'month': {
                const [year, month] = period.split('-');
                return `${new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'short' })} ${year}`;
            }
            case 'quarter': {
                const [year, quarter] = period.split('-Q');
                return `${quarter}Q ${year}`;
            }
            case 'year':
                return period;
            default:
                return period;
        }
    };
    // Determine effective grouping for display
    const getEffectiveGrouping = () => {
        if (grouping !== 'auto')
            return grouping;
        // Logic to determine the best grouping based on date range
        const dateRange = parseInt(timePeriod);
        if (timePeriod === 'all' || dateRange > 24) {
            return 'year';
        }
        else if (dateRange > 6) {
            return 'quarter';
        }
        else if (dateRange > 3) {
            return 'month';
        }
        else if (dateRange > 1) {
            return 'week';
        }
        else {
            return 'day';
        }
    };
    // Get color for rating bar
    const getRatingColor = (rating) => {
        if (rating >= 4.5)
            return 'green.500';
        if (rating >= 3.5)
            return 'teal.500';
        if (rating >= 2.5)
            return 'blue.500';
        if (rating >= 1.5)
            return 'yellow.500';
        return 'red.500';
    };
    // Handle click on a timeline bar
    const handleBarClick = (group) => {
        // Determine date range based on the grouping
        let startDate;
        let endDate;
        const effectiveGrouping = getEffectiveGrouping();
        switch (effectiveGrouping) {
            case 'day':
                // For day grouping, use the same day
                startDate = group.period;
                endDate = group.period;
                break;
            case 'week': {
                // For week grouping, use the first day of the week and the day 6 days later
                const weekDate = group.period.split('-week')[0]; // Extract the date part
                const firstDay = new Date(weekDate);
                const lastDay = new Date(weekDate);
                lastDay.setDate(firstDay.getDate() + 6); // 6 days after the first day = end of week
                startDate = firstDay.toISOString().split('T')[0];
                endDate = lastDay.toISOString().split('T')[0];
                break;
            }
            case 'month': {
                // For month grouping, use the first and last day of the month
                const [year, month] = group.period.split('-');
                const firstDay = new Date(parseInt(year), parseInt(month) - 1, 1);
                const lastDay = new Date(parseInt(year), parseInt(month), 0); // Last day of the month
                startDate = firstDay.toISOString().split('T')[0];
                endDate = lastDay.toISOString().split('T')[0];
                break;
            }
            case 'quarter': {
                // For quarter grouping, use the first and last day of the quarter
                const [year, quarter] = group.period.split('-Q');
                const quarterNum = parseInt(quarter);
                const firstMonth = (quarterNum - 1) * 3;
                const firstDay = new Date(parseInt(year), firstMonth, 1);
                const lastDay = new Date(parseInt(year), firstMonth + 3, 0); // Last day of the last month in the quarter
                startDate = firstDay.toISOString().split('T')[0];
                endDate = lastDay.toISOString().split('T')[0];
                break;
            }
            case 'year': {
                // For year grouping, use the first and last day of the year
                const year = parseInt(group.period);
                const firstDay = new Date(year, 0, 1);
                const lastDay = new Date(year, 11, 31);
                startDate = firstDay.toISOString().split('T')[0];
                endDate = lastDay.toISOString().split('T')[0];
                break;
            }
            default:
                // Default case, shouldn't happen
                startDate = group.period;
                endDate = group.period;
        }
        // Navigate to the videos page with date range filter
        navigate(`/?start_date=${startDate}&end_date=${endDate}`);
    };
    return (_jsxs(Box, { children: [_jsx(Heading, { size: "xl", mb: 6, children: "Rated Videos Timeline" }), _jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "lg", bg: bgColor, borderColor: borderColor, mb: 6, children: [_jsx(Heading, { size: "md", mb: 4, children: "Timeline Settings" }), _jsxs(Flex, { direction: { base: 'column', md: 'row' }, gap: 4, mb: 4, children: [_jsxs(Box, { flex: "1", children: [_jsx(Text, { mb: 2, children: "Time Period" }), _jsx(Select, { value: timePeriod, onChange: (e) => setTimePeriod(e.target.value), children: TIME_PERIODS.map(option => (_jsx("option", { value: option.value, children: option.label }, option.value))) })] }), _jsxs(Box, { flex: "1", children: [_jsx(Text, { mb: 2, children: "Group By" }), _jsx(Select, { value: grouping, onChange: (e) => setGrouping(e.target.value), children: GROUPING_OPTIONS.map(option => (_jsx("option", { value: option.value, children: option.label }, option.value))) })] })] }), _jsx(Checkbox, { isChecked: showUnreviewed, onChange: (e) => setShowUnreviewed(e.target.checked), children: "Show unreviewed videos" })] }), loading ? (_jsx(Flex, { justify: "center", align: "center", h: "200px", children: _jsx(Spinner, { size: "xl" }) })) : groupedData.length === 0 ? (_jsxs(Alert, { status: "info", children: [_jsx(AlertIcon, {}), _jsx(AlertTitle, { children: "No videos found" }), _jsxs(AlertDescription, { children: ["No rated videos were found for the selected time period.", !showUnreviewed && " Try enabling 'Show unreviewed videos' to see all videos."] })] })) : (_jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "lg", bg: bgColor, borderColor: borderColor, children: [_jsxs(Heading, { size: "md", mb: 4, children: ["Video Ratings Over Time", _jsxs(Text, { as: "span", fontWeight: "normal", fontSize: "md", ml: 2, children: ["(Grouped by ", getEffectiveGrouping(), ")"] })] }), _jsxs(Flex, { justify: "space-between", mb: 2, children: [_jsx(Text, { fontSize: "sm", fontWeight: "bold", children: groupedData.length > 0 ? formatPeriodLabel(groupedData[0].period, getEffectiveGrouping()) : 'Start' }), _jsx(Text, { fontSize: "sm", fontWeight: "bold", children: groupedData.length > 0 ? formatPeriodLabel(groupedData[groupedData.length - 1].period, getEffectiveGrouping()) : 'End' })] }), _jsxs(Box, { position: "relative", mb: 10, children: [_jsx(Flex, { direction: "row", w: "100%", h: "100px", bg: barEmptyColor, borderRadius: "md", overflow: "hidden", position: "relative", justify: "space-between", align: "flex-end", px: 1, children: groupedData.map((group) => {
                                    // Calculate size factor based on max rating and video count
                                    const sizeFactor = Math.max((group.maxRating / 5) * 0.7 + (Math.min(group.count, 20) / 20) * 0.3, 0.1 // Minimum size factor
                                    );
                                    // Calculate width - fixed width with slight variation based on rating/count
                                    const baseWidth = 100 / Math.max(groupedData.length, 1);
                                    const width = Math.max(baseWidth * 0.8, 0.5); // Ensure minimum width
                                    return (_jsx(Tooltip, { label: _jsxs(Box, { p: 1, children: [_jsx(Text, { fontWeight: "bold", children: formatPeriodLabel(group.period, getEffectiveGrouping()) }), _jsxs(Text, { children: ["Max Rating: ", group.maxRating.toFixed(1)] }), _jsxs(Text, { children: ["Avg Rating: ", group.avgRating.toFixed(1)] }), _jsxs(Text, { children: ["Videos: ", group.count] }), group.videos
                                                    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
                                                    .slice(0, 3)
                                                    .map(video => (_jsxs(Text, { fontSize: "xs", mt: 1, children: [video.rating ? `${video.rating.toFixed(1)}★` : 'Unrated', ": ", (video.title || video.file_name).substring(0, 20), (video.title || video.file_name).length > 20 ? '...' : ''] }, video.id)))] }), hasArrow: true, placement: "top", children: _jsx(Box, { h: `${Math.max(sizeFactor * 100, 10)}%`, w: `${width}%`, minW: "4px", maxW: "30px", bg: getRatingColor(group.maxRating), opacity: 0.8, borderRadius: "md", mx: "1px", alignSelf: "flex-end", _hover: { opacity: 1, transform: 'translateY(-2px)' }, transition: "all 0.2s ease-in-out", onClick: (e) => {
                                                e.stopPropagation(); // Prevent tooltip from interfering
                                                handleBarClick(group);
                                            }, cursor: "pointer" // Add pointer cursor to indicate clickability
                                         }) }, group.period));
                                }) }), _jsx(Flex, { direction: "row", w: "100%", justify: "space-between", mt: 2, px: 1, children: groupedData.length > 0 && (_jsxs(_Fragment, { children: [_jsx(Text, { fontSize: "xs", children: formatPeriodLabel(groupedData[0].period, getEffectiveGrouping()) }), groupedData.length > 2 && (_jsx(Text, { fontSize: "xs", children: formatPeriodLabel(groupedData[Math.floor(groupedData.length / 2)].period, getEffectiveGrouping()) })), _jsx(Text, { fontSize: "xs", children: formatPeriodLabel(groupedData[groupedData.length - 1].period, getEffectiveGrouping()) })] })) })] }), _jsxs(Flex, { mt: 10, justify: "space-between", wrap: "wrap", children: [_jsxs(Box, { children: [_jsx(Text, { fontSize: "sm", fontWeight: "bold", children: "Color Legend:" }), _jsx(Flex, { mt: 1, align: "center", children: [1, 2, 3, 4, 5].map(rating => (_jsxs(Flex, { align: "center", mr: 3, children: [_jsx(Box, { w: "12px", h: "12px", bg: getRatingColor(rating), mr: 1, borderRadius: "sm" }), _jsxs(Text, { fontSize: "xs", children: [rating, "\u2605"] })] }, rating))) })] }), _jsxs(Box, { children: [_jsx(Text, { fontSize: "sm", fontWeight: "bold", children: "Size represents:" }), _jsx(Text, { fontSize: "xs", children: "Higher ratings and more videos = larger blocks" })] })] })] }))] }));
};
export default RatedVideosTimelinePage;
