import React from "react";

// styles
import styles from "./index.module.scss";

/*
** todo:
** this isn't very robust
** if a folder has another folder inside, this would not display the contents of the second folder
*/

const File = ({ data, active, handleClick }) => {
  return (
    <div className={styles.fileWrapper}>
      <div
        className={`${styles.file} ${(data.files && active) && styles.fileActive} ${data.files && styles.hasFolder}`}
        onClick={handleClick}
        data-testid="file"
        role="button"
      >
        <p>
          File Name: <span data-testid="name">{data.name}</span>
          <br />
          File Type: {data.type} {data.files && ` - (${data.files.length})`} <br />
          {data.size && `${data.size}MB`}
          <br />
          {data.added && `Date Added: ${data.added}`}
        </p>
      </div>

      <div className={`${styles.childFiles} ${active && styles.show}`}>
        <div className={styles.mask}>
          {data.files &&
            data.files.map((file, i) => {
              return (
                <div className={styles.file} key={i}>
                  <p>
                  File Name: <span data-testid="child-name">{file.name}</span>
                    <br />
                File type: {file.type}
                    <br />
                    {file.size && file.size}
                    <br />
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default File;
