
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1573167007835-24715af1f49c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono uppercase text-white text-sm tracking-wider">Stay Updated</span>
          <h2 className="editorial-heading mt-2 mb-6">Join Our Community</h2>
          <p className="text-xl opacity-80 mb-8">
            Subscribe to our newsletter for exclusive updates, artist announcements, and special event invitations.
          </p>
          
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-pink"
              aria-label="Email address"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-neon-pink text-black font-medium rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center"
            >
              Subscribe
              <ArrowRight size={18} className="ml-2" />
            </button>
          </form>
          
          <p className="text-sm text-white/60 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
