import React, {Component} from 'react'

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term:''}

    /*------  EXPLANATION BELOW ------------------*/
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({term:event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a 5-day forecast in your cities"
          className="form-control"
          value={this.state.term}

          //If we leave the onChange property like the following line:
          //  onChange={this.onInputChange}
          //we get an error: Cannot read property 'setState' of undefined. This happens because when we pass the event handler like in the line above, the "this"
          //refers to a different context, not the component state. If we used the arrow function like before, it works: onChange={(event) => this.onInputChange(event)}.
          //However, we will take a different approach: we bind the context of onInputChange. The for explanation for line this.onInputChange = this.onInputChange.bind(this) is:
          // On the RHS it says, this (our instance of SearchBar) has a function called onInputChange. So bind that function to the this (the instance of the search bar) and replace
          // the existing function on the RHS. We are overriding our local method.
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>

        </span>
      </form>
    )
  }

}
