import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Flex, Heading, Text, Button, VStack, HStack, FormControl, FormLabel, useToast, Spinner, Badge, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Code, useColorModeValue } from '@chakra-ui/react';
import { FaEdit, FaSave, FaTrash, FaArrowLeft, FaBug } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import { videoApi } from '../api/client';
import VideoForm from '../components/VideoForm';
const VideoDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isDebugOpen, onOpen: onDebugOpen, onClose: onDebugClose } = useDisclosure();
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [rawDatabaseValues, setRawDatabaseValues] = useState('');
    // Form state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(undefined);
    const [location, setLocation] = useState('');
    const [event, setEvent] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedPeople, setSelectedPeople] = useState([]);
    const [selectedShoeboxes, setSelectedShoeboxes] = useState([]);
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    // Load video data
    useEffect(() => {
        const fetchVideo = async () => {
            if (!id)
                return;
            setLoading(true);
            try {
                const videoData = await videoApi.getVideo(id);
                setVideo(videoData);
                // Initialize form state
                setTitle(videoData.title || '');
                setDescription(videoData.description || '');
                setRating(videoData.rating);
                setLocation(videoData.location || '');
                setEvent(videoData.event || '');
                setSelectedTags(videoData.tags.map(tag => ({ value: tag, label: tag })));
                setSelectedPeople(videoData.people.map(person => ({ value: person, label: person })));
                setSelectedShoeboxes(videoData.shoeboxes.map(shoebox => ({ value: shoebox, label: shoebox })));
            }
            catch (error) {
                console.error('Error fetching video:', error);
                toast({
                    title: 'Error fetching video',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
                navigate('/');
            }
            finally {
                setLoading(false);
            }
        };
        fetchVideo();
    }, [id, navigate, toast]);
    // Handle save
    const handleSave = async () => {
        if (!id || !video)
            return;
        setSaving(true);
        try {
            const updateData = {
                title: title || undefined,
                description: description || undefined,
                rating,
                location: location || undefined,
                event: event || undefined,
                tags: selectedTags.map(tag => tag.value),
                people: selectedPeople.map(person => person.value),
                shoeboxes: selectedShoeboxes.map(shoebox => shoebox.value),
            };
            const updatedVideo = await videoApi.updateVideo(id, updateData);
            setVideo(updatedVideo);
            setIsEditing(false);
            toast({
                title: 'Video updated',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            // Navigate back to the video detail page to ensure proper rendering
            navigate(`/videos/${id}`);
        }
        catch (error) {
            console.error('Error updating video:', error);
            toast({
                title: 'Error updating video',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
        finally {
            setSaving(false);
        }
    };
    // Handle delete
    const handleDelete = async () => {
        if (!id)
            return;
        setDeleting(true);
        try {
            await videoApi.deleteVideo(id);
            toast({
                title: 'Video deleted',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            navigate('/');
        }
        catch (error) {
            console.error('Error deleting video:', error);
            toast({
                title: 'Error deleting video',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            setDeleting(false);
        }
    };
    // Toggle edit mode
    const toggleEditMode = () => {
        if (isEditing) {
            // Reset form state when canceling edit
            if (video) {
                setTitle(video.title || '');
                setDescription(video.description || '');
                setRating(video.rating);
                setLocation(video.location || '');
                setEvent(video.event || '');
                setSelectedTags(video.tags.map(tag => ({ value: tag, label: tag })));
                setSelectedPeople(video.people.map(person => ({ value: person, label: person })));
                setSelectedShoeboxes(video.shoeboxes.map(shoebox => ({ value: shoebox, label: shoebox })));
            }
        }
        setIsEditing(!isEditing);
    };
    // Handle showing debug information
    const handleShowDebug = async () => {
        if (!id)
            return;
        try {
            // Fetch the latest data from the server
            const videoData = await videoApi.getVideo(id);
            setRawDatabaseValues(JSON.stringify(videoData, null, 2));
            onDebugOpen();
        }
        catch (error) {
            console.error('Error fetching video data:', error);
            toast({
                title: 'Error fetching video data',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };
    if (loading) {
        return (_jsx(Flex, { justify: "center", align: "center", h: "400px", children: _jsx(Spinner, { size: "xl" }) }));
    }
    if (!video) {
        return (_jsxs(Box, { textAlign: "center", py: 10, children: [_jsx(Heading, { children: "Video not found" }), _jsx(Button, { mt: 4, leftIcon: _jsx(FaArrowLeft, {}), onClick: () => navigate('/'), children: "Back to Videos" })] }));
    }
    return (_jsxs(Box, { children: [_jsxs(Flex, { mb: 6, justify: "space-between", align: "center", children: [_jsx(Button, { leftIcon: _jsx(FaArrowLeft, {}), onClick: () => navigate('/'), children: "Back to Videos" }), _jsxs(HStack, { children: [_jsx(Button, { leftIcon: isEditing ? _jsx(FaSave, {}) : _jsx(FaEdit, {}), colorScheme: isEditing ? 'green' : 'blue', onClick: isEditing ? handleSave : toggleEditMode, isLoading: saving, children: isEditing ? 'Save' : 'Edit' }), isEditing && (_jsx(Button, { variant: "outline", onClick: toggleEditMode, children: "Cancel" })), _jsx(Button, { leftIcon: _jsx(FaTrash, {}), colorScheme: "red", onClick: onOpen, children: "Delete" })] })] }), _jsxs(Flex, { direction: { base: 'column', lg: 'row' }, gap: 8, children: [_jsxs(Box, { flex: "1", maxW: { lg: '60%' }, children: [_jsx(Box, { borderRadius: "md", overflow: "hidden", borderWidth: "1px", borderColor: borderColor, children: _jsx(ReactPlayer, { url: `/api/videos/${video.id}/stream`, controls: true, width: "100%", height: "auto", style: { aspectRatio: '16/9' } }) }), _jsxs(Box, { mt: 4, children: [_jsxs(Text, { fontSize: "sm", color: "gray.500", children: ["File: ", video.file_path] }), _jsxs(Text, { fontSize: "sm", color: "gray.500", children: ["Size: ", video.file_size ? `${(video.file_size / (1024 * 1024)).toFixed(2)} MB` : 'Unknown'] }), video.created_date && (_jsxs(Text, { fontSize: "sm", color: "gray.500", children: ["Created: ", new Date(video.created_date).toLocaleDateString()] })), _jsx(Button, { leftIcon: _jsx(FaBug, {}), size: "sm", mt: 2, colorScheme: "gray", variant: "outline", onClick: handleShowDebug, children: "Debug" })] })] }), _jsx(VStack, { align: "stretch", flex: "1", spacing: 4, children: isEditing ? (_jsx(VideoForm, { video: video, formData: {
                                title,
                                description,
                                rating,
                                location: location,
                                event,
                                selectedTags,
                                selectedPeople,
                                selectedShoeboxes
                            }, onChange: (formData) => {
                                if (formData.title !== undefined)
                                    setTitle(formData.title);
                                if (formData.description !== undefined)
                                    setDescription(formData.description);
                                if (formData.rating !== undefined)
                                    setRating(formData.rating);
                                if (formData.location !== undefined)
                                    setLocation(formData.location);
                                if (formData.event !== undefined)
                                    setEvent(formData.event);
                                if (formData.tags !== undefined) {
                                    setSelectedTags(formData.tags.map(tag => ({ value: tag, label: tag })));
                                }
                                if (formData.people !== undefined) {
                                    setSelectedPeople(formData.people.map(person => ({ value: person, label: person })));
                                }
                                if (formData.shoeboxes !== undefined) {
                                    setSelectedShoeboxes(formData.shoeboxes.map(shoebox => ({ value: shoebox, label: shoebox })));
                                }
                            } })) : (_jsxs(_Fragment, { children: [_jsx(Heading, { size: "xl", children: video.title || video.file_name }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Rating" }), _jsx(Flex, { children: Array.from({ length: 5 }).map((_, i) => (_jsx(Text, { color: i < (rating || 0) ? "yellow.400" : "gray.400", fontSize: "xl", children: "\u2605" }, i))) })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Description" }), _jsx(Text, { children: video.description || 'No description' })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Location" }), _jsx(Text, { children: video.location || 'No location' })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Event" }), _jsx(Text, { children: video.event || 'No event' })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Tags" }), _jsx(Flex, { wrap: "wrap", gap: 2, children: video.tags.length > 0 ? (video.tags.map((tag) => (_jsx(Badge, { colorScheme: "blue", color: "white", children: tag }, tag)))) : (_jsx(Text, { color: "gray.500", children: "No tags" })) })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "People" }), _jsx(Flex, { wrap: "wrap", gap: 2, children: video.people.length > 0 ? (video.people.map((person) => (_jsx(Badge, { colorScheme: "green", color: "white", children: person }, person)))) : (_jsx(Text, { color: "gray.500", children: "No people" })) })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Shoeboxes" }), _jsx(Flex, { wrap: "wrap", gap: 2, children: video.shoeboxes.length > 0 ? (video.shoeboxes.map((shoebox) => (_jsx(Badge, { colorScheme: "purple", color: "white", children: shoebox }, shoebox)))) : (_jsx(Text, { color: "gray.500", children: "No shoeboxes" })) })] })] })) })] }), _jsxs(Modal, { isOpen: isOpen, onClose: onClose, children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: "Delete Video" }), _jsx(ModalCloseButton, {}), _jsx(ModalBody, { children: "Are you sure you want to delete this video? This action cannot be undone." }), _jsxs(ModalFooter, { children: [_jsx(Button, { variant: "ghost", mr: 3, onClick: onClose, children: "Cancel" }), _jsx(Button, { colorScheme: "red", onClick: handleDelete, isLoading: deleting, children: "Delete" })] })] })] }), _jsxs(Modal, { isOpen: isDebugOpen, onClose: () => {
                    setRawDatabaseValues('');
                    onDebugClose();
                }, size: "xl", children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: "Raw Database Values" }), _jsx(ModalCloseButton, {}), _jsx(ModalBody, { children: _jsx(Box, { overflowX: "auto", children: _jsx(Code, { display: "block", whiteSpace: "pre", p: 4, borderRadius: "md", children: rawDatabaseValues }) }) }), _jsx(ModalFooter, { children: _jsx(Button, { colorScheme: "blue", mr: 3, onClick: () => {
                                        setRawDatabaseValues('');
                                        onDebugClose();
                                    }, children: "Close" }) })] })] })] }));
};
export default VideoDetailPage;
