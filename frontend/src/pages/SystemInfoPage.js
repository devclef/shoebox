import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Box, Heading, Text, VStack, HStack, Divider, Card, CardHeader, CardBody, SimpleGrid, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription, Button, useToast, } from '@chakra-ui/react';
import { FaSync } from 'react-icons/fa';
const SystemInfoPage = () => {
    const [config, setConfig] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rescanLoading, setRescanLoading] = useState(false);
    const toast = useToast();
    useEffect(() => {
        const fetchSystemInfo = async () => {
            try {
                const response = await fetch('/api/system');
                if (!response.ok) {
                    throw new Error(`Error fetching system info: ${response.statusText}`);
                }
                const data = await response.json();
                setConfig(data);
            }
            catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            }
            finally {
                setLoading(false);
            }
        };
        fetchSystemInfo();
    }, []);
    const handleRescan = async () => {
        setRescanLoading(true);
        try {
            const response = await fetch('/api/scan', {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error(`Error rescanning library: ${response.statusText}`);
            }
            const data = await response.json();
            toast({
                title: 'Library Rescanned',
                description: `Successfully rescanned library. Found ${data.new_videos_count} new videos and updated ${data.updated_videos_count} existing videos.`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        }
        catch (err) {
            toast({
                title: 'Rescan Failed',
                description: err instanceof Error ? err.message : 'An unknown error occurred',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
        finally {
            setRescanLoading(false);
        }
    };
    if (loading) {
        return (_jsxs(Box, { textAlign: "center", py: 10, children: [_jsx(Spinner, { size: "xl" }), _jsx(Text, { mt: 4, children: "Loading system information..." })] }));
    }
    if (error) {
        return (_jsxs(Alert, { status: "error", variant: "solid", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", height: "200px", children: [_jsx(AlertIcon, { boxSize: "40px", mr: 0 }), _jsx(AlertTitle, { mt: 4, mb: 1, fontSize: "lg", children: "Error Loading System Information" }), _jsx(AlertDescription, { maxWidth: "sm", children: error })] }));
    }
    return (_jsxs(Box, { maxW: "1200px", mx: "auto", p: 5, children: [_jsx(Heading, { as: "h1", size: "xl", mb: 6, children: "System Information" }), _jsxs(SimpleGrid, { columns: { base: 1, md: 2, lg: 3 }, spacing: 10, mb: 8, children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(Heading, { size: "md", children: "Server Configuration" }) }), _jsx(CardBody, { children: _jsxs(VStack, { align: "stretch", spacing: 3, children: [_jsxs(HStack, { justify: "space-between", children: [_jsx(Text, { fontWeight: "bold", children: "Host:" }), _jsx(Text, { children: config?.server.host })] }), _jsxs(HStack, { justify: "space-between", children: [_jsx(Text, { fontWeight: "bold", children: "Port:" }), _jsx(Text, { children: config?.server.port })] })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(Heading, { size: "md", children: "Database Configuration" }) }), _jsx(CardBody, { children: _jsxs(VStack, { align: "stretch", spacing: 3, children: [_jsxs(HStack, { justify: "space-between", children: [_jsx(Text, { fontWeight: "bold", children: "URL:" }), _jsx(Text, { isTruncated: true, maxW: "200px", title: config?.database.url, children: config?.database.url })] }), _jsxs(HStack, { justify: "space-between", children: [_jsx(Text, { fontWeight: "bold", children: "Max Connections:" }), _jsx(Text, { children: config?.database.max_connections })] })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(Heading, { size: "md", children: "Media Configuration" }) }), _jsx(CardBody, { children: _jsxs(VStack, { align: "stretch", spacing: 3, children: [_jsxs(Box, { children: [_jsx(Text, { fontWeight: "bold", mb: 1, children: "Source Paths:" }), config?.media.source_paths.map((pathConfig, index) => (_jsx(Text, { fontSize: "sm", isTruncated: true, title: pathConfig.path, children: pathConfig.path }, index)))] }), _jsx(Divider, {}), _jsxs(Box, { children: [_jsx(Text, { fontWeight: "bold", mb: 1, children: "Export Base Path:" }), _jsx(Text, { fontSize: "sm", isTruncated: true, title: config?.media.export_base_path, children: config?.media.export_base_path })] }), _jsx(Divider, {}), _jsxs(Box, { children: [_jsx(Text, { fontWeight: "bold", mb: 1, children: "Thumbnail Path:" }), _jsx(Text, { fontSize: "sm", isTruncated: true, title: config?.media.thumbnail_path, children: config?.media.thumbnail_path })] })] }) })] })] }), _jsxs(Box, { textAlign: "center", mt: 6, children: [_jsx(Button, { colorScheme: "blue", size: "lg", onClick: handleRescan, isLoading: rescanLoading, loadingText: "Rescanning...", leftIcon: _jsx(FaSync, {}), children: "Rescan Library" }), _jsx(Text, { mt: 2, fontSize: "sm", color: "gray.600", children: "Rescans existing library to capture any new metadata or fields that have been added" })] })] }));
};
export default SystemInfoPage;
