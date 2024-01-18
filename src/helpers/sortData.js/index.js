// function, takes a data object and a sort method and returns the sorted data
const sortData = ({ data, sortBy }) => {
  const sortedData = data.sort((a, b) => {
    if (sortBy === "name") {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    } else if (sortBy === "size") {
      if (a.size && b.size) {
        return a.size - b.size;
      }
      return false;
    } else if (sortBy === "date") {
      if (a.added && b.added) {
        return a.added - b.added;
      }
      return false;
    } 
  });
  
  return sortedData;
};

export default sortData;