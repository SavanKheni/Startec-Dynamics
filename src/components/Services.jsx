import React from 'react';
import { Cpu, Globe, Zap, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cpu size={24} />,
      title: 'AI Processing',
      description: 'Edge-based intelligence for instant decision making.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Mesh',
      description: 'Decentralized network for foolproof data redundancy.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Quantum Compute',
      description: 'Next-gen processing power for complex simulations.'
    },
    {
      icon: <Database size={24} />,
      title: 'Data Vault',
      description: 'Ultra-secure, immutable storage for critical assets.'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">OUR SERVICES</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass reveal" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="service-icon-bg">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services {
          padding-bottom: 150px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }
        .service-card {
          padding: 32px;
          text-align: center;
          transition: var(--transition-smooth);
        }
        .service-card:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: translateY(-5px);
        }
        .service-icon-bg {
          width: 50px;
          height: 50px;
          background: rgba(157, 0, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: var(--primary);
        }
        .service-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }
        .service-card p {
          color: var(--text-muted);
          font-size: 14px;
        }
      `}</style>
    </section>
  );
};

export default Services;
