import React from 'react';
import {
  Flex,
  Heading,
  Link,
  useColorMode,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
  Badge,
  IconButton,
  Stack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaVideo, FaFileExport, FaTags, FaClipboardCheck, FaCog, FaChartLine, FaEdit, FaBars, FaExclamationTriangle } from 'react-icons/fa';
import { useScanContext } from '../contexts/ScanContext';
import logo from '../assets/logo_large.png';

interface LayoutProps {
  children: React.ReactNode;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  mobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive, mobile = false }) => {
  const bgColor = useColorModeValue('brand.50', 'brand.900');
  const textColor = useColorModeValue('brand.600', 'brand.400');

  return (
    <Link
      as={RouterLink}
      to={to}
      display="flex"
      alignItems="center"
      px={mobile ? 4 : 3}
      py={mobile ? 4 : 2}
      borderRadius="xl"
      fontWeight={isActive ? '600' : '500'}
      color={isActive ? 'brand.500' : textColor}
      bg={isActive ? bgColor : 'transparent'}
      transition="all 0.2s ease"
      _hover={{
        bg: bgColor,
        color: 'brand.500',
        transform: 'translateY(-1px)',
      }}
      width={mobile ? '100%' : 'auto'}
      fontSize={mobile ? 'lg' : 'md'}
    >
      <Flex style={{ marginRight: mobile ? '12px' : '8px' }}>{icon}</Flex>
      <Flex>{label}</Flex>
    </Link>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const { scanStatus } = useScanContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    { to: '/', icon: <FaVideo />, label: 'Videos' },
    { to: '/timeline', icon: <FaChartLine />, label: 'Timeline' },
    { to: '/unreviewed', icon: <FaClipboardCheck />, label: 'Unreviewed' },
    { to: '/export', icon: <FaFileExport />, label: 'Export' },
    { to: '/bulk-edit', icon: <FaEdit />, label: 'Bulk Edit' },
    { to: '/missing', icon: <FaExclamationTriangle />, label: 'Missing' },
    { to: '/manage', icon: <FaTags />, label: 'Manage' },
    { to: '/system', icon: <FaCog />, label: 'System' },
  ];

  return (
    <Flex direction="column" minHeight="100vh">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Flex
          as="header"
          position="sticky"
          top={0}
          zIndex={10}
          bg={bgColor}
          borderBottom="1px"
          borderColor={borderColor}
          backdropFilter="blur(12px)"
        >
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={4}
            maxW="container.xl"
            margin="0 auto"
          >
            <Flex align="center">
              <IconButton
                onClick={onOpen}
                size="md"
                borderRadius="full"
                variant="ghost"
                display={{ base: 'flex', lg: 'none' }}
                aria-label="Open menu"
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                <FaBars />
              </IconButton>
              <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }} ml={{ base: 2, lg: 0 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Image src={logo} alt="Shoebox Logo" height="40px" objectFit="contain" mr={2} />
                  <Heading
                    as="h1"
                    size="lg"
                    letterSpacing="tight"
                    bg="linear-gradient(135deg, brand.500, brand.700)"
                    backgroundClip="text"
                    textFillColor="transparent"
                  >
                    Shoebox
                  </Heading>
                </motion.div>
              </Link>
            </Flex>

            <Flex align="center" display={{ base: 'none', lg: 'flex' }}>
              <Stack direction="row" spacing={1} align="center">
                {navItems.map((item) => (
                  <NavItem
                    key={item.to}
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                    isActive={location.pathname === item.to}
                  />
                ))}
              </Stack>

              <IconButton
                onClick={toggleColorMode}
                size="sm"
                ml={4}
                borderRadius="full"
                variant="ghost"
                color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
                _hover={{
                  bg: useColorModeValue('gray.100', 'gray.700'),
                }}
                aria-label="Toggle color mode"
              >
                {colorMode === 'light' ? <FaMoon /> : <FaSun />}
              </IconButton>
            </Flex>

            <IconButton
              onClick={toggleColorMode}
              size="sm"
              display={{ base: 'flex', lg: 'none' }}
              borderRadius="full"
              variant="ghost"
              color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
              ml="auto"
              _hover={{
                bg: useColorModeValue('gray.100', 'gray.700'),
              }}
              aria-label="Toggle color mode"
            >
              {colorMode === 'light' ? <FaMoon /> : <FaSun />}
            </IconButton>
          </Flex>
        </Flex>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg={bgColor}>
              <DrawerCloseButton />
              <DrawerBody p={6}>
                <Flex align="center" mb={6}>
                  <Image src={logo} alt="Shoebox Logo" height="40px" objectFit="contain" mr={2} />
                  <Heading
                    as="h1"
                    size="lg"
                    letterSpacing="tight"
                    bg="linear-gradient(135deg, brand.500, brand.700)"
                    backgroundClip="text"
                    textFillColor="transparent"
                  >
                    Shoebox
                  </Heading>
                </Flex>
                <Stack spacing={2}>
                  {navItems.map((item) => (
                    <NavItem
                      key={item.to}
                      to={item.to}
                      icon={item.icon}
                      label={item.label}
                      isActive={location.pathname === item.to}
                      mobile
                    />
                  ))}
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        )}
      </AnimatePresence>

      {(scanStatus.inProgress || scanStatus.missingCount > 0) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <Alert
            status={scanStatus.missingCount > 0 && !scanStatus.inProgress ? 'warning' : 'info'}
            variant="subtle"
            borderRadius="xl"
            bg={scanStatus.missingCount > 0 && !scanStatus.inProgress ? 'yellow.50' : 'linear-gradient(135deg, brand.500.1, brand.700.1)'}
            borderColor={scanStatus.missingCount > 0 && !scanStatus.inProgress ? 'yellow.200' : 'brand.500.3'}
            mb={4}
          >
            <AlertIcon />
            {scanStatus.inProgress ? (
              <Flex align="center">
                <Spinner size="sm" color="brand.500" mr={2} />
                <Flex direction="column">
                  <AlertTitle fontSize="sm" fontWeight="600">
                    Scan in progress
                  </AlertTitle>
                  {scanStatus.newVideosCount > 0 || scanStatus.updatedVideosCount > 0 ? (
                    <AlertDescription fontSize="xs" mt={1}>
                      Found <Badge colorScheme="brand" ml={1}>{scanStatus.newVideosCount} new</Badge>
                      {' and updated '}
                      <Badge colorScheme="accent" ml={1}>{scanStatus.updatedVideosCount} videos</Badge>
                    </AlertDescription>
                  ) : (
                    <AlertDescription fontSize="xs" ml={2}>
                      Scanning for videos...
                    </AlertDescription>
                  )}
                </Flex>
              </Flex>
            ) : (
              <Flex align="center">
                <Flex direction="column" flex="1">
                  <AlertTitle fontSize="sm" fontWeight="600">
                    {scanStatus.missingCount} missing file{scanStatus.missingCount !== 1 ? 's' : ''} detected
                  </AlertTitle>
                  <AlertDescription fontSize="xs" ml={2}>
                    Run a scan or visit the{' '}
                    <Link as={RouterLink} to="/missing" color="yellow.600" fontWeight="600" _hover={{ textDecoration: 'underline' }}>
                      Missing Files
                    </Link>{' '}
                    page for details.
                  </AlertDescription>
                </Flex>
              </Flex>
            )}
          </Alert>
        </motion.div>
      )}

      <Flex as="main" p={4} maxW="container.xl" margin="0 auto" flex="1">
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
