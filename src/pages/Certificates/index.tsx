import React from 'react';
import { certificates } from '../../data/certificates';
import CertificateCard from '../../components/certificates/CertificateCard';

const Certificates: React.FC = () => {
  return (
    <div>
      <div style={styles.header}>
        <h1 className="terminal-text">&gt; system.credentials</h1>
        <p style={styles.headerSubtitle}>Verified certifications and training records.</p>
      </div>

      <div style={styles.list}>
        {certificates.map((cert, index) => (
          <CertificateCard key={cert.filename} certificate={cert} index={index} />
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
    paddingBottom: '2rem',
  }
};

export default Certificates;
