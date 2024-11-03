import React from "react";
import useGetAllBlog from "../../hooks/useGetAllBlog";
import { toast } from "react-toastify";
import useDeleteBlog from "../../hooks/useDeleteBlog";
import supabase from "../../services/supabase";

const DeleteBlogs = () => {
  const { data, isLoading, error } = useGetAllBlog();
  const deleteMutation = useDeleteBlog();

  const handleDelete = async (id, imagePath) => {
    try {
      await deleteMutation.mutateAsync(id);

      const pathToDelete = imagePath.slice(73);
      const { error: imageError } = await supabase.storage
        .from("images")
        .remove([pathToDelete]);

      if (imageError) {
        toast.error("Failed to delete the blog image.");
      } else {
        toast.success("Blog and image deleted successfully.");
      }
    } catch (error) {
      toast.error("Failed to delete the blog: " + error.message);
    }
  };

  if (isLoading) return <h1 className="text-center text-xl">Loading ...</h1>;
  if (error) return <h1 className="text-center text-xl">Error...</h1>;

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-purple-700">
        Manage Your Blogs
      </h1>
      <ul className="list-disc list-inside">
        {data.blog.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-white rounded-lg shadow-lg p-4 mb-4 border border-purple-200"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt="Blog Thumbnail"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-purple-800">
                  {item.blog_name}
                </h2>
                <h3 className="text-sm text-gray-600">{item.author}</h3>
                <h4 className="text-sm text-purple-500">{item.category}</h4>
                <p className="text-gray-700 mt-1">{item.description}</p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(item.id, item.image)}
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteBlogs;
