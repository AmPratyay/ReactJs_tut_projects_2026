import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId  } = useParams();

  return (
    <div>
      <h1>This is course details: data {courseId}</h1>
    </div>
  );
};

export default CourseDetails;