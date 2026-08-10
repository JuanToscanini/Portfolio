import { IconType } from 'react-icons';
import { Database, TestTube } from 'lucide-react';
import { FaJava } from 'react-icons/fa6';
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiSpringsecurity,
  SiPostgresql,
  SiMysql,
  SiMariadb,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiRender,
  SiRailway,
  SiNetlify,
  SiGit,
  SiPostman,
  SiJsonwebtokens,
  SiJunit5,
  SiApachemaven,
} from 'react-icons/si';

type Tech = {
  name: string;
  Icon: IconType;
  color: string;
};

type Category = {
  title: string;
  techs: Tech[];
};

const categories: Category[] = [
  {
    title: 'Lenguajes',
    techs: [
      { name: 'Java', Icon: FaJava, color: '#ED8B00' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'SQL', Icon: Database, color: '#38BDF8' },
    ],
  },
  {
    title: 'Frontend',
    techs: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#CBD5E1' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
      { name: 'React Query', Icon: SiReactquery, color: '#FF4154' },
    ],
  },
  {
    title: 'Backend',
    techs: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', Icon: SiExpress, color: '#CBD5E1' },
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Spring Security', Icon: SiSpringsecurity, color: '#6DB33F' },
    ],
  },
  {
    title: 'Bases de datos',
    techs: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'MariaDB', Icon: SiMariadb, color: '#C0765A' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'DevOps / Infraestructura',
    techs: [
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF' },
      { name: 'Vercel', Icon: SiVercel, color: '#CBD5E1' },
      { name: 'Render', Icon: SiRender, color: '#46E3B7' },
      { name: 'Railway', Icon: SiRailway, color: '#CBD5E1' },
      { name: 'Netlify', Icon: SiNetlify, color: '#00C7B7' },
    ],
  },
  {
    title: 'Herramientas',
    techs: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
      { name: 'JWT', Icon: SiJsonwebtokens, color: '#CBD5E1' },
      { name: 'JUnit', Icon: SiJunit5, color: '#25A162' },
      { name: 'Mockito', Icon: TestTube, color: '#78C257' },
      { name: 'Maven', Icon: SiApachemaven, color: '#C71A36' },
    ],
  },
];

export default function Tecnologias() {
  return (
    <div id="tecnologias" className="pt-48 pb-32" style={{ backgroundColor: '#141E22' }}>
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Title outside the rectangle */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-16 sm:mb-20 text-center" style={{ color: '#CBD5E1' }}>Tecnologías</h2>

        {/* Grid of category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-lg shadow-lg relative overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'rgba(20, 30, 34, 0.4)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
              }}
            >
              {/* Subtle radial patterns for visual interest */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(125, 211, 252, 0.05) 0%, transparent 50%)
                `,
              }}></div>

              {/* Glass blur overlay */}
              <div className="absolute inset-0 backdrop-blur-sm" style={{
                background: 'linear-gradient(135deg, rgba(30, 48, 53, 0.2), rgba(20, 30, 34, 0.1))'
              }}></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#CBD5E1' }}>{category.title}</h3>

                <div className="flex-1 flex flex-wrap content-center justify-center gap-3">
                  {category.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,200,0.15)] transition-all duration-300 w-[calc((100%-1.5rem)/3)] sm:w-[calc((100%-2.25rem)/4)]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(30, 48, 53, 0.9), rgba(20, 30, 34, 0.8))',
                        borderColor: '#94A3B8',
                        aspectRatio: '1 / 1',
                      }}
                    >
                      <tech.Icon size={28} color={tech.color} />
                      <span className="text-[10px] font-medium text-center leading-tight" style={{ color: '#CBD5E1' }}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
