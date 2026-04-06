import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VideoDetailPage from './pages/VideoDetailPage';
import ExportPage from './pages/ExportPage';
import ManagementPage from './pages/ManagementPage';
import UnreviewedPage from './pages/UnreviewedPage';
import SystemInfoPage from './pages/SystemInfoPage';
import RatedVideosTimelinePage from './pages/RatedVideosTimelinePage';
import BulkEditPage from './pages/BulkEditPage';
const App = () => {
    return (_jsx(Box, { minH: "100vh", children: _jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/videos/:id", element: _jsx(VideoDetailPage, {}) }), _jsx(Route, { path: "/unreviewed", element: _jsx(UnreviewedPage, {}) }), _jsx(Route, { path: "/export", element: _jsx(ExportPage, {}) }), _jsx(Route, { path: "/bulk-edit", element: _jsx(BulkEditPage, {}) }), _jsx(Route, { path: "/manage", element: _jsx(ManagementPage, {}) }), _jsx(Route, { path: "/system", element: _jsx(SystemInfoPage, {}) }), _jsx(Route, { path: "/timeline", element: _jsx(RatedVideosTimelinePage, {}) })] }) }) }));
};
export default App;
