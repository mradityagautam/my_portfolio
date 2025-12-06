import { Play, Award, TrendingUp, Sparkles } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Brand Launch Campaign',
    category: 'Commercial',
    description: 'High-energy product launch video with dynamic transitions and motion graphics',
    thumbnail: 'https://www.youtube.com/embed/jNJG4lKHuf0?si=4ucTFhyJ1ufsiTcp',
    tags: ['Motion Graphics', 'Color Grading', 'Sound Design'],
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 2,
    title: 'Documentary Short',
    category: 'Documentary',
    description: 'Emotional storytelling through careful editing and atmospheric sound design',
    thumbnail: 'https://www.youtube.com/embed/jNJG4lKHuf0?si=4ucTFhyJ1ufsiTcp',
    tags: ['Documentary', 'Storytelling', 'Color Grading'],
    icon: Award,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Music Video',
    category: 'Music',
    description: 'Rhythm-based editing with creative effects and seamless transitions',
    thumbnail: 'https://www.youtube.com/embed/jNJG4lKHuf0?si=4ucTFhyJ1ufsiTcp',
    tags: ['Music Video', 'VFX', 'Rhythm Editing'],
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Corporate Presentation',
    category: 'Corporate',
    description: 'Professional corporate video with clean animations and engaging visuals',
    thumbnail: 'https://www.youtube.com/embed/jNJG4lKHuf0?si=4ucTFhyJ1ufsiTcp',
    tags: ['Corporate', 'Animation', 'Infographics'],
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'Social Media Series',
    category: 'Social Media',
    description: 'Fast-paced, attention-grabbing content optimized for social platforms',
    thumbnail: 'https://www.youtube.com/embed/jNJG4lKHuf0?si=4ucTFhyJ1ufsiTcp',
    tags: ['Social Media', 'Quick Cuts', 'Captions'],
    icon: Sparkles,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 6,
    title: 'Event Highlights',
    category: 'Event',
    description: 'Capturing the energy and emotion of live events with dynamic editing',
    thumbnail: 'https://www.youtube.com/embed/jNJG4lKHuf0?si=4ucTFhyJ1ufsiTcp',
     tags: ['Event', 'Highlights', 'Multi-cam'],
    icon: Award,
    color: 'from-red-500 to-pink-500'
  }
];

export default function FeaturedWork() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
            <Play className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-sm font-medium">Featured Projects</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Latest <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Work</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of recent projects that demonstrate creativity, technical skill, and storytelling excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  /> */}
                  <iframe
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.thumbnail}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>

                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className={`p-2 bg-gradient-to-r ${project.color} rounded-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-orange-500 text-sm font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-gray-800 rounded-full font-semibold text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
