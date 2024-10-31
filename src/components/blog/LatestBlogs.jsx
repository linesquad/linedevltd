import { useNavigate } from "react-router-dom";
import useLatestBlogs from "../../hooks/useLatestBlogs";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";

const LatestBlogs = ({ skipId }) => {
  const navigate = useNavigate();
  const { data, isError, error, isLoading } = useLatestBlogs(skipId);

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

  if (!data || !data.blogs) {
    return <p>No Data!</p>;
  }

  const truncateText = (text, length = 20) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  return (
    <div className="flex flex-col gap-6">
      {data.blogs.map((item) => (
        <div
          key={item.id}
          className="border-2 rounded-md p-2 cursor-pointer "
          onClick={() => navigate(`/blog/${item.id}`)}
        >
          <img src={item.image} alt={item.blog_name} />
          <span className="md:hidden pt-1 tiny:text-base smaller:text-lg text-xl sm:text-sm">
            {truncateText(item.blog_name)}
          </span>
          <span className="hidden md:block pt-1 md:text-base">
            {truncateText(item.blog_name, 14)}
          </span>
          <hr className="w-full my-2 border-gray-400" />
          <span className="tiny:text-base smaller:text-lg text-xl sm:text-sm md:text-base">
            {truncateText(item.author, 16)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LatestBlogs;
