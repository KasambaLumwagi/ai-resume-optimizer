import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            padding: '10rem 1rem 4rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    color: '#c4b5fd',
                    padding: '0.5rem 1rem',
                    borderRadius: '99px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    marginBottom: '1.5rem',
                    display: 'inline-block'
                }}>
                    ✨ AI-Powered Resume Optimization
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    marginBottom: '1.5rem',
                    maxWidth: '900px',
                    letterSpacing: '-0.03em'
                }}
            >
                Land Your Dream Job with an <br />
                <span className="text-gradient">ATS-Proof Resume</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    color: 'var(--text-muted)',
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    marginBottom: '2.5rem',
                    lineHeight: '1.6'
                }}
            >
                Our AI analyzes your resume against job descriptions to provide tailored keyword suggestions and formatting fixes that beat the bots.
            </motion.p>
        </section>
    );
};

export default Hero;
