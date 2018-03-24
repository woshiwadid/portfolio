import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class Home extends Component {

  constructor() {
    super();
    this.state={
      hover1: false,
      width: 0,
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    console.log(this)
    this.setState({ 
      width: window.innerWidth
    });
  }

  toggleHover1(){
    this.setState({
      hover1: !this.state.hover1
    });
  }
	render() {
    let buttonStyle;
    if(this.state.hover1) {
      buttonStyle = {
        backgroundColor:'lightblue', marginTop:'20px'
      }
    } else {
      buttonStyle ={
        backgroundColor:'transparent', border:'2px solid', borderColor:'white', marginTop:'20px'
      }
    }

    let fontSize = this.state.width > 1100 ? '3vw' : this.state.width > 800 ?  '4vw' : '5vw'
    console.log(11,this.state.width)
    console.log(22,window.innerWidth)

		return (
      <div className="bg">  
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2 text-center' style={{marginTop:'200px'}}>
              <h1 style={{fontSize: fontSize}}>Hello, I am <strong>Chao Zeng</strong>. </h1>
              <h1 style={{fontSize: fontSize}}> I am a full stack developer. </h1>
                <button 
                  type='button' className='btn' 
                  style={buttonStyle}
                  onMouseEnter={this.toggleHover1.bind(this)} 
                  onMouseLeave={this.toggleHover1.bind(this)}
                  onClick={this.props.handleClick}
                >
                  Learn more about me   
                </button>  
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default Home;