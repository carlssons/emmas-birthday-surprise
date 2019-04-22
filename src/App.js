import React, { Component } from 'react';
import './App.css';
import Modal from 'react-modal';

/*const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '100vw',
    height: '100vh'
  }
};*/
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
          contentLabel="Example Modal"
        >
 
          <h2>Happy Happy Birthday!!</h2>
          <iframe title="gif-frame" className="gif" src="https://giphy.com/embed/oA6sXwSYMmeyY" width="480" height="320" frameBorder="0" allowFullScreen></iframe>
          <button className="button" onClick={this.closeModal}>close</button>
        </Modal>
     </div>

    );
  }
}

export default App;
