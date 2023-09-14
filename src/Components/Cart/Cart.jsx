/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./Cart.css";
const Cart = ({ courses, price, totalCreditHours, remainingCreditHours }) => {
  console.log(courses);
  return (
    <div>
      <h3 className="heading">
        Credit Hour Remaining {remainingCreditHours} hr
      </h3>
      <hr className="hr" />
      <h2 className="course-name">Course Name</h2>
      {courses.map((course, index) => (
        <li className="list-item" key={index}>
          {index + 1} {course.name}
        </li>
      ))}
      <hr className="hr" />
      <p>Total Credit Hour : {totalCreditHours}</p>
      <hr className="hr" />
      <p>Total Price : {price} USD</p>
    </div>
  );
};

export default Cart;
