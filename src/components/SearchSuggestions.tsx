import React from 'react';
import { ExcelTerm } from '../data/excelTerms';

interface SearchSuggestionsProps {
  suggestions: ExcelTerm[];
  onSelect: (term: ExcelTerm) => void;
  visible: boolean;
}

export default function SearchSuggestions({ suggestions, onSelect, visible }: SearchSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
      <ul className="max-h-64 overflow-y-auto">
        {suggestions.map((term) => (
          <li key={term.term}>
            <button
              onClick={() => onSelect(term)}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 flex items-start group"
            >
              <div>
                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {term.term}
                </span>
                <span className="ml-2 text-sm text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  {term.category}
                </span>
                <p className="text-sm text-gray-600 mt-1">{term.description}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}