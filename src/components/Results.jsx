import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const Results = ({ results }) => {
    if (!results) return null;

    const { score, missingKeywords, suggestions } = results;

    const getScoreColor = (s) => {
        if (s >= 80) return '#10b981'; // green
        if (s >= 60) return '#f59e0b'; // yellow
        return '#ef4444'; // red
    };

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ paddingBottom: '4rem' }}
        >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* Score Card */}
                <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>ATS Match Score</h3>
                    <div style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        border: `8px solid ${getScoreColor(score)}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        fontWeight: '800',
                        color: 'white',
                        boxShadow: `0 0 30px ${getScoreColor(score)}40`,
                        background: 'rgba(0,0,0,0.2)'
                    }}>
                        {score}%
                    </div>
                    <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
                        {score >= 80 ? 'Excellent! You are ready to apply.' : score >= 60 ? 'Good, but needs some tailored keywords.' : 'Needs significant optimization.'}
                    </p>
                </div>

                {/* Keywords */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <AlertCircle color="#f59e0b" />
                        Missing Keywords
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {missingKeywords.length > 0 ? missingKeywords.map((kw, i) => (
                            <span key={i} style={{
                                background: 'rgba(245, 158, 11, 0.15)',
                                color: '#fbbf24',
                                padding: '0.4rem 0.8rem',
                                borderRadius: '8px',
                                fontSize: '0.9rem',
                                border: '1px solid rgba(245, 158, 11, 0.3)'
                            }}>
                                {kw}
                            </span>
                        )) : (
                            <p style={{ color: 'var(--text-muted)' }}>No critical keywords missing!</p>
                        )}
                    </div>
                    {missingKeywords.length > 0 && (
                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            Tip: Add these exact terms to your Skills or Experience sections.
                        </p>
                    )}
                </div>

                {/* Suggestions */}
                <div className="glass-panel" style={{ padding: '2rem', gridColumn: '1 / -1' }}>
                    <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <CheckCircle color="var(--primary)" />
                        Optimization Suggestions
                    </h3>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {suggestions.map((suggestion, i) => (
                            <div key={i} style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                padding: '1rem',
                                borderRadius: '12px',
                                borderLeft: '4px solid var(--primary)',
                                display: 'flex',
                                gap: '1rem'
                            }}>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>{suggestion.title}</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{suggestion.description}</p>
                                </div>
                            </div>
                        ))}

                        {/* Locked Pro Suggestions */}
                        <div style={{ position: 'relative', marginTop: '1rem' }}>
                            <div style={{ filter: 'blur(4px)', opacity: 0.5, pointerEvents: 'none', userSelect: 'none' }}>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '12px',
                                    borderLeft: '4px solid var(--accent)', display: 'flex', gap: '1rem', marginBottom: '1rem'
                                }}>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Advanced Grammar Check</p>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Found 3 passive voice sentences that should be active.</p>
                                    </div>
                                </div>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '12px',
                                    borderLeft: '4px solid var(--accent)', display: 'flex', gap: '1rem'
                                }}>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Impact Quantification</p>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Resume lacks sufficient numerical metrics.</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{
                                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                textAlign: 'center', width: '100%'
                            }}>
                                <div style={{
                                    background: 'rgba(3, 0, 20, 0.8)', padding: '1.5rem', borderRadius: '16px',
                                    border: '1px solid var(--glass-border)', backdropFilter: 'blur(4px)',
                                    display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'
                                }}>
                                    <p style={{ fontWeight: 600 }}>Unlock 5+ Advanced Insights with Pro</p>
                                    <button
                                        onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                                        className="glow-button"
                                        style={{ fontSize: '0.9rem', padding: '0.5rem 1.5rem' }}
                                    >
                                        Upgrade Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Results;
