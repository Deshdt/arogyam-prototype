import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ayurveda.jpg";
import logoImage from "@/assets/arogyam-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Logo */}
        <div className="mb-8 animate-glow">
          <img 
            src={logoImage} 
            alt="Arogyam Logo" 
            className="w-24 h-24 mx-auto mb-4 drop-shadow-lg"
          />
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Arogyam
          </h1>
        </div>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow">
          Personalized Ayurvedic Nutrition & Progress Tracking
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/patient/login">
            <Button size="lg" className="btn-wellness text-lg px-10 py-4 shadow-xl">
              Get Started
            </Button>
          </Link>
          <Link to="/demo">
            <Button size="lg" variant="outline" className="btn-secondary-wellness text-lg px-10 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              View Demo
            </Button>
          </Link>
        </div>
        
        {/* Sign In Link */}
        <div className="absolute top-8 right-8">
          <Link to="/login" className="text-white/80 hover:text-white transition-colors duration-300 font-medium">
            Sign In →
          </Link>
        </div>
      </div>
    </section>
  );
};