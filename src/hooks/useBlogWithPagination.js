import { useQuery } from "@tanstack/react-query";
import { blogWithPagination } from "../services/apiBlog";

const useBlogWithPagination = (page) => {
  const { data, isLoading, error, isError } = useQuery({
    queryFn: () => blogWithPagination({ page }),
    queryKey: ["blogPage", page],
  });
  return { data, isError, error, isLoading };
};

export default useBlogWithPagination;
