import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Input, FormControl, FormLabel, FormHelperText, Flex, VStack, Checkbox, Spinner, useToast, Alert, AlertIcon, AlertTitle, AlertDescription, useColorModeValue, Table, Thead, Tbody, Tr, Th, Td, Badge, Image, InputGroup, InputRightElement, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react';
import { FaSearch, FaFileExport } from 'react-icons/fa';
import { videoApi, exportApi } from '../api/client';
import SearchFilters from '../components/SearchFilters';
const ExportPage = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [exporting, setExporting] = useState(false);
    const [exportPath, setExportPath] = useState(null);
    const [useOriginalFiles, setUseOriginalFiles] = useState(false);
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bgColor = useColorModeValue('white', 'gray.800');
    // Load videos on component mount
    useEffect(() => {
        fetchVideos();
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
    // Handle export
    const handleExport = async () => {
        if (selectedVideos.length === 0) {
            toast({
                title: 'No videos selected',
                description: 'Please select at least one video to export',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        if (!projectName.trim()) {
            toast({
                title: 'Project name required',
                description: 'Please enter a project name',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            return;
        }
        setExporting(true);
        try {
            const result = await exportApi.exportVideos({
                video_ids: selectedVideos,
                project_name: projectName.trim(),
                use_original_files: useOriginalFiles,
            });
            setExportPath(result.export_path);
            onOpen(); // Open success modal
            // Reset selection after successful export
            setSelectedVideos([]);
            setProjectName('');
        }
        catch (error) {
            console.error('Error exporting videos:', error);
            toast({
                title: 'Error exporting videos',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
        finally {
            setExporting(false);
        }
    };
    // Format file size
    const formatFileSize = (bytes) => {
        if (!bytes)
            return 'Unknown';
        const units = ['B', 'KB', 'MB', 'GB', 'TB'];
        let size = bytes;
        let unitIndex = 0;
        while (size >= 1024 && unitIndex < units.length - 1) {
            size /= 1024;
            unitIndex++;
        }
        return `${size.toFixed(1)} ${units[unitIndex]}`;
    };
    return (_jsxs(Box, { children: [_jsx(Heading, { size: "xl", mb: 6, children: "Export Videos" }), _jsxs(VStack, { spacing: 6, align: "stretch", children: [_jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "lg", bg: bgColor, borderColor: "gray.200", children: [_jsx(Heading, { size: "md", mb: 4, children: "1. Select Videos" }), _jsx(Flex, { mb: 6, direction: { base: 'column', md: 'row' }, gap: 4, children: _jsxs(InputGroup, { size: "md", flex: "1", children: [_jsx(Input, { placeholder: "Search videos...", value: searchQuery, onChange: handleSearchChange, onKeyDown: handleKeyDown }), _jsx(InputRightElement, { children: _jsx(IconButton, { "aria-label": "Search", icon: _jsx(FaSearch, {}), size: "sm", onClick: handleSearch }) })] }) }), _jsx(SearchFilters, { onFilterChange: handleFilterChange }), loading ? (_jsx(Flex, { justify: "center", align: "center", h: "200px", children: _jsx(Spinner, { size: "xl" }) })) : videos.length === 0 ? (_jsxs(Alert, { status: "info", children: [_jsx(AlertIcon, {}), _jsx(AlertTitle, { children: "No videos found" }), _jsx(AlertDescription, { children: "Try adjusting your search criteria" })] })) : (_jsx(Box, { overflowX: "auto", children: _jsxs(Table, { variant: "simple", children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, { width: "50px", children: _jsx(Checkbox, { isChecked: selectedVideos.length === videos.length && videos.length > 0, isIndeterminate: selectedVideos.length > 0 && selectedVideos.length < videos.length, onChange: selectAllVideos }) }), _jsx(Th, { children: "Thumbnail" }), _jsx(Th, { children: "Title" }), _jsx(Th, { children: "Tags" }), _jsx(Th, { children: "Size" })] }) }), _jsx(Tbody, { children: videos.map(video => (_jsxs(Tr, { _hover: { bg: useColorModeValue('gray.50', 'gray.700') }, cursor: "pointer", onClick: () => toggleVideoSelection(video.id), children: [_jsx(Td, { children: _jsx(Checkbox, { isChecked: selectedVideos.includes(video.id), onChange: (e) => {
                                                                e.stopPropagation();
                                                                toggleVideoSelection(video.id);
                                                            } }) }), _jsx(Td, { children: _jsx(Image, { src: video.thumbnail_path || '/placeholder-thumbnail.jpg', alt: video.title || video.file_name, boxSize: "60px", objectFit: "cover", borderRadius: "md", fallbackSrc: "https://via.placeholder.com/60?text=No+Thumbnail" }) }), _jsxs(Td, { children: [_jsx(Text, { fontWeight: "bold", noOfLines: 1, children: video.title || video.file_name }), _jsx(Text, { fontSize: "sm", color: "gray.500", noOfLines: 1, children: video.file_path })] }), _jsx(Td, { children: _jsxs(Flex, { wrap: "wrap", gap: 1, children: [video.tags.slice(0, 3).map(tag => (_jsx(Badge, { colorScheme: "blue", fontSize: "xs", color: "white", children: tag }, tag))), video.tags.length > 3 && (_jsxs(Badge, { colorScheme: "gray", fontSize: "xs", color: "white", children: ["+", video.tags.length - 3] }))] }) }), _jsx(Td, { children: formatFileSize(video.file_size) })] }, video.id))) })] }) })), _jsx(Flex, { justify: "space-between", mt: 4, children: _jsxs(Text, { children: [selectedVideos.length, " of ", videos.length, " videos selected"] }) })] }), _jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "lg", bg: bgColor, borderColor: "gray.200", children: [_jsx(Heading, { size: "md", mb: 4, children: "2. Configure Export" }), _jsxs(FormControl, { isRequired: true, children: [_jsx(FormLabel, { children: "Project Name" }), _jsx(Input, { placeholder: "Enter project name", value: projectName, onChange: (e) => setProjectName(e.target.value) }), _jsx(FormHelperText, { children: "This will be used to create the export folder" })] }), _jsxs(FormControl, { mt: 4, children: [_jsx(Checkbox, { isChecked: useOriginalFiles, onChange: (e) => setUseOriginalFiles(e.target.checked), children: "Use original files when available" }), _jsx(FormHelperText, { children: "If checked, the export will use the original files instead of the displayed files" })] }), _jsx(Button, { mt: 6, colorScheme: "blue", leftIcon: _jsx(FaFileExport, {}), isLoading: exporting, loadingText: "Exporting", onClick: handleExport, isDisabled: selectedVideos.length === 0 || !projectName.trim(), children: "Export Selected Videos" })] })] }), _jsxs(Modal, { isOpen: isOpen, onClose: onClose, children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: "Export Successful" }), _jsx(ModalCloseButton, {}), _jsxs(ModalBody, { children: [_jsxs(Alert, { status: "success", mb: 4, children: [_jsx(AlertIcon, {}), _jsxs(Box, { children: [_jsx(AlertTitle, { children: "Videos exported successfully!" }), _jsxs(AlertDescription, { children: [selectedVideos.length, " videos were exported to the project folder."] })] })] }), exportPath && (_jsxs(Text, { mt: 2, children: [_jsx("strong", { children: "Export path:" }), " ", exportPath] }))] }), _jsx(ModalFooter, { children: _jsx(Button, { colorScheme: "blue", onClick: onClose, children: "Close" }) })] })] })] }));
};
export default ExportPage;
