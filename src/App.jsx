import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OptimizationForm from './components/OptimizationForm';
import Results from './components/Results';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import CoverLetterGenerator from './components/CoverLetterGenerator';

const App = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setResults(null);

    // Simulate AI Analysis
    setTimeout(() => {
      const jd = jobDescription.toLowerCase();
      const resume = resumeText.toLowerCase();

      // Simple common keyword extraction (Mock AI)
      const commonKeywords = [
        'react', 'javascript', 'python', 'typescript', 'aws', 'docker', 'kubernetes',
        'sql', 'nosql', 'communication', 'leadership', 'agile', 'scrum', 'html', 'css',
        'node', 'express', 'django', 'flask', 'machine lerning', 'ai', 'data analysis',
        'project management', 'git', 'ci/cd'
      ];

      // Find keywords present in JD
      const targetKeywords = commonKeywords.filter(kw => jd.includes(kw));

      // If no standard keywords found, pick some longer words as fallback mock
      if (targetKeywords.length === 0) {
        // Just mock some
        targetKeywords.push('experience', 'skills', 'development');
      }

      // Check which are missing in Resume
      const missing = targetKeywords.filter(kw => !resume.includes(kw));
      const present = targetKeywords.length - missing.length;

      const score = Math.round((present / (targetKeywords.length || 1)) * 100);

      const suggestions = [];

      if (score < 100) {
        suggestions.push({
          title: 'Keyword Gap',
          description: `You are missing ${missing.length} important keywords found in the job description. Adding these can significantly boost your ATS score.`
        });
      }

      if (resumeText.split(' ').length < 200) {
        suggestions.push({
          title: 'Content Length',
          description: 'Your resume seems a bit short. Aim for 400-600 words to fully describe your achievements.'
        });
      }

      if (!resume.includes('impact') && !resume.includes('achieved') && !resume.includes('increased')) {
        suggestions.push({
          title: 'Action Verbs',
          description: 'Try using strong action verbs like "Achieved", "Increased", or "Developed" to make your bullet points more impactful.'
        });
      }

      // Logic Improvements:
      // 1. Quantification Check
      if (!/\d+%|\d+x|\$\d+/.test(resume)) {
        suggestions.push({
          title: 'Quantify Impact',
          description: 'Recruiters love numbers. Try to include metrics like "Increased sales by 20%" or "Managed $50k budget".'
        });
      }

      // 2. Contact Info Check
      if (!/@/.test(resume) && !/\d{3}[-.]?\d{3}[-.]?\d{4}/.test(resume)) {
        suggestions.push({
          title: 'Missing Contact Info',
          description: 'We couldn\'t find an email or phone number. Make sure your contact details are clearly visible.'
        });
      }

      // 3. Section Headers Check
      if (!resume.includes('experience') || !resume.includes('education')) {
        suggestions.push({
          title: 'Section Structure',
          description: 'Standard sections like "Experience" and "Education" allow ATS parsers to categorize your data correctly.'
        });
      }

      // Formatting suggestion
      suggestions.push({
        title: 'Formatting Check',
        description: 'Ensure you are using standard bullet points and clear section headers for best parsing.'
      });

      setResults({
        score: Math.max(20, score), // Min score 20 for morale
        missingKeywords: missing,
        suggestions: suggestions
      });

      setIsAnalyzing(false);

      // robust scroll
      setTimeout(() => {
        const resultsEl = document.querySelector('.results-container');
        if (resultsEl) resultsEl.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 800, behavior: 'smooth' });
      }, 100);

    }, 2000);
  };

  return (
    <div className="app-container">
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(circle at 50% 10%, #1e1b4b 0%, #020617 100%)',
        zIndex: -1
      }} />

      <Navbar />

      <main style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <Hero />

        <OptimizationForm
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          resumeText={resumeText}
          setResumeText={setResumeText}
          onAnalyze={handleAnalyze}
          isAnalyzing={isAnalyzing}
        />

        {results && (
          <div className="results-container">
            <Results results={results} />
          </div>
        )}

        {results && (
          <CoverLetterGenerator
            jobDescription={jobDescription}
            resumeText={resumeText}
          />
        )}

        <HowItWorks />
        <Pricing />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-muted)',
        borderTop: '1px solid var(--glass-border)',
        marginTop: 'auto'
      }}>
        <p>&copy; 2025 AI Resume Optimizer. Built with React & Vite.</p>
      </footer>
    </div>
  );
};

export default App;
