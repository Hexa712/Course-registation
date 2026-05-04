import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen, User, Info, Mail, LayoutDashboard, LogIn } from 'lucide-react';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Enroll from './pages/Enroll';
import AdminDashboard from './pages/AdminDashboard';

// Navbar Component
const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar glass">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <BookOpen color="var(--primary)" size={28} />
        <h2 style={{ margin: 0, fontSize: '1.5rem', background: 'linear-gradient(to right, #667eea, #a0b2ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          EduSphere
        </h2>
      </div>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${isActive('/')}`}><div style={{display:'flex', gap:'5px', alignItems:'center'}}><BookOpen size={18}/> Home</div></Link>
        <Link to="/courses" className={`nav-link ${isActive('/courses')}`}><div style={{display:'flex', gap:'5px', alignItems:'center'}}><LayoutDashboard size={18}/> Courses</div></Link>
        <Link to="/enroll" className={`nav-link ${isActive('/enroll')}`}><div style={{display:'flex', gap:'5px', alignItems:'center'}}><LogIn size={18}/> Enroll</div></Link>
        <Link to="/admin" className={`nav-link ${isActive('/admin')}`}><div style={{display:'flex', gap:'5px', alignItems:'center'}}><User size={18}/> Admin</div></Link>
        <Link to="/about" className={`nav-link ${isActive('/about')}`}><div style={{display:'flex', gap:'5px', alignItems:'center'}}><Info size={18}/> About</div></Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact')}`}><div style={{display:'flex', gap:'5px', alignItems:'center'}}><Mail size={18}/> Contact</div></Link>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="glass" style={{ textAlign: 'center', padding: '2rem', marginTop: 'auto', borderRadius: '0' }}>
    <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} EduSphere Course Registration System. All rights reserved.</p>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
