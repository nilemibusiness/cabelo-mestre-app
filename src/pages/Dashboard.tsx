
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play, Crown, Sparkles } from "lucide-react";

interface DashboardProps {
  userPlan: string;
}

const Dashboard = ({ userPlan }: DashboardProps) => {
  const navigate = useNavigate();

  const bronzeModules = [
    {
      id: 1,
      title: "O Segredo da Descoberta Capilar",
      subtitle: "Dominando o Ponto de Partida!",
      description: "Revele os segredos escondidos dos seus fios e desbloqueie o potencial real do seu cabelo",
      color: "from-purple-600 to-purple-800",
      lessons: 5
    },
    {
      id: 2,
      title: "O Arsenal da Rapidez",
      subtitle: "Alisamento Sem Sacrifício!",
      description: "Domine as técnicas de alisamento rápido sem danificar seus fios",
      color: "from-pink-600 to-pink-800",
      lessons: 5
    },
    {
      id: 3,
      title: "A Blindagem",
      subtitle: "Proteção Inegociável!",
      description: "Proteja seu cabelo contra todos os danos e mantenha-o saudável",
      color: "from-cyan-600 to-cyan-800",
      lessons: 5
    }
  ];

  const premiumContent = [
    {
      title: "O Manual Secreto do Liso de 5 Minutos",
      plan: "Prata",
      description: "Técnica revolucionária para alisamento ultra-rápido",
      color: "from-gray-400 to-gray-600"
    },
    {
      title: "Blindagem Térmica: O Guia Definitivo",
      plan: "Ouro",
      description: "Proteja seu cabelo do calor infernal com métodos profissionais",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      title: "O Segredo do Liso Duradouro",
      plan: "Ouro",
      description: "Mantenha seu cabelo impecável por 3 dias sem retoques",
      color: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <div className="pb-20 md:pb-0 md:pl-64">
      <Navigation />
      
      <div className="p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <Crown className="w-6 h-6 text-[#FF00FF]" />
            <span className="text-[#FF00FF] font-semibold">Plano {userPlan}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Bem-vinda ao seu
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF00FF] to-[#AFAFAF] bg-clip-text text-transparent">
            Cronograma Capilar Inteligente
          </h2>
          <p className="text-[#AFAFAF] mt-2">
            Transforme seu cabelo com técnicas profissionais em casa
          </p>
        </div>

        {/* Content based on user plan */}
        {userPlan === 'Bronze' ? (
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-[#FF00FF]" />
              <span>Seus Módulos</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bronzeModules.map((module) => (
                <div
                  key={module.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/module/${module.id}`)}
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${module.color} p-6 h-64 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold mb-2">{module.title}</h4>
                        <p className="text-sm opacity-90 mb-2">{module.subtitle}</p>
                        <p className="text-xs opacity-75">{module.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm opacity-90">{module.lessons} aulas</span>
                        <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                          <Play className="w-4 h-4" />
                          <span className="text-sm font-medium">Começar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Premium Content */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <Crown className="w-5 h-5 text-[#FF00FF]" />
                <span>Conteúdo Premium - Plano {userPlan}</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumContent
                  .filter(content => 
                    (userPlan === 'Prata' && content.plan === 'Prata') ||
                    (userPlan === 'Ouro' && (content.plan === 'Prata' || content.plan === 'Ouro')) ||
                    (userPlan === 'Diamante')
                  )
                  .map((content, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                    >
                      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${content.color} p-6 h-64 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          <div>
                            <h4 className="text-lg font-bold mb-2">{content.title}</h4>
                            <p className="text-xs opacity-75">{content.description}</p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm opacity-90">Plano {content.plan}</span>
                            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                              <Play className="w-4 h-4" />
                              <span className="text-sm font-medium">Acessar</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Bronze Content Separate Card */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center space-x-2 text-[#AFAFAF]">
                <Sparkles className="w-5 h-5" />
                <span>Para Iniciantes (Nível Bronze)</span>
              </h3>
              
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#333]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {bronzeModules.map((module) => (
                    <div
                      key={module.id}
                      className="cursor-pointer group"
                      onClick={() => navigate(`/module/${module.id}`)}
                    >
                      <div className="bg-[#333]/50 rounded-xl p-4 transition-all duration-300 group-hover:bg-[#333]/70">
                        <h4 className="font-semibold mb-2 text-sm">{module.title}</h4>
                        <p className="text-xs text-[#AFAFAF] mb-3">{module.subtitle}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#AFAFAF]">{module.lessons} aulas</span>
                          <Play className="w-4 h-4 text-[#FF00FF]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
