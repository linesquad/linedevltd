import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import GetCourse from "./pages/GetCourse";
import Connect from "./pages/Connect";
import PageNotFound from "./pages/PageNotFound";
import CourseDetail from "./components/Courses/CourseDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />

          <Route path="getCourse" element={<GetCourse />} />
          <Route path="getCourse/:courseTitle" element={<CourseDetail />} />

          <Route path="connect" element={<Connect />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
