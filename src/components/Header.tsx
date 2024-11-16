import React from 'react';
import { Table2 } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'lexique') => void;
  currentView: 'home' | 'lexique';
}

export default function Header({ onNavigate, currentView }: HeaderProps) {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3"
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl shadow-lg">
              <Table2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Excel Helper
            </h1>
          </button>
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => onNavigate('home')}
              className={`transition-colors duration-300 ${
                currentView === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Accueil
            </button>
            <button 
              onClick={() => onNavigate('lexique')}
              className={`transition-colors duration-300 ${
                currentView === 'lexique' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Lexique
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}