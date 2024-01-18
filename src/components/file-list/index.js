import React, { useState } from "react";

// components
import File from "../file";

// helpers
import sortData from "../../helpers/sortData.js";

import exampleData from "../../static/data/example-data.json";
import filterData from "../../helpers/filterData/index.js";


const FileList = ({ sortBy, filter }) => {
  const [active, setActive] = useState(null);
  const data = [...exampleData]

  // sort the data by the chosen sort method
  // this is a bit temperamental, it doesn't always work correctly the first time you click to sort by size/date
  // todo: figure out why ^ and fix it
  const sortedData = sortData({ data, sortBy });
  const filteredData = filter ? filterData(sortedData, filter) : sortedData;

  // todo: sort files in folders too

  return (
    <div data-testid="file-list">
      {filteredData.map((item, i) => {
        return (
          <File
            data={item}
            key={i}
            handleClick={() => {
              if (active === i) {
                setActive(null);
              } else {
                setActive(i);
              }
            }}
            active={active === i}
          />
        );
      })}
    </div>
  );
};

export default FileList;
