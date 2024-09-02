import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './themes/GlobalStyles';
import Header from './components/header';
import Footer from './components/footer';
import SidePanel from './components/sidePanel';

import DataConnectorsPage from './pages/dataConnection';
import PlaygroundPage from './pages/playground';
import DataViewPage from './pages/dataView';
import DashboardPage from './pages/dashboard';

const App: React.FC = () => {

  const [theme, setTheme] = useState('light'); // Initialize theme state with 'dark'
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle between light and dark themes
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="app">
          <Router>
            <Header toggleTheme={toggleTheme} />
            {/* <SidePanel selectedTheme={theme} /> */}
            <main className="main-content">
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/connect" element={<DataConnectorsPage />} />
                <Route path="/data" element={<DataViewPage />} />
                <Route path="/interact" element={<PlaygroundPage />} />
                {/* <Route path="/canvas" element={<DashboardPage />} /> */}
              </Routes>
            </main>
          </Router>
          {/* <Footer selectedTheme={theme} /> */}
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
