
import { NavLink, useLocation } from 'react-router-dom';
import { Home, MapPin, Shield, Settings } from 'lucide-react';

export const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: MapPin, label: 'Trip', path: '/trip' },
    { icon: Shield, label: 'Emergency', path: '/emergency' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-lavender-200/50 z-50">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          
          return (
            <NavLink
              key={path}
              to={path}
              className={`flex flex-col items-center justify-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-lavender-600 bg-lavender-50' 
                  : 'text-gray-500 hover:text-lavender-500 hover:bg-lavender-50/50'
              }`}
            >
              <Icon 
                size={20} 
                className={`transition-all duration-200 ${
                  isActive ? 'scale-110' : 'scale-100'
                }`} 
              />
              <span className={`text-xs font-medium ${
                isActive ? 'text-lavender-700' : 'text-gray-600'
              }`}>
                {label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
