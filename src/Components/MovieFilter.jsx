import Dropdown from "./DropDown";
import { FILTER_DATA } from "../utility/data.js";
import MovieContext from "../context/MovieContext";
import { useContext } from "react";

function MovieFilter() {

    const {filters,setFilters} = useContext(MovieContext)

    const handleFilterChange = (name, value) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    [name]: value
  }));
};
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {Object.values(FILTER_DATA).map((filter) => (
        <Dropdown
          key={filter.name}
          label={filter.label}
          name={filter.name}
          options={filter.options}
          value={filters[filter.name]}
          onChange={(e) => 
          handleFilterChange(filter.name,e.target.value)
        
            }  />
      ))}

    </div>
  );
}

export default MovieFilter;
