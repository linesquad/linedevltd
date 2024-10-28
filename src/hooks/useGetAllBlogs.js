import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../services/apiBlog";

const useGetAllBlogs = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryFn: getAllBlogs,
    queryKey: ["allblog"],
  });

  return { data, isError, error, isLoading };
};

export default useGetAllBlogs;
