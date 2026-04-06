import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FormControl, FormLabel, Input, Textarea, HStack, IconButton, useToast, useColorModeValue, } from '@chakra-ui/react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import CreatableSelect from 'react-select/creatable';
import { tagApi, personApi, locationApi, eventApi, shoeboxApi } from '../api/client';
const VideoForm = ({ video: _video, // Renamed to _video to indicate it's intentionally unused
onChange, formData, readOnly = false }) => {
    const toast = useToast();
    // Options for select inputs
    const [tagOptions, setTagOptions] = useState([]);
    const [peopleOptions, setPeopleOptions] = useState([]);
    const [locationOptions, setLocationOptions] = useState([]);
    const [eventOptions, setEventOptions] = useState([]);
    const [shoeboxOptions, setShoeboxOptions] = useState([]);
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const textMuted = useColorModeValue('gray.500', 'gray.400');
    // Load tags, people, locations, events, and shoeboxes options
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                // Fetch tags
                const tags = await tagApi.getTags();
                setTagOptions(tags.map(tag => ({ value: tag.name, label: tag.name })));
                // Fetch people
                const people = await personApi.getPeople();
                setPeopleOptions(people.map(person => ({ value: person.name, label: person.name })));
                // Fetch locations
                const locations = await locationApi.getLocations();
                setLocationOptions(locations.map(location => ({ value: location, label: location })));
                // Fetch events
                const events = await eventApi.getEvents();
                setEventOptions(events.map(event => ({ value: event, label: event })));
                // Fetch shoeboxes
                const shoeboxes = await shoeboxApi.getShoeboxes();
                setShoeboxOptions(shoeboxes.map(shoebox => ({ value: shoebox.name, label: shoebox.name })));
            }
            catch (error) {
                console.error('Error fetching options:', error);
            }
        };
        fetchOptions();
    }, []);
    // Handle rating change
    const handleRatingChange = (newRating) => {
        const updatedRating = newRating === formData.rating ? undefined : newRating;
        onChange({ rating: updatedRating });
    };
    // Render rating stars
    const renderRatingStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(_jsx(motion.div, { whileHover: { scale: 1.3 }, whileTap: { scale: 0.9 }, children: _jsx(IconButton, { icon: i <= (formData.rating || 0) ? _jsx(FaStar, {}) : _jsx(FaRegStar, {}), "aria-label": `${i} star`, variant: "ghost", color: i <= (formData.rating || 0) ? 'yellow.400' : textMuted, isDisabled: readOnly, onClick: () => !readOnly && handleRatingChange(i), borderRadius: "full", _hover: { bg: 'transparent' } }) }, i));
        }
        return _jsx(HStack, { spacing: 1, children: stars });
    };
    // Custom styles for react-select
    const selectStyles = {
        control: (base) => ({
            ...base,
            background: bgColor,
            borderColor: borderColor,
            borderRadius: 'xl',
            transition: 'all 0.2s ease',
        }),
        menu: (base) => ({
            ...base,
            background: bgColor,
            borderRadius: 'xl',
            zIndex: 2
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused
                ? useColorModeValue('brand.100', 'brand.900')
                : bgColor,
            color: useColorModeValue('gray.900', 'gray.100'),
            borderRadius: 'lg',
        }),
    };
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { fontWeight: "500", children: "Title" }), readOnly ? (_jsx(Input, { value: formData.title, isReadOnly: true, borderRadius: "xl" })) : (_jsx(Input, { value: formData.title, onChange: (e) => onChange({ title: e.target.value }), placeholder: "Enter title", borderRadius: "xl", variant: "outlined" }))] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Rating" }), renderRatingStars()] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Description" }), readOnly ? (_jsx(Textarea, { value: formData.description, isReadOnly: true, rows: 4 })) : (_jsx(Textarea, { value: formData.description, onChange: (e) => onChange({ description: e.target.value }), placeholder: "Enter description", rows: 4 }))] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Location" }), readOnly ? (_jsx(Input, { value: formData.location, isReadOnly: true })) : (_jsx(CreatableSelect, { options: locationOptions, value: formData.location ? { value: formData.location, label: formData.location } : null, onChange: (selected) => onChange({
                            location: selected ? selected.value : undefined
                        }), placeholder: "Select or create location...", styles: selectStyles, isClearable: true, formatCreateLabel: (inputValue) => `Create location "${inputValue}"`, onCreateOption: async (inputValue) => {
                            if (readOnly)
                                return;
                            // For locations, we don't need to create anything in the backend
                            // Just update the form data and add to options
                            onChange({ location: inputValue });
                            // Add to options if not already present
                            if (!locationOptions.some(option => option.value === inputValue)) {
                                setLocationOptions([...locationOptions, { value: inputValue, label: inputValue }]);
                            }
                            toast({
                                title: 'Location added',
                                status: 'success',
                                duration: 2000,
                                isClosable: true,
                            });
                        } }))] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Event" }), readOnly ? (_jsx(Input, { value: formData.event, isReadOnly: true })) : (_jsx(CreatableSelect, { options: eventOptions, value: formData.event ? { value: formData.event, label: formData.event } : null, onChange: (selected) => onChange({
                            event: selected ? selected.value : undefined
                        }), placeholder: "Select or create event...", styles: selectStyles, isClearable: true, formatCreateLabel: (inputValue) => `Create event "${inputValue}"`, onCreateOption: async (inputValue) => {
                            if (readOnly)
                                return;
                            // For events, we don't need to create anything in the backend
                            // Just update the form data and add to options
                            onChange({ event: inputValue });
                            // Add to options if not already present
                            if (!eventOptions.some(option => option.value === inputValue)) {
                                setEventOptions([...eventOptions, { value: inputValue, label: inputValue }]);
                            }
                            toast({
                                title: 'Event added',
                                status: 'success',
                                duration: 2000,
                                isClosable: true,
                            });
                        } }))] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Tags" }), _jsx(CreatableSelect, { isMulti: true, options: tagOptions, value: formData.selectedTags, onChange: (selected) => onChange({
                            tags: selected ? selected.map((tag) => tag.value) : []
                        }), placeholder: "Select or create tags...", styles: selectStyles, isClearable: true, isDisabled: readOnly, formatCreateLabel: (inputValue) => `Create tag "${inputValue}"`, onCreateOption: async (inputValue) => {
                            if (readOnly)
                                return;
                            try {
                                const newTag = await tagApi.createTag(inputValue);
                                const newOption = { value: newTag.name, label: newTag.name };
                                setTagOptions([...tagOptions, newOption]);
                                // Update the selected tags
                                const updatedTags = [...formData.selectedTags, newOption];
                                onChange({
                                    tags: updatedTags.map(tag => tag.value)
                                });
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
                        } })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "People" }), _jsx(CreatableSelect, { isMulti: true, options: peopleOptions, value: formData.selectedPeople, onChange: (selected) => onChange({
                            people: selected ? selected.map((person) => person.value) : []
                        }), placeholder: "Select or create people...", styles: selectStyles, isClearable: true, isDisabled: readOnly, formatCreateLabel: (inputValue) => `Create person "${inputValue}"`, onCreateOption: async (inputValue) => {
                            if (readOnly)
                                return;
                            try {
                                const newPerson = await personApi.createPerson(inputValue);
                                const newOption = { value: newPerson.name, label: newPerson.name };
                                setPeopleOptions([...peopleOptions, newOption]);
                                // Update the selected people
                                const updatedPeople = [...formData.selectedPeople, newOption];
                                onChange({
                                    people: updatedPeople.map(person => person.value)
                                });
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
                        } })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Shoeboxes" }), _jsx(CreatableSelect, { isMulti: true, options: shoeboxOptions, value: formData.selectedShoeboxes, onChange: (selected) => onChange({
                            shoeboxes: selected ? selected.map((shoebox) => shoebox.value) : []
                        }), placeholder: "Select or create shoeboxes...", styles: selectStyles, isClearable: true, isDisabled: readOnly, formatCreateLabel: (inputValue) => `Create shoebox "${inputValue}"`, onCreateOption: async (inputValue) => {
                            if (readOnly)
                                return;
                            try {
                                const newShoebox = await shoeboxApi.createShoebox(inputValue);
                                const newOption = { value: newShoebox.name, label: newShoebox.name };
                                setShoeboxOptions([...shoeboxOptions, newOption]);
                                // Update the selected shoeboxes
                                const updatedShoeboxes = [...formData.selectedShoeboxes, newOption];
                                onChange({
                                    shoeboxes: updatedShoeboxes.map(shoebox => shoebox.value)
                                });
                                toast({
                                    title: 'Shoebox created',
                                    status: 'success',
                                    duration: 2000,
                                    isClosable: true,
                                });
                            }
                            catch (error) {
                                console.error('Error creating shoebox:', error);
                                toast({
                                    title: 'Error creating shoebox',
                                    status: 'error',
                                    duration: 3000,
                                    isClosable: true,
                                });
                            }
                        } })] })] }));
};
export default VideoForm;
