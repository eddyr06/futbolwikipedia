import React from "react";

const NotFound = (props) => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>
        If you found this, you probably typed the wrong URL, press here to go
        back.
      </p>
      <button onClick={props.history.goBack}>Go Back</button>
    </div>
  );
};

export default NotFound;
