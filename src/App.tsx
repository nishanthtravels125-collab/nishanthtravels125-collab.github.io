import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Aboutus from './components/aboutus';
import TripPackages from './components/TripPackages';
import CarRentals from './components/CarRentals';
import PickupDrop from './components/PickupDrop';
import Blogs from './components/Blogs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

import TirumalaPackages from './pages/TirumalaPackages';
import ArunachalamPackages from './pages/ArunachalamPackages';
import TirupatiPackages from './pages/TirupatiPackages';
import SriKalahastPackages from './pages/SriKalahastPackages';
import KanipakamPackages from './pages/KanipakamPackages';
import GoldenTemplePackages from './pages/GoldenTemplePackages';
import KanchipuramPackages from './pages/KanchipuramPackages';

// Simple wrapper pages for navigation (Header/Footer/WhatsAppFloat REMOVED)
const RentalsPage = () => <CarRentals />;
const PickupDropPage = () => <PickupDrop />;
const BlogsPage = () => <Blogs />;
const ReviewsPage = () => <Reviews />;
const ContactPage = () => <Contact />;

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <TripPackages />
            <CarRentals />
            <PickupDrop />
            <Blogs />
            <Reviews />
            <Contact />
          </>
        } />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route path="/pickup-drop" element={<PickupDropPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/tirumala" element={<TirumalaPackages />} />
        <Route path="/arunachalam" element={<ArunachalamPackages />} />
        <Route path="/tirupati" element={<TirupatiPackages />} />
        <Route path="/srikalahasti" element={<SriKalahastPackages />} />
        <Route path="/kanipakam" element={<KanipakamPackages />} />
        <Route path="/golden-temple" element={<GoldenTemplePackages />} />
        <Route path="/kanchipuram" element={<KanchipuramPackages />} />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;