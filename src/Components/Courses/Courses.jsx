/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Courses.css";
import { useState } from "react";
import { BsBook } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

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
      return toast.error("Already In Your List");
    } else {
      const newPrice = price + course.price;
      const newCreditHours = totalCreditHours + course.credit_hours;

      if (newCreditHours <= 20) {
        setPrice(newPrice);
        setTotalCreditHours(newCreditHours);
        SetRemainingCreditHours(20 - newCreditHours);
        setCourses([...courses, course]);
      } else {
        toast.error("Credit Hours Exceeded!");
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
                <h3 className="card-heading">{course.name}</h3>
                <p className="details">{course.details}</p>
                <div className="info">
                  <p>$ Price: {course.price}</p>
                  <div>
                    <p className="credit-icon">
                      <BsBook></BsBook>Credit: {course.credit_hours}hr
                    </p>
                  </div>
                </div>
                <div className="btn-container">
                  <button onClick={() => handleClicked(course)} className="btn">
                    Select
                  </button>
                </div>
                <Toaster />
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
