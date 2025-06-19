
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  FolderTree, 
  Mail, 
  ShoppingCart, 
  Users, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Package, label: 'Products', path: '/products' },
  { icon: FolderTree, label: 'Categories', path: '/categories' },
  { icon: ShoppingCart, label: 'Orders', path: '/orders' },
  { icon: Users, label: 'Customers', path: '/customers' },
  { icon: Mail, label: 'Newsletter', path: '/newsletter' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      "bg-gradient-to-b from-[#0fa1b8] to-[#06b6d4] text-white transition-all duration-300 flex flex-col h-screen shadow-xl",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold">Rabt Admin</h1>
              <p className="text-sm text-cyan-100">Skincare E-Commerce</p>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center px-3 py-3 rounded-lg transition-all duration-200 group",
                isActive 
                  ? "bg-white/20 text-white shadow-lg border border-white/20" 
                  : "text-cyan-100 hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon size={20} className="shrink-0" />
              {!isCollapsed && (
                <span className="ml-3 font-medium">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        {!isCollapsed && (
          <div className="text-center">
            <p className="text-xs text-cyan-200">© 2024 Rabt Admin</p>
          </div>
        )}
      </div>
    </div>
  );
};
