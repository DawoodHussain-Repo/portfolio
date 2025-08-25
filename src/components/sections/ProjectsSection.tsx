import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import { Star, GitFork, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const ProjectsSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.rest.repos.listForUser({
          username: 'DawoodHussain-Repo',
          sort: 'updated',
          per_page: 6
        });
        
        setRepos(response.data as GitHubRepo[]);
      } catch (err) {
        console.error('Error fetching repos:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      React: '#61dafb',
      Python: '#3776ab',
      Java: '#ed8b00',
      CSS: '#1572b6',
      HTML: '#e34c26',
      'C++': '#00599c'
    };
    return colors[language || ''] || '#6b7280';
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-display text-5xl md:text-6xl mb-16 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl animate-pulse">
                <div className="h-4 bg-muted rounded mb-4" />
                <div className="h-3 bg-muted rounded mb-2" />
                <div className="h-3 bg-muted rounded w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-display text-5xl md:text-6xl mb-16">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="glass-card p-8 rounded-2xl">
            <p className="text-glass-foreground">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-display text-5xl md:text-6xl mb-16 text-center animate-fade-in">
          Featured <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <div 
              key={repo.id}
              className="glass-card backdrop-blur-xl bg-glass-background/30 border border-glass-border/30 p-6 rounded-2xl hover-lift transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  {formatDate(repo.updated_at)}
                </div>
              </div>
              
              {/* Description */}
              <p className="text-glass-foreground text-sm mb-4 line-clamp-3">
                {repo.description || 'No description available.'}
              </p>
              
              {/* Topics */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span 
                      key={topic}
                      className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-lg border border-primary/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      {repo.language}
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    {repo.stargazers_count || 0}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={14} />
                    {repo.forks_count || 0}
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10 hover-glow"
                  onClick={() => window.open(repo.html_url, '_blank')}
                >
                  <ExternalLink size={14} className="mr-1" />
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 rounded-2xl hover-glow"
            onClick={() => window.open('https://github.com/DawoodHussain-Repo', '_blank')}
          >
            View All Projects on GitHub
            <ExternalLink className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;