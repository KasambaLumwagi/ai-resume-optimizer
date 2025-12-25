import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Copy, Check, Lock } from 'lucide-react';

const CoverLetterGenerator = ({ jobDescription, resumeText }) => {
    const [generatedLetter, setGeneratedLetter] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);

        // Mock AI Generation
        setTimeout(() => {
            const date = new Date().toLocaleDateString();
            const letter = `
[Your Name]
[Your Phone Number] | [Your Email]
[Your LinkedIn Profile]

${date}

Hiring Manager
[Company Name (if known)]
[Company Address]

Dear Hiring Manager,

I am writing to express my strong interest in the open position. With my background in [Key Skill extracted from your resume], I am confident in my ability to contribute effectively to your team.

Reflecting on your job description, I see you are looking for someone who can [Key Requirement from JD]. In my previous role, I successfully [Relevant Achievement]. I am eager to bring this same level of dedication and expertise to your organization.

I possess a robust skillset including [Skill 1], [Skill 2], and [Skill 3], which aligns well with the requirements for this role. I am particularly excited about the opportunity to join a forward-thinking team.

Thank you for considering my application. I look forward to the possibility of discussing how my experience and skills can contribute to the success of your team.

Sincerely,

[Your Name]
`;
            setGeneratedLetter(letter.trim());
            setIsGenerating(false);
        }, 1500);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedLetter);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="cover-letter" style={{ padding: '0 1rem 6rem' }}>
            <div className="container glass-panel" style={{ padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}>

                {/* Executive Badge */}
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'linear-gradient(90deg, #ec4899, #8b5cf6)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '99px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                }}>
                    <Lock size={12} fill="white" /> EXECUTIVE FEATURE
                </div>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                        <PenTool color="#ec4899" />
                        AI Cover Letter <span className="text-gradient">Generator</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)' }}>Instantly draft a tailored cover letter based on your resume and the job description.</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating || !jobDescription || !resumeText}
                        className="glow-button"
                        style={{
                            opacity: (!jobDescription || !resumeText) ? 0.5 : 1,
                            cursor: (!jobDescription || !resumeText) ? 'not-allowed' : 'pointer',
                            background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', // Pinker gradient for Executive
                            boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)'
                        }}
                    >
                        {isGenerating ? 'Drafting with AI...' : 'Generate Executive Cover Letter'}
                    </button>
                </div>

                {!jobDescription && !resumeText && (
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        * Enter your details in the analyzer above to unlock this feature.
                    </p>
                )}

                {generatedLetter && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        style={{ position: 'relative' }}
                    >
                        <textarea
                            readOnly
                            value={generatedLetter}
                            style={{
                                width: '100%',
                                minHeight: '400px',
                                background: 'rgba(0,0,0,0.3)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                color: 'var(--text-main)',
                                fontFamily: 'var(--font-sans)',
                                lineHeight: '1.7',
                                resize: 'none'
                            }}
                        />
                        <button
                            onClick={copyToClipboard}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'var(--glass-highlight)',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '0.5rem',
                                cursor: 'pointer',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default CoverLetterGenerator;
