/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./Cart.css";
const Cart = ({ courses }) => {
  console.log(courses);
  return (
    <div>
      <h3>Credit Hour Remaining 7 hr</h3>
      <hr />
      <h2>Course Name</h2>
      {courses.map((course, index) => (
        <li className="list-item" key={index}>
          {index + 1} {course.name}
        </li>
      ))}
      <hr />
      <h4>Total Credit Hour : 13</h4>
      <hr />
      <h4>Total Price : 48000 USD</h4>
    </div>
  );
};

export default Cart;
