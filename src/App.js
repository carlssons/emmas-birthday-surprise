import React, { Component } from 'react';
import './App.css';
import Modal from 'react-modal';

const customStyles = {
  content : {
    background: "rgb(0, 155, 155)",
    color: "white",
    border: "none",
    borderRadius: "15px"
  }
};
class App extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    /*his.subtitle.style.color = '#f00';*/
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }
  render() {
    return (
      <div className="App">
        <div className="background">
        
          <div className="column column-1">
            <h1>Happy B-day to Emma 28 years!</h1>
            <button className="button sparkley" onClick={this.openModal}>Surprise<span role="img" aria-label="party-pooper"> 🎉</span></button>
          </div>
          
          <div className="column column-2">
            <div className="emma"></div>
          </div>
      </div>

      <Modal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2>Happy Happy Birthday!!</h2>
          <p>När du kommer till Sweden ska du, lill-sis och big sis ut och fira med middag och lyx!! <span role="img" aria-label=" Clinking-Glasses"> 🥂</span> <span role="img" aria-label=" dancing-woman"> 💃</span><span role="img" aria-label="party-face">🥳</span><br>
          </br>Stort grattis från hela familjen Carlsson, vi saknar dig!! <b>Puss Kram</b></p>
          <iframe title="gif-frame" className="gif" src="https://giphy.com/embed/oA6sXwSYMmeyY" width="480" height="320" frameBorder="0" allowFullScreen></iframe>
          <button className="button" onClick={this.closeModal}>close</button>
        </Modal>
     </div>

    );
  }
}

export default App;
