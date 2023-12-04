3 Projects Features

1. 9 cards are here containing image, name, details, price, credit and a select button in the left side and right side there is a cart which contain all the calculation part.

2. If you click on the select button the name of the card will be added to the cart on the right side in a ascending order.

3. After clicking on select button it will also calculate and will also show the total price and total credit hour . It will also show the remaining credit hour.

Discussing the states of my assignment projects:

- First of all created a component folder which have two component folder named Courses and Cart . They have Components named Courses.jsx and Cart.jsx and their associated CSS file. Courses.jsx file is directly linked to the App.jsx file.

- Now, On the Courses.jsx file I import all the necessary dependencies and declared all the useStates i needed.

- Then, Used useEffect to fetch the data from the json fake data('data.json') which i created earlier. Those data are stored in the allCourses state variable.

- I created a function to handle all the functionalities of the button in handleClicked function. It is used to compare and show the results to the cart. It calculate the remaining hour , total credit hour and the total price and set them to the useStates and then those are passed through the props.

- Also i implement the react-hot-toast if it is being tried to add the courses more then once and if remaining credit hours is less then zero.

- In the return section of the Courses.jsx component there is a map function which is implemented on allCourses for render the each course. It will be triggered whenever the select button is clicked.

- Then i pass those data as objects to the component named Cart.jsx . This component is used to show the remaining hour , course name , total credit hour and total price to the cart.


Live link: http://course-registration-with-react.surge.sh/
