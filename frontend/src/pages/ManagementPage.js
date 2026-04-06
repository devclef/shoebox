import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, VStack, HStack, Button, Input, FormControl, useToast, Spinner, Badge, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure, Table, Thead, Tbody, Tr, Th, Td, IconButton, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { FaTrash, FaPlus, FaArrowLeft, FaEdit, FaSave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { tagApi, personApi, locationApi, eventApi } from '../api/client';
const ManagementPage = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef(null);
    const [tags, setTags] = useState([]);
    const [people, setPeople] = useState([]);
    const [locations, setLocations] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newTagName, setNewTagName] = useState('');
    const [newPersonName, setNewPersonName] = useState('');
    const [editingLocation, setEditingLocation] = useState(null);
    const [editingEvent, setEditingEvent] = useState(null);
    const [itemToDelete, setItemToDelete] = useState(null);
    const bgColor = useColorModeValue('white', 'gray.800');
    // Load tags, people, locations, and events
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [tagsData, peopleData, locationsData, eventsData] = await Promise.all([
                    tagApi.getTagUsage(),
                    personApi.getPersonUsage(),
                    locationApi.getLocationUsage(),
                    eventApi.getEventUsage()
                ]);
                setTags(tagsData);
                setPeople(peopleData);
                setLocations(locationsData);
                setEvents(eventsData);
            }
            catch (error) {
                console.error('Error fetching data:', error);
                toast({
                    title: 'Error fetching data',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [toast]);
    // Handle adding a new tag
    const handleAddTag = async () => {
        if (!newTagName.trim()) {
            toast({
                title: 'Tag name cannot be empty',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        try {
            const newTag = await tagApi.createTag(newTagName);
            setTags([...tags, { id: newTag.id, name: newTag.name, video_count: 0 }]);
            setNewTagName('');
            toast({
                title: 'Tag created',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        }
        catch (error) {
            console.error('Error creating tag:', error);
            toast({
                title: 'Error creating tag',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };
    // Handle adding a new person
    const handleAddPerson = async () => {
        if (!newPersonName.trim()) {
            toast({
                title: 'Person name cannot be empty',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        try {
            const newPerson = await personApi.createPerson(newPersonName);
            setPeople([...people, { id: newPerson.id, name: newPerson.name, video_count: 0 }]);
            setNewPersonName('');
            toast({
                title: 'Person created',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        }
        catch (error) {
            console.error('Error creating person:', error);
            toast({
                title: 'Error creating person',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };
    // Handle deleting a tag, person, location, or event
    const handleDelete = async () => {
        if (!itemToDelete)
            return;
        try {
            if (itemToDelete.type === 'tag' && itemToDelete.id) {
                await tagApi.deleteTag(itemToDelete.id);
                setTags(tags.filter(tag => tag.id !== itemToDelete.id));
                toast({
                    title: 'Tag deleted',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
            }
            else if (itemToDelete.type === 'person' && itemToDelete.id) {
                await personApi.deletePerson(itemToDelete.id);
                setPeople(people.filter(person => person.id !== itemToDelete.id));
                toast({
                    title: 'Person deleted',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
            }
            else if (itemToDelete.type === 'location') {
                const count = await locationApi.deleteLocation(itemToDelete.name);
                // Refresh locations after deletion
                const updatedLocations = await locationApi.getLocationUsage();
                setLocations(updatedLocations);
                toast({
                    title: `Location deleted from ${count} videos`,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
            }
            else if (itemToDelete.type === 'event') {
                const count = await eventApi.deleteEvent(itemToDelete.name);
                // Refresh events after deletion
                const updatedEvents = await eventApi.getEventUsage();
                setEvents(updatedEvents);
                toast({
                    title: `Event deleted from ${count} videos`,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
            }
        }
        catch (error) {
            console.error('Error deleting item:', error);
            toast({
                title: 'Error deleting item',
                description: 'The item may be in use by videos.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
        finally {
            onClose();
            setItemToDelete(null);
        }
    };
    // Open delete confirmation dialog
    const openDeleteDialog = (id, name, type) => {
        setItemToDelete({ id, name, type });
        onOpen();
    };
    // Handle updating a location
    const handleUpdateLocation = async () => {
        if (!editingLocation)
            return;
        try {
            const count = await locationApi.updateLocation(editingLocation.oldName, editingLocation.newName);
            // Refresh locations after update
            const updatedLocations = await locationApi.getLocationUsage();
            setLocations(updatedLocations);
            setEditingLocation(null);
            toast({
                title: `Location updated in ${count} videos`,
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        }
        catch (error) {
            console.error('Error updating location:', error);
            toast({
                title: 'Error updating location',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };
    // Handle updating an event
    const handleUpdateEvent = async () => {
        if (!editingEvent)
            return;
        try {
            const count = await eventApi.updateEvent(editingEvent.oldName, editingEvent.newName);
            // Refresh events after update
            const updatedEvents = await eventApi.getEventUsage();
            setEvents(updatedEvents);
            setEditingEvent(null);
            toast({
                title: `Event updated in ${count} videos`,
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        }
        catch (error) {
            console.error('Error updating event:', error);
            toast({
                title: 'Error updating event',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };
    // Handle deleting all unused tags
    const handleDeleteUnusedTags = async () => {
        try {
            await tagApi.deleteUnusedTags();
            const updatedTags = await tagApi.getTagUsage();
            setTags(updatedTags);
            toast({
                title: 'Unused tags deleted',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        }
        catch (error) {
            console.error('Error deleting unused tags:', error);
            toast({
                title: 'Error deleting unused tags',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };
    // Handle deleting all unused people
    const handleDeleteUnusedPeople = async () => {
        try {
            await personApi.deleteUnusedPeople();
            const updatedPeople = await personApi.getPersonUsage();
            setPeople(updatedPeople);
            toast({
                title: 'Unused people deleted',
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        }
        catch (error) {
            console.error('Error deleting unused people:', error);
            toast({
                title: 'Error deleting unused people',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };
    if (loading) {
        return (_jsx(Flex, { justify: "center", align: "center", h: "400px", children: _jsx(Spinner, { size: "xl" }) }));
    }
    return (_jsxs(Box, { children: [_jsxs(Flex, { mb: 6, justify: "space-between", align: "center", children: [_jsx(Button, { leftIcon: _jsx(FaArrowLeft, {}), onClick: () => navigate('/'), children: "Back to Videos" }), _jsx(Heading, { size: "lg", children: "Manage Data" }), _jsx(Box, { width: "100px" }), " "] }), _jsxs(Tabs, { isFitted: true, variant: "enclosed", children: [_jsxs(TabList, { mb: "1em", children: [_jsx(Tab, { children: "Tags" }), _jsx(Tab, { children: "People" }), _jsx(Tab, { children: "Locations" }), _jsx(Tab, { children: "Events" })] }), _jsxs(TabPanels, { children: [_jsx(TabPanel, { children: _jsxs(VStack, { spacing: 4, align: "stretch", children: [_jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "md", bg: bgColor, children: [_jsx(Heading, { size: "md", mb: 4, children: "Add New Tag" }), _jsxs(HStack, { children: [_jsx(FormControl, { children: _jsx(Input, { value: newTagName, onChange: (e) => setNewTagName(e.target.value), placeholder: "Enter tag name" }) }), _jsx(Button, { leftIcon: _jsx(FaPlus, {}), colorScheme: "blue", onClick: handleAddTag, children: "Add" })] })] }), _jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "md", bg: bgColor, children: [_jsxs(Flex, { justify: "space-between", align: "center", mb: 4, children: [_jsx(Heading, { size: "md", children: "Existing Tags" }), _jsx(Button, { size: "sm", colorScheme: "red", variant: "outline", onClick: handleDeleteUnusedTags, children: "Delete All Unused" })] }), _jsxs(Table, { variant: "simple", children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, { children: "Name" }), _jsx(Th, { isNumeric: true, children: "Videos" }), _jsx(Th, { width: "80px", children: "Actions" })] }) }), _jsx(Tbody, { children: tags.length > 0 ? (tags.map((tag) => (_jsxs(Tr, { children: [_jsx(Td, { children: _jsx(Badge, { colorScheme: "blue", color: "white", children: tag.name }) }), _jsx(Td, { isNumeric: true, children: tag.video_count }), _jsx(Td, { children: _jsx(IconButton, { "aria-label": "Delete tag", icon: _jsx(FaTrash, {}), size: "sm", colorScheme: "red", variant: "ghost", isDisabled: tag.video_count > 0, onClick: () => openDeleteDialog(tag.id, tag.name, 'tag') }) })] }, tag.id)))) : (_jsx(Tr, { children: _jsx(Td, { colSpan: 3, textAlign: "center", children: "No tags found" }) })) })] })] })] }) }), _jsx(TabPanel, { children: _jsxs(VStack, { spacing: 4, align: "stretch", children: [_jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "md", bg: bgColor, children: [_jsx(Heading, { size: "md", mb: 4, children: "Add New Person" }), _jsxs(HStack, { children: [_jsx(FormControl, { children: _jsx(Input, { value: newPersonName, onChange: (e) => setNewPersonName(e.target.value), placeholder: "Enter person name" }) }), _jsx(Button, { leftIcon: _jsx(FaPlus, {}), colorScheme: "green", onClick: handleAddPerson, children: "Add" })] })] }), _jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "md", bg: bgColor, children: [_jsxs(Flex, { justify: "space-between", align: "center", mb: 4, children: [_jsx(Heading, { size: "md", children: "Existing People" }), _jsx(Button, { size: "sm", colorScheme: "red", variant: "outline", onClick: handleDeleteUnusedPeople, children: "Delete All Unused" })] }), _jsxs(Table, { variant: "simple", children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, { children: "Name" }), _jsx(Th, { isNumeric: true, children: "Videos" }), _jsx(Th, { width: "80px", children: "Actions" })] }) }), _jsx(Tbody, { children: people.length > 0 ? (people.map((person) => (_jsxs(Tr, { children: [_jsx(Td, { children: _jsx(Badge, { colorScheme: "green", color: "white", children: person.name }) }), _jsx(Td, { isNumeric: true, children: person.video_count }), _jsx(Td, { children: _jsx(IconButton, { "aria-label": "Delete person", icon: _jsx(FaTrash, {}), size: "sm", colorScheme: "red", variant: "ghost", isDisabled: person.video_count > 0, onClick: () => openDeleteDialog(person.id, person.name, 'person') }) })] }, person.id)))) : (_jsx(Tr, { children: _jsx(Td, { colSpan: 3, textAlign: "center", children: "No people found" }) })) })] })] })] }) }), _jsx(TabPanel, { children: _jsxs(VStack, { spacing: 4, align: "stretch", children: [_jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "md", bg: bgColor, children: [_jsx(Heading, { size: "md", mb: 4, children: "Manage Locations" }), _jsx(Text, { mb: 4, children: "Locations are automatically created when you add them to videos. Here you can rename or delete existing locations." })] }), _jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "md", bg: bgColor, children: [_jsx(Heading, { size: "md", mb: 4, children: "Existing Locations" }), _jsxs(Table, { variant: "simple", children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, { children: "Name" }), _jsx(Th, { isNumeric: true, children: "Videos" }), _jsx(Th, { width: "120px", children: "Actions" })] }) }), _jsx(Tbody, { children: locations.length > 0 ? (locations.map((location) => (_jsxs(Tr, { children: [_jsx(Td, { children: editingLocation && editingLocation.oldName === location.name ? (_jsx(Input, { value: editingLocation.newName, onChange: (e) => setEditingLocation({
                                                                                ...editingLocation,
                                                                                newName: e.target.value
                                                                            }), size: "sm" })) : (_jsx(Badge, { colorScheme: "purple", color: "white", children: location.name })) }), _jsx(Td, { isNumeric: true, children: location.video_count }), _jsx(Td, { children: editingLocation && editingLocation.oldName === location.name ? (_jsxs(HStack, { spacing: 1, children: [_jsx(IconButton, { "aria-label": "Save location", icon: _jsx(FaSave, {}), size: "sm", colorScheme: "green", variant: "ghost", onClick: handleUpdateLocation }), _jsx(IconButton, { "aria-label": "Cancel", icon: _jsx(FaArrowLeft, {}), size: "sm", colorScheme: "gray", variant: "ghost", onClick: () => setEditingLocation(null) })] })) : (_jsxs(HStack, { spacing: 1, children: [_jsx(IconButton, { "aria-label": "Edit location", icon: _jsx(FaEdit, {}), size: "sm", colorScheme: "blue", variant: "ghost", onClick: () => setEditingLocation({
                                                                                        oldName: location.name,
                                                                                        newName: location.name
                                                                                    }) }), _jsx(IconButton, { "aria-label": "Delete location", icon: _jsx(FaTrash, {}), size: "sm", colorScheme: "red", variant: "ghost", onClick: () => openDeleteDialog(undefined, location.name, 'location') })] })) })] }, location.name)))) : (_jsx(Tr, { children: _jsx(Td, { colSpan: 3, textAlign: "center", children: "No locations found" }) })) })] })] })] }) }), _jsx(TabPanel, { children: _jsxs(VStack, { spacing: 4, align: "stretch", children: [_jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "md", bg: bgColor, children: [_jsx(Heading, { size: "md", mb: 4, children: "Manage Events" }), _jsx(Text, { mb: 4, children: "Events are automatically created when you add them to videos. Here you can rename or delete existing events." })] }), _jsxs(Box, { p: 4, borderWidth: "1px", borderRadius: "md", bg: bgColor, children: [_jsx(Heading, { size: "md", mb: 4, children: "Existing Events" }), _jsxs(Table, { variant: "simple", children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, { children: "Name" }), _jsx(Th, { isNumeric: true, children: "Videos" }), _jsx(Th, { width: "120px", children: "Actions" })] }) }), _jsx(Tbody, { children: events.length > 0 ? (events.map((event) => (_jsxs(Tr, { children: [_jsx(Td, { children: editingEvent && editingEvent.oldName === event.name ? (_jsx(Input, { value: editingEvent.newName, onChange: (e) => setEditingEvent({
                                                                                ...editingEvent,
                                                                                newName: e.target.value
                                                                            }), size: "sm" })) : (_jsx(Badge, { colorScheme: "orange", color: "white", children: event.name })) }), _jsx(Td, { isNumeric: true, children: event.video_count }), _jsx(Td, { children: editingEvent && editingEvent.oldName === event.name ? (_jsxs(HStack, { spacing: 1, children: [_jsx(IconButton, { "aria-label": "Save event", icon: _jsx(FaSave, {}), size: "sm", colorScheme: "green", variant: "ghost", onClick: handleUpdateEvent }), _jsx(IconButton, { "aria-label": "Cancel", icon: _jsx(FaArrowLeft, {}), size: "sm", colorScheme: "gray", variant: "ghost", onClick: () => setEditingEvent(null) })] })) : (_jsxs(HStack, { spacing: 1, children: [_jsx(IconButton, { "aria-label": "Edit event", icon: _jsx(FaEdit, {}), size: "sm", colorScheme: "blue", variant: "ghost", onClick: () => setEditingEvent({
                                                                                        oldName: event.name,
                                                                                        newName: event.name
                                                                                    }) }), _jsx(IconButton, { "aria-label": "Delete event", icon: _jsx(FaTrash, {}), size: "sm", colorScheme: "red", variant: "ghost", onClick: () => openDeleteDialog(undefined, event.name, 'event') })] })) })] }, event.name)))) : (_jsx(Tr, { children: _jsx(Td, { colSpan: 3, textAlign: "center", children: "No events found" }) })) })] })] })] }) })] })] }), _jsx(AlertDialog, { isOpen: isOpen, leastDestructiveRef: cancelRef, onClose: onClose, children: _jsx(AlertDialogOverlay, { children: _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { fontSize: "lg", fontWeight: "bold", children: ["Delete ", itemToDelete?.type === 'tag' ? 'Tag' :
                                        itemToDelete?.type === 'person' ? 'Person' :
                                            itemToDelete?.type === 'location' ? 'Location' : 'Event'] }), _jsxs(AlertDialogBody, { children: ["Are you sure you want to delete \"", itemToDelete?.name, "\"? This action cannot be undone."] }), _jsxs(AlertDialogFooter, { children: [_jsx(Button, { ref: cancelRef, onClick: onClose, children: "Cancel" }), _jsx(Button, { colorScheme: "red", onClick: handleDelete, ml: 3, children: "Delete" })] })] }) }) })] }));
};
export default ManagementPage;
