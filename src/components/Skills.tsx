import { Scissors, Palette, Zap, Music, Layers, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: Scissors,
    title: 'Video Editing',
    description: 'Expert in Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve',
    level: 95,
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Palette,
    title: 'Color Grading',
    description: 'Professional color correction and cinematic grading techniques',
    level: 80,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Layers,
    title: 'Motion Graphics',
    description: 'Creating stunning animations with After Effects and Motion',
    level: 75,
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Music,
    title: 'Sound Design',
    description: 'Audio mixing, sound effects, and music synchronization',
    level: 88,
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'VFX & Compositing',
    description: 'Visual effects and advanced compositing techniques',
    level: 42,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Sparkles,
    title: 'Storytelling',
    description: 'Crafting compelling narratives through visual editing',
    level: 92,
    color: 'from-red-500 to-pink-500'
  }
];

const software = [
  { name: 'Adobe Premiere Pro', level: 95 },
  { name: 'After Effects', level: 60 },
  { name: 'DaVinci Resolve', level: 92 },
  { name: 'Final Cut Pro', level: 85 },
  { name: 'Photoshop', level: 80 },
  { name: 'Audition', level: 82 }
];

export default function Skills() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-sm font-medium">Skills & Expertise</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Technical <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Mastery</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Years of experience mastering industry-leading tools and techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {skill.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm">
                  {skill.description}
                </p>

                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-500 mt-2">{skill.level}%</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Software Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {software.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">{item.name}</span>
                  <span className="text-gray-400 text-sm">{item.level}%</span>
                </div>
                <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
