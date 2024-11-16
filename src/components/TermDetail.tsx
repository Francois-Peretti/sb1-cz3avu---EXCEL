import React from 'react';
import { ExcelTerm } from '../data/excelTerms';
import { CheckCircle2, Lightbulb, ArrowRight, Link } from 'lucide-react';

interface TermDetailProps {
  term: ExcelTerm;
  onClose: () => void;
}

export default function TermDetail({ term, onClose }: TermDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{term.term}</h2>
              <span className="inline-block mt-2 text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {term.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600">{term.description}</p>
        </div>

        <div className="p-6 space-y-6">
          {term.example && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">Exemple</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <code className="text-sm font-mono text-gray-800 whitespace-pre-wrap">
                  {term.example}
                </code>
              </div>
            </div>
          )}

          {term.steps && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Étapes à suivre
              </h3>
              <ol className="space-y-2">
                {term.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {term.tips && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Conseils
              </h3>
              <ul className="space-y-2">
                {term.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {term.relatedTerms && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Link className="w-5 h-5 text-blue-500" />
                Termes associés
              </h3>
              <div className="flex flex-wrap gap-2">
                {term.relatedTerms.map((relatedTerm) => (
                  <span
                    key={relatedTerm}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {relatedTerm}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}