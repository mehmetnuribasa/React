import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {

  // Actually this constructor is not required new versions.
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     //categories is an array that holds objects.
  //     categories: [
  //       //These are objects.
  //       { categoryID: 1, categoryName: "Beverages" },
  //       { categoryID: 2, categoryName: "Condiments" }
  //     ]
  //   };
  // }


  state = {
    //categories is an array that holds objects.
    categories: [
      //These are objects.
      { categoryID: 1, categoryName: "Beverages" },
      { categoryID: 2, categoryName: "Condiments" }
    ],

    currentCategory: ""
  };

  // variable = 1;
  //Arrow function. ()=> . These funct. actually is a variable, but its type is funct.
  //We can use normal funct. but because 'this' represents the Component (due to inheritance), must always bind normal funct.
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  };


  render() {
    return (
      <div>
        {/* the 'this' word represents the Component, not the CategoryList in javascript.*/}
        <h3>{this.props.info.title}</h3>

        <ListGroup>

          {
            // map funct. is a loop.
            this.state.categories.map(tempCategory => (
              // react wants the key ID that seperate each elements.
              //onClick is an event.
              <ListGroupItem onClick={() => this.changeCategory(tempCategory)} key={tempCategory.categoryID}>
                {tempCategory.categoryName}
              </ListGroupItem>
            ))
          }

        </ListGroup>

        <h4>{this.state.currentCategory}</h4>

      </div>
    )
  }
}
