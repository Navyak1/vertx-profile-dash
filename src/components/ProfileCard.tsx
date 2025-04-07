
import React from 'react';
import { Linkedin, Mail, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

const ProfileCard: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-vertx-gray rounded-xl p-6 flex flex-col items-center text-center">
      {isMobile && (
        <div className="w-24 h-24 bg-vertx-gray-light rounded-md mb-4"></div>
      )}
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl font-bold">Mr A</h2>
          {isMobile && (
            <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          )}
        </div>
        <p className="text-gray-400">Co-Founder & CEO @Vertx</p>
        <Badge variant="outline" className="bg-transparent">
          Entrepreneur
        </Badge>
      </div>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
