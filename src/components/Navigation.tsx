
import { Link, useLocation } from "react-router-dom";
import { Home, Play, Grid3X3, Settings } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Principal" },
    { path: "/continue-watching", icon: Play, label: "Continuar" },
    { path: "/more-content", icon: Grid3X3, label: "Mais" },
    { path: "/settings", icon: Settings, label: "Config" },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-[#333] z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center space-y-1 py-2 px-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-[#FF00FF] bg-[#FF00FF]/10"
                    : "text-[#AFAFAF] hover:text-white"
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sidebar Navigation */}
      <nav className="hidden md:block fixed left-0 top-0 h-full w-64 bg-[#1a1a1a] border-r border-[#333] z-40">
        <div className="p-6">
          <h1 className="text-xl font-bold text-[#FF00FF] mb-8">
            Cronograma Capilar
          </h1>
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-[#FF00FF] bg-[#FF00FF]/10"
                      : "text-[#AFAFAF] hover:text-white hover:bg-[#333]/50"
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
