import React from 'react';
import '../../Styles/AboutUs.css';
import { Users, Briefcase, Building2, CheckCircle, Globe, Rocket } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { label: 'Active Jobs', value: '12,000+', icon: <Briefcase /> },
    { label: 'Companies', value: '450+', icon: <Building2 /> },
    { label: 'Candidates', value: '80,000+', icon: <Users /> },
    { label: 'Placements', value: '15,000+', icon: <CheckCircle /> },
  ];

  const values = [
    {
      title: "Quality Matching",
      description: "We use AI-driven algorithms to ensure candidates are matched with roles that fit their skills and culture.",
      icon: <Rocket />
    },
    {
      title: "Global Reach",
      description: "Connecting talent across borders. Whether you want to work remotely or relocate, we have options.",
      icon: <Globe />
    },
    {
      title: "Verified Employers",
      description: "Every company on our platform is vetted to ensure a safe and legitimate job-seeking experience.",
      icon: <CheckCircle />
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Empowering Careers, Building Futures</h1>
          <p>We are more than just a job board. We are a bridge between ambitious talent and the world’s most innovative companies.</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container story-flex">
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
              alt="Our Team" 
            />
          </div>
          <div className="story-content">
            <h2>Our Story</h2>
            <p>Founded in 2024, our portal was born out of a simple frustration: the job market was too noisy. We wanted to create a space where talent is recognized by skill, not just keywords.</p>
            <p>Today, we serve thousands of users daily, helping developers, designers, and managers find their "forever roles".</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to start your journey?</h2>
            <p>Join thousands of others who found their dream job today.</p>
            <div className="cta-btns">
              <button className="btn-primary">Browse Jobs</button>
              <button className="btn-outline">Hire Talent</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;