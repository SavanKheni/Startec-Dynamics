import React from 'react';
import { Cpu, Cloud, Link } from 'lucide-react';

const Capabilities = () => {
  const capabilities = [
    {
      icon: <Cpu size={32} />,
      title: 'Advanced AI',
      description: 'Self-evolving neural networks driving autonomous decision making and processing.'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Core',
      description: 'Distributed architecture ensuring 99.99% uptime and global scalability for complex systems.'
    },
    {
      icon: <Link size={32} />,
      title: 'SI Connect',
      description: 'Seamless integration layer bridging legacy hardware with modern digital twins.'
    }
  ];

  return (
    <section id="about" className="capabilities">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">CORE CAPABILITIES</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="cap-grid">
          {capabilities.map((cap, index) => (
            <div key={index} className="cap-card glass reveal" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="cap-icon">{cap.icon}</div>
              <h3 className="cap-card-title">{cap.title}</h3>
              <p className="cap-card-desc">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .capabilities {
          position: relative;
          background: radial-gradient(circle at top right, rgba(157, 0, 255, 0.05), transparent 40%);
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title {
          font-size: 32px;
          letter-spacing: 4px;
          color: var(--secondary);
        }
        .section-line {
          width: 60px;
          height: 3px;
          background: var(--gradient-primary);
          margin: 16px auto;
        }
        .cap-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .cap-card {
          padding: 40px;
          transition: var(--transition-smooth);
          position: relative;
          overflow: hidden;
        }
        .cap-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .cap-icon {
          color: var(--primary);
          margin-bottom: 24px;
        }
        .cap-card-title {
          font-size: 24px;
          margin-bottom: 16px;
        }
        .cap-card-desc {
          color: var(--text-muted);
          font-size: 16px;
        }
      `}</style>
    </section>
  );
};

export default Capabilities;
