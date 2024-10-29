import { useQuery } from "@tanstack/react-query";
import { blogWithPagination } from "../services/apiBlog";

const useBlogWithPagination = (page, sortOrder) => {
  const { data, isLoading, error, isError } = useQuery({
    queryFn: () => blogWithPagination({ page, sortOrder }),
    queryKey: ["blogPage", page, sortOrder],
  });

  return {
    data,
    isError,
    error,
    isLoading,
    totalPages: data ? Math.ceil(data.totalCount / 4) : 0,
  };
};

export default useBlogWithPagination;
