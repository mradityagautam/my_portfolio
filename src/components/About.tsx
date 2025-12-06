import { Award, Users, Clock, Heart } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Multiple awards for creative excellence',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Client Satisfaction',
    description: '98% client retention rate',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Always on time, never compromising quality',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Heart,
    title: 'Passion Driven',
    description: 'Every project is a labor of love',
    color: 'from-red-500 to-pink-500'
  }
];

export default function About() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
              <Heart className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 text-sm font-medium">About Me</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Bringing Stories <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                To Life
              </span>
            </h2>

            <div className="space-y-4 text-gray-400 text-lg">
              <p>
                With over 4 years of experience in video editing and post-production, I specialize in transforming raw footage into compelling visual narratives that captivate audiences and drive results.
              </p>
              <p>
                My approach combines technical expertise with creative storytelling, ensuring every frame serves a purpose and every transition enhances the narrative flow.
              </p>
              <p>
                From corporate videos to music videos, documentaries to commercials, I bring the same level of passion and precision to every project, no matter the scale.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50">
                Download Resume
              </button>
              <button className="px-8 py-4 border-2 border-gray-800 rounded-full font-semibold text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Video editing workspace"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 shadow-2xl">
              <div className="text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-white/80 text-sm">Videos Edited</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-500 text-center"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${achievement.color} mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
