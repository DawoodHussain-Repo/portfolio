import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import { Star, GitFork, ExternalLink, Calendar, Github } from "lucide-react";
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
      <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
              Featured Projects
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Loading my latest work...
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm border border-slate-200 p-6 rounded-2xl shadow-sm animate-pulse">
                <div className="h-6 bg-slate-200 rounded mb-4" />
                <div className="h-4 bg-slate-200 rounded mb-3" />
                <div className="h-4 bg-slate-200 rounded mb-3" />
                <div className="h-4 bg-slate-200 rounded w-3/4 mb-6" />
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="h-4 w-16 bg-slate-200 rounded" />
                    <div className="h-4 w-12 bg-slate-200 rounded" />
                  </div>
                  <div className="h-8 w-20 bg-slate-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              Featured Projects
            </h1>
            
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 p-12 rounded-2xl shadow-sm max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-slate-600 mb-6">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-200"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Featured Projects
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work and contributions to the 
            <span className="text-purple-600 font-semibold"> open-source community</span>
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {repos.map((repo, index) => (
            <div 
              key={repo.id}
              className="group relative bg-white/90 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                <div className="bg-white rounded-3xl h-full w-full" />
              </div>
              
              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300 mb-2 line-clamp-1">
                      {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar size={14} />
                      <span className="font-medium">{formatDate(repo.updated_at)}</span>
                    </div>
                  </div>
                  
                  <button
                    className="ml-4 p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group/btn"
                    onClick={() => window.open(repo.html_url, '_blank')}
                    title="View Project"
                  >
                    <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                  </button>
                </div>
                
                {/* Description */}
                <p className="text-slate-600 text-base mb-6 line-clamp-3 leading-relaxed min-h-[4.5rem]">
                  {repo.description || 'No description available.'}
                </p>
                
                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span 
                        key={topic}
                        className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 text-sm rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Language & Stats */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-6">
                    {repo.language && (
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-4 h-4 rounded-full shadow-sm"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        <span className="font-semibold text-slate-700 text-sm">{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-4 text-slate-600">
                      <div className="flex items-center gap-1 hover:text-yellow-500 transition-colors">
                        <Star size={16} />
                        <span className="font-medium">{repo.stargazers_count || 0}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                        <GitFork size={16} />
                        <span className="font-medium">{repo.forks_count || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button 
            className="relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-200 group"
            onClick={() => window.open('https://github.com/DawoodHussain-Repo', '_blank')}
          >
            <div className="relative z-10 flex items-center">
              <Github className="mr-3 transition-transform group-hover:scale-110" size={20} />
              View All Projects
              <ExternalLink className="ml-3 transition-transform group-hover:scale-110" size={16} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
