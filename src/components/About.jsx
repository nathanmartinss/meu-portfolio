import React from 'react';
import '../styles/About.css';

function About({ isDarkMode }) {
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
              <h1 className="about-title">Sobre Mim</h1>
              <div className="about-intro">
                <p>
                  Meu nome é Nathan Martins, tenho 26 anos e sou de Sorocaba - SP, Brasil.
                </p>
                <p>
                  Atualmente formado e trabalhando (e sempre estudando) com programação para me tornar um desenvolvedor fullstack. Sou apaixonado por tecnologia, inovação e games.
                </p>
                <p>
                  Tenho conhecimento em <span className="tech-highlight">JavaScript</span>, <span className="tech-highlight">React</span>, <span className="tech-highlight">Node.js</span>, e também no trabalho uso tecnologias como <span className="tech-highlight">Typescript</span>, <span className="tech-highlight">Nest.js</span> e <span className="tech-highlight">Docker</span>.
                </p>
                <p>
                  Estou sempre em busca de novos desafios e oportunidades para aplicar meus conhecimentos
                  em desenvolvimento de software e contribuir com soluções inovadoras.
                </p>
              </div>
              <div className="about-links">
                <a
                  href="https://github.com/nathanmartinss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-link"
                >
                  GitHub
                  <span className="link-icon">↗</span>
                </a>
                <a
                  href="https://linkedin.com/in/nathanmartinss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-link"
                >
                  LinkedIn
                  <span className="link-icon">↗</span>
                </a>
              </div>
            </div>
          </section>

          {/* Seção de Conhecimentos */}
          <section className="knowledge-section">
            <h2 className="section-title">
              <span className="title-icon">🧠</span>
              Conhecimentos
            </h2>

            <div className="knowledge-categories">
              <div className="knowledge-category">
                <h3 className="category-title">Linguagens de Programação</h3>
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
                <h3 className="category-title">Desenvolvimento Web</h3>
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
                <h3 className="category-title">Back-end & Banco de Dados</h3>
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
                <h3 className="category-title">Ferramentas & DevOps</h3>
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
              Experiência
            </h2>

            <div className="experience-timeline">
              <div className="experience-item">
                <div className="experience-period">
                  <span className="period-date">Maio/2025 - Presente</span>
                  <span className="period-duration">Atual</span>
                </div>
                <div className="experience-content">
                  <h3 className="experience-title">Analista de Sistemas Júnior</h3>
                  <span className="experience-company">Nexamed</span>
                  <p className="experience-description">
                    Atuo na modernização de sistemas, desenvolvendo e aprimorando funcionalidades existentes. Participo da correção de bugs, revisão de código e melhoria da documentação técnica, com foco em performance e manutenibilidade do software.
                  </p>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-period">
                  <span className="period-date">Ago/2015 - Abril/2025</span>
                  <span className="period-duration">9 anos e 8 meses</span>
                </div>
                <div className="experience-content">
                  <h3 className="experience-title">Auxiliar de Escritório</h3>
                  <span className="experience-company">Assessoria Contábil Gouvêa</span>
                  <p className="experience-description">
                    Auxiliar na contabilidade, emitindo e gerindo notas fiscais, SPED, DCTF, fechamento de ponto/folha, rescisões, e-Social e aberturas e alteração/encerramento de empresas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção de Formação */}
          <section className="education-section">
            <h2 className="section-title">
              <span className="title-icon">🎓</span>
              Formação
            </h2>

            <div className="education-timeline">
              <div className="education-item">
                <div className="education-period">
                  <span className="period-date">2022 - 2024</span>
                  <span className="period-duration">2 anos e meio</span>
                </div>
                <div className="education-content">
                  <h3 className="education-title">Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
                  <span className="education-institution">Centro Universitário FACENS</span>
                </div>
              </div>
            </div>
          </section>

          {/* Seção de Contato */}
          <section className="contact-section">
            <h2 className="section-title">
              <span className="title-icon">📬</span>
              Contato
            </h2>

            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-info">
                  <span className="contact-icon">📧</span>
                  <span className="contact-label">Email</span>
                </div>
                <a
                  href="mailto:nathanmartinss@icloud.com"
                  className="contact-link"
                >
                  Enviar email
                  <span className="link-icon">↗</span>
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-info">
                  <span className="contact-icon">💻</span>
                  <span className="contact-label">GitHub</span>
                </div>
                <a
                  href="https://github.com/nathanmartinss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Ver perfil
                  <span className="link-icon">↗</span>
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-info">
                  <span className="contact-icon">💼</span>
                  <span className="contact-label">LinkedIn</span>
                </div>
                <a
                  href="https://linkedin.com/in/nathanmartinss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Conectar
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