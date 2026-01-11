import React from 'react';
import Header from '../organisms/Header';
import BottomNav from '../organisms/BottomNav';

interface MainLayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, hideHeader = false }) => {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative">
      <div className="flex flex-col min-h-screen">
        {!hideHeader && <Header />}
        <main className="flex-1 pb-20 overflow-y-auto no-scrollbar">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

export default MainLayout;
