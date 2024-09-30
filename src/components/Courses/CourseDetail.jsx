import { useParams } from "react-router-dom";
import Section from "../Section";

const CourseDetail = () => {
  const { courseTitle } = useParams();
  return (
    <Section id="courseDetail">
      <div className=" container relative z-2">
        <div>{courseTitle}</div>
      </div>
    </Section>
  );
};

export default CourseDetail;
