import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../services/apiBlog";

const useBlogWithId = (id) => {
  const { isError, isLoading, error, data } = useQuery({
    queryFn: () => getBlogById(id),
    queryKey: ["blog", id],
  });

  return { isError, error, isLoading, data };
};

export default useBlogWithId;
