import React from 'react';
import { motion } from 'framer-motion';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Advanced TypeScript",
      issuer: "Academy of Code",
      date: "2023",
      image: "/src/assets/cert-1.svg"
    },
    {
      id: 2,
      title: "React Performance Engineering",
      issuer: "Frontend Masters",
      date: "2024",
      image: "/src/assets/cert-2.svg"
    }
  ];

  return (
    <div>
      <div style={styles.header}>
        <h1 className="terminal-text">&gt; system.credentials</h1>
        <p style={styles.headerSubtitle}>Verified certifications and training records.</p>
      </div>

      <div style={styles.list}>
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            style={styles.certItem}
          >
            <div style={styles.certContent}>
              <h3 style={styles.certTitle}>{cert.title}</h3>
              <p style={styles.certIssuer}>{cert.issuer} // {cert.date}</p>
            </div>
            <div style={styles.certLink}>
              <span className="mono">[ VERIFIED ]</span>
            </div>
          </motion.div>
        ))}
      </div>
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
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  certItem: {
    border: '1px solid var(--border-color)',
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--card-bg)',
    borderRadius: '4px',
  },
  certContent: {
    flexGrow: 1,
  },
  certTitle: {
    fontSize: '1.2rem',
    color: 'var(--accent-primary)',
    marginBottom: '0.5rem',
  },
  certIssuer: {
    fontSize: '0.9rem',
    opacity: 0.7,
    fontFamily: 'var(--font-mono)',
  },
  certLink: {
    color: 'var(--accent-secondary)',
    fontSize: '0.8rem',
  }
};

export default Certificates;
