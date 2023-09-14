/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./Cart.css";
const Cart = ({ courses, price, totalCreditHours, remainingCreditHours }) => {
  console.log(courses);
  return (
    <div>
      <h3>Credit Hour Remaining {remainingCreditHours} hr</h3>
      <hr />
      <h2>Course Name</h2>
      {courses.map((course, index) => (
        <li className="list-item" key={index}>
          {index + 1} {course.name}
        </li>
      ))}
      <hr />
      <h4>Total Credit Hour : {totalCreditHours}</h4>
      <hr />
      <h4>Total Price : {price} USD</h4>
    </div>
  );
};

export default Cart;
