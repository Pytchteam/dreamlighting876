import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BuildYourEvent from './pages/BuildYourEvent';
import PackagesPage from './pages/Packages';
import Showcase from './pages/Showcase';
import ServicesPage from './pages/Services';
import ServiceDetailPage from './pages/ServiceDetail';
import About from './pages/About';
import RentalsPage from './pages/Rentals';

// Placeholder for remaining routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="max-w-7xl mx-auto px-6 py-40 text-center">
    <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase">{title}</h1>
    <p className="text-white/50 mb-12">We're currenty architecturing this page. Experience building takes time.</p>
    <a href="/" className="text-neon-green font-bold">Back to Home</a>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build-your-event" element={<BuildYourEvent />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/rentals" element={<RentalsPage />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/about" element={<About />} />
          <Route path="/weddings" element={<Placeholder title="Wedding Experiences" />} />
          <Route path="/corporate" element={<Placeholder title="Corporate Production" />} />
          <Route path="/faq" element={<Placeholder title="FAQ" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
          <Route path="/get-quote" element={<BuildYourEvent />} />
          <Route path="/terms" element={<Placeholder title="Terms of Service" />} />
          <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
