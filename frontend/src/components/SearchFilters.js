import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Select as ChakraSelect, Button, useDisclosure, Collapse, SimpleGrid, useColorModeValue, Checkbox, Input, Text } from '@chakra-ui/react';
import { FaFilter, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ReactSelect from 'react-select';
import { tagApi, personApi, locationApi, eventApi } from '../api/client';
const SearchFilters = ({ onFilterChange, initialFilters }) => {
    const { isOpen, onToggle } = useDisclosure();
    const [tags, setTags] = useState([]);
    const [people, setPeople] = useState([]);
    const [locations, setLocations] = useState([]);
    const [events, setEvents] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedPeople, setSelectedPeople] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedRating, setSelectedRating] = useState('');
    const [isUnreviewed, setIsUnreviewed] = useState(false);
    const [sortBy, setSortBy] = useState('created_date');
    const [sortOrder, setSortOrder] = useState('DESC');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [minDuration, setMinDuration] = useState('');
    const [maxDuration, setMaxDuration] = useState('');
    const [loading, setLoading] = useState(true);
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    // Load tags, people, locations, and events on component mount
    useEffect(() => {
        const fetchFilters = async () => {
            setLoading(true);
            try {
                // Fetch tags with usage count
                const tagsData = await tagApi.getTagUsage();
                const tagOptions = tagsData.map((tag) => ({
                    value: tag.name,
                    label: `${tag.name} (${tag.video_count})`,
                    count: tag.video_count
                }));
                setTags(tagOptions);
                // Fetch people with usage count
                const peopleData = await personApi.getPersonUsage();
                const peopleOptions = peopleData.map((person) => ({
                    value: person.name,
                    label: `${person.name} (${person.video_count})`,
                    count: person.video_count
                }));
                setPeople(peopleOptions);
                // Fetch locations with usage count
                const locationsData = await locationApi.getLocationUsage();
                const locationOptions = locationsData.map((location) => ({
                    value: location.name,
                    label: `${location.name} (${location.video_count})`,
                    count: location.video_count
                }));
                setLocations(locationOptions);
                // Fetch events with usage count
                const eventsData = await eventApi.getEventUsage();
                const eventOptions = eventsData.map((event) => ({
                    value: event.name,
                    label: `${event.name} (${event.video_count})`,
                    count: event.video_count
                }));
                setEvents(eventOptions);
            }
            catch (error) {
                console.error('Error fetching filters:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchFilters();
    }, []);
    // Initialize filters from props
    useEffect(() => {
        if (initialFilters) {
            // Initialize date filters if provided
            if (initialFilters.start_date) {
                setStartDate(initialFilters.start_date);
            }
            if (initialFilters.end_date) {
                setEndDate(initialFilters.end_date);
            }
            // Initialize location filter if provided
            if (initialFilters.location && locations.length > 0) {
                const locationOption = locations.find(loc => loc.value === initialFilters.location);
                if (locationOption) {
                    setSelectedLocation(locationOption);
                }
            }
            // Initialize event filter if provided
            if (initialFilters.event && events.length > 0) {
                const eventOption = events.find(evt => evt.value === initialFilters.event);
                if (eventOption) {
                    setSelectedEvent(eventOption);
                }
            }
        }
    }, [initialFilters, locations, events]);
    // Apply filters
    const applyFilters = () => {
        onFilterChange({
            tags: selectedTags.map(tag => tag.value),
            people: selectedPeople.map(person => person.value),
            location: selectedLocation ? selectedLocation.value : undefined,
            event: selectedEvent ? selectedEvent.value : undefined,
            rating: selectedRating ? parseInt(selectedRating, 10) : undefined,
            unreviewed: isUnreviewed || undefined,
            sort_by: sortBy || undefined,
            sort_order: sortOrder || undefined,
            start_date: startDate || undefined,
            end_date: endDate || undefined,
            min_duration: minDuration ? parseInt(minDuration, 10) : undefined,
            max_duration: maxDuration ? parseInt(maxDuration, 10) : undefined
        });
    };
    // Reset filters
    const resetFilters = () => {
        setSelectedTags([]);
        setSelectedPeople([]);
        setSelectedLocation(null);
        setSelectedEvent(null);
        setSelectedRating('');
        setIsUnreviewed(false);
        setSortBy('created_date');
        setSortOrder('DESC');
        setStartDate('');
        setEndDate('');
        setMinDuration('');
        setMaxDuration('');
        onFilterChange({
            tags: undefined,
            people: undefined,
            location: undefined,
            event: undefined,
            rating: undefined,
            unreviewed: undefined,
            sort_by: 'created_date',
            sort_order: 'DESC',
            start_date: undefined,
            end_date: undefined,
            min_duration: undefined,
            max_duration: undefined
        });
    };
    // Custom styles for react-select
    const selectStyles = {
        control: (base) => ({
            ...base,
            background: bgColor,
            borderColor: borderColor,
        }),
        menu: (base) => ({
            ...base,
            background: bgColor,
            zIndex: 2
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused
                ? useColorModeValue('blue.50', 'blue.900')
                : useColorModeValue('white', 'gray.700'),
            color: useColorModeValue('black', 'black')
        })
    };
    return (_jsxs(Box, { mb: 6, borderWidth: "1px", borderRadius: "lg", p: 4, bg: bgColor, borderColor: borderColor, children: [_jsxs(Flex, { justify: "space-between", align: "center", onClick: onToggle, cursor: "pointer", children: [_jsxs(Heading, { size: "md", display: "flex", alignItems: "center", children: [_jsx(FaFilter, { style: { marginRight: '8px' } }), "Filters"] }), _jsx(Box, { children: isOpen ? _jsx(FaChevronUp, {}) : _jsx(FaChevronDown, {}) })] }), _jsxs(Collapse, { in: isOpen, animateOpacity: true, children: [_jsxs(SimpleGrid, { columns: { base: 1, md: 3 }, spacing: 4, mt: 4, children: [_jsxs(Box, { children: [_jsx(Heading, { size: "sm", mb: 2, children: "Tags" }), _jsx(ReactSelect, { isMulti: true, options: tags, value: selectedTags, onChange: (selected) => setSelectedTags(selected || []), placeholder: "Select tags...", isLoading: loading, styles: selectStyles })] }), _jsxs(Box, { children: [_jsx(Heading, { size: "sm", mb: 2, children: "People" }), _jsx(ReactSelect, { isMulti: true, options: people, value: selectedPeople, onChange: (selected) => setSelectedPeople(selected || []), placeholder: "Select people...", isLoading: loading, styles: selectStyles })] }), _jsxs(Box, { children: [_jsx(Heading, { size: "sm", mb: 2, children: "Rating" }), _jsxs(ChakraSelect, { value: selectedRating, onChange: (e) => setSelectedRating(e.target.value), placeholder: "Any rating", children: [_jsx("option", { value: "1", children: "1 star" }), _jsx("option", { value: "2", children: "2 stars" }), _jsx("option", { value: "3", children: "3 stars" }), _jsx("option", { value: "4", children: "4 stars" }), _jsx("option", { value: "5", children: "5 stars" })] })] })] }), _jsxs(SimpleGrid, { columns: { base: 1, md: 2 }, spacing: 4, mt: 4, children: [_jsxs(Box, { children: [_jsx(Heading, { size: "sm", mb: 2, children: "Location" }), _jsx(ReactSelect, { options: locations, value: selectedLocation, onChange: (selected) => setSelectedLocation(selected), placeholder: "Select location...", isLoading: loading, styles: selectStyles, isClearable: true })] }), _jsxs(Box, { children: [_jsx(Heading, { size: "sm", mb: 2, children: "Event" }), _jsx(ReactSelect, { options: events, value: selectedEvent, onChange: (selected) => setSelectedEvent(selected), placeholder: "Select event...", isLoading: loading, styles: selectStyles, isClearable: true })] })] }), _jsxs(SimpleGrid, { columns: { base: 1, md: 2 }, spacing: 4, mt: 4, children: [_jsxs(Box, { children: [_jsx(Heading, { size: "sm", mb: 2, children: "Start Date" }), _jsx(Input, { type: "date", value: startDate, onChange: (e) => setStartDate(e.target.value), placeholder: "Start date" }), _jsx(Text, { fontSize: "xs", color: "gray.500", mt: 1, children: "Filter videos created on or after this date" })] }), _jsxs(Box, { children: [_jsx(Heading, { size: "sm", mb: 2, children: "End Date" }), _jsx(Input, { type: "date", value: endDate, onChange: (e) => setEndDate(e.target.value), placeholder: "End date" }), _jsx(Text, { fontSize: "xs", color: "gray.500", mt: 1, children: "Filter videos created on or before this date" })] })] }), _jsxs(SimpleGrid, { columns: { base: 1, md: 2 }, spacing: 4, mt: 4, children: [_jsxs(Box, { children: [_jsx(Heading, { size: "sm", mb: 2, children: "Min Duration (seconds)" }), _jsx(Input, { type: "number", value: minDuration, onChange: (e) => setMinDuration(e.target.value), placeholder: "Minimum duration", min: "0" }), _jsx(Text, { fontSize: "xs", color: "gray.500", mt: 1, children: "Filter videos with duration greater than or equal to this value" })] }), _jsxs(Box, { children: [_jsx(Heading, { size: "sm", mb: 2, children: "Max Duration (seconds)" }), _jsx(Input, { type: "number", value: maxDuration, onChange: (e) => setMaxDuration(e.target.value), placeholder: "Maximum duration", min: "0" }), _jsx(Text, { fontSize: "xs", color: "gray.500", mt: 1, children: "Filter videos with duration less than or equal to this value" })] })] }), _jsxs(SimpleGrid, { columns: { base: 1, md: 2 }, spacing: 4, mt: 4, children: [_jsxs(Box, { children: [_jsx(Heading, { size: "sm", mb: 2, children: "Sort By" }), _jsxs(ChakraSelect, { value: sortBy, onChange: (e) => setSortBy(e.target.value), placeholder: "Default (Created Date)", children: [_jsx("option", { value: "created_date", children: "Created Date" }), _jsx("option", { value: "duration", children: "Duration" }), _jsx("option", { value: "title", children: "Title" }), _jsx("option", { value: "rating", children: "Rating" }), _jsx("option", { value: "file_size", children: "File Size" })] })] }), _jsxs(Box, { children: [_jsx(Heading, { size: "sm", mb: 2, children: "Sort Order" }), _jsxs(ChakraSelect, { value: sortOrder, onChange: (e) => setSortOrder(e.target.value), children: [_jsx("option", { value: "ASC", children: "Ascending" }), _jsx("option", { value: "DESC", children: "Descending" })] })] })] }), _jsx(Box, { mt: 4, children: _jsx(Checkbox, { isChecked: isUnreviewed, onChange: (e) => setIsUnreviewed(e.target.checked), colorScheme: "blue", children: "Show only unreviewed videos" }) }), _jsxs(Flex, { mt: 4, justify: "flex-end", gap: 2, children: [_jsx(Button, { variant: "outline", onClick: resetFilters, children: "Reset" }), _jsx(Button, { colorScheme: "blue", onClick: applyFilters, children: "Apply Filters" })] })] })] }));
};
export default SearchFilters;
