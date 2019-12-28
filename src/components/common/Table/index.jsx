import React from 'react';
import Table from 'rc-table';

function TableWrapper({ columns, data }) {
  return (
    <Table
      rowKey='id'
      columns={columns}
      data={data}
    />
  );
}

export default TableWrapper;
