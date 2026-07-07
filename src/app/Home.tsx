import Hero from '../components/hero';
import { LiquidCard } from '../components/liquidcard';
import Navbar from '../components/navbar';



export default function Home() {
    return (
        <main className="min-h-screen bg-[#09070F] text-white overflow-x-hidden relative">
            {/* Background Liquid Blur Effect */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none"></div>

            <Navbar />
            <Hero />

            {/* Vibrant Background Liquid Blurs to refract through the glass */}
            <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="fixed bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
            <div className="fixed top-[40%] left-[40%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

            {/* Services Section Wrapper */}
            <section id="services" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                        Our Core Services
                    </h2>
                    <p className="text-gray-400 mt-4 tracking-wide">Crafting ecosystems tailored for modern innovation.</p>
                </div>

                {/* 3-Column Liquid Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <LiquidCard>
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">Branding</h3>
                        <p className="text-gray-400 mt-3 text-sm leading-relaxed">Logo & Visiting Card Design built around premium structural visual identities.</p>
                    </LiquidCard>

                    <LiquidCard>
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">Generative AI</h3>
                        <p className="text-gray-400 mt-3 text-sm leading-relaxed">Bespoke automated models and intelligent context engineering built for your stack.</p>
                    </LiquidCard>

                    <LiquidCard>
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">Development</h3>
                        <p className="text-gray-400 mt-3 text-sm leading-relaxed">High-performance production web interfaces and fully-scaled applications.</p>
                    </LiquidCard>
                </div>
            </section>
        </main>
    );
}
