import React from 'react';
import Table from 'rc-table';

import './style.css';

function TableWrapper({ columns, data }) {
  return (
    <Table
      rowKey='id'
      columns={columns}
      data={data}
      className="table"
      rowClassName="table-row"
      onHeaderRow={() => ({
        className: 'table-header-row'
      })}
    />
  );
}

export default TableWrapper;
