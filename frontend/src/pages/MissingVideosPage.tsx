import React, { useState, useEffect, useCallback } from 'react';
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
  IconButton,
  Collapse,
  Stack,
  Icon,
} from '@chakra-ui/react';
import {
  FaArrowLeft,
  FaTrash,
  FaEdit,
  FaExclamationTriangle,
  FaCheck,
  FaTimes,
  FaExclamation,
  FaSearch,
  FaChevronUp,
  FaFileVideo,
} from 'react-icons/fa';
import {
  missingApi,
  MissingVideoWithSuggestions,
  FileSuggestion,
} from '../api/client';

// --- Helpers ---

type MatchConfidence = 'strong' | 'likely' | 'possible' | 'filename';

function getMatchConfidence(suggestion: FileSuggestion): MatchConfidence {
  let matches = 0;
  if (suggestion.duration_match === true) matches++;
  if (suggestion.file_size_match === true) matches++;
  if (suggestion.created_date_match === true) matches++;

  if (matches >= 3) return 'strong';
  if (matches >= 2) return 'likely';
  if (matches >= 1) return 'possible';
  return 'filename';
}

function getConfidenceBadge(confidence: MatchConfidence) {
  const config = {
    strong: {
      colorScheme: 'green' as const,
      text: 'Strong match',
      icon: <FaCheck />,
    },
    likely: {
      colorScheme: 'green' as const,
      text: 'Likely match',
      icon: <FaCheck />,
    },
    possible: {
      colorScheme: 'yellow' as const,
      text: 'Possible match',
      icon: <FaExclamation />,
    },
    filename: {
      colorScheme: 'orange' as const,
      text: 'Filename only',
      icon: <FaExclamation />,
    },
  };
  return config[confidence];
}

function formatDuration(ms: number | undefined): string {
  if (ms == null || ms <= 0) return '—';
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function formatFileSize(bytes: number | undefined): string {
  if (bytes == null || bytes <= 0) return '—';
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  if (bytes < 1024 * 1024 * 1024)
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return '—';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '—';
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '—';
  }
}

// Match indicator icon for a single metadata field
const MatchIcon: React.FC<{ match?: boolean | null }> = ({ match }) => {
  if (match === true)
    return <Icon as={FaCheck} color="green.500" boxSize={3} />;
  if (match === false)
    return <Icon as={FaTimes} color="red.400" boxSize={3} />;
  return <Icon as={FaExclamation} color="gray.400" boxSize={3} />;
};

// Metadata row in suggestion card
const MetaRow: React.FC<{
  label: string;
  dbValue: string;
  candidateValue: string;
  match?: boolean | null;
}> = ({ label, dbValue, candidateValue, match }) => (
  <Flex align="center" justifyContent="space-between" py={1.5} borderBottom="1px" borderColor="gray.100">
    <Text fontSize="sm" fontWeight="500" color="gray.600" w="80px">
      {label}
    </Text>
    <Flex align="center" gap={2} flex={1} justifyContent="center">
      <Text fontSize="sm" color="gray.500" isTruncated maxW="120px" title={dbValue}>
        {dbValue}
      </Text>
      <MatchIcon match={match} />
    </Flex>
    <Flex align="center" gap={2} flex={1} justifyContent="center">
      <Text
        fontSize="sm"
        isTruncated
        maxW="120px"
        title={candidateValue}
        color={match === true ? 'green.600' : match === false ? 'red.500' : 'gray.500'}
        fontWeight={match === true ? '600' : 'normal'}
      >
        {candidateValue}
      </Text>
    </Flex>
  </Flex>
);

// --- Main Page ---

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

  const [videos, setVideos] = useState<MissingVideoWithSuggestions[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [editingVideo, setEditingVideo] = useState<MissingVideoWithSuggestions | null>(null);
  const [newPath, setNewPath] = useState('');
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

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

  const toggleRow = useCallback((id: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  // Selection handlers
  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
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
  const handleDelete = (video: MissingVideoWithSuggestions) => {
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
      });
    } catch (error) {
      console.error('Error bulk deleting:', error);
      toast({
        title: 'Error removing videos',
        status: 'error',
        duration: 3000,
      });
    }
    onBulkClose();
  };

  // Update path (manual)
  const handleUpdatePath = (video: MissingVideoWithSuggestions) => {
    setEditingVideo(video);
    setNewPath(video.file_path);
    onPathOpen();
  };

  // Update path from suggestion
  const handleSuggestionUpdate = (video: MissingVideoWithSuggestions, candidatePath: string) => {
    setEditingVideo(video);
    setNewPath(candidatePath);
    onPathOpen();
  };

  const confirmUpdatePath = async () => {
    if (!editingVideo || !newPath.trim()) return;

    try {
      const updated = await missingApi.updateFilePath(editingVideo.id, newPath.trim());
      if (updated.missing === false || updated.file_path !== editingVideo.file_path) {
        // If no longer missing, remove from list
        if (updated.missing === false) {
          setVideos((prev) => prev.filter((v) => v.id !== editingVideo.id));
          setSelectedIds((prev) => {
            const next = new Set(prev);
            next.delete(editingVideo.id);
            return next;
          });
          toast({
            title: 'File found!',
            description: `"${editingVideo.file_name}" is no longer missing.`,
            status: 'success',
            duration: 4000,
            isClosable: true,
          });
        } else {
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
        }
      }
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
  const truncatePath = (path: string, maxLength = 50) => {
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

  const suggestionsCount = videos.filter((v) => v.suggestion).length;

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
          <AlertBanner
            count={videos.length}
            suggestionsFound={suggestionsCount}
            onScan={() => {
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
            }}
          />

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
                  <Th maxW="250px">Old Path</Th>
                  <Th>Rating</Th>
                  <Th>Tags</Th>
                  <Th isNumeric>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {videos.map((video) => {
                  const hasSuggestion = !!video.suggestion;
                  const confidence = hasSuggestion
                    ? getMatchConfidence(video.suggestion!)
                    : null;
                  const badgeConfig = confidence ? getConfidenceBadge(confidence) : null;
                  const isExpanded = expandedRows.has(video.id);

                  return (
                    <React.Fragment key={video.id}>
                      <Tr
                        _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
                        cursor={hasSuggestion ? 'pointer' : 'default'}
                        onClick={() => hasSuggestion && toggleRow(video.id)}
                      >
                        <Td px={4} onClick={(e) => e.stopPropagation()}>
                          <Checkbox
                            isChecked={selectedIds.has(video.id)}
                            onChange={() => toggleSelect(video.id)}
                          />
                        </Td>
                        <Td>
                          <Flex align="center" gap={2}>
                            <Text fontWeight="500">{video.title || video.file_name}</Text>
                            {hasSuggestion && badgeConfig && (
                              <Badge
                                colorScheme={badgeConfig.colorScheme}
                                fontSize="xs"
                                px={1}
                                py={0.5}
                              >
                                <HStack spacing={1}>
                                  {badgeConfig.icon}
                                  <Text fontSize="xs">{badgeConfig.text}</Text>
                                </HStack>
                              </Badge>
                            )}
                          </Flex>
                          <Text fontSize="xs" color="gray.500">
                            {video.file_name}
                          </Text>
                        </Td>
                        <Td maxW="250px">
                          <Text
                            fontSize="sm"
                            color="red.400"
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
                        <Td isNumeric onClick={(e) => e.stopPropagation()}>
                          <HStack justify="flex-end" spacing={2}>
                            {hasSuggestion && (
                              <IconButton
                                aria-label="Expand suggestion details"
                                icon={
                                  isExpanded ? <FaChevronUp /> : <FaSearch />
                                }
                                size="sm"
                                colorScheme="green"
                                variant="outline"
                                onClick={() => toggleRow(video.id)}
                              />
                            )}
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
                      {/* Expanded suggestion row */}
                      {hasSuggestion && video.suggestion && (
                        <Tr
                          bg={useColorModeValue('green.50', 'gray.800')}
                          onClick={() => toggleRow(video.id)}
                        >
                          <Td colSpan={6} p={0}>
                            <Collapse in={isExpanded} startingHeight={0} endingHeight={320}>
                              <Box p={4}>
                                <SuggestionCard
                                  video={video}
                                  suggestion={video.suggestion}
                                  onUpdatePath={(path) =>
                                    handleSuggestionUpdate(video, path)
                                  }
                                />
                              </Box>
                            </Collapse>
                          </Td>
                        </Tr>
                      )}
                      {!hasSuggestion && isExpanded && (
                        <Tr
                          bg={useColorModeValue('gray.50', 'gray.800')}
                        >
                          <Td colSpan={6} p={0}>
                            <Collapse in={isExpanded} startingHeight={0} endingHeight={100}>
                              <Box p={4}>
                                <Text color="gray.500" textAlign="center">
                                  No matching file found in configured source paths.
                                </Text>
                              </Box>
                            </Collapse>
                          </Td>
                        </Tr>
                      )}
                    </React.Fragment>
                  );
                })}
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
            {editingVideo && editingVideo.file_path !== newPath && (
              <Text fontSize="sm" color="gray.500" mt={2}>
                Current: {editingVideo.file_path}
              </Text>
            )}
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

// --- Sub-components ---

const SuggestionCard: React.FC<{
  video: MissingVideoWithSuggestions;
  suggestion: FileSuggestion;
  onUpdatePath: (path: string) => void;
}> = ({ video, suggestion, onUpdatePath }) => {
  const confidence = getMatchConfidence(suggestion);
  const badgeConfig = getConfidenceBadge(confidence);

  return (
    <Stack direction="column" spacing={3}>
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={2}>
          <Icon as={FaFileVideo} color="green.500" boxSize={4} />
          <Text fontWeight="600" color="green.700">
            Possible match found
          </Text>
          <Badge
            colorScheme={badgeConfig.colorScheme}
            px={1}
            py={0.5}
          >
            <HStack spacing={1}>
              {badgeConfig.icon}
              <Text fontSize="xs">{badgeConfig.text}</Text>
            </HStack>
          </Badge>
        </Flex>
        <Button
          size="sm"
          colorScheme="green"
          leftIcon={<FaCheck />}
          onClick={() => onUpdatePath(suggestion.candidate_path)}
        >
          Update Path
        </Button>
      </Flex>

      <Box
        p={3}
        bg="white"
        borderRadius="md"
        borderWidth="1px"
        borderColor="green.200"
      >
        <Text fontSize="xs" fontWeight="600" color="gray.500" mb={1} textTransform="uppercase">
          Found at
        </Text>
        <Text
          fontSize="sm"
          color="green.700"
          fontWeight="500"
          wordBreak="break-all"
          fontFamily="monospace"
        >
          {suggestion.candidate_path}
        </Text>
      </Box>

      {/* Metadata comparison */}
      <Box
        p={3}
        bg="white"
        borderRadius="md"
        borderWidth="1px"
        borderColor="gray.200"
      >
        <Flex align="center" justifyContent="space-between" mb={2}>
          <Text fontSize="xs" fontWeight="600" color="gray.500" textTransform="uppercase">
            Metadata Comparison
          </Text>
        </Flex>
        <Flex justifyContent="space-between" px={2} mb={1}>
          <Text fontSize="xs" color="gray.400" w="80px">Field</Text>
          <Text fontSize="xs" color="gray.400" flex={1} textAlign="center">
            Recorded
          </Text>
          <Text fontSize="xs" color="gray.400" flex={1} textAlign="center">
            Candidate
          </Text>
        </Flex>
        <MetaRow
          label="Duration"
          dbValue={formatDuration(video.duration)}
          candidateValue={formatDuration(suggestion.duration)}
          match={suggestion.duration_match}
        />
        <MetaRow
          label="Size"
          dbValue={formatFileSize(video.file_size)}
          candidateValue={formatFileSize(suggestion.file_size)}
          match={suggestion.file_size_match}
        />
        <MetaRow
          label="Created"
          dbValue={formatDate(video.created_date)}
          candidateValue={formatDate(suggestion.created_date)}
          match={suggestion.created_date_match}
        />
      </Box>
    </Stack>
  );
};

// Alert banner component
const AlertBanner: React.FC<{
  count: number;
  suggestionsFound: number;
  onScan: () => void;
}> = ({ count, suggestionsFound, onScan }) => {
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
        <Flex direction="column" flex={1}>
          <Text fontWeight="600" color="red.800">
            {count} missing file{count !== 1 ? 's' : ''} detected
          </Text>
          <Text fontSize="sm" color="red.600">
            {suggestionsFound > 0
              ? `${suggestionsFound} potential match${suggestionsFound !== 1 ? 'es' : ''} found in configured source paths.`
              : 'These videos were previously scanned but their files can no longer be found on disk.'}
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
