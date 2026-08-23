import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// A simple generic Page component for demonstration
const Page = ({ title, description }) => (
  <div className="page-container">
    <h1 className="page-title">{title}</h1>
    <p className="page-description">{description}</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page title="Welcome to KAZE University" description="Empowering minds, shaping the future." />} />
        
        <Route path="/about" element={<Page title="About Us" description="Learn about our rich history and vision." />} />
        <Route path="/about/history" element={<Page title="Our History" description="Founded in 1990." />} />
        <Route path="/about/leadership" element={<Page title="Leadership" description="Meet our university board." />} />
        <Route path="/about/vision" element={<Page title="Vision & Mission" description="Our core values." />} />

        <Route path="/academics" element={<Page title="Academics" description="Explore our top-tier programs." />} />
        <Route path="/academics/undergrad" element={<Page title="Undergraduate" description="Bachelor's degree programs." />} />
        <Route path="/academics/postgrad" element={<Page title="Postgraduate" description="Master's and PhD programs." />} />
        <Route path="/academics/departments" element={<Page title="Departments" description="Our faculties." />} />

        <Route path="/admissions" element={<Page title="Admissions" description="Join our vibrant community." />} />
        <Route path="/research" element={<Page title="Research" description="Discover our groundbreaking research initiatives." />} />
        <Route path="/campus-life" element={<Page title="Campus Life" description="Experience the energetic campus environment." />} />
        <Route path="/placements" element={<Page title="Placements" description="Outstanding career opportunities for our graduates." />} />
        <Route path="/contact" element={<Page title="Contact Us" description="Get in touch with us." />} />
      </Routes>
    </Router>
  );
};

export default App;
