import { useQuery } from "@tanstack/react-query";
import { blogWithPagination } from "../services/apiBlog";

const useBlogWithPagination = (page, sortOrder, category) => {
  const { data, isLoading, error, isError } = useQuery({
    queryFn: () => blogWithPagination({ page, sortOrder, category }),
    queryKey: ["blogPage", page, sortOrder, category],
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
