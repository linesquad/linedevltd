import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../services/apiBlog";

const useGetAllBlog = () => {
  const { isError, isLoading, error, data } = useQuery({
    queryFn: getAllBlogs,
    queryKey: ["AllBlogs"],
  });

  return { isError, error, isLoading, data };
};

export default useGetAllBlog;
