import React, { useState } from 'react';
import { BookOpen, Clock, Users, Search, Filter, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const allCourses = [
  { id: 1, code: 'CS101', title: 'Introduction to Computer Science', instructor: 'Dr. Smith', schedule: 'MWF 10:00-11:00', location: 'Room 101', credits: 3, available: 10, capacity: 30, image: '/cs.png' },
  { id: 2, code: 'MATH201', title: 'Advanced Calculus', instructor: 'Prof. Johnson', schedule: 'TTh 13:00-14:30', location: 'Room 205', credits: 4, available: 5, capacity: 25, image: '/math.png' },
  { id: 3, code: 'PHY105', title: 'General Physics', instructor: 'Dr. Williams', schedule: 'MWF 09:00-10:00', location: 'Lab 3', credits: 4, available: 0, capacity: 20, image: '/physics.png' },
  { id: 4, code: 'ENG101', title: 'English Literature', instructor: 'Dr. Brown', schedule: 'TTh 10:00-11:30', location: 'Room 302', credits: 3, available: 15, capacity: 40, image: '/cs.png' },
  { id: 5, code: 'HIS201', title: 'World History', instructor: 'Prof. Davis', schedule: 'MWF 14:00-15:00', location: 'Room 105', credits: 3, available: 8, capacity: 35, image: '/math.png' },
  { id: 6, code: 'BIO101', title: 'General Biology', instructor: 'Dr. Miller', schedule: 'TTh 09:00-10:30', location: 'Lab 1', credits: 4, available: 2, capacity: 25, image: '/physics.png' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = allCourses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', position: 'relative' }}>
        <div className="glow-orb" style={{ top: '-100px', left: '-50px', width: '300px', height: '300px', background: 'rgba(59, 130, 246, 0.2)' }}></div>
        <h1 style={{ fontSize: '3rem', margin: 0, position: 'relative', zIndex: 10 }}>Available <span className="text-gradient">Courses</span></h1>
        
        <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 10 }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="form-control" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '45px', width: '300px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.1)' }} 
            />
          </div>
          <button className="btn btn-secondary">
            <Filter size={18} /> Filter
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-3">
        {filteredCourses.map(course => (
          <Tilt key={course.id} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={1000} glareEnable={true} glareMaxOpacity={0.15} style={{ display: 'flex' }}>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '0', width: '100%', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <div style={{ height: '200px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <motion.img 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  src={course.image} 
                  alt={course.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(15,23,42,1))' }}></div>
                
                <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                  <span style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '6px 14px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '600', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    {course.code}
                  </span>
                </div>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: course.available > 0 ? 'var(--success)' : 'var(--danger)', fontWeight: '600', background: course.available > 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', padding: '6px 12px', borderRadius: '6px' }}>
                    <Users size={14} /> {course.available} / {course.capacity} Seats
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', lineHeight: '1.3' }}>{course.title}</h3>
                
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                    <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '8px', borderRadius: '8px' }}><User size={16} color="var(--primary)" /></div>
                    <span style={{ fontWeight: '500' }}>{course.instructor}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '8px', borderRadius: '8px' }}><Clock size={16} color="var(--secondary)" /></div>
                    <span style={{ fontWeight: '500' }}>{course.schedule}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                    <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '8px', borderRadius: '8px' }}><BookOpen size={16} color="var(--accent)" /></div>
                    <span style={{ fontWeight: '500' }}>{course.credits} Credits</span>
                  </div>
                </div>
                
                <Link to={`/enroll?code=${course.code}`} className={`btn ${course.available > 0 ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', marginTop: '2rem', padding: '14px' }}>
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

export default Courses;
