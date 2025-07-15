import React from 'react';
import '../styles/About.css';
import { useTranslation } from '../hooks/useTranslation';

function About({ isDarkMode }) {
  const { t } = useTranslation();
  
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <div className="about-container">
          {/* Seção Principal */}
          <section className="about-hero">
            <div className="about-image">
              <img
                src="/images/about/profile.jpeg"
                alt="Nathan Martins"
                onError={(e) => {
                  const bgColor = isDarkMode ? '%231e2122' : '%23f3f4f6';
                  const textColor = isDarkMode ? '%239ca3af' : '%236b7280';
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='${bgColor}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='14' fill='${textColor}'%3ENathan%3C/text%3E%3C/svg%3E`;
                  e.target.style.objectFit = 'contain';
                }}
              />
            </div>
            <div className="about-content">
              <h1 className="about-title">{t('about.title')}</h1>
              <div className="about-intro">
                <p>
                  {t('about.personalInfo.name')}
                </p>
                <p>
                  {t('about.personalInfo.current')}
                </p>
                <p>
                  {t('about.personalInfo.technologies')}
                </p>
                <p>
                  {t('about.personalInfo.goals')}
                </p>
              </div>
              <div className="about-links">
                <a
                  href="https://github.com/nathanmartinss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-link"
                >
                  {t('about.links.github')}
                  <span className="link-icon">↗</span>
                </a>
                <a
                  href="https://linkedin.com/in/nathanmartinss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-link"
                >
                  {t('about.links.linkedin')}
                  <span className="link-icon">↗</span>
                </a>
              </div>
            </div>
          </section>

          {/* Seção de Conhecimentos */}
          <section className="knowledge-section">
            <h2 className="section-title">
              <span className="title-icon">🧠</span>
              {t('about.skillsSection.title')}
            </h2>

            <div className="knowledge-categories">
              <div className="knowledge-category">
                <h3 className="category-title">{t('about.skillsSection.categories.programming')}</h3>
                <div className="skills-grid">
                  <div className="skill-item main-stack">
                    <span className="skill-name">JavaScript</span>
                  </div>
                  <div className="skill-item main-stack">
                    <span className="skill-name">TypeScript</span>
                  </div>
                  <div className="skill-item experienced">
                    <span className="skill-name">Java</span>
                  </div>
                </div>
              </div>

              <div className="knowledge-category">
                <h3 className="category-title">{t('about.skillsSection.categories.web')}</h3>
                <div className="skills-grid">
                  <div className="skill-item main-stack">
                    <span className="skill-name">React</span>
                  </div>
                  <div className="skill-item experienced">
                    <span className="skill-name">HTML5</span>
                  </div>
                  <div className="skill-item experienced">
                    <span className="skill-name">CSS3</span>
                  </div>
                </div>
              </div>

              <div className="knowledge-category">
                <h3 className="category-title">{t('about.skillsSection.categories.backend')}</h3>
                <div className="skills-grid">
                  <div className="skill-item main-stack">
                    <span className="skill-name">Node.js</span>
                  </div>
                  <div className="skill-item experienced">
                    <span className="skill-name">MySQL</span>
                  </div>
                  <div className="skill-item experienced">
                    <span className="skill-name">MongoDB</span>
                  </div>
                  <div className="skill-item experienced">
                    <span className="skill-name">PostgreSQL</span>
                  </div>
                </div>
              </div>

              <div className="knowledge-category">
                <h3 className="category-title">{t('about.skillsSection.categories.tools')}</h3>
                <div className="skills-grid">
                  <div className="skill-item main-stack">
                    <span className="skill-name">Git</span>
                  </div>
                  <div className="skill-item experienced">
                    <span className="skill-name">Docker</span>
                  </div>
                  <div className="skill-item experienced">
                    <span className="skill-name">Nest.js</span>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Seção de Experiência */}
          <section className="experience-section">
            <h2 className="section-title">
              <span className="title-icon">💼</span>
              {t('about.experience.title')}
            </h2>

            <div className="experience-timeline">
              <div className="experience-item">
                <div className="experience-period">
                  <span className="period-date">{t('about.experience.current.period')}</span>
                  <span className="period-duration">{t('about.experience.current.duration')}</span>
                </div>
                <div className="experience-content">
                  <h3 className="experience-title">{t('about.experience.current.position')}</h3>
                  <span className="experience-company">{t('about.experience.current.company')}</span>
                  <p className="experience-description">
                    {t('about.experience.current.description')}
                  </p>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-period">
                  <span className="period-date">{t('about.experience.previous.period')}</span>
                  <span className="period-duration">{t('about.experience.previous.duration')}</span>
                </div>
                <div className="experience-content">
                  <h3 className="experience-title">{t('about.experience.previous.position')}</h3>
                  <span className="experience-company">{t('about.experience.previous.company')}</span>
                  <p className="experience-description">
                    {t('about.experience.previous.description')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção de Formação */}
          <section className="education-section">
            <h2 className="section-title">
              <span className="title-icon">🎓</span>
              {t('about.education.title')}
            </h2>

            <div className="education-timeline">
              <div className="education-item">
                <div className="education-period">
                  <span className="period-date">{t('about.education.period')}</span>
                  <span className="period-duration">{t('about.education.duration')}</span>
                </div>
                <div className="education-content">
                  <h3 className="education-title">{t('about.education.degree')}</h3>
                  <span className="education-institution">{t('about.education.institution')}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Seção de Contato */}
          <section className="contact-section">
            <h2 className="section-title">
              <span className="title-icon">📬</span>
              {t('about.contactSection.title')}
            </h2>

            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-info">
                  <span className="contact-icon">📧</span>
                  <span className="contact-label">{t('about.contactSection.email.label')}</span>
                </div>
                <a
                  href="mailto:nathanmartinss@icloud.com"
                  className="contact-link"
                >
                  {t('about.contactSection.email.action')}
                  <span className="link-icon">↗</span>
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-info">
                  <span className="contact-icon">💻</span>
                  <span className="contact-label">{t('about.contactSection.github.label')}</span>
                </div>
                <a
                  href="https://github.com/nathanmartinss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {t('about.contactSection.github.action')}
                  <span className="link-icon">↗</span>
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-info">
                  <span className="contact-icon">💼</span>
                  <span className="contact-label">{t('about.contactSection.linkedin.label')}</span>
                </div>
                <a
                  href="https://linkedin.com/in/nathanmartinss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {t('about.contactSection.linkedin.action')}
                  <span className="link-icon">↗</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default About;