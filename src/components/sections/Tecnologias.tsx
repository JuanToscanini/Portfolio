export default function Tecnologias() {
  const technologies = [
    { name: 'Java', iconClass: 'devicon-java-plain-wordmark colored' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
    { name: 'Python', iconClass: 'devicon-python-plain colored' },
    { name: 'SQL', iconClass: 'devicon-azuresqldatabase-plain colored' },
    { name: 'React JS', iconClass: 'devicon-react-original colored' },
    { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
    { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
    { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original colored' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
    { name: 'Node.js', iconClass: 'devicon-nodejs-line-wordmark colored' },
    { name: 'Express', iconClass: 'devicon-express-original colored' },
    { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
    { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
    { name: 'Git', iconClass: 'devicon-git-plain colored' },
    { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
    { name: 'VS Code', iconClass: 'devicon-vscode-plain colored' },
    { name: 'Eclipse', iconClass: 'devicon-eclipse-plain colored' },
  ];

  return (
    <div id="tecnologias" className="pt-48 pb-32" style={{ backgroundColor: '#141E22' }}>
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Title outside the rectangle */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-16 sm:mb-20 text-center" style={{ color: '#CBD5E1' }}>Tecnologías</h2>
        
        {/* Rectangle below title */}
        <div className="p-12 sm:p-16 rounded-lg shadow-lg mx-auto relative overflow-hidden" style={{ 
          backgroundColor: 'rgba(20, 30, 34, 0.4)',
          border: '1px solid rgba(148, 163, 184, 0.2)'
        }}>
          
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
          <div className="relative z-10">
            
            {/* Desktop/Tablet: Grid de cajas */}
            <div className="hidden sm:flex flex-wrap gap-4 justify-center w-full">
              {technologies.map((tech) => (
                <div 
                  key={tech.name}
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,200,0.15)] transition-all duration-300"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(30, 48, 53, 0.9), rgba(20, 30, 34, 0.8))',
                    borderColor: '#94A3B8', 
                    width: '85px', 
                    height: '85px' 
                  }}
                >
                  <i className={`${tech.iconClass} text-3xl`}></i>
                  <span className="text-[10px] font-medium text-center leading-tight" style={{ color: '#CBD5E1' }}>{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Mobile: 2-column grid con icono + nombre */}
            <div className="grid sm:hidden grid-cols-2 gap-2 w-full px-1">
              {technologies.map((tech) => (
                <div 
                  key={tech.name}
                  className="flex items-center gap-1 p-1 pl-2 rounded-full border hover:scale-105 hover:shadow-[0_0_8px_rgba(255,255,200,0.1)] transition-all duration-300"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(30, 48, 53, 0.9), rgba(20, 30, 34, 0.8))',
                    borderColor: '#94A3B8' 
                  }}
                >
                  <i className={`${tech.iconClass} text-sm`}></i>
                  <span className="text-[10px] font-medium truncate" style={{ color: '#CBD5E1' }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
