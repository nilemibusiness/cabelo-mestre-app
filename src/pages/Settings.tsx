
import Navigation from "@/components/Navigation";
import { User, Shield, HelpCircle, MessageCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SettingsProps {
  userPlan: string;
}

const Settings = ({ userPlan }: SettingsProps) => {
  const [showFAQ, setShowFAQ] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userPlan');
    window.location.reload();
  };

  const handleWhatsAppSupport = () => {
    const message = encodeURIComponent("Preciso de ajuda e suporte para o aplicativo Cronograma Capilar Inteligente");
    window.open(`https://wa.me/5562991800605?text=${message}`, '_blank');
  };

  const faqItems = [
    {
      question: "Como funciona o cronograma capilar?",
      answer: "O cronograma capilar é um método de cuidados que alterna entre hidratação, nutrição e reconstrução dos fios, seguindo uma programação específica para manter a saúde do cabelo."
    },
    {
      question: "Posso fazer o alisamento em casa?",
      answer: "Sim! Nosso método ensina técnicas seguras para realizar alisamento profissional em casa, com proteção térmica adequada e técnicas que preservam a saúde dos fios."
    },
    {
      question: "Como alterar meu plano?",
      answer: "Acesse a seção 'Mais Conteúdos' e clique em 'Alterar Plano' para ver todas as opções disponíveis e fazer o upgrade."
    },
    {
      question: "O conteúdo funciona para todos os tipos de cabelo?",
      answer: "Sim! Nossos métodos são adaptáveis para todos os tipos de cabelo, desde lisos até crespos. Ensinamos como identificar seu tipo de fio e aplicar as técnicas corretas."
    }
  ];

  return (
    <div className="pb-20 md:pb-0 md:pl-64">
      <Navigation />
      
      <div className="p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Configurações</h1>
          <p className="text-[#AFAFAF]">
            Gerencie sua conta e preferências
          </p>
        </div>

        <div className="space-y-8">
          {/* Account Information */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <User className="w-5 h-5 text-[#FF00FF]" />
              <span>Informações da Conta</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-[#333]">
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-[#AFAFAF] text-sm">cliente@nilemi.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-[#333]">
                <div>
                  <p className="font-medium">Status da Conta</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-green-500 text-sm">Ativo</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium">Plano Atual</p>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-[#FF00FF]" />
                    <p className="text-[#FF00FF] text-sm font-medium">Plano {userPlan}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/plans')}
                  className="border-[#FF00FF] text-[#FF00FF] hover:bg-[#FF00FF] hover:text-white"
                >
                  Alterar Plano
                </Button>
              </div>
            </div>
          </div>

          {/* Help and Support */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-[#FF00FF]" />
              <span>Ajuda e Suporte</span>
            </h2>
            
            <div className="space-y-4">
              <Button
                variant="ghost"
                className="w-full justify-start h-auto p-4 hover:bg-[#333]/50"
                onClick={() => setShowFAQ(!showFAQ)}
              >
                <div className="text-left">
                  <p className="font-medium">Perguntas Frequentes</p>
                  <p className="text-[#AFAFAF] text-sm">Encontre respostas para dúvidas comuns</p>
                </div>
              </Button>
              
              {showFAQ && (
                <div className="bg-[#333]/30 rounded-xl p-4 space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-[#333] pb-4 last:border-b-0">
                      <h4 className="font-medium mb-2">{item.question}</h4>
                      <p className="text-[#AFAFAF] text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              )}
              
              <Button
                variant="ghost"
                className="w-full justify-start h-auto p-4 hover:bg-[#333]/50"
                onClick={handleWhatsAppSupport}
              >
                <MessageCircle className="w-5 h-5 mr-3 text-green-500" />
                <div className="text-left">
                  <p className="font-medium">Falar com Suporte</p>
                  <p className="text-[#AFAFAF] text-sm">Entre em contato via WhatsApp</p>
                </div>
              </Button>
            </div>
          </div>

          {/* Logout */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-6">
            <Button
              variant="ghost"
              className="w-full justify-start h-auto p-4 text-red-400 hover:bg-red-500/10 hover:text-red-400"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5 mr-3" />
              <div className="text-left">
                <p className="font-medium">Sair da Conta</p>
                <p className="text-[#AFAFAF] text-sm">Fazer logout do aplicativo</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
