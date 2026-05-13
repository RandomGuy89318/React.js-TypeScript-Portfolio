import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { personalInfo } from '../../data/personalInfo';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const contactInfo = [
    { 
      label: 'EMAIL', 
      value: personalInfo.email, 
      icon: '✉',
      actionLabel: 'SEND_EMAIL',
      href: `mailto:${personalInfo.email}`
    },
    { 
      label: 'GITHUB', 
      value: personalInfo.github, 
      icon: '⌨',
      actionLabel: 'VIEW_GITHUB',
      href: personalInfo.github.startsWith('http') ? personalInfo.github : `https://github.com/${personalInfo.github}`
    },
    { 
      label: 'RESUME', 
      value: personalInfo.resumePath, 
      icon: '📄',
      actionLabel: 'DOWNLOAD_RESUME',
      href: personalInfo.resumePath,
      isDownload: true
    },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div>
      <div style={styles.header}>
        <h1 className="terminal-text">&gt; connect.remote</h1>
        <p style={styles.headerSubtitle}>Initiate a direct connection or view social nodes.</p>
      </div>

      <div style={styles.grid}>
        {contactInfo.map((info, i) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="terminal-card"
            style={styles.card}
          >
            <div style={styles.label}>{info.icon} {info.label}</div>
            <div style={styles.value}>{info.value}</div>
            
            <div style={styles.buttonContainer}>
              <a 
                href={info.href}
                target={!info.isDownload ? "_blank" : undefined}
                rel={!info.isDownload ? "noopener noreferrer" : undefined}
                download={info.isDownload ? "Resume.pdf" : undefined}
                className="btn"
                style={{ fontSize: '0.8rem', padding: '0.6rem 1rem' }}
              >
                [ {info.actionLabel} ]
              </a>
              <button 
                onClick={() => handleCopy(info.value, info.label)}
                style={styles.copyBtn}
              >
                {copied === info.label ? '[ COPIED! ]' : '[ COPY_TO_CLIPBOARD ]'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={styles.footer}
      >
        <p className="mono">SYSTEM_STATUS: ONLINE</p>
        <p className="mono">LOCATION: REMOTE_NODE</p>
      </motion.div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    marginBottom: '3rem',
  },
  headerSubtitle: {
    opacity: 0.6,
    marginTop: '0.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1000px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: '0.8rem',
    color: 'var(--accent-secondary)',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-mono)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  value: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    wordBreak: 'break-all',
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    alignItems: 'center',
    marginTop: 'auto',
  },
  copyBtn: {
    color: 'var(--accent-primary)',
    fontSize: '0.8rem',
    padding: '0.5rem 0',
    fontWeight: 'bold',
    fontFamily: 'var(--font-mono)',
  },
  footer: {
    marginTop: '4rem',
    opacity: 0.4,
    fontSize: '0.8rem',
    display: 'flex',
    gap: '2rem',
  }
};

export default Contact;
