import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { excelTerms, ExcelTerm } from '../data/excelTerms';
import SearchSuggestions from './SearchSuggestions';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onTermSelect?: (term: ExcelTerm) => void;
}

export default function SearchBar({ onSearch, onTermSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<ExcelTerm[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (query.length >= 2) {
      const filtered = excelTerms.filter(term =>
        term.term.toLowerCase().includes(query.toLowerCase()) ||
        term.description.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleTermSelect = (term: ExcelTerm) => {
    setQuery(term.term);
    setShowSuggestions(false);
    if (onTermSelect) {
      onTermSelect(term);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl relative group">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
          placeholder="Recherchez une fonction Excel (ex: VLOOKUP, graphique...)"
          className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 pl-14 shadow-lg hover:shadow-xl focus:shadow-xl bg-white/80 backdrop-blur-sm"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 w-6 h-6" />
      </div>
      <SearchSuggestions
        suggestions={suggestions}
        onSelect={handleTermSelect}
        visible={showSuggestions}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </form>
  );
}