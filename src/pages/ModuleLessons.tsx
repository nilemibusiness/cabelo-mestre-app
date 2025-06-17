
import Navigation from "@/components/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModuleLessons = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const modules = {
    "1": {
      title: "O Segredo da Descoberta Capilar",
      subtitle: "Dominando o Ponto de Partida!",
      color: "from-purple-600 to-purple-800",
      lessons: [
        {
          id: 1,
          title: "O Mapa Escondido do Seu Cabelo",
          subtitle: "Como Revelar o Que Ninguém Te Conta Sobre Seus Fios",
          duration: "12:45",
          completed: false
        },
        {
          id: 2,
          title: "O Teste Rápido de 1 Minuto",
          subtitle: "que Desmascara a Verdade sobre Seu Fio",
          duration: "8:30",
          completed: false
        },
        {
          id: 3,
          title: "Por Que Seu Cabelo Não Absorve Tratamentos?",
          subtitle: "A Verdade Oculta da Porosidade",
          duration: "15:20",
          completed: false
        },
        {
          id: 4,
          title: "O Segredo da Hidratação Profunda",
          subtitle: "Ativando a Memória do Seu Cabelo para o Brilho",
          duration: "18:15",
          completed: false
        },
        {
          id: 5,
          title: "O Ritual Noturno que Desbloqueia o Brilho",
          subtitle: "Acorde com Cabelo de Diva",
          duration: "14:50",
          completed: false
        }
      ]
    },
    "2": {
      title: "O Arsenal da Rapidez",
      subtitle: "Alisamento Sem Sacrifício!",
      color: "from-pink-600 to-pink-800",
      lessons: [
        {
          id: 1,
          title: "O Segredo da Escova 3 em 1",
          subtitle: "Como Alisar Seu Cabelo em Minutos (E Não em Horas!)",
          duration: "16:30",
          completed: false
        },
        {
          id: 2,
          title: "O Ponto Cego da Temperatura",
          subtitle: "Como Não Queimar Seu Cabelo Alisando em Casa",
          duration: "13:45",
          completed: false
        },
        {
          id: 3,
          title: "O Alisamento que Dura",
          subtitle: "O Segredo da Uma Passada para Fios Alinhados Por Dias",
          duration: "19:20",
          completed: false
        },
        {
          id: 4,
          title: "O Truque das Multiplacas",
          subtitle: "A Tecnologia que Alisa e Modela Sem Esforço",
          duration: "21:10",
          completed: false
        },
        {
          id: 5,
          title: "O Liso de Salão em Casa",
          subtitle: "A Receita Secreta de Finalização para um Acabamento Impecável",
          duration: "17:35",
          completed: false
        }
      ]
    },
    "3": {
      title: "A Blindagem",
      subtitle: "Proteção Inegociável!",
      color: "from-cyan-600 to-cyan-800",
      lessons: [
        {
          id: 1,
          title: "O Elemento Invisível",
          subtitle: "Por Que Você ESTÁ Queimando Seu Cabelo e Não Sabe",
          duration: "14:25",
          completed: false
        },
        {
          id: 2,
          title: "O Segredo da Barreira",
          subtitle: "Como o Protetor Térmico Realmente Funciona",
          duration: "11:50",
          completed: false
        },
        {
          id: 3,
          title: "O Método 'Anti-Frizz Imediato'",
          subtitle: "Aplicando o Protetor para um Brilho Extremo",
          duration: "16:40",
          completed: false
        },
        {
          id: 4,
          title: "Por Que Seu Secador É Seu Inimigo?",
          subtitle: "O Segredo da Temperatura Certa",
          duration: "13:15",
          completed: false
        },
        {
          id: 5,
          title: "O Ritual de Proteção Noturno",
          subtitle: "Blindando o Cabelo Contra Danos e Frizz (Mesmo Dormindo!)",
          duration: "18:30",
          completed: false
        }
      ]
    }
  };

  const currentModule = modules[moduleId as keyof typeof modules];

  if (!currentModule) {
    return <div>Módulo não encontrado</div>;
  }

  return (
    <div className="pb-20 md:pb-0 md:pl-64">
      <Navigation />
      
      <div className="p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4 text-[#AFAFAF] hover:text-white hover:bg-[#333]/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para módulos
          </Button>
          
          <div className={`rounded-2xl bg-gradient-to-br ${currentModule.color} p-6 mb-6`}>
            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{currentModule.title}</h1>
              <p className="text-lg opacity-90">{currentModule.subtitle}</p>
              <div className="mt-4 flex items-center space-x-4">
                <span className="text-sm opacity-75">{currentModule.lessons.length} aulas</span>
                <span className="text-sm opacity-75">
                  {currentModule.lessons.reduce((total, lesson) => {
                    const [minutes, seconds] = lesson.duration.split(':').map(Number);
                    return total + minutes + (seconds / 60);
                  }, 0).toFixed(0)} min total
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Aulas do Módulo</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentModule.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="group cursor-pointer"
                onClick={() => navigate(`/lesson/${moduleId}/${lesson.id}`)}
              >
                <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-4 transition-all duration-300 group-hover:border-[#FF00FF] group-hover:shadow-lg group-hover:shadow-[#FF00FF]/20">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[#FF00FF]/20 flex items-center justify-center">
                        <span className="text-[#FF00FF] font-bold text-sm">{lesson.id}</span>
                      </div>
                      {lesson.completed && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <Play className="w-5 h-5 text-[#FF00FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h4 className="font-semibold mb-1 text-sm leading-tight">{lesson.title}</h4>
                  <p className="text-xs text-[#AFAFAF] mb-3 leading-tight">{lesson.subtitle}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#AFAFAF]">{lesson.duration}</span>
                    <span className="text-xs text-[#FF00FF] font-medium">Assistir</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleLessons;
