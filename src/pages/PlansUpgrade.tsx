
import Navigation from "@/components/Navigation";
import { Crown, Check, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface PlansUpgradeProps {
  userPlan: string;
  setUserPlan: (plan: string) => void;
}

const PlansUpgrade = ({ userPlan, setUserPlan }: PlansUpgradeProps) => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Bronze",
      price: "Vitalício",
      priceValue: "Gratuito",
      color: "from-orange-600 to-orange-800",
      features: [
        "Módulo 1: O Segredo da Descoberta Capilar",
        "Módulo 2: O Arsenal da Rapidez",
        "Módulo 3: A Blindagem",
        "15 aulas em vídeo",
        "Acesso básico ao conteúdo"
      ],
      current: userPlan === "Bronze"
    },
    {
      name: "Prata",
      price: "R$ 47,00",
      priceValue: "mensal",
      color: "from-gray-400 to-gray-600",
      popular: false,
      features: [
        "Tudo do Plano Bronze",
        "O Manual Secreto do Liso de 5 Minutos",
        "Técnicas de alisamento ultra-rápido",
        "Métodos profissionais exclusivos",
        "Suporte por email"
      ],
      current: userPlan === "Prata"
    },
    {
      name: "Ouro",
      price: "R$ 97,00",
      priceValue: "mensal",
      color: "from-yellow-500 to-yellow-700",
      popular: true,
      features: [
        "Tudo do Plano Prata",
        "Blindagem Térmica: O Guia Definitivo",
        "O Segredo do Liso Duradouro",
        "Proteção contra calor infernal",
        "Liso por 3 dias sem retoques",
        "Suporte prioritário"
      ],
      current: userPlan === "Ouro"
    },
    {
      name: "Diamante",
      price: "R$ 127,00",
      priceValue: "mensal",
      color: "from-purple-500 to-purple-700",
      features: [
        "Acesso a TUDO",
        "Todos os conteúdos atuais",
        "Futuras atualizações incluídas",
        "Suporte prioritário via WhatsApp",
        "Acesso antecipado a novos módulos",
        "Consultoria personalizada mensal"
      ],
      current: userPlan === "Diamante"
    }
  ];

  const handlePlanSelect = (planName: string) => {
    if (planName === userPlan) return;
    
    // Simulate plan upgrade
    setUserPlan(planName);
    localStorage.setItem('userPlan', planName);
    
    toast({
      title: `Plano ${planName} ativado!`,
      description: "Seu plano foi atualizado com sucesso. Aproveite os novos conteúdos!",
    });
    
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="pb-20 md:pb-0 md:pl-64">
      <Navigation />
      
      <div className="p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/more-content')}
            className="mb-4 text-[#AFAFAF] hover:text-white hover:bg-[#333]/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para conteúdos
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Escolha Seu Plano
            </h1>
            <p className="text-[#AFAFAF] text-lg">
              Desbloqueie todo o potencial da sua transformação capilar
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                plan.current 
                  ? 'ring-2 ring-[#FF00FF] bg-gradient-to-br from-[#1a1a1a] to-[#333]'
                  : 'bg-[#1a1a1a] border border-[#333] hover:border-[#FF00FF]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#FF00FF] to-[#FF00FF]/80 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </div>
                </div>
              )}
              
              {plan.current && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Plano Atual
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                  <Crown className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.priceValue !== "Gratuito" && (
                    <span className="text-[#AFAFAF] ml-1">/{plan.priceValue}</span>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#FF00FF] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#AFAFAF]">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handlePlanSelect(plan.name)}
                disabled={plan.current}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.current
                    ? 'bg-[#333] text-[#AFAFAF] cursor-not-allowed'
                    : `bg-gradient-to-r ${plan.color} hover:scale-105 text-white`
                }`}
              >
                {plan.current ? 'Plano Atual' : `Escolher ${plan.name}`}
              </Button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#333]/50 border border-[#FF00FF]/30 rounded-2xl p-8">
            <Sparkles className="w-12 h-12 text-[#FF00FF] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Por que fazer upgrade?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2 text-[#FF00FF]">Conteúdo Exclusivo</h4>
                <p className="text-[#AFAFAF] text-sm">
                  Acesse técnicas profissionais que não estão disponíveis em lugar nenhum
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#FF00FF]">Resultados Garantidos</h4>
                <p className="text-[#AFAFAF] text-sm">
                  Métodos testados e aprovados por milhares de mulheres
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#FF00FF]">Suporte Completo</h4>
                <p className="text-[#AFAFAF] text-sm">
                  Tire suas dúvidas diretamente com nossa equipe especializada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansUpgrade;
