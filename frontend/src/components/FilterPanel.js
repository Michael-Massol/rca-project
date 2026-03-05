import React from 'react';
function FilterPanel({ currentFilter, onFilterChange }) {
  const filters = ['all', 'active', 'done', 'today'];
  return (
    <div className="filter-panel">
      {filters.map(f => (
        <button key={f} className={currentFilter === f ? 'active' : ''} onClick={() => onFilterChange(f)}>
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
export default FilterPanel;
