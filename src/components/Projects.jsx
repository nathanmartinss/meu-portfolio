import React from 'react';
import '../styles/Projects.css';
import { useTranslation } from '../hooks/useTranslation';
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
  SiPostgresql,
  SiFigma
} from 'react-icons/si';
import { MdDesktopWindows, MdApi, MdMap } from 'react-icons/md';
import { FaJava } from 'react-icons/fa';

function Projects({ isDarkMode }) {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "TechTree",
      description: t('projects.projectDescriptions.techtree'),
      image: "/images/project/techtree.jpg",
      technologies: ["React", "Node.js", "Java", "PostgreSQL"],
      repository: "https://github.com/ronaldothame/techtree-backend",
      website: null,
      featured: true,
      tags: [t('projects.tags.fullstack'), t('projects.tags.education'), t('projects.tags.visualprogress')]
    },
    {
      id: 2,
      title: "Games Galaxy",
      description: t('projects.projectDescriptions.gamesgalaxy'),
      image: "/images/project/gamesgalaxy.png",
      technologies: ["React", "JavaScript", "CSS"],
      repository: "https://github.com/nathanmartinss/gamesGalaxy",
      website: "https://games-galaxy.vercel.app",
      featured: true,
      tags: [t('projects.tags.ecommerce'), t('projects.tags.react'), t('projects.tags.gaming')]
    },
    {
      id: 3,
      title: "Helpcom",
      description: t('projects.projectDescriptions.helpcom'),
      image: "/images/project/helpcom.png",
      technologies: ["Java", "PostgreSQL", "Desktop"],
      repository: "https://github.com/nathanmartinss/helpcom",
      website: null,
      featured: false,
      tags: [t('projects.tags.desktop'), t('projects.tags.management'), t('projects.tags.bakery')]
    },
    {
      id: 4,
      title: "Accident Track",
      description: t('projects.projectDescriptions.accidenttrack'),
      image: "/images/project/accidenttrack.png",
      technologies: ["JavaScript", "API", "Maps"],
      repository: "https://github.com/nathanmartinss/Accident-Track",
      website: null,
      featured: false,
      tags: [t('projects.tags.emergency'), t('projects.tags.tracking'), t('projects.tags.disasters')]
    },
    {
      id: 5,
      title: "Backend Coderhouse",
      description: t('projects.projectDescriptions.backendcoderhouse'),
      image: "/images/project/backend-coderhouse.png",
      technologies: ["Node.js", "JavaScript", "API"],
      repository: "https://github.com/nathanmartinss/backendCoderhouse",
      website: null,
      featured: false,
      tags: [t('projects.tags.backend'), t('projects.tags.api'), t('projects.tags.nodejs')]
    }
  ];

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
      'Figma': <SiFigma style={{ ...iconStyle, color: isDarkMode ? '#ff6b6b' : '#f24e1e' }} />,
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
                <span>{t('projects.repository')}</span>
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
                <span>{t('projects.website')}</span>
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
          <h1 className="section-title">{t('projects.title')}</h1>
          <p className="section-description">
            {t('projects.description')}
          </p>
        </section>

        {/* Projetos em Destaque */}
        {featuredProjects.length > 0 && (
          <div className="projects-section-featured">
            <h2 className="subsection-title">{t('projects.featured')}</h2>
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
            <h2 className="subsection-title">{t('projects.others')}</h2>
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
            <span>{t('projects.viewMore')}</span>
            <span className="icon">↗</span>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Projects;
