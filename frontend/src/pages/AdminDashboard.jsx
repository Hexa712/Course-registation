import React from 'react';
import { Users, BookOpen, CheckCircle, Clock, Plus, Settings, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const AdminDashboard = () => {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
    >
      <div className="glow-orb" style={{ top: '10%', right: '10%', width: '400px', height: '400px', background: 'rgba(16, 185, 129, 0.15)' }}></div>
      
      <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h1 style={{ margin: 0, fontSize: '3rem' }}>Admin <span className="text-gradient">Dashboard</span></h1>
        <button className="btn btn-primary" style={{ padding: '12px 24px' }}>
          <Settings size={20} /> System Settings
        </button>
      </motion.div>
      
      <motion.div variants={itemVariants} className="grid grid-cols-4" style={{ marginBottom: '3rem' }}>
        {[
          { icon: <BookOpen size={32} />, value: '24', label: 'Total Courses', color: 'var(--primary)', bg: 'rgba(139, 92, 246, 0.1)' },
          { icon: <Users size={32} />, value: '850', label: 'Active Students', color: 'var(--success)', bg: 'rgba(16, 185, 129, 0.1)' },
          { icon: <CheckCircle size={32} />, value: '1,240', label: 'Enrollments', color: 'var(--secondary)', bg: 'rgba(59, 130, 246, 0.1)' },
          { icon: <AlertCircle size={32} />, value: '15', label: 'Waitlisted', color: 'var(--warning)', bg: 'rgba(245, 158, 11, 0.1)' }
        ].map((stat, idx) => (
          <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={1000}>
            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
              <div style={{ background: stat.bg, padding: '15px', borderRadius: '15px', color: stat.color }}>
                {stat.icon}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '2rem', lineHeight: '1' }}>{stat.value}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>{stat.label}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </motion.div>
      
      <motion.div variants={itemVariants} className="grid grid-cols-2" style={{ gap: '2rem' }}>
        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} transitionSpeed={1500}>
          <div className="glass-card" style={{ height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ margin: 0, fontSize: '1.8rem' }}>Recent Enrollments</h2>
              <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>View All</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '15px 10px', color: 'var(--text-muted)', fontWeight: '500' }}>Student</th>
                  <th style={{ padding: '15px 10px', color: 'var(--text-muted)', fontWeight: '500' }}>Course</th>
                  <th style={{ padding: '15px 10px', color: 'var(--text-muted)', fontWeight: '500' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { student: 'John Doe (S1001)', course: 'CS101', status: 'Enrolled', color: 'var(--success)', bg: 'rgba(16, 185, 129, 0.1)' },
                  { student: 'Jane Smith (S1002)', course: 'MATH201', status: 'Waitlisted', color: 'var(--warning)', bg: 'rgba(245, 158, 11, 0.1)' },
                  { student: 'Mike Johnson (S1003)', course: 'PHY105', status: 'Enrolled', color: 'var(--success)', bg: 'rgba(16, 185, 129, 0.1)' }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.3s ease' }} className="hover-highlight">
                    <td style={{ padding: '15px 10px', fontWeight: '500' }}>{row.student}</td>
                    <td style={{ padding: '15px 10px', color: 'var(--text-muted)' }}>{row.code}</td>
                    <td style={{ padding: '15px 10px' }}>
                      <span style={{ color: row.color, background: row.bg, padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Tilt>
        
        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={1000} transitionSpeed={1500}>
          <div className="glass-card" style={{ height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ margin: 0, fontSize: '1.8rem' }}>Quick Actions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '1.2rem', background: 'rgba(255,255,255,0.02)' }}>
                <Plus size={22} color="var(--primary)" /> <span style={{ marginLeft: '10px' }}>Add New Course</span>
              </button>
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '1.2rem', background: 'rgba(255,255,255,0.02)' }}>
                <Users size={22} color="var(--secondary)" /> <span style={{ marginLeft: '10px' }}>Manage Students</span>
              </button>
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '1.2rem', background: 'rgba(255,255,255,0.02)' }}>
                <CheckCircle size={22} color="var(--success)" /> <span style={{ marginLeft: '10px' }}>Process Enrollments</span>
              </button>
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '1.2rem', background: 'rgba(255,255,255,0.02)' }}>
                <Clock size={22} color="var(--warning)" /> <span style={{ marginLeft: '10px' }}>Manage Waitlists</span>
              </button>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </motion.div>
  );
};

export default AdminDashboard;
