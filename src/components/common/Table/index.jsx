import React from 'react';
import Table from 'rc-table';
import PropTypes from 'prop-types';

import Pagination from '../Pagination';
import './style.css';

function TableWrapper({ columns, data, pageCount, onPageChange, className }) {
  return (
    <div className={className}>
      <Table
        rowKey="id"
        columns={columns}
        data={data}
        className="table-wrapper"
        rowClassName="table-wrapper-row"
        onHeaderRow={() => ({
          className: 'table-wrapper-header-row'
        })}
      />
      <Pagination
        pageCount={pageCount}
        onPageChange={onPageChange}
      />
    </div>
  );
}

TableWrapper.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default TableWrapper;
