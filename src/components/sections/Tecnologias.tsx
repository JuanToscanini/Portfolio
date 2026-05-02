import { Code2, Database, GitBranch, Palette, Server, FileCode } from 'lucide-react';

export default function Tecnologias() {
  const skillCategories = [
    {
      name: 'Lenguajes',
      categoryIcon: <Code2 size={24} className="text-blue-400" />,
      skills: [
        { name: 'Java', icon: <Code2 size={24} className="text-orange-400" /> },
        { name: 'JavaScript', icon: <FileCode size={24} className="text-yellow-400" /> },
        { name: 'Python', icon: <Code2 size={24} className="text-blue-400" /> },
        { name: 'SQL', icon: <Database size={24} className="text-green-400" /> },
      ]
    },
    {
      name: 'Frontend',
      categoryIcon: <Code2 size={24} className="text-cyan-400" />,
      skills: [
        { name: 'React JS', icon: <Code2 size={24} className="text-cyan-400" /> },
        { name: 'HTML5', icon: <FileCode size={24} className="text-orange-500" /> },
        { name: 'CSS3', icon: <Palette size={24} className="text-blue-500" /> },
        { name: 'Tailwind CSS', icon: <Palette size={24} className="text-teal-400" /> },
        { name: 'TypeScript', icon: <Code2 size={24} className="text-blue-600" /> },
      ]
    },
    {
      name: 'Backend',
      categoryIcon: <Server size={24} className="text-green-500" />,
      skills: [
        { name: 'Node.js', icon: <Server size={24} className="text-green-500" /> },
        { name: 'Express', icon: <Server size={24} className="text-gray-400" /> },
        { name: 'MongoDB', icon: <Database size={24} className="text-green-400" /> },
        { name: 'SQL', icon: <Database size={24} className="text-green-400" /> },
        { name: 'Python', icon: <Code2 size={24} className="text-blue-400" /> },
        { name: 'PostgreSQL', icon: <Database size={24} className="text-blue-300" /> },
      ]
    },
    {
      name: 'Herramientas',
      categoryIcon: <GitBranch size={24} className="text-purple-400" />,
      skills: [
        { name: 'Git', icon: <GitBranch size={24} className="text-orange-500" /> },
        { name: 'Docker', icon: <Server size={24} className="text-blue-400" /> },
        { name: 'VS Code', icon: <Code2 size={24} className="text-blue-500" /> },
      ]
    }
  ];

  return (
    <section id="tecnologias" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Tecnologías</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.name} 
              className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.categoryIcon}
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center" title={skill.name}>
                    {skill.icon}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
