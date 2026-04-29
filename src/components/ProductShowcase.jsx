import React from 'react';
import { Layout, Shield, Gauge, Activity } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section id="products" className="product-showcase">
      <div className="container">
        <div className="showcase-content">
          <div className="showcase-text reveal">
            <h2 className="section-title">INTELLIGENT FLEET MANAGEMENT</h2>
            <p className="showcase-desc">
              Real-time monitoring and predictive maintenance for your global asset fleet. 
              Our dashboard provides unparalleled insights into performance and health.
            </p>
            <ul className="feature-list">
              <li><Activity size={20} /> Real-time Telemetry</li>
              <li><Gauge size={20} /> Predictive Analytics</li>
              <li><Shield size={20} /> Encrypted Data Flux</li>
            </ul>
          </div>
          
          <div className="showcase-visual reveal" style={{ animationDelay: '0.3s' }}>
            <div className="dashboard-mockup glass">
              <div className="dashboard-header">
                <div className="dash-dots"><span></span><span></span><span></span></div>
                <div className="dash-title">Fleet Dashboard v2.4</div>
              </div>
              <div className="dashboard-body">
                <div className="dash-sidebar">
                  <div className="sidebar-item active"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                </div>
                <div className="dash-main">
                  <div className="dash-grid">
                    <div className="dash-card">
                      <div className="dash-card-title">Live Status</div>
                      <div className="dash-chart-placeholder"></div>
                    </div>
                    <div className="dash-card">
                      <div className="dash-card-title">Efficiency</div>
                      <div className="dash-chart-placeholder-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="visual-glow"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-showcase {
          background: linear-gradient(180deg, var(--bg-dark) 0%, rgba(157, 0, 255, 0.05) 50%, var(--bg-dark) 100%);
        }
        .showcase-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .showcase-text {
          max-width: 500px;
        }
        .showcase-desc {
          margin: 24px 0 32px;
          color: var(--text-muted);
          font-size: 18px;
        }
        .feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .feature-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          color: var(--secondary);
        }
        
        .showcase-visual {
          position: relative;
        }
        .dashboard-mockup {
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          padding: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }
        .dashboard-header {
          height: 30px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          padding: 0 16px;
          gap: 20px;
        }
        .dash-dots {
          display: flex;
          gap: 6px;
        }
        .dash-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }
        .dash-title {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
        }
        .dashboard-body {
          flex: 1;
          display: flex;
        }
        .dash-sidebar {
          width: 60px;
          border-right: 1px solid var(--glass-border);
          padding: 20px 15px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .sidebar-item {
          width: 100%;
          height: 30px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
        }
        .sidebar-item.active {
          background: var(--primary);
        }
        .dash-main {
          flex: 1;
          padding: 20px;
        }
        .dash-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          height: 100%;
        }
        .dash-card {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 15px;
          display: flex;
          flex-direction: column;
        }
        .dash-card-title {
          font-size: 12px;
          margin-bottom: 10px;
          color: var(--text-muted);
        }
        .dash-chart-placeholder {
          flex: 1;
          background: linear-gradient(90deg, var(--primary) 0%, transparent 80%);
          mask-image: linear-gradient(transparent, black);
          border-radius: 4px;
          opacity: 0.2;
        }
        .dash-chart-placeholder-2 {
          flex: 1;
          background: linear-gradient(90deg, var(--secondary) 0%, transparent 80%);
          mask-image: repeating-linear-gradient(45deg, black 0, black 1px, transparent 1px, transparent 5px);
          border-radius: 4px;
          opacity: 0.2;
        }
        .visual-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: var(--primary);
          filter: blur(100px);
          opacity: 0.1;
          z-index: -1;
        }
        @media (max-width: 968px) {
          .showcase-content { grid-template-columns: 1fr; }
          .showcase-text { max-width: 100%; text-align: center; }
          .feature-list { align-items: center; }
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;
