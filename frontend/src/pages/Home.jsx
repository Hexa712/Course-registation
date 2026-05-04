import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Users, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const coursesData = [
  { id: 1, code: 'CS101', title: 'Introduction to Computer Science', instructor: 'Dr. Smith', schedule: 'MWF 10:00-11:00', location: 'Room 101', credits: 3, available: 10, capacity: 30, image: '/cs.png' },
  { id: 2, code: 'MATH201', title: 'Advanced Calculus', instructor: 'Prof. Johnson', schedule: 'TTh 13:00-14:30', location: 'Room 205', credits: 4, available: 5, capacity: 25, image: '/math.png' },
  { id: 3, code: 'PHY105', title: 'General Physics', instructor: 'Dr. Williams', schedule: 'MWF 09:00-10:00', location: 'Lab 3', credits: 4, available: 0, capacity: 20, image: '/physics.png' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

const Home = () => {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
    >
      {/* 3D Hero Section */}
      <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', marginBottom: '6rem', position: 'relative', gap: '3rem', minHeight: '60vh' }}>
        {/* Background Glowing Orbs */}
        <div className="glow-orb" style={{ top: '10%', left: '-10%', width: '400px', height: '400px', background: 'rgba(139, 92, 246, 0.4)' }}></div>
        <div className="glow-orb" style={{ bottom: '-10%', right: '10%', width: '500px', height: '500px', background: 'rgba(59, 130, 246, 0.3)', animationDelay: '-5s' }}></div>
        <div className="glow-orb" style={{ top: '30%', right: '40%', width: '300px', height: '300px', background: 'rgba(236, 72, 153, 0.2)', animationDelay: '-2s' }}></div>
        
        <div style={{ flex: 1.2, position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', fontSize: '0.9rem', marginBottom: '2rem', fontWeight: '500', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text)' }}
          >
            <Sparkles size={16} color="var(--warning)" /> Welcome to the future of learning
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}
          >
            Elevate Your <br/>
            <span className="text-gradient">Learning Experience</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '550px' }}
          >
            Immerse yourself in a next-generation academic platform. Browse courses, manage enrollments, and track progress in stunning 3D.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ display: 'flex', gap: '1.5rem' }}
          >
            <Link to="/courses" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Browse Courses <ArrowRight size={20} />
            </Link>
            <Link to="/enroll" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Enroll Now
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          style={{ flex: 1, position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}
        >
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} transitionSpeed={1500} scale={1.05} glareEnable={true} glareMaxOpacity={0.4} glarePosition="all" style={{ transformStyle: 'preserve-3d' }}>
            <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              src="/hero.png" 
              alt="3D Floating Laptop" 
              style={{ width: '100%', maxWidth: '600px', height: 'auto', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.6))', transform: 'translateZ(50px)' }} 
            />
          </Tilt>
        </motion.div>
      </motion.div>

      {/* Featured Courses Header */}
      <motion.div variants={itemVariants} style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Featured Courses</h2>
          <p style={{ margin: '10px 0 0 0', color: 'var(--primary)' }}>Discover top-rated classes for this semester</p>
        </div>
        <Link to="/courses" style={{ color: 'var(--text)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', padding: '10px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', transition: 'all 0.3s ease' }} className="hover-highlight">
          View all <ArrowRight size={16} />
        </Link>
      </motion.div>

      {/* 3D Course Cards Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-3">
        {coursesData.map(course => (
          <Tilt key={course.id} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={1000} glareEnable={true} glareMaxOpacity={0.15} style={{ display: 'flex' }}>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '0', width: '100%', border: '1px solid rgba(255,255,255,0.1)' }}>
              {/* Course Image Header with 3D Effect */}
              <div style={{ height: '220px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <motion.img 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  src={course.image} 
                  alt={course.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(15,23,42,1))' }}></div>
                
                <div style={{ position: 'absolute', top: '20px', right: '20px', transform: 'translateZ(20px)' }}>
                  <span style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '6px 14px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '600', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                    {course.code}
                  </span>
                </div>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: course.available > 0 ? 'var(--success)' : 'var(--danger)', fontWeight: '600', background: course.available > 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', padding: '6px 12px', borderRadius: '6px', border: `1px solid ${course.available > 0 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}` }}>
                    <Users size={14} /> {course.available} / {course.capacity} Seats
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', lineHeight: '1.3' }}>{course.title}</h3>
                
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                    <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '8px', borderRadius: '8px' }}><User size={18} color="var(--primary)" /></div>
                    <span style={{ fontWeight: '500' }}>{course.instructor}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '8px', borderRadius: '8px' }}><Clock size={18} color="var(--secondary)" /></div>
                    <span style={{ fontWeight: '500' }}>{course.schedule}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                    <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '8px', borderRadius: '8px' }}><BookOpen size={18} color="var(--accent)" /></div>
                    <span style={{ fontWeight: '500' }}>{course.credits} Credits</span>
                  </div>
                </div>
                
                <Link to="/enroll" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', padding: '14px' }}>
                  {course.available > 0 ? 'Enroll Now' : 'Join Waitlist'}
                </Link>
              </div>
            </div>
          </Tilt>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;
