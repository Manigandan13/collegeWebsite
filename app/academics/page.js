import { FaGraduationCap, FaClipboardList } from "react-icons/fa";
import Courses from "../Components/Courses";

const page = () => {
  return (
    <div className="px-6 py-12 mt-6">
      {/* Academics Title */}
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">Academics at SSS College</h2>

      {/* Introduction */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-700 mb-4">
          At SSS College, we offer a variety of academic programs aimed at equipping students with the knowledge and skills needed to excel in their chosen careers. Our academic structure includes both undergraduate and postgraduate courses, with a focus on building strong theoretical foundations and practical experiences.
        </p>
      </div>
      <Courses/>
    </div>
  );
};

export default page;
 
