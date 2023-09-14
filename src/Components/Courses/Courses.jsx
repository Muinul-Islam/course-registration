/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Courses.css";
import { useState } from "react";
import { BsBook } from "react-icons/bs";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [price, setPrice] = useState(0);
  const [totalCreditHours, setTotalCreditHours] = useState(0);
  const [remainingCreditHours, SetRemainingCreditHours] = useState(20);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleClicked = (course) => {
    const isCourseSelected = courses.find((item) => item.name === course.name);

    if (isCourseSelected) {
      return alert("Already In Your List");
    } else {
      const newPrice = price + course.price;
      const newCreditHours = totalCreditHours + course.credit_hours;

      if (newCreditHours <= 20) {
        setPrice(newPrice);
        setTotalCreditHours(newCreditHours);
        SetRemainingCreditHours(20 - newCreditHours);
        setCourses([...courses, course]);
      } else {
        alert("Credit Hours Exceeded!");
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="courses">
          <div className="card-container">
            {allCourses.map((course) => (
              <div className="card">
                <img className="card-img" src={course.img} alt="" />
                <h3>{course.name}</h3>
                <p>{course.details}</p>
                <div className="info">
                  <p>$ Price: {course.price}</p>
                  <div>
                    <p className="credit-icon">
                      <BsBook></BsBook>Credit: {course.credit_hours}hr
                    </p>
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
          <Cart
            courses={courses}
            price={price}
            totalCreditHours={totalCreditHours}
            remainingCreditHours={remainingCreditHours}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Courses;
