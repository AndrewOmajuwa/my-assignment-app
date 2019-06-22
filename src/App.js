import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';



class App extends Component {

  //setting the initial state
  state = {data : [
    {
      name: "Ivel Z3",
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    {
      name: "Bally Astrocade",
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    {
      name: "Sord M200 Smart Home Computer",
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    {
      name: "Commodore 64",
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  ]}

  
  //adding updateSelection function to update the state
  updateSelection = (selectedItem) => {
    
     this.state.data.map(
      model => {
        if (model.name === selectedItem) {
          return this.setState({
            ...model
          })
        }     
        else {
          return model
        } 
      }
    )
  }

  //Adding onChange event handler to update state
  handleChange = (event) => {
    this.updateSelection(event.target.value)
  }

  //Adding function to add model option
  addModel = (model) => {
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: model
    })
  }

  //Adding handle Submit for adding model button
  handleSubmit = (event) => {
    console.log("EVENT IS HERE I HOPE",this.state)
    return this.addModel(this.state)
  }
 
  //rendering the items on screen
  render (){

    //Adding options function to set option values and names
    const options = this.state.data.map(model => 
      <option  key={model.name} value ={model.name}>{model.name} ({model.year})</option>)

    return (
      <div className="App">
       <h1>Models</h1>
       <p></p>
       <select onChange={this.handleChange}>
        <option >-- pick a model --</option>
        {options}
        </select>;
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}


export default connect()(App)
