import supabase from "./supabase";

export const blogWithPagination = async ({ page, sortOrder, category }) => {
  const itemsPerPage = 4;
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  let query = supabase
    .from("blog")
    .select("*")
    .order("created_at", { ascending: sortOrder === "oldest" })
    .range(from, to);

  if (category) {
    query = query.eq("category", category);
  }

  const { data: blog, error: blogError } = await query;

  let countQuery = supabase.from("blog").select("id", { count: "exact" });

  if (category) {
    countQuery = countQuery.eq("category", category);
  }

  const { count, error: countError } = await countQuery;

  const error = blogError || countError;

  return { blog, totalCount: count, error };
};

export const getBlogById = async (id) => {
  let { data: blog, error } = await supabase
    .from("blog")
    .select("*")
    .eq("id", id)
    .single();
  return { blog, error };
};

export const getLatestBlogs = async (skipId = null) => {
  const query = supabase
    .from("blog")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (skipId) {
    query.neq("id", skipId);
  }

  const { data: blogs, error } = await query;
  return { blogs, error };
};
