import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Sparkles, TrendingUp, MousePointerClick } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <MousePointerClick size={32} color="#8b5cf6" />,
            title: "1. Paste Details",
            description: "Copy the job description you're eyeing and your current resume into our secure analyzer."
        },
        {
            icon: <FileSearch size={32} color="#ec4899" />,
            title: "2. AI Analysis",
            description: "Our engine scans for ATS keywords, skill gaps, and crucial missing metrics in seconds."
        },
        {
            icon: <TrendingUp size={32} color="#10b981" />,
            title: "3. Improve & Apply",
            description: "Get a clear score and exact bullet point suggestions to boost your interview chances."
        }
    ];

    return (
        <section id="how-it-works" style={{ padding: '6rem 1rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How It <span className="text-gradient">Works</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Three simple steps to a resume that recruiters love.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    position: 'relative',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--bg-card)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                border: '1px solid var(--glass-border)',
                                boxShadow: '0 0 20px rgba(0,0,0,0.2)'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
