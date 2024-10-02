import { useState } from "react";
import { useParams } from "react-router-dom";
import Section from "../Section";
import { benefits } from "../../constants";

const CourseDetail = () => {
  const { courseTitle } = useParams();
  const [openSubject, setOpenSubject] = useState(null);
  const [openWeek, setOpenWeek] = useState(null);

  const formatTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const course = benefits.find(
    (item) => formatTitle(item.title) === courseTitle
  );

  if (!course) {
    return (
      <Section id="courseDetail">
        <div className="container relative z-2">
          <div>Course not found</div>
        </div>
      </Section>
    );
  }

  const { syllabus } = course;

  const toggleSubject = (subject) => {
    setOpenSubject(openSubject === subject ? null : subject);
    setOpenWeek(null);
  };

  const toggleWeek = (week) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  return (
    <Section id="courseDetail">
      <div className="container relative z-2">
        <h1 className="text-2xl font-bold pb-6">{course.title}</h1>
        <p>{course.text}</p>

        {syllabus ? (
          <div>
            <h2 className="">Syllabus:</h2>
            {Object.keys(syllabus).map((subject) => (
              <div key={subject} className="mb-4">
                <div
                  onClick={() => toggleSubject(subject)}
                  className="cursor-pointer font-bold"
                >
                  {subject.toUpperCase()}
                </div>

                {openSubject === subject && (
                  <div className="ml-4">
                    {Object.keys(syllabus[subject]).map((week) => (
                      <div key={week}>
                        <div
                          onClick={() => toggleWeek(week)}
                          className="cursor-pointer text-lg"
                        >
                          {week}
                        </div>

                        {openWeek === week && (
                          <div className="ml-6">
                            {Object.keys(syllabus[subject][week]).map(
                              (lecture) => (
                                <div key={lecture} className="mb-2">
                                  <p className="font-semibold">
                                    {syllabus[subject][week][lecture].title}
                                  </p>
                                  <ul className="list-disc ml-4">
                                    {syllabus[subject][week][
                                      lecture
                                    ].description.map((item, index) => (
                                      <li key={index}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="">Syllabus not available for this course.</div>
        )}
      </div>
    </Section>
  );
};

export default CourseDetail;
