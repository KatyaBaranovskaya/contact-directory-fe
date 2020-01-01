import React from 'react';
import ReactPaginate from 'react-paginate';

import './style.css';

function PaginationWrapper({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={onPageChange}
      containerClassName={"pagination"}
      previousLinkClassName={"previous_page"}
      nextLinkClassName={"next_page"}
      disabledClassName={"disabled"}
      activeClassName={"active"}
    />
  );
}

export default PaginationWrapper;
