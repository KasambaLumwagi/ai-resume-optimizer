import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Briefcase, Sparkles, Loader2 } from 'lucide-react';

const OptimizationForm = ({
    jobDescription,
    setJobDescription,
    resumeText,
    setResumeText,
    onAnalyze,
    isAnalyzing
}) => {
    return (
        <motion.div
            className="glass-panel container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ padding: '2rem', marginBottom: '4rem' }}
        >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div className="input-group">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Briefcase size={16} color="var(--primary)" />
                        Job Description
                    </label>
                    <textarea
                        placeholder="Paste the job description here..."
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FileText size={16} color="var(--accent)" />
                        Your Resume
                    </label>
                    <textarea
                        placeholder="Paste your resume content here..."
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                    />
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <button
                    className="glow-button"
                    onClick={onAnalyze}
                    disabled={isAnalyzing || !jobDescription || !resumeText}
                    style={{
                        opacity: (!jobDescription || !resumeText) ? 0.5 : 1,
                        cursor: (!jobDescription || !resumeText) ? 'not-allowed' : 'pointer',
                        padding: '1rem 3rem',
                        fontSize: '1.1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                    }}
                >
                    {isAnalyzing ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            Analyzing...
                        </>
                    ) : (
                        <>
                            <Sparkles size={20} />
                            Optimize Resume
                        </>
                    )}
                </button>
            </div>
        </motion.div>
    );
};

export default OptimizationForm;
