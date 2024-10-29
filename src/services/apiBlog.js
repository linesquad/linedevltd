import supabase from "./supabase";

export const blogWithPagination = async ({ page }) => {
  const itemsPerPage = 4;
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  const { data: blog, error: blogError } = await supabase
    .from("blog")
    .select("*")
    .range(from, to);

  const { count, error: countError } = await supabase
    .from("blog")
    .select("*", { count: "exact", head: true });

  const error = blogError || countError;

  return { blog, totalCount: count, error };
};
