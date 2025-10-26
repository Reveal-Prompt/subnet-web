import { AlertTriangle } from 'lucide-react';

export default function ConstructionBanner() {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-primary via-primary-800 to-primary bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite] shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3 text-white font-semibold">
          <AlertTriangle className="w-5 h-5 animate-bounce" />
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base animate-pulse">
              🚧 SITE UNDER CONSTRUCTION 🚧
            </span>
          </div>

          <AlertTriangle className="w-5 h-5 animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>


      <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent bg-[length:50%_100%] animate-[slide_2s_linear_infinite]" />

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slide {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}