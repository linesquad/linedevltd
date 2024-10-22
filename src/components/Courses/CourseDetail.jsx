import { useState } from "react";
import { useParams } from "react-router-dom";
import Section from "../Section";
import { benefits } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/MovingBorders";

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
      <div className="container relative z-2 flex flex-col w-full items-center">
        <h1 className="tiny:text-base smaller:text-lg text-3xl font-bold pb-6 text-center">
          {course.title}
        </h1>
        <p className="max-w-[600px] text-center pb-10 tiny:text-sm smaller:text-base text-lg sm:text-xl">
          {course.text}
        </p>

        {syllabus ? (
          <div className="flex flex-col w-full max-w-[800px]">
            <h2 className="text-2xl sm:text-3xl font-semibold pb-8 text-center">
              Syllabus:
            </h2>
            <div className="flex flex-col space-y-6">
              {Object.keys(syllabus).map((subject) => (
                <div
                  key={subject}
                  className="bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <div
                    onClick={() => toggleSubject(subject)}
                    className={`cursor-pointer text-xl font-bold text-center transition duration-300 ${
                      openSubject === subject
                        ? "text-indigo-600"
                        : "text-gray-800"
                    } hover:text-indigo-600`}
                  >
                    {subject.toUpperCase()}
                  </div>

                  <AnimatePresence>
                    {openSubject === subject && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-4"
                      >
                        {Object.keys(syllabus[subject]).map((week) => (
                          <div key={week} className="text-center">
                            <div
                              onClick={() => toggleWeek(week)}
                              className={`cursor-pointer text-lg font-semibold transition duration-300  ${
                                openWeek === week
                                  ? "text-indigo-500"
                                  : "text-gray-700"
                              } hover:text-indigo-500`}
                            >
                              {week}
                            </div>

                            <AnimatePresence>
                              {openWeek === week && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-3 ml-4 p-4 rounded-lg bg-white shadow-sm border border-gray-200"
                                >
                                  {Object.keys(syllabus[subject][week]).map(
                                    (lecture) => (
                                      <div key={lecture} className="mb-4">
                                        <p className="font-semibold text-gray-900">
                                          {
                                            syllabus[subject][week][lecture]
                                              .title
                                          }
                                        </p>
                                        <ul className="list-disc ml-5 text-gray-600">
                                          {syllabus[subject][week][
                                            lecture
                                          ].description.map((item, index) => (
                                            <li key={index}>{item}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center justify-center my-[20px]">
              <Button
                duration={3000}
                containerClassName="relative w-48 h-16"
                borderClassName="bg-blue-500"
              >
                Registration
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            Syllabus not available for this course.
          </div>
        )}
      </div>
    </Section>
  );
};

export default CourseDetail;
