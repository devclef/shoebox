import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VideoDetailPage from './pages/VideoDetailPage';
import ExportPage from './pages/ExportPage';
import ManagementPage from './pages/ManagementPage';
import UnreviewedPage from './pages/UnreviewedPage';
import SystemInfoPage from './pages/SystemInfoPage';
import RatedVideosTimelinePage from './pages/RatedVideosTimelinePage';
import BulkEditPage from './pages/BulkEditPage';
import MissingVideosPage from './pages/MissingVideosPage';

/*
 * Global CSS for native form controls (<select>, <option>, <datalist>) in dark mode.
 *
 * Browsers render these elements as OS-level controls that don't respect inherited
 * CSS or CSS-in-JS. We must use raw CSS attribute selectors targeting Chakra's
 * [data-theme="dark"] to force correct colors.
 */
const globalStyles = css`
  [data-theme='dark'] select,
  [data-theme='dark'] select option,
  [data-theme='dark'] select optgroup,
  [data-theme='dark'] datalist,
  [data-theme='dark'] datalist option {
    background-color: #1f2937 !important;
    color: #f3f4f6 !important;
  }
`;

const App: React.FC = () => {
  return (
    <Box minH="100vh">
      <Global styles={globalStyles} />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:id" element={<VideoDetailPage />} />
          <Route path="/unreviewed" element={<UnreviewedPage />} />
          <Route path="/export" element={<ExportPage />} />
          <Route path="/bulk-edit" element={<BulkEditPage />} />
          <Route path="/manage" element={<ManagementPage />} />
          <Route path="/missing" element={<MissingVideosPage />} />
          <Route path="/system" element={<SystemInfoPage />} />
          <Route path="/timeline" element={<RatedVideosTimelinePage />} />
        </Routes>
      </Layout>
    </Box>
  );
};

export default App;
