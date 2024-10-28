import supabase from "./supabase";

export const getAllBlogs = async () => {
  let { data: blog, error } = await supabase.from("blog").select("*");
  return { blog, error };
};
