import React, { useState } from 'react';
import { Table2, LineChart, Calculator, Filter, Wand2, BookOpen, Sparkles } from 'lucide-react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryCard from './components/CategoryCard';
import LexiqueView from './components/LexiqueView';
import { ExcelTerm } from './data/excelTerms';

const categories = [
  {
    title: 'Lexique Excel',
    description: 'Découvrez tous les termes et fonctions Excel expliqués simplement',
    icon: BookOpen,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Tableaux et Données',
    description: 'Apprenez à manipuler les tableaux, tris et filtres',
    icon: Table2,
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Graphiques',
    description: 'Créez des visualisations percutantes',
    icon: LineChart,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Formules',
    description: 'Maîtrisez les formules essentielles',
    icon: Calculator,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Filtres Avancés',
    description: 'Exploitez les filtres et tableaux croisés dynamiques',
    icon: Filter,
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Macros et VBA',
    description: 'Automatisez vos tâches répétitives',
    icon: Wand2,
    gradient: 'from-violet-500 to-purple-500'
  }
];

function App() {
  const [selectedView, setSelectedView] = useState<'home' | 'lexique'>('home');

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const handleTermSelect = (term: ExcelTerm) => {
    console.log('Selected term:', term);
  };

  const handleCategoryClick = (category: string) => {
    if (category === 'Lexique Excel') {
      setSelectedView('lexique');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header onNavigate={(view) => setSelectedView(view)} currentView={selectedView} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedView === 'home' ? (
          <>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-blue-600 mr-2" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Votre guide Excel interactif
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trouvez rapidement des explications détaillées pour toutes vos manipulations Excel
              </p>
            </div>

            <div className="flex justify-center mb-16">
              <SearchBar onSearch={handleSearch} onTermSelect={handleTermSelect} />
            </div>

            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent rounded-3xl -z-10" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Explorez par catégorie
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.title}
                    title={category.title}
                    description={category.description}
                    icon={category.icon}
                    gradient={category.gradient}
                    onClick={() => handleCategoryClick(category.title)}
                  />
                ))}
              </div>
            </section>

            <section className="mt-16">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 shadow-xl">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Besoin d'aide personnalisée ?
                  </h3>
                  <p className="text-blue-100 mb-8">
                    Notre assistant intelligent est là pour vous guider pas à pas dans vos manipulations Excel
                  </p>
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                    Démarrer l'assistant
                  </button>
                </div>
              </div>
            </section>
          </>
        ) : (
          <LexiqueView />
        )}
      </main>
    </div>
  );
}

export default App;