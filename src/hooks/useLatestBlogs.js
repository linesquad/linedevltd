import { useQuery } from "@tanstack/react-query";
import { getLatestBlogs } from "../services/apiBlog";

const useLatestBlogs = (skipId) => {
  const { isError, error, isLoading, data } = useQuery({
    queryKey: ["latestBlog", skipId],
    queryFn: () => getLatestBlogs(skipId),
  });

  return { isError, error, isLoading, data };
};

export default useLatestBlogs;
