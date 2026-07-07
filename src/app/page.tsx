'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/preloader';
import Notification from '../components/notification';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Services from '../components/services';
import Team from '../components/team';
import Workflow from '../components/workflow';
import Footer from '../components/footer';
import LaunchDrawer from '../components/launchdrawer';
export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

  const showNotification = (message: string, type: string) => {
    setToast({ message, type, isVisible: true });
    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#09070F] text-white overflow-x-hidden relative">
      {/* Background Liquid Blur Effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Notification message={toast.message} type={toast.type} isVisible={toast.isVisible} />
      <Navbar onLaunchClick={() => setIsDrawerOpen(true)} />
      <Hero onOpenDrawer={() => setIsDrawerOpen(true)} />
      <Services onNotify={showNotification} />
      <Team />
      <Workflow />
      <Footer />
    

      {/* Vibrant Background Liquid Blurs to refract through the glass */}
<div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
<div className="fixed bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
<div className="fixed top-[40%] left-[40%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      

      <LaunchDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} onNotify={showNotification} />
    </main>
  );
}

