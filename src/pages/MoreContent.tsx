
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { Crown, Lock, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MoreContentProps {
  userPlan: string;
}

const MoreContent = ({ userPlan }: MoreContentProps) => {
  const navigate = useNavigate();

  const contentByPlan = {
    Bronze: [
      {
        id: 1,
        title: "O Segredo da Descoberta Capilar",
        subtitle: "Dominando o Ponto de Partida!",
        description: "Revele os segredos escondidos dos seus fios",
        color: "from-purple-600 to-purple-800",
        unlocked: true,
        lessons: 5
      },
      {
        id: 2,
        title: "O Arsenal da Rapidez",
        subtitle: "Alisamento Sem Sacrifício!",
        description: "Técnicas de alisamento rápido sem danos",
        color: "from-pink-600 to-pink-800",
        unlocked: true,
        lessons: 5
      },
      {
        id: 3,
        title: "A Blindagem",
        subtitle: "Proteção Inegociável!",
        description: "Proteja seu cabelo contra todos os danos",
        color: "from-cyan-600 to-cyan-800",
        unlocked: true,
        lessons: 5
      }
    ],
    Prata: [
      {
        id: 'upsell-prata',
        title: "O Manual Secreto do Liso de 5 Minutos",
        subtitle: "Técnica Revolucionária de Alisamento Ultra-Rápido",
        description: "Descubra como alisar seu cabelo em apenas 5 minutos com técnicas profissionais",
        color: "from-gray-400 to-gray-600",
        unlocked: userPlan !== 'Bronze',
        requiredPlan: "Prata",
        lessons: 8
      }
    ],
    Ouro: [
      {
        id: 'orderbump-1',
        title: "Blindagem Térmica: O Guia Definitivo",
        subtitle: "Proteger Seu Cabelo do Calor Infernal",
        description: "Métodos profissionais para proteção térmica total",
        color: "from-orange-500 to-orange-700",
        unlocked: userPlan === 'Ouro' || userPlan === 'Diamante',
        requiredPlan: "Ouro",
        lessons: 6
      },
      {
        id: 'orderbump-2',
        title: "O Segredo do Liso Duradouro",
        subtitle: "Como Manter seu Cabelo Impecável por 3 Dias",
        description: "Técnicas para manter o liso perfeito sem retoques",
        color: "from-yellow-500 to-yellow-700",
        unlocked: userPlan === 'Ouro' || userPlan === 'Diamante',
        requiredPlan: "Ouro",
        lessons: 7
      }
    ],
    Diamante: [
      {
        id: 'future-1',
        title: "Conteúdo Futuro 1",
        subtitle: "Em breve...",
        description: "Novos conteúdos exclusivos serão adicionados",
        color: "from-purple-500 to-purple-700",
        unlocked: false,
        requiredPlan: "Diamante",
        lessons: 0,
        comingSoon: true
      }
    ]
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Bronze': return 'text-orange-400';
      case 'Prata': return 'text-gray-400';
      case 'Ouro': return 'text-yellow-400';
      case 'Diamante': return 'text-purple-400';
      default: return 'text-[#FF00FF]';
    }
  };

  const handleContentClick = (content: any) => {
    if (content.unlocked && !content.comingSoon) {
      if (content.id <= 3) {
        navigate(`/module/${content.id}`);
      }
      // For premium content, you would navigate to specific premium pages
    } else if (content.comingSoon) {
      // Do nothing for coming soon content
      return;
    } else {
      navigate('/plans');
    }
  };

  return (
    <div className="pb-20 md:pb-0 md:pl-64">
      <Navigation />
      
      <div className="p-4 md:p-8">
        {/* Header with Current Plan */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Mais Conteúdos</h1>
              <p className="text-[#AFAFAF]">
                Explore todo o conteúdo disponível para sua transformação capilar
              </p>
            </div>
          </div>

          {/* Current Plan Card */}
          <div 
            className="bg-gradient-to-r from-[#1a1a1a] to-[#333]/50 border border-[#FF00FF]/30 rounded-2xl p-6 cursor-pointer hover:border-[#FF00FF] transition-all duration-300"
            onClick={() => navigate('/plans')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-[#FF00FF]/20">
                  <Crown className="w-6 h-6 text-[#FF00FF]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Seu Plano Atual</h3>
                  <p className={`text-xl font-bold ${getPlanColor(userPlan)}`}>Plano {userPlan}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-[#FF00FF]">
                <span className="font-medium">Alterar Plano</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Bronze Content */}
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span>Conteúdo Bronze (Básico)</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentByPlan.Bronze.map((content) => (
                <div
                  key={content.id}
                  className="group cursor-pointer"
                  onClick={() => handleContentClick(content)}
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${content.color} p-6 h-64 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold mb-2">{content.title}</h4>
                        <p className="text-sm opacity-90 mb-2">{content.subtitle}</p>
                        <p className="text-xs opacity-75">{content.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm opacity-90">{content.lessons} aulas</span>
                        <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                          <span className="text-sm font-medium">Acessar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prata Content */}
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <Crown className="w-5 h-5 text-gray-400" />
              <span>Conteúdo Prata (Premium)</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentByPlan.Prata.map((content) => (
                <div
                  key={content.id}
                  className="group cursor-pointer"
                  onClick={() => handleContentClick(content)}
                >
                  <div className={`relative overflow-hidden rounded-2xl p-6 h-64 transition-all duration-300 group-hover:scale-105 ${
                    content.unlocked 
                      ? `bg-gradient-to-br ${content.color} group-hover:shadow-2xl`
                      : 'bg-gradient-to-br from-gray-800 to-gray-900 opacity-60'
                  }`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        {!content.unlocked && (
                          <div className="flex items-center space-x-2 mb-3">
                            <Lock className="w-4 h-4 text-[#FF00FF]" />
                            <span className="text-xs text-[#FF00FF] font-medium">Plano {content.requiredPlan}</span>
                          </div>
                        )}
                        <h4 className="text-lg font-bold mb-2">{content.title}</h4>
                        <p className="text-sm opacity-90 mb-2">{content.subtitle}</p>
                        <p className="text-xs opacity-75">{content.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm opacity-90">{content.lessons} aulas</span>
                        <div className={`flex items-center space-x-2 rounded-full px-3 py-1 ${
                          content.unlocked ? 'bg-white/20' : 'bg-[#FF00FF]/20'
                        }`}>
                          {content.unlocked ? (
                            <span className="text-sm font-medium">Acessar</span>
                          ) : (
                            <>
                              <Lock className="w-3 h-3" />
                              <span className="text-sm font-medium">Upgrade</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ouro Content */}
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span>Conteúdo Ouro (Elite)</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentByPlan.Ouro.map((content) => (
                <div
                  key={content.id}
                  className="group cursor-pointer"
                  onClick={() => handleContentClick(content)}
                >
                  <div className={`relative overflow-hidden rounded-2xl p-6 h-64 transition-all duration-300 group-hover:scale-105 ${
                    content.unlocked 
                      ? `bg-gradient-to-br ${content.color} group-hover:shadow-2xl`
                      : 'bg-gradient-to-br from-gray-800 to-gray-900 opacity-60'
                  }`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        {!content.unlocked && (
                          <div className="flex items-center space-x-2 mb-3">
                            <Lock className="w-4 h-4 text-[#FF00FF]" />
                            <span className="text-xs text-[#FF00FF] font-medium">Plano {content.requiredPlan}</span>
                          </div>
                        )}
                        <h4 className="text-lg font-bold mb-2">{content.title}</h4>
                        <p className="text-sm opacity-90 mb-2">{content.subtitle}</p>
                        <p className="text-xs opacity-75">{content.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm opacity-90">{content.lessons} aulas</span>
                        <div className={`flex items-center space-x-2 rounded-full px-3 py-1 ${
                          content.unlocked ? 'bg-white/20' : 'bg-[#FF00FF]/20'
                        }`}>
                          {content.unlocked ? (
                            <span className="text-sm font-medium">Acessar</span>
                          ) : (
                            <>
                              <Lock className="w-3 h-3" />
                              <span className="text-sm font-medium">Upgrade</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Content */}
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <Crown className="w-5 h-5 text-purple-400" />
              <span>Conteúdos Futuros</span>
            </h2>
            
            <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 text-center">
              <Lock className="w-12 h-12 text-[#FF00FF] mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold mb-2">Conteúdos serão adicionados futuramente</h3>
              <p className="text-[#AFAFAF] mb-6">
                Novos módulos e funcionalidades exclusivas estão sendo desenvolvidos para você
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreContent;
