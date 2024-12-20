import Select from "react-select";

const stateOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
];

const categoryOptions = [
  { value: "", label: "All Category" },
  { value: "news", label: "News" },
  { value: "courses", label: "Courses" },
];

const customStyles = {
  menu: (provided) => ({
    ...provided,
    position: "absolute",
    boxShadow: "0 20px 54px 0 rgba(0,0,0,0.5)",
    right: 0,
    zIndex: 1000,
    borderRadius: "0.375rem",
    backgroundColor: "#1f1f1f",
  }),
  control: (provided, state) => ({
    ...provided,
    minHeight: "40px",
    border: "1px solid #6b7280",
    borderRadius: "0.375rem",
    boxShadow: state.isFocused ? "0 0 0 1px #4f46e5" : null,
    "&:hover": {
      border: "1px solid #4f46e5",
    },
    backgroundColor: "#2c2c2c",
    color: "#f9fafb",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#f9fafb",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9ca3af",
    cursor: "pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    whiteSpace: "nowrap",
    color: state.isSelected ? "#ffffff" : "#f9fafb",
    backgroundColor: state.isFocused ? "#4f46e5" : "#2c2c2c",
    "&:hover": {
      backgroundColor: "#3b82f6",
    },
    cursor: "pointer",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const CategoryBlog = ({
  sortOrder,
  setSortOrder,
  selectedCategory,
  setCategory,
}) => {
  const handleTimeChange = (selectedOption) => {
    setSortOrder(selectedOption.value);
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  return (
    <div className="container relative flex items-center tiny:justify-between tiny:gap-2 gap-10 ">
      <div>
        <label
          htmlFor="time-select"
          className="block mb-2 tiny:text-sm font-medium text-white smaller:text-[15px] text-lg sm:text-xl"
        >
          Sort by Time
        </label>
        <Select
          id="time-select"
          value={stateOptions.find((option) => option.value === sortOrder)}
          onChange={handleTimeChange}
          options={stateOptions}
          styles={customStyles}
          menuPlacement="auto"
          classNamePrefix="select"
          className="basic-single tiny:text-sm smaller:text-base text-lg sm:text-xl md:text-2xl "
        />
      </div>
      <div>
        <label
          htmlFor="category-select"
          className="block mb-2 font-medium text-white tiny:text-sm smaller:text-[15px] text-lg sm:text-xl"
        >
          Sort by Category
        </label>
        <Select
          id="category-select"
          value={categoryOptions.find(
            (option) => option.value === selectedCategory
          )}
          onChange={handleCategoryChange}
          options={categoryOptions}
          styles={customStyles}
          menuPlacement="auto"
          classNamePrefix="select"
          className="basic-single tiny:text-sm smaller:text-base text-lg sm:text-xl md:text-2xl"
        />
      </div>
    </div>
  );
};

export default CategoryBlog;
