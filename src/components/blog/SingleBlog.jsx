import { useParams } from "react-router-dom";
import Section from "../Section";
import useBlogWithId from "../../hooks/useBlogWithId";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";
import LatestBlogs from "./LatestBlogs";

const SingleBlog = () => {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useBlogWithId(id);

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

  return (
    <Section>
      <div
        className=" container relative z-2 grid  tiny:gap-8 grid-cols-1 smaller:gap-10
        sm:grid-cols-[2fr_1fr] gap-12 sm:gap-4 "
      >
        <div className="flex flex-col tiny:gap-2 smaller:gap-3 gap-4">
          <span className="tiny:text-xl smaller:text-[22px] text-2xl">
            {data.blog.blog_name}
          </span>
          <img
            src={data.blog.image}
            alt={data.blog.blog_name}
            className="tiny:max-w-60 smaller:max-w-68 max-w-68 sm:max-w-68 md:max-w-68 lg:max-w-68"
          />
          <div className="flex tiny:justify-between smaller:justify-between justify-around">
            <span className="tiny:text-sm smaller:text-base text-xl">
              {data.blog.author}
            </span>
            <span className="tiny:text-sm smaller:text-base text-xl">
              {data.blog.category}
            </span>
          </div>
          <p className="tiny:text-lg smaller:text-[19px] text-[22px]">
            {data.blog.description}
          </p>
        </div>
        <div
          className="tiny:text-xl smaller:text-[22px] text-2xl flex flex-col tiny:gap-2 smaller:gap-3 gap-4
        "
        >
          <span>Latest 3 Blog</span>
          <LatestBlogs skipId={id} />
        </div>
      </div>
    </Section>
  );
};

export default SingleBlog;
