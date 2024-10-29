import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useBlogWithPagination from "../../hooks/useBlogWithPagination";
import Section from "../Section";
import CategoryBlog from "./CategoryBlog";
import Pagination from "./Pagination";

const AllBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page")) || 1;
  const initialSortOrder = queryParams.get("sort") || "newest";
  const [page, setPage] = useState(initialPage);
  const [sortOrder, setSortOrder] = useState(initialSortOrder);
  const { data, totalPages, isError, isLoading, error } = useBlogWithPagination(
    page,
    sortOrder
  );

  useEffect(() => {
    if (sortOrder !== initialSortOrder) {
      setPage(1);
      navigate(`?page=1&sort=${sortOrder}`, { replace: true });
    }
  }, [sortOrder, initialSortOrder, navigate]);

  useEffect(() => {
    navigate(`?page=${page}&sort=${sortOrder}`, { replace: true });
  }, [page, sortOrder, navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (!data || !data.blog) {
    return <p>No Data!</p>;
  }

  const truncateText = (text, length = 20) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  return (
    <Section className="flex flex-col gap-4">
      <div className="tiny:pl-0 smaller:pl-0 pl-2 sm:pl-3 md:pl-4">
        <CategoryBlog sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <div
        className="container relative z-2 grid tiny:grid-cols-1 smaller:grid-cols-1 grid-cols-1 sm:grid-cols-2
       md:grid-cols-3 lg:grid-cols-4 gap-4 pt-1 sm:pt-2"
      >
        {data.blog.map((item) => (
          <ul key={item.id} className="border-2 rounded-md p-2">
            <li
              className="flex flex-col tiny:text-base smaller:text-lg text-xl sm:text-[22px] md:text-xl items-center tiny:gap-1
            tiny:font-medium text-white"
            >
              <img
                src={item.image}
                alt={item.blog_name}
                className="tiny:max-w-52"
              />
              <span className="md:hidden pt-1">
                {truncateText(item.blog_name)}
              </span>
              <span className="hidden md:block pt-1">
                {truncateText(item.blog_name, 14)}
              </span>
              <hr className="w-full my-2 border-gray-400" />
              <span>{truncateText(item.author, 16)}</span>
            </li>
          </ul>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </Section>
  );
};

export default AllBlog;
