import React, { useState } from 'react';
import { excelTerms } from '../data/excelTerms';
import { BookOpen } from 'lucide-react';
import TermDetail from './TermDetail';
import type { ExcelTerm } from '../data/excelTerms';

export default function LexiqueView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTerm, setSelectedTerm] = useState<ExcelTerm | null>(null);
  
  const categories = ['all', ...new Set(excelTerms.map(term => term.category))];
  const filteredTerms = selectedCategory === 'all' 
    ? excelTerms 
    : excelTerms.filter(term => term.category === selectedCategory);

  return (
    <>
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-8">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Lexique Excel
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'Tous' : category}
            </button>
          ))}
        </div>

        <div className="grid gap-6">
          {filteredTerms.map(term => (
            <button
              key={term.term}
              onClick={() => setSelectedTerm(term)}
              className="p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-200 text-left w-full"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{term.term}</h3>
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {term.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{term.description}</p>
              {term.example && (
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm font-mono text-gray-800">{term.example}</p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {selectedTerm && (
        <TermDetail term={selectedTerm} onClose={() => setSelectedTerm(null)} />
      )}
    </>
  );
}