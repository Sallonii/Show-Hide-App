// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameVisible: false,
    isLastNameVisible: false,
    firstName: null,
    lastName: null,
  }

  displayFirstName = () => {
    const {isFirstNameVisible, firstName} = this.state
    if (isFirstNameVisible === false) {
      this.setState({isFirstNameVisible: true, firstName: 'Joe'})
    } else {
      this.setState({isFirstNameVisible: false, firstName: null})
    }
  }

  displayLastName = () => {
    const {isLastNameVisible, lastName} = this.state
    if (isLastNameVisible === false) {
      this.setState({isLastNameVisible: true, lastName: 'Jonas'})
    } else {
      this.setState({isLastNameVisible: false, lastName: null})
    }
  }

  render() {
    const {
      isFirstNameVisible,
      isLastNameVisible,
      firstName,
      lastName,
    } = this.state
    return (
      <div className="bg">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-alignment">
          <div className="card-item">
            <button
              type="button"
              className="btn"
              onClick={this.displayFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstNameVisible && <p className="nameStyle">{firstName}</p>}
          </div>
          <div className="card-item">
            <button
              type="button"
              className="btn"
              onClick={this.displayLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastNameVisible && <p className="nameStyle">{lastName}</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
