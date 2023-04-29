'use client';

import { useState } from 'react';
import { Cagories } from '../model/Categories.model';

interface ChildProps {
  categories: Cagories[];
}

export default function CategorySelect({ categories }: ChildProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-700">
        Category
      </label>
      <div className="mt-1 relative">
        <select
          id="category"
          name="category"
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          value={selectedCategory}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.nombre}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.95 7.95a.999.999 0 1 1-1.41 1.41l-2.54-2.54A.999.999 0 0 1 10 6.42V16a1 1 0 1 1-2 0V6.42a.999.999 0 0 1 .29-.71l2.54 2.54a.997.997 0 0 1 1.41 0c.39.39.39 1.02 0 1.41l-3.54 3.54a.999.999 0 1 1-1.41-1.41l3.54-3.54c.39-.39 1.02-.39 1.41 0z"/></svg>
        </div>
      </div>
    </div>
  );
}