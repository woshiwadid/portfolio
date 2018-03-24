import React, { Component } from 'react';
import './App.css';
import AOS from 'aos'; 
import '../node_modules/aos/dist/aos.css'; 
import $ from 'jquery';

class Contacts extends Component {
	constructor(props, context) { 
    super(props, context); 
    this.state={
    	name: '',
    	nameError:'',
    	hasNameError: false,
    	email: '',
    	emailError:'',
    	hasEmailError: false,
    	messages: '',
    	messagesError:'',
    	hasMessagesError: false,
    	success: false,
    }
    AOS.init({
      // once:true
    }); 
  } 

  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 

  handleNameInput (event) {
  	this.setState({
  		name: event.target.value
  	})
  }

  handleEmailInput (event) {
  	this.setState({
  		email: event.target.value
  	})
  }

  handleMessagesInput (event) {
  	this.setState({
  		messages: event.target.value
  	})
  }

  validate = () => {
  	let hasError = false;
  	let errors = {
    	nameError:'',
    	emailError:'',
    	messagesError:'',
    	hasNameError: false,
    	hasEmailError: false,
    	hasMessagesError: false,
  	}
  	console.log('from validate', this.state);
  	if(this.state.name.length === 0) {
  		hasError = true;
  		errors.hasNameError = true;
  		errors.nameError = 'Please tell me who you are';
  	}
  	if(this.state.messages.length === 0) {
  		hasError = true;
  		errors.hasMessagesError = true;
  		errors.messagesError = 'Please write your message here';
  	}
  	if(!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
  		hasError = true;
  		errors.hasEmailError = true;
  		errors.emailError = 'Please use a validated email address';
  	}

  	if(hasError) {
  		this.setState ({
  			...this.state,
  			...errors
  		});
  	}

  	return hasError;
  }
  handleSubmit(e){
  	// console.log(111, this.state)
  	e.preventDefault();
  	let hasError = this.validate();
  	if(!hasError) {
  		console.log('true')
  		this.setState({
  			name:'',
  			email:'',
  			messages:'',
  			hasNameError: false,
	    	hasEmailError: false,
	    	hasMessagesError: false,
	    	success: true,
  		})
	  	// $.ajax({
	   //    url: '/users', 
	   //    method: 'post',
	   //    data: {email: JSON.stringify(this.state)},
	   //    success: (data) => {
	   //      // this.setState({
	   //      //   items: JSON.parse(data)
	   //      // })
	   //      console.log(456, data)
  		// 		this.refs.form.reset()
	   //    },
	   //    error: (err) => {
	   //      console.log('err', err);
	   //    }
	   //  });
	   	this.refs.form.reset();
  	} else {
  		
  	}
	}

	render() {
		return (
			<div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{background:'#5b5e63', height:'100vh'}}>
				<div className='col-lg-6 col-md-8 d-flex flex-column'>
					<h1 className='align-self-center pb-5 text-white font-weight-bold'  data-aos="flip-left">Contact me</h1>
					<div data-aos="zoom-in">
						<form className='commentForm' ref='form' onSubmit={this.handleSubmit.bind(this)}>
							<div className="form-group">
						    <input type="name" className="form-control" id="exampleInputname"  placeholder="Enter name" onChange={this.handleNameInput.bind(this)} styly={{background:'green',backgroundColor:'pink', color:'green'}}/>
						    <small className='text-danger'>{this.state.hasNameError ? this.state.nameError : ''}</small>
						  </div>
							<div className="form-group">
						    <input type="email" className="form-control" id="exampleInputEmail"  placeholder="Enter email" onChange={this.handleEmailInput.bind(this)} styly={{backgroundColor:'pink'}}/>
						  	<small className='text-danger'>{this.state.hasEmailError ? this.state.emailError : ''}</small>
						  </div>
						  <div className="form-group">
						    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter message' rows="6" onChange={this.handleMessagesInput.bind(this)} ></textarea>
						  	<small className='text-danger'>{this.state.hasMessagesError ? this.state.messagesError : ''}</small>
						  </div>
						  {this.state.success ? <h3>Your message was send successfully. Thanks!<button type="button" class="close" aria-label="Close" /></h3> : <div></div>}
							<div className='text-right'>
								<button type="submit" className="btn btn-md text-white" id='btn'>Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Contacts;