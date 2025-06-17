
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ModuleLessons from "./pages/ModuleLessons";
import LessonViewer from "./pages/LessonViewer";
import ContinueWatching from "./pages/ContinueWatching";
import MoreContent from "./pages/MoreContent";
import Settings from "./pages/Settings";
import PlansUpgrade from "./pages/PlansUpgrade";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userPlan, setUserPlan] = useState('Bronze');

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const savedPlan = localStorage.getItem('userPlan');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    if (savedPlan) {
      setUserPlan(savedPlan);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-[#121212] text-white">
            {!isAuthenticated ? (
              <Login onLogin={() => setIsAuthenticated(true)} />
            ) : (
              <Routes>
                <Route path="/" element={<Dashboard userPlan={userPlan} />} />
                <Route path="/module/:moduleId" element={<ModuleLessons />} />
                <Route path="/lesson/:moduleId/:lessonId" element={<LessonViewer />} />
                <Route path="/continue-watching" element={<ContinueWatching />} />
                <Route path="/more-content" element={<MoreContent userPlan={userPlan} />} />
                <Route path="/settings" element={<Settings userPlan={userPlan} />} />
                <Route path="/plans" element={<PlansUpgrade userPlan={userPlan} setUserPlan={setUserPlan} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
