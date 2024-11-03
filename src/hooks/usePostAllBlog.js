import { useMutation } from "@tanstack/react-query";
import { putAllBlogs } from "../services/apiBlog";
import { toast } from "react-toastify";
const usePutBlog = () => {
  return useMutation({
    mutationFn: putAllBlogs,
    onSuccess: () => {
      toast.success("Blog added successfully.");
    },
    onError: () => {
      toast.error("Failed to add the blog.");
    },
  });
};

export default usePutBlog;
