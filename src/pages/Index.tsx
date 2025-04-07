
import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import ProfileCard from '@/components/ProfileCard';
import FoundedCompaniesCard from '@/components/FoundedCompaniesCard';
import ExperienceCard from '@/components/ExperienceCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-vertx-dark text-white">
      <Sidebar />
      <div className={cn("min-h-screen", !isMobile && "ml-64")}>
        <TopNav />
        
        <main className={cn(
          "p-6 max-w-5xl mx-auto",
          isMobile ? "pb-24" : "mt-4"
        )}>
          <h1 className="text-3xl font-bold mb-6">Overview</h1>
          
          <div className="grid grid-cols-1 gap-6 mb-6">
            <ProfileCard />
          </div>
          
          <div className={cn(
            "grid gap-6", 
            isMobile ? "grid-cols-1" : "grid-cols-2"
          )}>
            <FoundedCompaniesCard />
            <ExperienceCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
