import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComp = ({
   dataLength,
   rowsInPage,
   activePage,
   setActivePage,
   isFiltered,
   filteredDataLength,
}) => {
   let pagesAmount;
   if (isFiltered) {
      pagesAmount = Math.ceil(filteredDataLength / rowsInPage);
   } else {
      pagesAmount = Math.ceil(dataLength / rowsInPage);
   }
   let pages = [];
   for (let i = 0; i < pagesAmount; i++) {
      pages.push(
         <Pagination.Item
            key={i}
            active={activePage === i + 1}
            onClick={() => {
               setActivePage(i + 1);
            }}
         >
            {i + 1}
         </Pagination.Item>
      );
   }

   return (
      <div className="pagination">
         <Pagination>{pages}</Pagination>
      </div>
   );
};

export default PaginationComp;
