
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard if authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212]">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Cronograma Capilar Inteligente</h1>
        <p className="text-xl text-[#AFAFAF]">Carregando...</p>
      </div>
    </div>
  );
};

export default Index;
