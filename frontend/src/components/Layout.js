import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Flex, Heading, Link, useColorMode, useColorModeValue, Alert, AlertIcon, AlertTitle, AlertDescription, Spinner, Image, Badge, IconButton, Stack, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure, } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaVideo, FaFileExport, FaTags, FaClipboardCheck, FaCog, FaChartLine, FaEdit, FaBars } from 'react-icons/fa';
import { useScanContext } from '../contexts/ScanContext';
// @ts-ignore
import logo from '../assets/logo_large.png';
const NavItem = ({ to, icon, label, isActive, mobile = false }) => {
    const bgColor = useColorModeValue('brand.50', 'brand.900');
    const textColor = useColorModeValue('brand.600', 'brand.400');
    return (_jsxs(Link, { as: RouterLink, to: to, display: "flex", alignItems: "center", px: mobile ? 4 : 3, py: mobile ? 4 : 2, borderRadius: "xl", fontWeight: isActive ? '600' : '500', color: isActive ? 'brand.500' : textColor, bg: isActive ? bgColor : 'transparent', transition: "all 0.2s ease", _hover: {
            bg: bgColor,
            color: 'brand.500',
            transform: 'translateY(-1px)',
        }, width: mobile ? '100%' : 'auto', fontSize: mobile ? 'lg' : 'md', children: [_jsx(Box, { style: { marginRight: mobile ? '12px' : '8px' }, children: icon }), _jsx(Box, { children: label })] }));
};
const Layout = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const location = useLocation();
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const { scanStatus } = useScanContext();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navItems = [
        { to: '/', icon: _jsx(FaVideo, {}), label: 'Videos' },
        { to: '/timeline', icon: _jsx(FaChartLine, {}), label: 'Timeline' },
        { to: '/unreviewed', icon: _jsx(FaClipboardCheck, {}), label: 'Unreviewed' },
        { to: '/export', icon: _jsx(FaFileExport, {}), label: 'Export' },
        { to: '/bulk-edit', icon: _jsx(FaEdit, {}), label: 'Bulk Edit' },
        { to: '/manage', icon: _jsx(FaTags, {}), label: 'Manage' },
        { to: '/system', icon: _jsx(FaCog, {}), label: 'System' },
    ];
    return (_jsxs(Box, { children: [_jsx(motion.div, { initial: { y: -100 }, animate: { y: 0 }, transition: { duration: 0.3, ease: 'easeOut' }, children: _jsx(Box, { as: "header", position: "sticky", top: 0, zIndex: 10, bg: bgColor, borderBottom: "1px", borderColor: borderColor, backdropFilter: "blur(12px)", children: _jsxs(Flex, { as: "nav", align: "center", justify: "space-between", wrap: "wrap", padding: 4, maxW: "container.xl", margin: "0 auto", children: [_jsxs(Flex, { align: "center", children: [_jsx(IconButton, { onClick: onOpen, size: "md", borderRadius: "full", variant: "ghost", display: { base: 'flex', lg: 'none' }, "aria-label": "Open menu", color: useColorModeValue('gray.600', 'gray.300'), children: _jsx(FaBars, {}) }), _jsx(Link, { as: RouterLink, to: "/", _hover: { textDecoration: 'none' }, ml: { base: 2, lg: 0 }, children: _jsxs(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, display: "flex", alignItems: "center", children: [_jsx(Image, { src: logo, alt: "Shoebox Logo", height: "40px", mr: 2 }), _jsx(Heading, { as: "h1", size: "lg", letterSpacing: "tight", bg: "linear-gradient(135deg, brand.500, brand.700)", backgroundClip: "text", textFillColor: "transparent", children: "Shoebox" })] }) })] }), _jsxs(Flex, { align: "center", display: { base: 'none', lg: 'flex' }, children: [_jsx(Stack, { direction: "row", spacing: 1, align: "center", children: navItems.map((item) => (_jsx(NavItem, { to: item.to, icon: item.icon, label: item.label, isActive: location.pathname === item.to }, item.to))) }), _jsx(IconButton, { onClick: toggleColorMode, size: "sm", ml: 4, borderRadius: "full", variant: "ghost", color: colorMode === 'light' ? 'gray.600' : 'gray.300', _hover: {
                                            bg: useColorModeValue('gray.100', 'gray.700'),
                                        }, "aria-label": "Toggle color mode", children: colorMode === 'light' ? _jsx(FaMoon, {}) : _jsx(FaSun, {}) })] }), _jsx(IconButton, { onClick: toggleColorMode, size: "sm", display: { base: 'flex', lg: 'none' }, borderRadius: "full", variant: "ghost", color: colorMode === 'light' ? 'gray.600' : 'gray.300', ml: "auto", _hover: {
                                    bg: useColorModeValue('gray.100', 'gray.700'),
                                }, "aria-label": "Toggle color mode", children: colorMode === 'light' ? _jsx(FaMoon, {}) : _jsx(FaSun, {}) })] }) }) }), _jsx(AnimatePresence, { children: isOpen && (_jsxs(Drawer, { isOpen: isOpen, placement: "left", onClose: onClose, children: [_jsx(DrawerOverlay, {}), _jsxs(DrawerContent, { bg: bgColor, children: [_jsx(DrawerCloseButton, {}), _jsxs(DrawerBody, { p: 6, children: [_jsxs(Flex, { align: "center", mb: 6, children: [_jsx(Image, { src: logo, alt: "Shoebox Logo", height: "40px", mr: 2 }), _jsx(Heading, { as: "h1", size: "lg", letterSpacing: "tight", bg: "linear-gradient(135deg, brand.500, brand.700)", backgroundClip: "text", textFillColor: "transparent", children: "Shoebox" })] }), _jsx(Stack, { spacing: 2, children: navItems.map((item) => (_jsx(NavItem, { to: item.to, icon: item.icon, label: item.label, isActive: location.pathname === item.to, mobile: true }, item.to))) })] })] })] })) }), scanStatus.inProgress && (_jsx(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, children: _jsxs(Alert, { status: "info", variant: "subtle", borderRadius: "xl", bg: "linear-gradient(135deg, brand.500.1, brand.700.1)", borderColor: "brand.500.3", mb: 4, children: [_jsx(AlertIcon, {}), _jsxs(Flex, { align: "center", children: [_jsx(Spinner, { size: "sm", color: "brand.500", mr: 2 }), _jsxs(Box, { children: [_jsx(AlertTitle, { fontSize: "sm", fontWeight: "600", children: "Scan in progress" }), scanStatus.newVideosCount > 0 || scanStatus.updatedVideosCount > 0 ? (_jsxs(AlertDescription, { fontSize: "xs", mt: 1, children: ["Found ", _jsxs(Badge, { colorScheme: "brand", ml: 1, children: [scanStatus.newVideosCount, " new"] }), ' and updated ', _jsxs(Badge, { colorScheme: "accent", ml: 1, children: [scanStatus.updatedVideosCount, " videos"] })] })) : (_jsx(AlertDescription, { fontSize: "xs", ml: 2, children: "Scanning for videos..." }))] })] })] }) })), _jsx(Box, { as: "main", p: 4, maxW: "container.xl", margin: "0 auto", children: children })] }));
};
export default Layout;
