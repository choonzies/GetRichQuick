import React from 'react';
import './Table.css'; // Import the CSS file

function Table({ columns, data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((colName, index) => (
            <th key={index} className="table-header">{colName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {data.map((value, index) => (
            <td key={index} className="table-cell">{value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
