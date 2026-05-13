import React from 'react';
import HomeHero from './components/HomeHero';
import HomeMainLeft from './components/HomeMainLeft';
import HomeSidebarRight from './components/HomeSidebarRight';

const Home: React.FC = () => {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      
      {/* 1. Hero Section */}
      <HomeHero />
      
      {/* 2. Main Body (2-Column Layout) */}
      <div className="home-dashboard-grid">
        <div className="home-left-panel">
          <HomeMainLeft />
        </div>
        <div className="home-right-panel">
          <HomeSidebarRight />
        </div>
      </div>

      <style>{`
        .home-dashboard-grid {
          display: grid;
          grid-template-columns: 7fr 3fr;
          gap: 3rem;
          align-items: start;
        }

        @media (max-width: 900px) {
          .home-dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
