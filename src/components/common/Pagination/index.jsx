import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

function Pagination({ pageCount, onPageChange, className }) {
  return (
    <ReactPaginate
      previousLabel="&laquo;"
      nextLabel="&raquo;"
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={onPageChange}
      containerClassName={classNames('pagination', className)}
      pageClassName="pagination__page-item"
      previousClassName="pagination__previous-item"
      nextClassName="pagination__next-item"
      breakClassName="pagination__break-item"
      pageLinkClassName="pagination__page-link"
      previousLinkClassName="pagination__previous-link"
      nextLinkClassName="pagination__next-link"
      breakLinkClassName="pagination__break-link"
      disabledClassName="disabled"
      activeClassName="active"
    />
  );
}

Pagination.propTypes = {
  className: PropTypes.string,
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
