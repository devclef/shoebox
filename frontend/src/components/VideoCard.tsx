import React from 'react';
import {
  Box,
  Image,
  Text,
  Heading,
  Badge,
  useColorModeValue,
  HStack,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaStar, FaRegStar, FaClock } from 'react-icons/fa';
import { VideoWithMetadata } from '../api/client';

interface VideoCardProps {
  video: VideoWithMetadata;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textMuted = useColorModeValue('gray.500', 'gray.400');

  // Format date
  const formatDate = (dateString?: string): string => {
    if (!dateString) return 'Unknown date';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Unknown date';
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
      return 'Unknown date';
    }
  };

  // Format duration (input is in milliseconds)
  const formatDuration = (ms?: number): string => {
    if (!ms) return '';

    const seconds = ms / 1000;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
  };

  // Render rating stars
  const renderRating = (rating?: number) => {
    if (!rating) return null;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          as={i <= rating ? FaStar : FaRegStar}
          color={i <= rating ? 'yellow.400' : textMuted}
          boxSize={3.5}
        />
      );
    }

    return (
      <HStack spacing={0.5} mt={2}>
        {stars}
      </HStack>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        as={RouterLink}
        to={`/videos/${video.id}`}
        borderRadius="2xl"
        overflow="hidden"
        bg={cardBg}
        boxShadow="card"
        position="relative"
        _before={video.rating ? {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
          bg: 'linear-gradient(135deg, transparent 0%, yellow.400 100%)',
          width: '40px',
          height: '40px',
          borderRadius: '0 12px 0 100%',
        } : {} as React.CSSProperties}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Box
            position="relative"
            overflow="hidden"
            height="180px"
            borderRadius="2xl 2xl 0 0"
          >
            <Image
              src={video.thumbnail_path || '/placeholder-thumbnail.jpg'}
              alt={video.title || video.file_name}
              width="100%"
              objectFit="cover"
              fallbackSrc="/placeholder-thumbnail.jpg"
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              p={2}
              bg="linear-gradient(transparent, rgba(0,0,0,0.7))"
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Icon as={FaClock} color="white" boxSize={3} />
              <Text fontSize="xs" color="white" fontWeight="500">
                {video.duration ? formatDuration(video.duration) : 'Unknown duration'}
              </Text>
            </Box>
          </Box>
        </motion.div>

        <Box p={4}>
          <Heading size="md" noOfLines={2} mb={1} fontWeight="600">
            {video.title || video.file_name}
          </Heading>

          {renderRating(video.rating)}

          <Text fontSize="sm" color={textMuted} mt={2}>
            {formatDate(video.created_date)}
          </Text>

          <AnimatePresence>
            {(video.tags.length > 0 || video.people.length > 0) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.2 }}
              >
                <Stack direction="row" flexWrap="wrap" gap={2} mt={3}>
                  {video.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="gradient"
                      fontSize="xs"
                      px={2}
                      py={1}
                      borderRadius="full"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {video.tags.length > 3 && (
                    <Badge
                      colorScheme="gray"
                      fontSize="xs"
                      px={2}
                      py={1}
                      borderRadius="full"
                      variant="subtle"
                    >
                      +{video.tags.length - 3}
                    </Badge>
                  )}
                  {video.people.slice(0, 2).map((person) => (
                    <Badge
                      key={person}
                      bg="linear-gradient(135deg, green.400, green.600)"
                      fontSize="xs"
                      color="white"
                      px={2}
                      py={1}
                      borderRadius="full"
                    >
                      {person}
                    </Badge>
                  ))}
                  {video.people.length > 2 && (
                    <Badge
                      colorScheme="gray"
                      fontSize="xs"
                      px={2}
                      py={1}
                      borderRadius="full"
                      variant="subtle"
                    >
                      +{video.people.length - 2}
                    </Badge>
                  )}
                </Stack>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Box>
    </motion.div>
  );
};

export default VideoCard;
