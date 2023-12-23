import PropTypes from 'prop-types';

export default function SelectFilter({ categories, setCurCategory }) {
  return (
    <label>
      <span className="font-extrabold">Filter</span>
      <select name="selectedProjects" onChange={(e) => setCurCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>{category.displayName}</option>
        ))}
      </select>
    </label>
  );
}

SelectFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  setCurCategory: PropTypes.func.isRequired,
};