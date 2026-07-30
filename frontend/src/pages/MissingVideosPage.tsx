import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  Spinner,
  useColorModeValue,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Badge,
  TableContainer,
} from '@chakra-ui/react';
import { FaArrowLeft, FaTrash, FaEdit, FaExclamationTriangle } from 'react-icons/fa';
import { missingApi, VideoWithMetadata } from '../api/client';

const MissingVideosPage: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isPathOpen,
    onOpen: onPathOpen,
    onClose: onPathClose,
  } = useDisclosure();
  const {
    isOpen: isBulkOpen,
    onOpen: onBulkOpen,
    onClose: onBulkClose,
  } = useDisclosure();

  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const [videos, setVideos] = useState<VideoWithMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [editingVideo, setEditingVideo] = useState<VideoWithMetadata | null>(null);
  const [newPath, setNewPath] = useState('');

  // Fetch missing videos
  useEffect(() => {
    const fetchMissing = async () => {
      setLoading(true);
      try {
        const results = await missingApi.getMissingVideos();
        setVideos(results);
      } catch (error) {
        console.error('Error fetching missing videos:', error);
        toast({
          title: 'Error fetching missing videos',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMissing();
  }, [toast]);

  // Selection handlers
  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === videos.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(videos.map((v) => v.id)));
    }
  };

  // Delete single video
  const handleDelete = (video: VideoWithMetadata) => {
    setEditingVideo(video);
    onOpen();
  };

  const confirmDelete = async () => {
    if (!editingVideo) return;

    try {
      await missingApi.deleteVideo(editingVideo.id);
      setVideos((prev) => prev.filter((v) => v.id !== editingVideo.id));
      setSelectedIds((prev) => {
        const next = new Set(prev);
        next.delete(editingVideo.id);
        return next;
      });
      toast({
        title: 'Video removed',
        description: `"${editingVideo.file_name}" has been removed from Shoebox.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error deleting video:', error);
      toast({
        title: 'Error removing video',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    onClose();
  };

  // Bulk delete
  const handleBulkDelete = () => {
    if (selectedIds.size === 0) return;
    onBulkOpen();
  };

  const confirmBulkDelete = async () => {
    try {
      const ids = Array.from(selectedIds);
      await missingApi.bulkDelete(ids);
      setVideos((prev) => prev.filter((v) => !selectedIds.has(v.id)));
      setSelectedIds(new Set());
      toast({
        title: `${ids.length} videos removed`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error bulk deleting:', error);
      toast({
        title: 'Error removing videos',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    onBulkClose();
  };

  // Update path
  const handleUpdatePath = (video: VideoWithMetadata) => {
    setEditingVideo(video);
    setNewPath(video.file_path);
    onPathOpen();
  };

  const confirmUpdatePath = async () => {
    if (!editingVideo || !newPath.trim()) return;

    try {
      const updated = await missingApi.updateFilePath(editingVideo.id, newPath.trim());
      setVideos((prev) =>
        prev.map((v) => (v.id === editingVideo.id ? { ...v, ...updated } : v))
      );
      toast({
        title: 'Path updated',
        description: `"${editingVideo.file_name}" path has been updated.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error updating path:', error);
      toast({
        title: 'Error updating path',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    onPathClose();
  };

  // Format file path for display (truncate long paths)
  const truncatePath = (path: string, maxLength = 60) => {
    if (path.length <= maxLength) return path;
    const parts = path.split('/');
    if (parts.length <= 3) return path;
    const filename = parts.pop() || '';
    const dir = parts.shift() || '';
    return `${dir}/${filename}`;
  };

  if (loading) {
    return (
      <Flex justify="center" align="center" h="400px">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box>
      <Flex mb={6} justify="space-between" align="center">
        <Button leftIcon={<FaArrowLeft />} onClick={() => navigate('/')}>
          Back to Videos
        </Button>
        <HStack>
          {selectedIds.size > 0 && (
            <>
              <Text>{selectedIds.size} selected</Text>
              <Button
                colorScheme="red"
                size="sm"
                leftIcon={<FaTrash />}
                onClick={handleBulkDelete}
              >
                Remove Selected
              </Button>
            </>
          )}
        </HStack>
      </Flex>

      {videos.length === 0 ? (
        <Flex direction="column" align="center" justify="center" py={20}>
          <FaExclamationTriangle size={48} color="#48BB78" />
          <Heading size="md" mt={4}>
            No Missing Files
          </Heading>
          <Text color="gray.500" mt={2}>
            All videos are accounted for. Run a scan to check again.
          </Text>
        </Flex>
      ) : (
        <>
          <AlertBanner count={videos.length} onScan={() => {
            // Trigger a rescan
            missingApi.rescan().then(() => {
              toast({
                title: 'Scan started',
                status: 'info',
                duration: 2000,
                isClosable: true,
              });
            }).catch(() => {
              toast({
                title: 'Failed to start scan',
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
            });
          }} />

          <TableContainer borderWidth="1px" borderRadius="md" borderColor={borderColor} mt={4}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th px={4}>
                    <Checkbox
                      isChecked={selectedIds.size === videos.length && videos.length > 0}
                      isIndeterminate={selectedIds.size > 0 && selectedIds.size < videos.length}
                      onChange={toggleSelectAll}
                    />
                  </Th>
                  <Th>File Name</Th>
                  <Th maxW="300px">Path</Th>
                  <Th>Rating</Th>
                  <Th>Tags</Th>
                  <Th isNumeric>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {videos.map((video) => (
                  <Tr key={video.id} _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}>
                    <Td px={4}>
                      <Checkbox
                        isChecked={selectedIds.has(video.id)}
                        onChange={() => toggleSelect(video.id)}
                      />
                    </Td>
                    <Td>
                      <Text fontWeight="500">{video.title || video.file_name}</Text>
                      <Text fontSize="xs" color="gray.500">
                        {video.file_name}
                      </Text>
                    </Td>
                    <Td maxW="300px">
                      <Text
                        fontSize="sm"
                        color="red.500"
                        isTruncated
                        title={video.file_path}
                      >
                        {truncatePath(video.file_path)}
                      </Text>
                    </Td>
                    <Td>
                      {video.rating ? (
                        <Badge colorScheme="yellow">{'★'.repeat(video.rating)}</Badge>
                      ) : (
                        <Text color="gray.400">—</Text>
                      )}
                    </Td>
                    <Td>
                      <Flex wrap="wrap" gap={1}>
                        {video.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} colorScheme="blue" fontSize="xs">
                            {tag}
                          </Badge>
                        ))}
                        {video.tags.length > 3 && (
                          <Badge colorScheme="gray" fontSize="xs">
                            +{video.tags.length - 3}
                          </Badge>
                        )}
                      </Flex>
                    </Td>
                    <Td isNumeric>
                      <HStack justify="flex-end">
                        <Button
                          size="sm"
                          colorScheme="blue"
                          variant="outline"
                          leftIcon={<FaEdit />}
                          onClick={() => handleUpdatePath(video)}
                        >
                          Update Path
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="red"
                          variant="outline"
                          leftIcon={<FaTrash />}
                          onClick={() => handleDelete(video)}
                        >
                          Remove
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove Video Reference</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are you sure you want to remove &quot;{editingVideo?.file_name}&quot; from Shoebox?
            </Text>
            <Text fontSize="sm" color="gray.500" mt={2}>
              This only removes the reference from Shoebox. The file on disk is not affected.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={confirmDelete}>
              Remove
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Bulk Delete Confirmation Modal */}
      <Modal isOpen={isBulkOpen} onClose={onBulkClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove {selectedIds.size} Videos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are you sure you want to remove {selectedIds.size} video references from Shoebox?
            </Text>
            <Text fontSize="sm" color="gray.500" mt={2}>
              This only removes the references from Shoebox. The files on disk are not affected.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onBulkClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={confirmBulkDelete}>
              Remove All
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Update Path Modal */}
      <Modal isOpen={isPathOpen} onClose={onPathClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update File Path</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>New File Path</FormLabel>
              <Input
                value={newPath}
                onChange={(e) => setNewPath(e.target.value)}
                placeholder="/path/to/video/file.mp4"
              />
            </FormControl>
            <Text fontSize="sm" color="gray.500" mt={2}>
              Current: {editingVideo?.file_path}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onPathClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={confirmUpdatePath}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

// Alert banner component
const AlertBanner: React.FC<{ count: number; onScan: () => void }> = ({ count, onScan }) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor="red.200"
      bg="red.50"
    >
      <Flex align="center" gap={3}>
        <FaExclamationTriangle color="#E53E3E" size={20} />
        <Flex direction="column" flex="1">
          <Text fontWeight="600" color="red.800">
            {count} missing file{count !== 1 ? 's' : ''} detected
          </Text>
          <Text fontSize="sm" color="red.600">
            These videos were previously scanned but their files can no longer be found on disk.
          </Text>
        </Flex>
        <Button size="sm" colorScheme="blue" variant="outline" onClick={onScan}>
          Rescan
        </Button>
      </Flex>
    </Box>
  );
};

export default MissingVideosPage;
