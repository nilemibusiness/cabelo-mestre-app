
import Navigation from "@/components/Navigation";
import { Play, Clock, CheckCircle } from "lucide-react";

const ContinueWatching = () => {
  // Mock data for continue watching - in a real app this would come from user progress
  const inProgressLessons = [
    {
      moduleId: 1,
      lessonId: 3,
      moduleTitle: "O Segredo da Descoberta Capilar",
      lessonTitle: "Por Que Seu Cabelo Não Absorve Tratamentos?",
      progress: 65,
      timeRemaining: "5:30",
      thumbnail: "from-purple-600 to-purple-800"
    },
    {
      moduleId: 2,
      lessonId: 1,
      moduleTitle: "O Arsenal da Rapidez",
      lessonTitle: "O Segredo da Escova 3 em 1",
      progress: 25,
      timeRemaining: "12:15",
      thumbnail: "from-pink-600 to-pink-800"
    }
  ];

  const completedLessons = [
    {
      moduleId: 1,
      lessonId: 1,
      moduleTitle: "O Segredo da Descoberta Capilar",
      lessonTitle: "O Mapa Escondido do Seu Cabelo",
      completedDate: "2 dias atrás",
      thumbnail: "from-purple-600 to-purple-800"
    },
    {
      moduleId: 1,
      lessonId: 2,
      moduleTitle: "O Segredo da Descoberta Capilar",
      lessonTitle: "O Teste Rápido de 1 Minuto",
      completedDate: "1 dia atrás",
      thumbnail: "from-purple-600 to-purple-800"
    }
  ];

  return (
    <div className="pb-20 md:pb-0 md:pl-64">
      <Navigation />
      
      <div className="p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Continuar Assistindo</h1>
          <p className="text-[#AFAFAF]">
            Retome de onde parou e continue sua jornada de transformação capilar
          </p>
        </div>

        {/* In Progress Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
            <Play className="w-5 h-5 text-[#FF00FF]" />
            <span>Em Progresso</span>
          </h2>
          
          {inProgressLessons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressLessons.map((lesson) => (
                <div
                  key={`${lesson.moduleId}-${lesson.lessonId}`}
                  className="group cursor-pointer"
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${lesson.thumbnail} p-6 h-48 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <p className="text-xs opacity-75 mb-1">{lesson.moduleTitle}</p>
                        <h3 className="text-lg font-bold mb-3 leading-tight">{lesson.lessonTitle}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {/* Progress Bar */}
                        <div>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span>{lesson.progress}% concluído</span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{lesson.timeRemaining} restantes</span>
                            </span>
                          </div>
                          <div className="w-full bg-black/30 rounded-full h-1.5">
                            <div 
                              className="bg-white rounded-full h-1.5 transition-all duration-500"
                              style={{ width: `${lesson.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1 w-fit">
                          <Play className="w-4 h-4" />
                          <span className="text-sm font-medium">Continuar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-8 text-center">
              <Play className="w-12 h-12 text-[#FF00FF] mx-auto mb-4 opacity-50" />
              <p className="text-[#AFAFAF]">Nenhuma aula em progresso. Comece a assistir!</p>
            </div>
          )}
        </div>

        {/* Completed Section */}
        <div>
          <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Aulas Concluídas</span>
          </h2>
          
          {completedLessons.length > 0 ? (
            <div className="space-y-4">
              {completedLessons.map((lesson) => (
                <div
                  key={`${lesson.moduleId}-${lesson.lessonId}`}
                  className="bg-[#1a1a1a] border border-[#333] rounded-xl p-4 hover:border-[#FF00FF]/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${lesson.thumbnail} flex items-center justify-center`}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-xs text-[#AFAFAF] mb-1">{lesson.moduleTitle}</p>
                      <h3 className="font-semibold mb-1">{lesson.lessonTitle}</h3>
                      <p className="text-xs text-green-500">Concluída {lesson.completedDate}</p>
                    </div>
                    
                    <div className="text-right">
                      <span className="text-sm text-[#FF00FF] font-medium">Revisar</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4 opacity-50" />
              <p className="text-[#AFAFAF]">Nenhuma aula concluída ainda. Volte a aprender mais! =)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
