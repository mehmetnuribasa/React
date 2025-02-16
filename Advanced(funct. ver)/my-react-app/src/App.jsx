import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Button2 from './Button/Button2.jsx'
import ProfilePic from './ProfilePic/ProfilePic.jsx'
import Student from './Student/Student.jsx'
import Greeting from './Greeting/Greeting.jsx'
import List from './List/List.jsx'
import Counter from './Counter/Counter.jsx'
import Inputs from './Inputs/Inputs.jsx'
import ColorPicker from './ColorPicker/ColorPicker.jsx'
import FavoriteCar from './FavoriteCar/FavoriteCar.jsx'
import CarLists from './CarList/CarList.jsx'

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95},
                  {id: 2, name: "orange", calories: 45},
                  {id: 3, name: "banana", calories: 105},
                  {id: 4, name: "coconut", calories: 159},
                  {id: 5, name: "pineapple", calories: 37}];
  
  const vegetables = [{id: 6, name: "patatoes", calories: 110},
                      {id: 7, name: "celery", calories: 15},
                      {id: 8, name: "carrots", calories: 25},
                      {id: 9, name: "corn", calories: 63},
                      {id: 10, name: "brocoli", calories: 50}];


  return (
    // Must be only one div
    <>
      <Header />

      <Greeting isLoggedIn={true} username="Mehmet"></Greeting>

      <Button />
      <Button2 />
      <ProfilePic />
      <br /><hr />

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <br /><hr />

      <Food />
      <br /><hr />

      <Student name="Mehmet" age={25} isStudent={false}></Student>
      <Student name="Ali" age={15} isStudent={true}></Student>
      <Student></Student>
      <br /><hr />


      {fruits.length > 0 && <List items = {fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items = {vegetables} category="Vegetables"/>}
      <br /><br /><hr />

      <Counter />
      <br /><br /><hr />

      <Inputs></Inputs>
      <br /><br /><hr />

      <ColorPicker />
      <br /><br /><hr />

      <FavoriteCar />
      <br /><br /><hr />

      <CarLists></CarLists>
      <br /><br /><hr />

      <Footer />
    </>
  );
}

export default App
