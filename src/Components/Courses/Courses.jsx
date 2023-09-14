/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Courses.css";
import { useState } from "react";
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleClicked = (course) => {};

  return (
    <div>
      <div className="container">
        <div className="courses">
          <div className="card-container">
            {courses.map((course) => (
              <div className="card">
                <img className="card-img" src={course.img} alt="" />
                <h3>{course.name}</h3>
                <p>{course.details}</p>
                <div className="info">
                  <p>$ Price: {course.price}</p>
                  <div>
                    <p>Credit: {course.credit_hours}hr</p>
                  </div>
                </div>
                <button onClick={() => handleClicked(course)} className="btn">
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="cart">
          <Cart courses={courses}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Courses;
