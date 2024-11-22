import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Header from './Components/Header';
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> 
      {/* <Footer /> */}
    </>
  );
};

const App = () => {
  return (
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
  );
};

export default App;