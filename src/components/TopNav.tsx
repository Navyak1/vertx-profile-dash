
import React from 'react';
import { Activity, LogOut, MoreHorizontal, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { useIsMobile } from '@/hooks/use-mobile';

type Tab = {
  name: string;
  active?: boolean;
};

const tabs: Tab[] = [
  { name: 'Overview', active: true },
  { name: 'Portfolio' },
  { name: 'Experience' },
  { name: 'Media' },
];

const TopNav: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <header className={cn("bg-vertx-dark border-b border-vertx-gray", isMobile ? "pt-4" : "ml-64")}>
      {isMobile && (
        <div className="flex items-center justify-between px-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-vertx-gray flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <Logo withText={false} size="sm" />
          <Menu className="w-6 h-6" />
        </div>
      )}
      
      <div className="flex items-center justify-between px-6 pb-4">
        <nav className={cn("flex space-x-8", isMobile && "overflow-x-auto hide-scrollbar w-full pb-1")}>
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href="#"
              className={cn(
                "font-medium py-3 border-b-2 whitespace-nowrap transition-colors",
                tab.active
                  ? "border-vertx-purple text-white"
                  : "border-transparent text-gray-400 hover:text-white hover:border-gray-500"
              )}
            >
              {tab.name}
            </a>
          ))}
        </nav>
        
        {!isMobile && (
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Activity className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default TopNav;
