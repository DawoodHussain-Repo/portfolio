import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Octokit } from "@octokit/rest";
import { ExternalLink, Github, Star, GitFork, Loader2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  // Placeholder images for projects
  const projectImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.rest.repos.listForUser({
          username: "DawoodHussain-Repo",
          sort: "updated",
          per_page: 6,
          type: "owner",
        });
        setRepos(response.data as Repository[]);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    if (loading || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.from(headingRef.current.children, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      }

      // Projects stagger animation
      if (projectsRef.current) {
        const cards = projectsRef.current.querySelectorAll(".project-item");
        gsap.from(cards, {
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [loading]);

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      Python: "bg-green-500",
      Java: "bg-red-500",
      "C++": "bg-pink-500",
      Go: "bg-cyan-500",
      Rust: "bg-orange-500",
      Ruby: "bg-red-400",
      PHP: "bg-purple-400",
    };
    return colors[language || ""] || "bg-gray-500";
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding bg-[#050505]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-12 md:mb-20">
          <span className="text-cyan-400 font-medium tracking-widest uppercase text-xs md:text-sm">
            Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 md:mt-4">
            Featured Projects
          </h2>
          <p className="text-white/60 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base px-2">
            A selection of my recent work, showcasing my expertise in building
            modern web applications
          </p>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
          </div>
        ) : (
          <div
            ref={projectsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {repos.map((repo, index) => (
              <div
                key={repo.id}
                className={`project-item project-card group relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "aspect-[16/10]" : "aspect-video"
                  }`}
                >
                  <img
                    src={projectImages[index % projectImages.length]}
                    alt={repo.name}
                    className="project-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Overlay Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hoverable w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hoverable w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {repo.language && (
                      <span
                        className={`w-3 h-3 rounded-full ${getLanguageColor(
                          repo.language
                        )}`}
                      />
                    )}
                    <span className="text-white/50 text-sm">
                      {repo.language || "Code"}
                    </span>
                    <div className="flex items-center gap-4 ml-auto text-white/40 text-sm">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {repo.name
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </h3>

                  <p className="text-white/60 text-sm line-clamp-2">
                    {repo.description ||
                      "A creative project showcasing modern development techniques."}
                  </p>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/DawoodHussain-Repo"
            target="_blank"
            rel="noopener noreferrer"
            className="hoverable hero-button inline-flex items-center gap-3"
          >
            <Github className="w-5 h-5" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
