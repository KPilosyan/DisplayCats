import React from 'react';

function CategorySidebar({ categories, selectedCategory, onCategoryClick }) {
  return (
    <div className="category-sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li
            key={category.id}
            className={category.id === selectedCategory ? 'active' : ''}
            onClick={() => onCategoryClick(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySidebar;
