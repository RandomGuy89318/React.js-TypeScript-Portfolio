import React from 'react';
import { personalInfo } from '../../../data/personalInfo';
import LiveClock from '../../../components/ui/LiveClock';

const HomeHeader: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: 'var(--card-bg)',
      borderBottom: '1px solid var(--border-color)',
      borderRadius: '8px 8px 0 0',
      marginBottom: '1.5rem',
      boxShadow: 'var(--shadow)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--accent-primary)' }}>
          {personalInfo.name}
        </h2>
        <span style={{ opacity: 0.6, fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
          // System Online / Developer Mode
        </span>
      </div>
      <div>
        <LiveClock />
      </div>
    </div>
  );
};

export default HomeHeader;
