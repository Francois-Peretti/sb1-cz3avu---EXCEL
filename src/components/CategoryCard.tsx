import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  onClick: () => void;
}

export default function CategoryCard({ title, description, icon: Icon, gradient, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left w-full group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </button>
  );
}