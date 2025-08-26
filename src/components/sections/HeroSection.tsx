import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([nameRef.current, titleRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0,
        y: 50
      });
      
      gsap.set(scrollIndicatorRef.current, {
        opacity: 0,
        y: 20
      });

      // Create timeline
      const tl = gsap.timeline({ delay: 0.5 });

      // Animate name
      tl.to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.7)"
      });

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");

      // Animate description
      tl.to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

      // Animate button
      tl.to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4");

      // Animate scroll indicator
      tl.to(scrollIndicatorRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.2");

      // Button hover animation
      const button = buttonRef.current;
      if (button) {
        const fillElement = button.querySelector('.fill-element');
        
        button.addEventListener('mouseenter', (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          gsap.set(fillElement, {
            left: x,
            top: y,
            scale: 0,
            opacity: 1
          });
          
          gsap.to(fillElement, {
            scale: 3,
            duration: 0.6,
            ease: "power2.out"
          });
        });
        
        button.addEventListener('mouseleave', () => {
          gsap.to(fillElement, {
            scale: 0,
            duration: 0.3,
            ease: "power2.in"
          });
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen pt-16 sm:pt-20 md:pt-24 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100"
    >
      {/* Background Elements - adjusted for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-50/40 rounded-full blur-2xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Single Column Layout for Mobile, Two Column for Desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center text-center lg:text-left">
          
          {/* Name & Title Section */}
          <div className="w-full space-y-6 sm:space-y-8 lg:space-y-12 order-1">
            {/* Name with responsive typography */}
            <h1 
              ref={nameRef}
              className="font-bold tracking-tight leading-none"
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-slate-900">
                DAWOOD
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-purple-600 font-bold">
                HUSSAIN
              </span>
            </h1>
            
            {/* Professional Title */}
            <div 
              ref={titleRef}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-700 font-semibold">
                Software Engineer
              </p>
              <p className="text-base sm:text-lg md:text-xl text-slate-600">
                Full-Stack Developer & Student
              </p>
            </div>
          </div>

          {/* Bio & CTA Section */}
          <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10 order-2">
            {/* Bio */}
            <div 
              ref={descriptionRef}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Passionate about crafting exceptional digital experiences through 
                <span className="text-purple-600 font-semibold"> modern web technologies</span>.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I specialize in building scalable applications with React, TypeScript, and Node.js. 
                Currently pursuing my degree while working on innovative projects that solve real-world problems.
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mt-6 sm:mt-8">
                {['React', 'TypeScript', 'Node.js', 'Next.js', 'Python'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-white text-slate-700 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4 sm:pt-6">
              <button 
                ref={buttonRef}
                className="relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-200 group w-full sm:w-auto"
              >
                <div className="fill-element absolute w-2 h-2 bg-purple-500 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <Download className="mr-2 sm:mr-3 transition-transform group-hover:scale-110" size={18} />
                  Download Resume
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200 p-2 sm:p-3 rounded-full animate-bounce hover:animate-pulse cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white shadow-sm">
          <ChevronDown size={20} className="sm:size-6 text-slate-600" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;