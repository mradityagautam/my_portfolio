import { Film, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-orange-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-red-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
            <Film className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-sm font-medium">Video Editor & Motion Designer</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Crafting Visual
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Transforming raw footage into captivating narratives that resonate, inspire, and leave lasting impressions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-5 h-5" />
                View Showreel
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="px-8 py-4 border-2 border-gray-700 rounded-full font-semibold text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300">
              Explore Work
            </button>
          </div>
        </div>

        <div className={`mt-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">250+</div>
              <div className="text-gray-500 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4+</div>
              <div className="text-gray-500 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-500 text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
