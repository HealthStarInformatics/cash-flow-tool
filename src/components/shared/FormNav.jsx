import React from "react";
import { Link } from "react-router-dom";

const FormNav = props => {
  return (
    <div className="form-nav">
      {props.back && (
        <Link to={props.back}>
          <button className="launch-tool" type="submit">
            &lt; Back
          </button>
        </Link>
      )}

      {props.next && (
        <Link to={props.next}>
          <button className="launch-tool" type="submit">
            Next &gt;
          </button>
        </Link>
      )}
    </div>
  );
};

export default FormNav;
