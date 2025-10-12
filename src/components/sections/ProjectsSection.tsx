import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import { Star, GitFork, ExternalLink, Github, Loader2, ArrowRight, Code2, Sparkles, Zap, Box } from "lucide-react";
import { motion } from "framer-motion";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count?: number;
  forks_count?: number;
  html_url: string;
  language: string | null;
  updated_at: string;
  topics?: string[];
}

const projectIcons = [Code2, Sparkles, Zap, Box, Code2, Sparkles];

const ProjectsSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.rest.repos.listForUser({
          username: "DawoodHussain-Repo",
          sort: "updated",
          per_page: 6,
        });
        setRepos(response.data as GitHubRepo[]);
      } catch (err) {
        console.error("Error fetching repos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      Python: "#3776ab",
      Java: "#ed8b00",
    };
    return colors[language || ""] || "#6b7280";
  };

  return (
    <section id="projects" className="section-padding section-bg">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 text-balance">
            A showcase of my latest work and contributions to the open-source community
          </p>
        </motion.div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {repos.map((repo, index) => {
                const Icon = projectIcons[index % projectIcons.length];
                
                return (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Dynamic Gradient Panel Card */}
                    <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800 p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                      {/* Animated Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Accent Glow Bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent group-hover:w-1.5 transition-all duration-300" />
                      
                      {/* Floating 3D Shadow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        {/* Top Row - Icon & Title */}
                        <div className="flex items-start gap-4 mb-4">
                          {/* Frosted Glass Icon Circle */}
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 backdrop-blur-sm border border-primary/20 dark:border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                            <Icon className="text-primary" size={20} />
                          </div>
                          
                          {/* Project Title */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1 mb-1">
                              {repo.name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                              {repo.language && (
                                <>
                                  <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                                  />
                                  <span>{repo.language}</span>
                                </>
                              )}
                            </div>
                          </div>
                          
                          {/* External Link */}
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors" size={16} />
                          </a>
                        </div>

                        {/* Middle Section - Description */}
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2 min-h-[40px] leading-relaxed">
                          {repo.description || "No description available."}
                        </p>

                        {/* Tag Pills */}
                        {repo.topics && repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {repo.topics.slice(0, 3).map((topic) => (
                              <span
                                key={topic}
                                className="px-3 py-1 text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 dark:border-primary/30 rounded-full backdrop-blur-sm hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Bottom Section - Stats & Status */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
                          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1 hover:text-primary transition-colors">
                              <Star size={14} />
                              <span>{repo.stargazers_count || 0}</span>
                            </div>
                            <div className="flex items-center gap-1 hover:text-primary transition-colors">
                              <GitFork size={14} />
                              <span>{repo.forks_count || 0}</span>
                            </div>
                          </div>
                          
                          {/* Status Indicator */}
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs text-slate-500 dark:text-slate-400">Active</span>
                          </div>
                        </div>

                        {/* Animated Underline Glow on Hover */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href="https://github.com/DawoodHussain-Repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
              >
                <Github size={20} />
                View all projects on GitHub
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
