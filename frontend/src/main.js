import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import theme from './theme';
import { ScanProvider } from './contexts/ScanContext';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(ChakraProvider, { theme: theme, children: _jsx(Router, { children: _jsx(ScanProvider, { children: _jsx(App, {}) }) }) }) }));
