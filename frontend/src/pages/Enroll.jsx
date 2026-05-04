import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Send, UserCheck, BookOpen, Calendar } from 'lucide-react';

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

const Enroll = () => {
  const [searchParams] = useSearchParams();
  const prefilledCode = searchParams.get('code') || '';
  
  const [formData, setFormData] = useState({
    studentId: '',
    courseCode: prefilledCode,
    term: 'Fall 2024'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enrollment requested for ' + formData.courseCode);
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      style={{ maxWidth: '650px', margin: '0 auto', position: 'relative' }}
    >
      <div className="glow-orb" style={{ top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'rgba(59, 130, 246, 0.2)' }}></div>
      <div className="glow-orb" style={{ bottom: '-10%', right: '-10%', width: '300px', height: '300px', background: 'rgba(236, 72, 153, 0.15)' }}></div>

      <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Course <span className="text-gradient">Enrollment</span></h1>
        <p style={{ fontSize: '1.2rem' }}>Secure your seat in your favorite courses.</p>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000} transitionSpeed={1500} glareEnable={true} glareMaxOpacity={0.05}>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <UserCheck size={18} color="var(--primary)" /> Student ID
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={formData.studentId}
                  onChange={e => setFormData({...formData, studentId: e.target.value})}
                  required
                  placeholder="e.g. S12345"
                  style={{ background: 'rgba(15, 23, 42, 0.6)' }}
                />
              </div>
              
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BookOpen size={18} color="var(--accent)" /> Course Code
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={formData.courseCode}
                  onChange={e => setFormData({...formData, courseCode: e.target.value})}
                  required
                  placeholder="e.g. CS101"
                  style={{ background: 'rgba(15, 23, 42, 0.6)' }}
                />
              </div>
              
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={18} color="var(--success)" /> Term
                </label>
                <select 
                  className="form-control"
                  value={formData.term}
                  onChange={e => setFormData({...formData, term: e.target.value})}
                  required
                  style={{ background: 'rgba(15, 23, 42, 0.6)', cursor: 'pointer' }}
                >
                  <option value="Fall 2024">Fall 2024</option>
                  <option value="Spring 2025">Spring 2025</option>
                  <option value="Summer 2025">Summer 2025</option>
                </select>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '1rem', padding: '16px', fontSize: '1.1rem' }}
              >
                <Send size={20} /> Submit Enrollment Request
              </motion.button>
            </form>
          </div>
        </Tilt>
      </motion.div>
    </motion.div>
  );
};

export default Enroll;
