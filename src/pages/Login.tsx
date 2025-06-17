
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Sparkles, Lock } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      if (email === "cliente@nilemi.com" && password === "nilemi") {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userPlan', 'Bronze');
        onLogin();
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo ao Cronograma Capilar Inteligente",
        });
      } else {
        toast({
          title: "Credenciais inválidas",
          description: "Verifique seu email e senha",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-[#FF00FF]/20 to-[#FF00FF]/10 border border-[#FF00FF]/30">
              <Sparkles className="w-8 h-8 text-[#FF00FF]" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-[#AFAFAF] bg-clip-text text-transparent mb-2">
            Cronograma Capilar Inteligente
          </h1>
          <p className="text-[#AFAFAF]">
            Domine o alisamento e cuidado capilar em casa
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl bg-[#1a1a1a] border-[#333] text-white placeholder:text-[#AFAFAF] focus:border-[#FF00FF] focus:ring-[#FF00FF]/20"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl bg-[#1a1a1a] border-[#333] text-white placeholder:text-[#AFAFAF] focus:border-[#FF00FF] focus:ring-[#FF00FF]/20"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FF00FF] to-[#FF00FF]/80 hover:from-[#FF00FF]/90 hover:to-[#FF00FF]/70 text-white font-semibold transition-all duration-300 transform hover:scale-[1.02]"
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-[#AFAFAF]">
            <Lock className="w-4 h-4" />
            <span className="text-sm">Exclusivo para membros</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
