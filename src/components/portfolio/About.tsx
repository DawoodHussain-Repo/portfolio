const About = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 rounded-2xl animate-slide-up">
          <h2 className="text-display text-4xl md:text-5xl mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="prose prose-lg max-w-none text-glass-foreground leading-relaxed">
            <p className="text-xl mb-6">
              Full Stack Web Developer with a strong foundation in both front-end and back-end
              development, experienced in building responsive, user-focused web applications.
            </p>
            <p className="text-lg">
              Proven ability to lead personal projects from concept to deployment, showcasing
              expertise in modern web technologies and a passion for creating scalable, real
              world solutions.
            </p>
          </div>
          
          {/* Decorative gradient line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-8" />
        </div>
      </div>
    </section>
  );
};

export default About;