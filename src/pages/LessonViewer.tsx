
import Navigation from "@/components/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const LessonViewer = () => {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  const modules = {
    "1": {
      title: "O Segredo da Descoberta Capilar",
      lessons: [
        { id: 1, title: "O Mapa Escondido do Seu Cabelo", subtitle: "Como Revelar o Que Ninguém Te Conta Sobre Seus Fios" },
        { id: 2, title: "O Teste Rápido de 1 Minuto", subtitle: "que Desmascara a Verdade sobre Seu Fio" },
        { id: 3, title: "Por Que Seu Cabelo Não Absorve Tratamentos?", subtitle: "A Verdade Oculta da Porosidade" },
        { id: 4, title: "O Segredo da Hidratação Profunda", subtitle: "Ativando a Memória do Seu Cabelo para o Brilho" },
        { id: 5, title: "O Ritual Noturno que Desbloqueia o Brilho", subtitle: "Acorde com Cabelo de Diva" }
      ]
    },
    "2": {
      title: "O Arsenal da Rapidez",
      lessons: [
        { id: 1, title: "O Segredo da Escova 3 em 1", subtitle: "Como Alisar Seu Cabelo em Minutos (E Não em Horas!)" },
        { id: 2, title: "O Ponto Cego da Temperatura", subtitle: "Como Não Queimar Seu Cabelo Alisando em Casa" },
        { id: 3, title: "O Alisamento que Dura", subtitle: "O Segredo da Uma Passada para Fios Alinhados Por Dias" },
        { id: 4, title: "O Truque das Multiplacas", subtitle: "A Tecnologia que Alisa e Modela Sem Esforço" },
        { id: 5, title: "O Liso de Salão em Casa", subtitle: "A Receita Secreta de Finalização para um Acabamento Impecável" }
      ]
    },
    "3": {
      title: "A Blindagem",
      lessons: [
        { id: 1, title: "O Elemento Invisível", subtitle: "Por Que Você ESTÁ Queimando Seu Cabelo e Não Sabe" },
        { id: 2, title: "O Segredo da Barreira", subtitle: "Como o Protetor Térmico Realmente Funciona" },
        { id: 3, title: "O Método 'Anti-Frizz Imediato'", subtitle: "Aplicando o Protetor para um Brilho Extremo" },
        { id: 4, title: "Por Que Seu Secador É Seu Inimigo?", subtitle: "O Segredo da Temperatura Certa" },
        { id: 5, title: "O Ritual de Proteção Noturno", subtitle: "Blindando o Cabelo Contra Danos e Frizz (Mesmo Dormindo!)" }
      ]
    }
  };

  const currentModule = modules[moduleId as keyof typeof modules];
  const currentLesson = currentModule?.lessons.find(l => l.id === parseInt(lessonId || ''));
  const currentLessonIndex = currentModule?.lessons.findIndex(l => l.id === parseInt(lessonId || '')) ?? -1;

  if (!currentModule || !currentLesson) {
    return <div>Aula não encontrada</div>;
  }

  const handleMarkAsCompleted = () => {
    setIsCompleted(true);
    toast({
      title: "Aula concluída!",
      description: "Parabéns! Continue para a próxima aula.",
    });

    // Auto advance to next lesson after 2 seconds
    setTimeout(() => {
      const nextLesson = currentModule.lessons[currentLessonIndex + 1];
      if (nextLesson) {
        navigate(`/lesson/${moduleId}/${nextLesson.id}`);
      } else {
        // Go to next module or back to dashboard
        const nextModuleId = parseInt(moduleId || '') + 1;
        if (nextModuleId <= 3) {
          navigate(`/module/${nextModuleId}`);
        } else {
          navigate('/');
        }
      }
    }, 2000);
  };

  const progressPercentage = ((currentLessonIndex + 1) / currentModule.lessons.length) * 100;

  return (
    <div className="pb-20 md:pb-0 md:pl-64">
      <Navigation />
      
      <div className="p-4 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(`/module/${moduleId}`)}
            className="mb-4 text-[#AFAFAF] hover:text-white hover:bg-[#333]/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para aulas do módulo
          </Button>
          
          <div className="mb-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{currentLesson.title}</h1>
            <p className="text-[#AFAFAF]">{currentLesson.subtitle}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-[#AFAFAF]">Progresso do Módulo</span>
              <span className="text-[#FF00FF]">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-[#333] rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-[#FF00FF] to-[#FF00FF]/80 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-6">
              <iframe
                src="https://www.youtube.com/embed/aiKETUDZYyE?si=bIWkXls6lbkfULDf&controls=0&showinfo=0&rel=0&modestbranding=1"
                className="w-full h-full"
                allowFullScreen
                title={currentLesson.title}
              />
            </div>

            {/* Product Description */}
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">Sobre esta aula</h3>
              <p className="text-[#AFAFAF] mb-4">
                Nesta aula você vai descobrir técnicas revolucionárias para transformar seu cabelo. 
                Aplicando os métodos mostrados, você terá resultados profissionais em casa.
              </p>
              <p className="text-sm text-[#AFAFAF]">
                Produto mencionado: <a href="#" className="text-[#FF00FF] hover:underline">Kit Profissional de Alisamento</a>
              </p>
            </div>

            {/* Complete Button */}
            <Button
              onClick={handleMarkAsCompleted}
              disabled={isCompleted}
              className="w-full bg-gradient-to-r from-[#FF00FF] to-[#FF00FF]/80 hover:from-[#FF00FF]/90 hover:to-[#FF00FF]/70 text-white font-semibold py-4 rounded-xl transition-all duration-300"
            >
              {isCompleted ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Aula Concluída - Avançando...
                </>
              ) : (
                <>
                  Marcar como Concluído e Avançar
                  <ChevronRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </div>

          {/* Lesson List Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">{currentModule.title}</h3>
              
              <div className="space-y-3">
                {currentModule.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      lesson.id === parseInt(lessonId || '')
                        ? 'bg-[#FF00FF]/20 border border-[#FF00FF]/50'
                        : 'bg-[#333]/30 hover:bg-[#333]/50'
                    }`}
                    onClick={() => navigate(`/lesson/${moduleId}/${lesson.id}`)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        lesson.id === parseInt(lessonId || '')
                          ? 'bg-[#FF00FF] text-white'
                          : 'bg-[#333] text-[#AFAFAF]'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{lesson.title}</p>
                        <p className="text-xs text-[#AFAFAF] truncate">{lesson.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;
