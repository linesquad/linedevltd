import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useBlogWithPagination from "../../hooks/useBlogWithPagination";
import Section from "../Section";
import CategoryBlog from "./CategoryBlog";
import Pagination from "./Pagination";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";

const AllBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page")) || 1;
  const initialSortOrder = queryParams.get("sort") || "newest";
  const initialCategory = queryParams.get("category") || "";

  const [page, setPage] = useState(initialPage);
  const [sortOrder, setSortOrder] = useState(initialSortOrder);
  const [category, setCategory] = useState(initialCategory);

  const { data, totalPages, isError, isLoading, error } = useBlogWithPagination(
    page,
    sortOrder,
    category
  );

  useEffect(() => {
    const updatedParams = new URLSearchParams();
    updatedParams.set("page", page);
    updatedParams.set("sort", sortOrder);
    updatedParams.set("category", category);

    navigate(`?${updatedParams.toString()}`, { replace: true });
  }, [page, sortOrder, category, navigate]);

  useEffect(() => {
    setPage(1);
  }, [sortOrder, category]);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loading width="500px" height="auto" />;
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center">
        <Error width="500px" height="auto" />
        <span className="text-red-400 font-bold tiny:text-xs smaller:text-sm text-base sm:text-lg md:text-xl">
          {error.message}
        </span>
      </div>
    );
  }

  if (!data || !data.blog) {
    return <p>No Data!</p>;
  }

  const truncateText = (text, length = 20) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  return (
    <Section className="flex flex-col gap-4">
      <div className="tiny:pl-0 smaller:pl-0 pl-2 sm:pl-3 md:pl-4">
        <CategoryBlog
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          selectedCategory={category}
          setCategory={setCategory}
        />
      </div>
      <div
        className="container relative z-2 grid tiny:grid-cols-1 smaller:grid-cols-1 grid-cols-1 sm:grid-cols-2
       md:grid-cols-3 lg:grid-cols-4 gap-4 pt-1 sm:pt-2"
      >
        {data.blog.map((item) => (
          <ul key={item.id} className="border-2 rounded-md p-2 cursor-pointer">
            <li
              className="flex flex-col tiny:text-base smaller:text-lg text-xl sm:text-[22px] md:text-xl items-center tiny:gap-1
            tiny:font-medium text-white "
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
