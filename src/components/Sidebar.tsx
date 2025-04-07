
import React from 'react';
import Logo from './Logo';
import { LayoutDashboard, BarChart2, Users, Briefcase, User, Settings, Activity, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type MenuItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
};

const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: LayoutDashboard, active: true },
  { name: 'Analytics', icon: BarChart2 },
  { name: 'Connect', icon: Users },
  { name: 'Dealroom', icon: Briefcase },
  { name: 'Profile', icon: User },
  { name: 'Settings', icon: Settings },
];

const Sidebar: React.FC = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return <MobileNavigation />;
  }

  return (
    <aside className="w-64 h-screen bg-sidebar fixed left-0 top-0 border-r border-vertx-gray flex flex-col">
      <div className="p-6">
        <Logo withText={true} />
      </div>
      
      <nav className="flex-1 mt-10">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className={cn(
                  "flex items-center gap-4 px-3 py-3 rounded-md text-white transition-colors hover:bg-vertx-gray",
                  item.active && "bg-vertx-gray"
                )}
              >
                <div className="relative">
                  <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-vertx-purple"></div>
                  <item.icon className="w-5 h-5" />
                </div>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-6">
        <a
          href="#"
          className="flex items-center gap-4 text-white/70 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

const MobileNavigation: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-sidebar border-t border-vertx-gray z-50">
      <div className="flex justify-around py-3">
        {menuItems.slice(0, 5).map((item) => (
          <a
            key={item.name}
            href="#"
            className={cn(
              "flex flex-col items-center px-2",
              item.active ? "text-vertx-purple" : "text-white/70"
            )}
          >
            <item.icon className="w-5 h-5 mb-1" />
            <span className="text-xs">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
