import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Placeholders for other pages
const Listings = () => <div className="min-h-screen p-10"><h1 className="text-3xl font-bold">Listings Page</h1></div>;
const PropertyDetail = () => <div className="min-h-screen p-10"><h1 className="text-3xl font-bold">Property Detail Page</h1></div>;
const Login = () => <div className="min-h-screen p-10"><h1 className="text-3xl font-bold">Login Page</h1></div>;
const Dashboard = () => <div className="min-h-screen p-10"><h1 className="text-3xl font-bold">Dashboard</h1></div>;

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-lightGray font-sans text-darkGray">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
