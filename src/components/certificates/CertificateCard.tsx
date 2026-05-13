import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Certificate } from '../../data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imagePath = `/certificates/${certificate.filename}-1.png`;
  const pdfPath = `/certificates/${certificate.filename}.pdf`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="terminal-card"
      style={{ padding: '1.5rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
            {certificate.title}
          </h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{certificate.description}</p>
        </div>
        
        <button
          className="btn"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ whiteSpace: 'nowrap' }}
        >
          {isExpanded ? 'Hide Preview' : 'View Certificate'}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: '1.5rem' }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {!imageError ? (
                <img
                  src={imagePath}
                  alt={`${certificate.title} Preview`}
                  onError={() => setImageError(true)}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow)',
                    display: 'block'
                  }}
                />
              ) : (
                <div style={{ padding: '2rem', textAlign: 'center', border: '1px dashed var(--border-color)', borderRadius: '8px', color: 'var(--text-color)', opacity: 0.7 }}>
                  [ Image preview not available ]
                </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Open PDF
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CertificateCard;
