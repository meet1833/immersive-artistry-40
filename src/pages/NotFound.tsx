
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="flex items-center justify-center min-h-screen pt-16 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center glass-card p-12 rounded-lg">
            <span className="text-5xl sm:text-7xl font-bold text-neon-pink mb-6 inline-block">404</span>
            <h1 className="editorial-heading mb-6">Page Not Found</h1>
            <p className="text-xl opacity-80 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-neon-pink text-black font-medium rounded-lg hover:bg-opacity-90 transition-all"
            >
              <ArrowLeft size={18} className="mr-2" />
              Return Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
