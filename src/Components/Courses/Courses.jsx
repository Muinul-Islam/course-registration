import { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Courses.css";
const Courses = () => {
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="courses">
          <div className="card-container">
            <div className="card">
              <img
                className="card-img"
                src="https://i.ibb.co/6g2kcKT/c-Programming.png"
                alt=""
              />
              <h3>C Programming</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                maxime.
              </p>
              <div className="info">
                <p>$ Price: 15000</p>
                <div>
                  <p>Credit: 1hr</p>
                </div>
              </div>
              <button className="btn">Select</button>
            </div>
          </div>
        </div>
        <div className="cart">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Courses;
