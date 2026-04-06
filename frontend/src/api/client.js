import axios from 'axios';
// Define base URL for API
const API_URL = '/api';
// Create axios instance
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
// API functions
export const videoApi = {
    // Get all videos with pagination
    getVideos: async (limit = 100, offset = 0) => {
        const response = await apiClient.get(`/videos?limit=${limit}&offset=${offset}`);
        return response.data;
    },
    // Get a single video by ID
    getVideo: async (id) => {
        const response = await apiClient.get(`/videos/${id}`);
        return response.data;
    },
    // Update a video
    updateVideo: async (id, data) => {
        const response = await apiClient.put(`/videos/${id}`, data);
        return response.data;
    },
    // Bulk update multiple videos
    bulkUpdateVideos: async (data) => {
        const response = await apiClient.post('/videos/bulk-update', data);
        return response.data;
    },
    // Delete a video
    deleteVideo: async (id) => {
        await apiClient.delete(`/videos/${id}`);
    },
    // Search videos
    searchVideos: async (params) => {
        const response = await apiClient.post('/videos/search', params);
        return response.data;
    },
};
export const tagApi = {
    // Get all tags
    getTags: async () => {
        const response = await apiClient.get('/tags');
        return response.data;
    },
    // Get tag usage statistics
    getTagUsage: async () => {
        const response = await apiClient.get('/tags/usage');
        return response.data;
    },
    // Delete unused tags
    deleteUnusedTags: async () => {
        await apiClient.delete('/tags/unused');
    },
    // Create a new tag
    createTag: async (name) => {
        const response = await apiClient.post('/tags', { name });
        return response.data;
    },
    // Delete a tag by ID
    deleteTag: async (id) => {
        await apiClient.delete(`/tags/${id}`);
    },
};
export const personApi = {
    // Get all people
    getPeople: async () => {
        const response = await apiClient.get('/people');
        return response.data;
    },
    // Get person usage statistics
    getPersonUsage: async () => {
        const response = await apiClient.get('/people/usage');
        return response.data;
    },
    // Delete unused people
    deleteUnusedPeople: async () => {
        await apiClient.delete('/people/unused');
    },
    // Create a new person
    createPerson: async (name) => {
        const response = await apiClient.post('/people', { name });
        return response.data;
    },
    // Delete a person by ID
    deletePerson: async (id) => {
        await apiClient.delete(`/people/${id}`);
    },
};
export const locationApi = {
    // Get all locations
    getLocations: async () => {
        const response = await apiClient.get('/locations');
        return response.data;
    },
    // Get location usage statistics
    getLocationUsage: async () => {
        const response = await apiClient.get('/locations/usage');
        return response.data;
    },
    // Update a location
    updateLocation: async (oldLocation, newLocation) => {
        const response = await apiClient.post('/locations/update', {
            old_location: oldLocation,
            new_location: newLocation
        });
        return response.data;
    },
    // Delete a location
    deleteLocation: async (location) => {
        const response = await apiClient.delete(`/locations/${encodeURIComponent(location)}`);
        return response.data;
    },
};
export const eventApi = {
    // Get all events
    getEvents: async () => {
        const response = await apiClient.get('/events');
        return response.data;
    },
    // Get event usage statistics
    getEventUsage: async () => {
        const response = await apiClient.get('/events/usage');
        return response.data;
    },
    // Update an event
    updateEvent: async (oldEvent, newEvent) => {
        const response = await apiClient.post('/events/update', {
            old_event: oldEvent,
            new_event: newEvent
        });
        return response.data;
    },
    // Delete an event
    deleteEvent: async (event) => {
        const response = await apiClient.delete(`/events/${encodeURIComponent(event)}`);
        return response.data;
    },
};
export const scanApi = {
    // Scan directories for new videos
    scanDirectories: async () => {
        const response = await apiClient.post('/scan');
        return response.data;
    },
};
export const exportApi = {
    // Export videos
    exportVideos: async (data) => {
        const response = await apiClient.post('/export', data);
        return response.data;
    },
};
export const shoeboxApi = {
    // Get all shoeboxes
    getShoeboxes: async () => {
        const response = await apiClient.get('/shoeboxes');
        return response.data;
    },
    // Get shoebox usage statistics
    getShoeboxUsage: async () => {
        const response = await apiClient.get('/shoeboxes/usage');
        return response.data;
    },
    // Create a new shoebox
    createShoebox: async (name, description) => {
        const response = await apiClient.post('/shoeboxes', { name, description });
        return response.data;
    },
    // Get a shoebox by ID
    getShoebox: async (id) => {
        const response = await apiClient.get(`/shoeboxes/${id}`);
        return response.data;
    },
    // Update a shoebox
    updateShoebox: async (id, name, description) => {
        const response = await apiClient.put(`/shoeboxes/${id}`, { name, description });
        return response.data;
    },
    // Delete a shoebox
    deleteShoebox: async (id) => {
        await apiClient.delete(`/shoeboxes/${id}`);
    },
    // Add a video to a shoebox
    addVideoToShoebox: async (shoeboxId, videoId) => {
        await apiClient.put(`/shoeboxes/${shoeboxId}/videos/${videoId}`);
    },
    // Remove a video from a shoebox
    removeVideoFromShoebox: async (shoeboxId, videoId) => {
        await apiClient.delete(`/shoeboxes/${shoeboxId}/videos/${videoId}`);
    },
    // Get videos in a shoebox
    getVideosInShoebox: async (shoeboxId) => {
        const response = await apiClient.get(`/shoeboxes/${shoeboxId}/videos`);
        return response.data;
    },
    // Cleanup unused shoeboxes
    cleanupUnusedShoeboxes: async () => {
        const response = await apiClient.post('/shoeboxes/cleanup');
        return response.data;
    },
};
export default apiClient;
