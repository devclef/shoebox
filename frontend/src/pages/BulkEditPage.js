import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Flex, VStack, Checkbox, Spinner, useToast, Alert, AlertIcon, AlertTitle, AlertDescription, useColorModeValue, Table, Thead, Tbody, Tr, Th, Td, Badge, Image, InputGroup, InputRightElement, IconButton, Input, FormControl, FormLabel, Select, Tag, TagLabel, TagCloseButton, } from '@chakra-ui/react';
import { FaSearch, FaEdit, FaStar } from 'react-icons/fa';
import { videoApi, tagApi, personApi, locationApi, eventApi } from '../api/client';
import SearchFilters from '../components/SearchFilters';
const BulkEditPage = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [availableTags, setAvailableTags] = useState([]);
    const [availablePeople, setAvailablePeople] = useState([]);
    const [availableLocations, setAvailableLocations] = useState([]);
    const [availableEvents, setAvailableEvents] = useState([]);
    const [newTag, setNewTag] = useState('');
    const [newPerson, setNewPerson] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newEvent, setNewEvent] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedPeople, setSelectedPeople] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const toast = useToast();
    const bgColor = useColorModeValue('white', 'gray.800');
    // Load videos and metadata on component mount
    useEffect(() => {
        fetchVideos();
        fetchTags();
        fetchPeople();
        fetchLocations();
        fetchEvents();
    }, []);
    // Fetch videos from API
    const fetchVideos = async (params = {}) => {
        setLoading(true);
        try {
            const results = await videoApi.searchVideos({
                limit: 100,
                ...params
            });
            setVideos(results);
        }
        catch (error) {
            console.error('Error fetching videos:', error);
            toast({
                title: 'Error fetching videos',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
        finally {
            setLoading(false);
        }
    };
    // Fetch available tags
    const fetchTags = async () => {
        try {
            const tags = await tagApi.getTagUsage();
            setAvailableTags(tags.map(tag => tag.name));
        }
        catch (error) {
            console.error('Error fetching tags:', error);
        }
    };
    // Fetch available people
    const fetchPeople = async () => {
        try {
            const people = await personApi.getPersonUsage();
            setAvailablePeople(people.map(person => person.name));
        }
        catch (error) {
            console.error('Error fetching people:', error);
        }
    };
    // Fetch available locations
    const fetchLocations = async () => {
        try {
            const locations = await locationApi.getLocations();
            setAvailableLocations(locations);
        }
        catch (error) {
            console.error('Error fetching locations:', error);
        }
    };
    // Fetch available events
    const fetchEvents = async () => {
        try {
            const events = await eventApi.getEvents();
            setAvailableEvents(events);
        }
        catch (error) {
            console.error('Error fetching events:', error);
        }
    };
    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    // Handle search submit
    const handleSearch = () => {
        fetchVideos({
            query: searchQuery.trim() || undefined,
        });
    };
    // Handle search on Enter key
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    // Handle filter changes
    const handleFilterChange = (filters) => {
        fetchVideos({
            ...filters,
            query: searchQuery.trim() || undefined,
        });
    };
    // Toggle video selection
    const toggleVideoSelection = (videoId) => {
        setSelectedVideos(prev => prev.includes(videoId)
            ? prev.filter(id => id !== videoId)
            : [...prev, videoId]);
    };
    // Select all videos
    const selectAllVideos = () => {
        if (selectedVideos.length === videos.length) {
            setSelectedVideos([]);
        }
        else {
            setSelectedVideos(videos.map(video => video.id));
        }
    };
    // Add a tag to the selection
    const addTag = (tag) => {
        if (tag && !selectedTags.includes(tag)) {
            setSelectedTags([...selectedTags, tag]);
            setNewTag('');
        }
    };
    // Remove a tag from the selection
    const removeTag = (tag) => {
        setSelectedTags(selectedTags.filter(t => t !== tag));
    };
    // Add a person to the selection
    const addPerson = (person) => {
        if (person && !selectedPeople.includes(person)) {
            setSelectedPeople([...selectedPeople, person]);
            setNewPerson('');
        }
    };
    // Remove a person from the selection
    const removePerson = (person) => {
        setSelectedPeople(selectedPeople.filter(p => p !== person));
    };
    // Set the selected location
    const setLocation = (location) => {
        if (location) {
            setSelectedLocation(location);
            setNewLocation('');
        }
    };
    // Clear the selected location
    const clearLocation = () => {
        setSelectedLocation(null);
    };
    // Set the selected event
    const setEvent = (event) => {
        if (event) {
            setSelectedEvent(event);
            setNewEvent('');
        }
    };
    // Clear the selected event
    const clearEvent = () => {
        setSelectedEvent(null);
    };
    // Handle bulk update
    const handleBulkUpdate = async () => {
        if (selectedVideos.length === 0) {
            toast({
                title: 'No videos selected',
                description: 'Please select at least one video to update',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        if (!selectedRating && selectedTags.length === 0 && selectedPeople.length === 0 && !selectedLocation && !selectedEvent) {
            toast({
                title: 'No changes to apply',
                description: 'Please select a rating, tags, people, location, or event to update',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        const updateDto = {};
        if (selectedRating !== null) {
            updateDto.rating = selectedRating;
        }
        if (selectedTags.length > 0) {
            updateDto.tags = selectedTags;
        }
        if (selectedPeople.length > 0) {
            updateDto.people = selectedPeople;
        }
        if (selectedLocation) {
            updateDto.location = selectedLocation;
        }
        if (selectedEvent) {
            updateDto.event = selectedEvent;
        }
        setUpdating(true);
        try {
            const bulkUpdateDto = {
                video_ids: selectedVideos,
                update: updateDto
            };
            await videoApi.bulkUpdateVideos(bulkUpdateDto);
            toast({
                title: 'Videos updated',
                description: `Successfully updated ${selectedVideos.length} videos`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            // Refresh the videos list
            fetchVideos();
            // Reset selection
            setSelectedVideos([]);
            setSelectedRating(null);
            setSelectedTags([]);
            setSelectedPeople([]);
            setSelectedLocation(null);
            setSelectedEvent(null);
        }
        catch (error) {
            console.error('Error updating videos:', error);
            toast({
                title: 'Error updating videos',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
        finally {
            setUpdating(false);
        }
    };
    return (_jsxs(Box, { children: [_jsx(Heading, { size: "xl", mb: 6, children: "Bulk Edit Videos" }), _jsxs(VStack, { spacing: 6, align: "stretch", children: [_jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "lg", bg: bgColor, borderColor: "gray.200", children: [_jsx(Heading, { size: "md", mb: 4, children: "1. Select Videos" }), _jsx(Flex, { mb: 6, direction: { base: 'column', md: 'row' }, gap: 4, children: _jsxs(InputGroup, { size: "md", flex: "1", children: [_jsx(Input, { placeholder: "Search videos...", value: searchQuery, onChange: handleSearchChange, onKeyDown: handleKeyDown }), _jsx(InputRightElement, { children: _jsx(IconButton, { "aria-label": "Search", icon: _jsx(FaSearch, {}), size: "sm", onClick: handleSearch }) })] }) }), _jsx(SearchFilters, { onFilterChange: handleFilterChange }), loading ? (_jsx(Flex, { justify: "center", align: "center", h: "200px", children: _jsx(Spinner, { size: "xl" }) })) : videos.length === 0 ? (_jsxs(Alert, { status: "info", children: [_jsx(AlertIcon, {}), _jsx(AlertTitle, { children: "No videos found" }), _jsx(AlertDescription, { children: "Try adjusting your search criteria" })] })) : (_jsx(Box, { overflowX: "auto", children: _jsxs(Table, { variant: "simple", children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, { width: "50px", children: _jsx(Checkbox, { isChecked: selectedVideos.length === videos.length && videos.length > 0, isIndeterminate: selectedVideos.length > 0 && selectedVideos.length < videos.length, onChange: selectAllVideos }) }), _jsx(Th, { children: "Thumbnail" }), _jsx(Th, { children: "Title" }), _jsx(Th, { children: "Tags" }), _jsx(Th, { children: "People" }), _jsx(Th, { children: "Rating" })] }) }), _jsx(Tbody, { children: videos.map(video => (_jsxs(Tr, { _hover: { bg: useColorModeValue('gray.50', 'gray.700') }, cursor: "pointer", onClick: () => toggleVideoSelection(video.id), children: [_jsx(Td, { children: _jsx(Checkbox, { isChecked: selectedVideos.includes(video.id), onChange: (e) => {
                                                                e.stopPropagation();
                                                                toggleVideoSelection(video.id);
                                                            } }) }), _jsx(Td, { children: _jsx(Image, { src: video.thumbnail_path || '/placeholder-thumbnail.jpg', alt: video.title || video.file_name, boxSize: "60px", objectFit: "cover", borderRadius: "md", fallbackSrc: "https://via.placeholder.com/60?text=No+Thumbnail" }) }), _jsxs(Td, { children: [_jsx(Text, { fontWeight: "bold", noOfLines: 1, children: video.title || video.file_name }), _jsx(Text, { fontSize: "sm", color: "gray.500", noOfLines: 1, children: video.duration ? `${Math.floor(video.duration / 60)}:${(video.duration % 60).toString().padStart(2, '0')}` : 'Unknown duration' })] }), _jsx(Td, { children: _jsxs(Flex, { wrap: "wrap", gap: 1, children: [video.tags.slice(0, 3).map(tag => (_jsx(Badge, { colorScheme: "blue", fontSize: "xs", color: "white", children: tag }, tag))), video.tags.length > 3 && (_jsxs(Badge, { colorScheme: "gray", fontSize: "xs", color: "white", children: ["+", video.tags.length - 3] }))] }) }), _jsx(Td, { children: _jsxs(Flex, { wrap: "wrap", gap: 1, children: [video.people.slice(0, 2).map(person => (_jsx(Badge, { colorScheme: "green", fontSize: "xs", color: "white", children: person }, person))), video.people.length > 2 && (_jsxs(Badge, { colorScheme: "gray", fontSize: "xs", color: "white", children: ["+", video.people.length - 2] }))] }) }), _jsx(Td, { children: video.rating ? (_jsx(Flex, { children: [...Array(video.rating)].map((_, i) => (_jsx(FaStar, { color: "gold" }, i))) })) : (_jsx(Text, { fontSize: "sm", color: "gray.500", children: "No rating" })) })] }, video.id))) })] }) })), _jsx(Flex, { justify: "space-between", mt: 4, children: _jsxs(Text, { children: [selectedVideos.length, " of ", videos.length, " videos selected"] }) })] }), _jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "lg", bg: bgColor, borderColor: "gray.200", children: [_jsx(Heading, { size: "md", mb: 4, children: "2. Edit Selected Videos" }), _jsxs(VStack, { spacing: 4, align: "stretch", children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Rating" }), _jsxs(Select, { placeholder: "Select rating", value: selectedRating?.toString() || '', onChange: (e) => setSelectedRating(e.target.value ? parseInt(e.target.value) : null), children: [_jsx("option", { value: "1", children: "1 Star" }), _jsx("option", { value: "2", children: "2 Stars" }), _jsx("option", { value: "3", children: "3 Stars" }), _jsx("option", { value: "4", children: "4 Stars" }), _jsx("option", { value: "5", children: "5 Stars" })] })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Tags" }), _jsx(Flex, { mb: 2, wrap: "wrap", gap: 2, children: selectedTags.map(tag => (_jsxs(Tag, { size: "md", borderRadius: "full", variant: "solid", colorScheme: "blue", children: [_jsx(TagLabel, { children: tag }), _jsx(TagCloseButton, { onClick: () => removeTag(tag) })] }, tag))) }), _jsxs(Flex, { children: [_jsx(Input, { placeholder: "Add a tag", value: newTag, onChange: (e) => setNewTag(e.target.value), list: "available-tags" }), _jsx(Button, { ml: 2, onClick: () => addTag(newTag), children: "Add" })] }), _jsx("datalist", { id: "available-tags", children: availableTags.map(tag => (_jsx("option", { value: tag }, tag))) })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "People" }), _jsx(Flex, { mb: 2, wrap: "wrap", gap: 2, children: selectedPeople.map(person => (_jsxs(Tag, { size: "md", borderRadius: "full", variant: "solid", colorScheme: "green", children: [_jsx(TagLabel, { children: person }), _jsx(TagCloseButton, { onClick: () => removePerson(person) })] }, person))) }), _jsxs(Flex, { children: [_jsx(Input, { placeholder: "Add a person", value: newPerson, onChange: (e) => setNewPerson(e.target.value), list: "available-people" }), _jsx(Button, { ml: 2, onClick: () => addPerson(newPerson), children: "Add" })] }), _jsx("datalist", { id: "available-people", children: availablePeople.map(person => (_jsx("option", { value: person }, person))) })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Location" }), selectedLocation ? (_jsx(Flex, { mb: 2, wrap: "wrap", gap: 2, children: _jsxs(Tag, { size: "md", borderRadius: "full", variant: "solid", colorScheme: "purple", children: [_jsx(TagLabel, { children: selectedLocation }), _jsx(TagCloseButton, { onClick: clearLocation })] }) })) : null, _jsxs(Flex, { children: [_jsx(Input, { placeholder: "Set location", value: newLocation, onChange: (e) => setNewLocation(e.target.value), list: "available-locations", isDisabled: selectedLocation !== null }), _jsx(Button, { ml: 2, onClick: () => setLocation(newLocation), isDisabled: selectedLocation !== null, children: "Set" })] }), _jsx("datalist", { id: "available-locations", children: availableLocations.map(location => (_jsx("option", { value: location }, location))) })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Event" }), selectedEvent ? (_jsx(Flex, { mb: 2, wrap: "wrap", gap: 2, children: _jsxs(Tag, { size: "md", borderRadius: "full", variant: "solid", colorScheme: "orange", children: [_jsx(TagLabel, { children: selectedEvent }), _jsx(TagCloseButton, { onClick: clearEvent })] }) })) : null, _jsxs(Flex, { children: [_jsx(Input, { placeholder: "Set event", value: newEvent, onChange: (e) => setNewEvent(e.target.value), list: "available-events", isDisabled: selectedEvent !== null }), _jsx(Button, { ml: 2, onClick: () => setEvent(newEvent), isDisabled: selectedEvent !== null, children: "Set" })] }), _jsx("datalist", { id: "available-events", children: availableEvents.map(event => (_jsx("option", { value: event }, event))) })] })] }), _jsx(Button, { mt: 6, colorScheme: "blue", leftIcon: _jsx(FaEdit, {}), isLoading: updating, loadingText: "Updating", onClick: handleBulkUpdate, isDisabled: selectedVideos.length === 0 ||
                                    (selectedRating === null && selectedTags.length === 0 && selectedPeople.length === 0 && selectedLocation === null && selectedEvent === null), children: "Update Selected Videos" })] })] })] }));
};
export default BulkEditPage;
