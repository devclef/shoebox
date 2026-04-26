import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Image, Text, Heading, Badge, useColorModeValue, HStack, Icon, Stack, } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaStar, FaRegStar, FaClock } from 'react-icons/fa';
const VideoCard = ({ video }) => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const cardBorder = useColorModeValue('gray.200', 'gray.700');
    const textMuted = useColorModeValue('gray.500', 'gray.400');
    // Format date
    const formatDate = (dateString) => {
        if (!dateString)
            return 'Unknown date';
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime()))
                return 'Unknown date';
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        }
        catch (e) {
            return 'Unknown date';
        }
    };
    // Format duration (input is in milliseconds)
    const formatDuration = (ms) => {
        if (!ms)
            return '';
        const seconds = ms / 1000;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }
        else {
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        }
    };
    // Render rating stars
    const renderRating = (rating) => {
        if (!rating)
            return null;
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(_jsx(Icon, { as: i <= rating ? FaStar : FaRegStar, color: i <= rating ? 'yellow.400' : textMuted, boxSize: 3.5 }, i));
        }
        return (_jsx(HStack, { spacing: 0.5, mt: 2, children: stars }));
    };
    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, children: _jsxs(Box, { as: RouterLink, to: `/videos/${video.id}`, borderRadius: "2xl", overflow: "hidden", bg: cardBg, boxShadow: "card", position: "relative", _before: video.rating ? {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                zIndex: 1,
                bg: 'linear-gradient(135deg, transparent 0%, yellow.400 100%)',
                width: '40px',
                height: '40px',
                borderRadius: '0 12px 0 100%',
            } : {}, children: [_jsx(motion.div, { whileHover: { scale: 1.05 }, transition: { duration: 0.3, ease: 'easeOut' }, children: _jsxs(Box, { position: "relative", overflow: "hidden", height: "180px", borderRadius: "2xl 2xl 0 0", children: [_jsx(Image, { src: video.thumbnail_path || '/placeholder-thumbnail.jpg', alt: video.title || video.file_name, width: "100%", objectFit: "cover", fallbackSrc: "/placeholder-thumbnail.jpg" }), _jsxs(Box, { position: "absolute", bottom: 0, left: 0, right: 0, p: 2, bg: "linear-gradient(transparent, rgba(0,0,0,0.7))", display: "flex", alignItems: "center", gap: 1, children: [_jsx(Icon, { as: FaClock, color: "white", boxSize: 3 }), _jsx(Text, { fontSize: "xs", color: "white", fontWeight: "500", children: video.duration ? formatDuration(video.duration) : 'Unknown duration' })] })] }) }), _jsxs(Box, { p: 4, children: [_jsx(Heading, { size: "md", noOfLines: 2, mb: 1, fontWeight: "600", children: video.title || video.file_name }), renderRating(video.rating), _jsx(Text, { fontSize: "sm", color: textMuted, mt: 2, children: formatDate(video.created_date) }), _jsx(AnimatePresence, { children: (video.tags.length > 0 || video.people.length > 0) && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, transition: { duration: 0.2 }, children: _jsxs(Stack, { direction: "row", flexWrap: "wrap", gap: 2, mt: 3, children: [video.tags.slice(0, 3).map((tag) => (_jsx(Badge, { variant: "gradient", fontSize: "xs", px: 2, py: 1, borderRadius: "full", children: tag }, tag))), video.tags.length > 3 && (_jsxs(Badge, { colorScheme: "gray", fontSize: "xs", px: 2, py: 1, borderRadius: "full", variant: "subtle", children: ["+", video.tags.length - 3] })), video.people.slice(0, 2).map((person) => (_jsx(Badge, { bg: "linear-gradient(135deg, green.400, green.600)", fontSize: "xs", color: "white", px: 2, py: 1, borderRadius: "full", children: person }, person))), video.people.length > 2 && (_jsxs(Badge, { colorScheme: "gray", fontSize: "xs", px: 2, py: 1, borderRadius: "full", variant: "subtle", children: ["+", video.people.length - 2] }))] }) })) })] })] }) }));
};
export default VideoCard;
