import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
            <MessageSquare className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-sm font-medium">Get In Touch</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Let's Create <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 text-center">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400">hello@videoeditor.com</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 text-center">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 text-center">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-gray-400">Los Angeles, CA</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors">
                  <option>Commercial</option>
                  <option>Documentary</option>
                  <option>Music Video</option>
                  <option>Corporate</option>
                  <option>Social Media</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-semibold text-white hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
