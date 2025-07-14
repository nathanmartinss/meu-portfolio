import React from 'react';
import '../styles/Projects.css';
// Importar ícones das tecnologias
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiCss3,
  SiDocker,
  SiNestjs,
  SiPostgresql
} from 'react-icons/si';
import { MdDesktopWindows, MdApi, MdMap } from 'react-icons/md';
import { FaJava } from 'react-icons/fa';

function Projects({ isDarkMode }) {
  const projects = [
    {
      id: 1,
      title: "TechTree",
      description: "TechTree é uma empresa de tecnologia que oferece cursos focados na área de tecnologia, onde os usuários podem acompanhar seu progresso e ser recompensados visualmente por isso.",
      image: "/images/project/techtree.jpg",
      technologies: ["React", "Node.js", "Java", "PostgreSQL"],
      repository: "https://github.com/ronaldothame/techtree-backend",
      website: null,
      featured: true,
      tags: ["Full Stack", "Educação", "Progresso Visual"]
    },
    {
      id: 2,
      title: "Games Galaxy",
      description: "Games Galaxy é um projeto desenvolvido como parte do curso Coderhouse. Este projeto é uma plataforma de e-commerce focada em produtos de jogos, desenvolvida inteiramente em React.",
      image: "/images/project/gamesgalaxy.png",
      technologies: ["React", "JavaScript", "CSS"],
      repository: "https://github.com/nathanmartinss/gamesGalaxy",
      website: "https://games-galaxy.vercel.app",
      featured: true,
      tags: ["E-commerce", "React", "Gaming"]
    },
    {
      id: 3,
      title: "Helpcom",
      description: "Helpcom visa auxiliar pequenos empresários do setor de confeitaria, ajudando com precificação, controle de estoque e oferecendo uma solução acessível comparada a outros programas.",
      image: "/images/project/helpcom.png",
      technologies: ["Java", "PostgreSQL", "Desktop"],
      repository: "https://github.com/nathanmartinss/helpcom",
      website: null,
      featured: false,
      tags: ["Desktop App", "Gestão", "Confeitaria"]
    },
    {
      id: 4,
      title: "Themis Penna",
      description: "Nosso projeto é um fórum especializado em fornecer suporte para mulheres vítimas de violência doméstica. Nosso objetivo é reunir outras mulheres que passaram por violência psicológica e/ou física para ajudar aquelas que estão passando por isso atualmente.",
      image: "/images/project/themis.png",
      technologies: ["React", "Node.js", "MongoDB"],
      repository: "https://github.com/ronaldothame/ThemisPenna",
      website: null,
      featured: false,
      tags: ["Social Impact", "Forum", "Suporte"]
    },
    {
      id: 5,
      title: "Accident Track",
      description: "Accident Track foi desenvolvido para ajudar os usuários a relatar, rastrear e visualizar incidentes como incêndios florestais, inundações e outros desastres naturais.",
      image: "/images/project/accidenttrack.png",
      technologies: ["JavaScript", "API", "Maps"],
      repository: "https://github.com/nathanmartinss/Accident-Track",
      website: null,
      featured: false,
      tags: ["Emergência", "Tracking", "Desastres"]
    },
    {
      id: 6,
      title: "Backend Coderhouse",
      description: "Projeto backend desenvolvido durante o curso Coderhouse, focado em APIs RESTful, autenticação, middleware e boas práticas de desenvolvimento backend com Node.js.",
      image: "/images/project/backend-coderhouse.png",
      technologies: ["Node.js", "JavaScript", "API"],
      repository: "https://github.com/nathanmartinss/backendCoderhouse",
      website: null,
      featured: false,
      tags: ["Backend", "API", "Node.js"]
    }
  ];

  // Separar projetos em categorias
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  // Ícones para tecnologias usando React Icons
  const getTechIcon = (tech) => {
    const iconStyle = {
      fontSize: '1.5rem',
      color: isDarkMode ? '#9ca3af' : '#374151'
    };

    const icons = {
      'React': <SiReact style={{ ...iconStyle, color: isDarkMode ? '#4a9eff' : '#61dafb' }} />,
      'Node.js': <SiNodedotjs style={{ ...iconStyle, color: isDarkMode ? '#68cc68' : '#339933' }} />,
      'JavaScript': <SiJavascript style={{ ...iconStyle, color: isDarkMode ? '#f7df1e' : '#f7df1e' }} />,
      'TypeScript': <SiTypescript style={{ ...iconStyle, color: isDarkMode ? '#5ba7f7' : '#3178c6' }} />,
      'Java': <FaJava style={{ ...iconStyle, color: isDarkMode ? '#f89500' : '#ed8b00' }} />,
      'MySQL': <SiMysql style={{ ...iconStyle, color: isDarkMode ? '#6ba3d6' : '#4479a1' }} />,
      'MongoDB': <SiMongodb style={{ ...iconStyle, color: isDarkMode ? '#6ab04c' : '#47a248' }} />,
      'PostgreSQL': <SiPostgresql style={{ ...iconStyle, color: isDarkMode ? '#5dade2' : '#336791' }} />,
      'CSS': <SiCss3 style={{ ...iconStyle, color: isDarkMode ? '#5dade2' : '#1572b6' }} />,
      'Docker': <SiDocker style={{ ...iconStyle, color: isDarkMode ? '#5dade2' : '#2496ed' }} />,
      'Nest.js': <SiNestjs style={{ ...iconStyle, color: isDarkMode ? '#ff6b9d' : '#e0234e' }} />,
      'Desktop': <MdDesktopWindows style={iconStyle} />,
      'API': <MdApi style={iconStyle} />,
      'Maps': <MdMap style={iconStyle} />
    };

    return icons[tech] || <span style={iconStyle}>🔧</span>;
  };

  const ProjectCard = ({ project, variant = 'full' }) => {
    const isCompact = variant === 'compact';

    return (
      <div className={`project-card ${isCompact ? 'compact' : 'full'}`}>
        {project.image && !isCompact && (
          <div className="project-image">
            <img
              src={project.image}
              alt={`Screenshot do projeto ${project.title}`}
              onError={(e) => {
                const bgColor = isDarkMode ? '%231e2122' : '%23f3f4f6';
                const textColor = isDarkMode ? '%239ca3af' : '%236b7280';
                e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='${bgColor}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter' font-size='16' fill='${textColor}'%3E${project.title}%3C/text%3E%3C/svg%3E`;
                e.target.style.objectFit = 'contain';
              }}
              loading="lazy"
            />
          </div>
        )}

        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-technologies">
              {project.technologies.slice(0, isCompact ? 3 : 4).map((tech, index) => (
                <span key={index} className="tech-icon" title={tech}>
                  {getTechIcon(tech)}
                </span>
              ))}
            </div>
          </div>

          <p className="project-description">
            {isCompact ? `${project.description.substring(0, 120)}...` : project.description}
          </p>

          {!isCompact && (
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="project-actions">
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-source"
              >
                <span>Repositório</span>
                <span className="icon">📦</span>
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-website"
              >
                <span>Website</span>
                <span className="icon">🌐</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="projects-container">
      <div className="projects-content">
        <section className="projects-header">
          <h1 className="section-title">Meus Projetos</h1>
          <p className="section-description">
            Aqui estão alguns dos projetos que desenvolvi durante minha jornada acadêmica e profissional.
            Cada projeto representa diferentes desafios técnicos e oportunidades de aprendizado,
            abrangendo desde aplicações web até sistemas desktop e soluções de impacto social.
          </p>
        </section>

        {/* Projetos em Destaque */}
        {featuredProjects.length > 0 && (
          <div className="projects-section-featured">
            <h2 className="subsection-title">Projetos em Destaque</h2>
            <div className="projects-grid featured">
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} variant="full" />
              ))}
            </div>
          </div>
        )}

        {/* Outros Projetos */}
        {otherProjects.length > 0 && (
          <div className="projects-section-others">
            <h2 className="subsection-title">Outros Projetos</h2>
            <div className="projects-grid others">
              {otherProjects.map(project => (
                <ProjectCard key={project.id} project={project} variant="compact" />
              ))}
            </div>
          </div>
        )}

        {/* Link para GitHub */}
        <div className="projects-footer">
          <a
            href="https://github.com/nathanmartinss"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <span>Ver mais projetos no GitHub</span>
            <span className="icon">↗</span>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Projects;
