import React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../services/supabase";
import usePutBlog from "../../hooks/usePostAllBlog";
import { toast } from "react-toastify";
const Blogs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, erorr } = usePutBlog();

  const onSubmit = async (data) => {
    let imageUrl = null;

    const imageName = `${uuidv4()}_${data.image[0].name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("images")
      .upload(imageName, data.image[0]);

    if (uploadError) {
      console.error("Error uploading image:", uploadError);
      return;
    }
    imageUrl = uploadData.path;
    if (erorr) {
      toast.error("Failed to add the blog.");
    } else {
      mutate({
        image: `https://pgempqnaniewpqwylrhh.supabase.co/storage/v1/object/public/images/${imageUrl}`,
        author: data.author,
        blog_name: data.blogName,
        description: data.description,
        category: data.category,
      });
      toast.success("Blog added successfully.");
    }

    reset({
      image: null,
      author: "",
      blogName: "",
      description: "",
      category: "news",
    });
  };

  return (
    <div className="pt-5 flex flex-col items-center px-5 md:px-10">
      <h1 className="text-3xl font-semibold text-purple-700 mb-6">
        Upload Blog
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-purple-50 shadow-lg p-8 rounded-lg w-full max-w-md flex flex-col text-black gap-6"
      >
        <div>
          <label className="block text-purple-700 font-medium mb-2">
            Image
          </label>
          <input
            type="file"
            {...register("image", { required: "Image is required." })}
            className="block w-full text-purple-700 border border-purple-300 rounded-lg p-2.5 bg-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}{" "}
        </div>
        <div>
          <label className="block text-purple-700 font-medium mb-2">
            Author
          </label>
          <input
            type="text"
            {...register("author", { required: "Author is required." })}
            className="w-full border border-purple-300 rounded-lg p-2.5 bg-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500"
            placeholder="Author's name"
          />
          {errors.author && (
            <p className="text-red-500">{errors.author.message}</p>
          )}{" "}
        </div>
        <div>
          <label className="block text-purple-700 font-medium mb-2">
            Blog Name
          </label>
          <input
            type="text"
            {...register("blogName", { required: "Blog name is required." })}
            className="w-full border border-purple-300 rounded-lg p-2.5 bg-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500"
            placeholder="Title of the blog"
          />
          {errors.blogName && (
            <p className="text-red-500">{errors.blogName.message}</p>
          )}{" "}
        </div>
        <div>
          <label className="block text-purple-700 font-medium mb-2">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required.",
            })}
            className="w-full border border-purple-300 rounded-lg p-2.5 bg-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500"
            placeholder="Write a short description..."
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}{" "}
        </div>
        <div>
          <label className="block text-purple-700 font-medium mb-2">
            Category
          </label>
          <select
            {...register("category", { required: "Category is required." })}
            className="w-full border border-purple-300 rounded-lg p-2.5 bg-white placeholder-purple-400 focus:ring-2 focus:ring-purple-500"
          >
            <option value="news">News</option>
            <option value="tutorial">Courses</option>
          </select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}{" "}
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-medium rounded-lg p-2.5 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Blogs;
