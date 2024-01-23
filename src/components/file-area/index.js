import React, { useState } from "react";

// components
import Sort from '../sort';
import FileList from '../file-list';

// styles
import styles from "./index.module.scss";

const FileArea = () => {
  const [sortBy, setSortBy] = useState(null);

  return (
    <div className={styles.fileArea}>
        <Sort setSortBy={setSortBy} />
      <div className={styles.fileList}>
        <FileList sortBy={sortBy} />
      </div>
    </div>
  );
};

export default FileArea;
