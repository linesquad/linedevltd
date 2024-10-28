import useGetAllBlogs from "../../hooks/useGetAllBlogs";
import Section from "../Section";

const AllBlog = () => {
  const { data, isError, isLoading, error } = useGetAllBlogs();
  console.log(data);
  return (
    <Section>
      <div className=" container relative z-2"></div>
    </Section>
  );
};

export default AllBlog;
