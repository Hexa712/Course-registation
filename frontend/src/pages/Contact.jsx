import React from 'react';
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

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

const Contact = () => {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}
    >
      <div className="glow-orb" style={{ top: '10%', right: '-10%', width: '500px', height: '500px', background: 'rgba(59, 130, 246, 0.2)' }}></div>

      <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Contact <span className="text-gradient">Us</span></h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Have questions about the Course Registration System? Feel free to reach out to us.</p>
      </motion.div>
      
      <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
        <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            { icon: <Mail size={24} />, title: 'Email', value: 'support@edusphere.edu', color: 'var(--primary)', bg: 'rgba(139, 92, 246, 0.1)' },
            { icon: <Phone size={24} />, title: 'Phone', value: '+1 (555) 123-4567', color: 'var(--secondary)', bg: 'rgba(59, 130, 246, 0.1)' },
            { icon: <Clock size={24} />, title: 'Office Hours', value: 'Mon - Fri, 9AM - 5PM EST', color: 'var(--success)', bg: 'rgba(16, 185, 129, 0.1)' },
            { icon: <MapPin size={24} />, title: 'Address', value: 'Academic Center, Rm 210', color: 'var(--accent)', bg: 'rgba(236, 72, 153, 0.1)' }
          ].map((item, idx) => (
            <Tilt key={idx} tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} transitionSpeed={1000}>
              <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                <div style={{ background: item.bg, padding: '15px', borderRadius: '15px', color: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ margin: 0, fontWeight: '600', color: 'var(--text)', fontSize: '1.1rem' }}>{item.value}</p>
                </div>
              </div>
            </Tilt>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000} transitionSpeed={1500} glareEnable={true} glareMaxOpacity={0.05}>
            <div className="glass-card" style={{ padding: '2.5rem', height: '100%' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Send us a Message</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                  <input type="text" className="form-control" placeholder="Your Name" style={{ background: 'rgba(15, 23, 42, 0.6)' }} />
                  <input type="email" className="form-control" placeholder="Your Email" style={{ background: 'rgba(15, 23, 42, 0.6)' }} />
                </div>
                <input type="text" className="form-control" placeholder="Subject" style={{ background: 'rgba(15, 23, 42, 0.6)' }} />
                <textarea className="form-control" placeholder="Your Message" rows="5" style={{ background: 'rgba(15, 23, 42, 0.6)', resize: 'vertical' }}></textarea>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button" 
                  className="btn btn-primary" 
                  style={{ alignSelf: 'flex-start', padding: '14px 28px' }}
                >
                  <Send size={18} /> Send Message
                </motion.button>
              </form>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
