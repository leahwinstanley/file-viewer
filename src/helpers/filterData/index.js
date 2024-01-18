const filterData = ({ data, filterString }) => {
  const filteredData = data.filter((item) => {
    if (item.name.toLowerCase().includes(filterString.toLowerCase())) {
      return true;
    }
    return false;
  });

  return filteredData;
};

export default filterData;
