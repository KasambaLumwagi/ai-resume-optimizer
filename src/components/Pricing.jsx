import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { PAYMENT_LINKS } from '../config';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: 'Free Starter',
            price: '$0',
            period: '/mo',
            description: 'Perfect for a quick resume checkup.',
            features: [
                '3 Resume Scans per month',
                'Basic ATS Score',
                'Missing Keyword Detection',
                'Standard Formatting Check'
            ],
            cta: 'Start Free',
            highlight: false
        },
        {
            name: 'Pro Career',
            price: isAnnual ? '$9' : '$15',
            period: '/mo',
            description: 'For serious job seekers wanting maximum impact.',
            features: [
                'Unlimited Resume Scans',
                'Deep Content Analysis',
                'AI Action Verb Suggestions',
                'Specific Bullet Point Rewrites',
                'Priority Email Support'
            ],
            type: 'pro',
            cta: 'Upgrade to Pro',
            highlight: true
        },
        {
            name: 'Executive',
            price: isAnnual ? '$29' : '$39',
            period: '/mo',
            description: 'Full-service career branding toolkit.',
            features: [
                'Everything in Pro',
                'LinkedIn Profile Optimization',
                'Cover Letter Generator',
                'Interview Prep AI Agent',
                'Personal Branding Guide'
            ],
            type: 'executive',
            cta: 'Get Executive',
            highlight: false
        }
    ];

    const handleUpgrade = (planType) => {
        let link = '';
        if (planType === 'pro') {
            link = isAnnual ? PAYMENT_LINKS.YEARLY : PAYMENT_LINKS.MONTHLY;
        } else if (planType === 'executive') {
            link = isAnnual ? PAYMENT_LINKS.EXECUTIVE_YEARLY : PAYMENT_LINKS.EXECUTIVE_MONTHLY;
        }

        if (link) {
            window.location.href = link;
        } else {
            alert('Please configure payment links in src/config.js');
        }
    };

    return (
        <section id="pricing" style={{ padding: '6rem 1rem', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Simple, Transparent <span className="text-gradient">Pricing</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Invest in your career with plans designed to get you hired faster.</p>

                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        background: 'var(--bg-card)',
                        padding: '0.25rem',
                        borderRadius: '99px',
                        marginTop: '2rem',
                        border: '1px solid var(--glass-border)'
                    }}>
                        <button
                            onClick={() => setIsAnnual(false)}
                            style={{
                                background: !isAnnual ? 'var(--glass-highlight)' : 'transparent',
                                color: !isAnnual ? 'white' : 'var(--text-muted)',
                                padding: '0.5rem 1.5rem',
                                borderRadius: '99px',
                                border: 'none',
                                fontWeight: 500,
                                transition: 'all 0.3s'
                            }}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            style={{
                                background: isAnnual ? 'var(--glass-highlight)' : 'transparent',
                                color: isAnnual ? 'white' : 'var(--text-muted)',
                                padding: '0.5rem 1.5rem',
                                borderRadius: '99px',
                                border: 'none',
                                fontWeight: 500,
                                transition: 'all 0.3s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            Yearly <span style={{ fontSize: '0.7rem', background: 'var(--primary)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>SAVE 40%</span>
                        </button>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel"
                            style={{
                                padding: '2rem',
                                position: 'relative',
                                border: plan.highlight ? '1px solid var(--primary)' : undefined,
                                transform: plan.highlight ? 'scale(1.05)' : 'none',
                                zIndex: plan.highlight ? 1 : 0,
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {plan.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                                    padding: '0.25rem 1rem',
                                    borderRadius: '99px',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.25rem'
                                }}>
                                    <Zap size={14} fill="white" /> POPULAR
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '48px' }}>{plan.description}</p>

                            <div style={{ marginBottom: '2rem' }}>
                                <span style={{ fontSize: '3rem', fontWeight: 700 }}>{plan.price}</span>
                                <span style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', flex: 1 }}>
                                {plan.features.map((feature, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                        <div style={{
                                            minWidth: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            background: 'rgba(16, 185, 129, 0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Check size={12} color="#10b981" />
                                        </div>
                                        <span style={{ fontSize: '0.95rem', color: '#e2e8f0' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => plan.price !== '$0' ? handleUpgrade(plan.type) : null}
                                className={plan.highlight ? 'glow-button' : ''}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    border: plan.highlight ? 'none' : '1px solid var(--glass-border)',
                                    background: plan.highlight ? undefined : 'transparent',
                                    color: 'white',
                                    fontWeight: 600,
                                    cursor: plan.price !== '$0' ? 'pointer' : 'default',
                                    transition: 'background 0.3s'
                                }}
                                onMouseOver={(e) => !plan.highlight && plan.price !== '$0' && (e.target.style.background = 'rgba(255,255,255,0.05)')}
                                onMouseOut={(e) => !plan.highlight && plan.price !== '$0' && (e.target.style.background = 'transparent')}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
