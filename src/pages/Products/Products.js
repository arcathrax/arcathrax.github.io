import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  return (
    <div>
      <table className="downloadsTable">
        <tr>
          <th>name</th>
          <th>description</th>
          <th>download</th>
        </tr>

        <tr>
          <td>ExoDist</td>
          <td>audio plugin</td>
          <td>
            <a href={"https://github.com/arcathrax/ExoDist/releases"}>
              latest version
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Products;
