import supabase from "./supabase";

export const blogWithPagination = async ({ page }) => {
  const itemsPerPage = 4;
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  let { data: blog, error } = await supabase
    .from("blog")
    .select("*")
    .range(from, to);

  return { blog, error };
};
