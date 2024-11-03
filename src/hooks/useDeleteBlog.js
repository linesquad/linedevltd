import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog } from "../services/apiBlog";

const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["AllBlogs"]);
    },
    onError: (error) => {
      console.error("Error deleting blog:", error);
    },
  });
};

export default useDeleteBlog;
