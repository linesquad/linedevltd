const Pagination = ({ page, setPage, totalPages }) => {
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className="container justify-center flex">
      <ul className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <li
              key={pageNumber}
              className={`cursor-pointer p-2 rounded ${
                page === pageNumber ? "bg-[#2c2c2c] text-white" : "bg-[#6b6b6b]"
              }`}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Pagination;
