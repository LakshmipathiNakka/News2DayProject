import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {
    isIntro: true,
    isSignUp: false,
    isThankYou: false,
  }

  renderTQ = () => {
    this.setState({isIntro: false, isSignUp: false, isThankYou: true})
  }

  onClickSignUp = () => {
    this.setState({isIntro: false, isSignUp: true, isThankYou: false})
  }

  renderIntro = () => (
    <div>
      <img
        className="image"
        alt="img"
        src="https://www.linkedin.com/dms/prv/vid/D5606AQGa26YvkAFKIw/messaging-attachmentFile/0/1697645404997?m=AQIzkD8GuCPxaAAAAYtDjTY8ZlKx5Kqn3fV9w0Hsyn_O1aIeIAnhvg-7aw&ne=1&v=beta&t=8jWoASxttPU7Jux7yhgMgWaabLoAvfr_eHM3mNE9E7k"
      />
      <div className="intro-container">
        <h2 className="heading-2">
          re<span className="span-para">Q</span>
        </h2>
        <h1 className="main-Heading">
          Real Estate Investing Information That Matters To You.
        </h1>
        <p className="para">
          Limited to the San Francisco Bay Area -- Join our BETA!
        </p>
        <button type="button">SIGN UP WITH LINKEDIN</button>
        <button onClick={this.onClickSignUp} type="button">
          SIGN IN
        </button>
      </div>
    </div>
  )

  renderSignUp = () => (
    <div className="intro-container">
      <img
        className="search-img"
        alt="search"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxcqPqU6RMD4Vzx4eLW5HrnFetOWx5Lwqiw&usqp=CAU"
      />
      <p className="para para-1">
        Please confirm or edit your contact information,so that we can notify
        you when you are approved for our BETA
      </p>
      <form className="form-container ">
        <div className="input-container">
          <label className="label-text" htmlFor="name">
            NAME
          </label>
          <input
            placeholder="Enter Name"
            className="input-bar"
            id="name"
            type="text"
          />
        </div>
        <div className="input-container">
          <label className="label-text" htmlFor="name">
            EMAIL ADDRESS
          </label>
          <input
            placeholder="Enter Email Address"
            className="input-bar"
            id="name"
            type="text"
          />
        </div>
        <div className="input-container">
          <label className="label-text" htmlFor="name">
            PHONE NUMBER
          </label>
          <input
            placeholder="Type a Phone number "
            className="input-bar"
            id="name"
            type="text"
          />
        </div>
      </form>
      <p className="para-1">.</p>
      <button onClick={this.renderTQ} className="button-1" type="button">
        SIGN UP
      </button>
    </div>
  )

  renderTankYou = () => (
    <div>
      <img
        className="image"
        alt="img"
        src="https://www.linkedin.com/dms/prv/vid/D5606AQGa26YvkAFKIw/messaging-attachmentFile/0/1697645404997?m=AQIzkD8GuCPxaAAAAYtDjTY8ZlKx5Kqn3fV9w0Hsyn_O1aIeIAnhvg-7aw&ne=1&v=beta&t=8jWoASxttPU7Jux7yhgMgWaabLoAvfr_eHM3mNE9E7k"
      />
      <div className="intro-container">
        <h2 className="heading-2">
          re<span className="span-para">Q</span>
        </h2>
        <h1 className="main-Heading">Thank you! We will back to you soon.</h1>
        <p className="para">Please check your email.</p>
      </div>
    </div>
  )

  render() {
    const {isIntro, isSignUp, isThankYou} = this.state
    return (
      <div>
        {isIntro && this.renderIntro()}
        {isSignUp && this.renderSignUp()}
        {isThankYou && this.renderTankYou()}
      </div>
    )
  }
}

export default App
