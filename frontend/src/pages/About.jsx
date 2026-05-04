import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Target, List, UserPlus, ShieldCheck, Settings, Globe } from 'lucide-react';

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

const About = () => {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}
    >
      <div className="glow-orb" style={{ top: '20%', left: '-20%', width: '400px', height: '400px', background: 'rgba(139, 92, 246, 0.3)' }}></div>
      <div className="glow-orb" style={{ bottom: '10%', right: '-20%', width: '400px', height: '400px', background: 'rgba(236, 72, 153, 0.2)' }}></div>

      <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>About <span className="text-gradient">EduSphere</span></h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>Revolutionizing the way institutions manage academic courses and student enrollments through cutting-edge design and architecture.</p>
      </motion.div>
      
      <motion.div variants={itemVariants} style={{ marginBottom: '4rem' }}>
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} transitionSpeed={1500} glareEnable={true} glareMaxOpacity={0.1}>
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '3rem', padding: '3rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'inline-block', padding: '15px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '20px', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <Target size={40} />
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Mission</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                The EduSphere Course Registration System is designed to streamline the academic course enrollment process for students, instructors, and administrators. Our platform provides an efficient, secure, and incredibly user-friendly solution for managing course registrations and seat allocations.
              </p>
            </div>
            <div style={{ flex: 1, position: 'relative' }}>
               <img src="/physics.png" alt="Mission" style={{ width: '100%', borderRadius: '20px', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }} />
               <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.4), transparent)', borderRadius: '20px' }}></div>
            </div>
          </div>
        </Tilt>
      </motion.div>

      <motion.h2 variants={itemVariants} style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Key Features</motion.h2>

      <motion.div variants={itemVariants} className="grid grid-cols-2" style={{ gap: '2rem' }}>
        {[
          { icon: <List />, title: 'Course Listing', desc: 'Browse all available courses with detailed information about instructors, schedules, locations, and available seats.', color: 'var(--primary)', bg: 'rgba(139, 92, 246, 0.1)' },
          { icon: <UserPlus />, title: 'Online Enrollment', desc: 'Register for courses directly through our platform with automatic seat management and waitlisting.', color: 'var(--secondary)', bg: 'rgba(59, 130, 246, 0.1)' },
          { icon: <ShieldCheck />, title: 'Seat Management', desc: 'Real-time tracking of course capacity and automatic promotion from waitlist when seats become available.', color: 'var(--success)', bg: 'rgba(16, 185, 129, 0.1)' },
          { icon: <Settings />, title: 'Admin Dashboard', desc: 'Comprehensive management tools for administrators to manage courses, students, and enrollments.', color: 'var(--warning)', bg: 'rgba(245, 158, 11, 0.1)' },
        ].map((feature, idx) => (
          <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1000} scale={1.02} style={{ display: 'flex' }}>
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ background: feature.bg, color: feature.color, padding: '15px', borderRadius: '15px', width: 'fit-content' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{feature.title}</h3>
              <p style={{ margin: 0 }}>{feature.desc}</p>
            </div>
          </Tilt>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
