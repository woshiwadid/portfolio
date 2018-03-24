import React, { Component } from 'react';
import wanderly from './wanderly.jpg';
import trainerFinder from './trainerFinder.png';
import scheggie from './scheggie.jpg';
import Modal from 'react-modal';
import './App.css';
import $ from 'jquery';
import AOS from 'aos'; 
import '../node_modules/aos/dist/aos.css'; 


class Projects extends Component {

	 constructor() {
    super();
    this.state={
      scheggie: false,
      wanderly: false,
      trainerFinder: false,
      modalIsOpen: false,
    };

    AOS.init({
      // once:true
    }); 
  } 

  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 

   componentDidMount() {
   	$('.scheggie1').mouseenter(()=>this.scheggieHover())
   	$('.scheggie2').mouseleave(()=>this.scheggieHover())
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = 'red';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

 	scheggieHover(){
    this.setState({
      scheggie: !this.state.scheggie
    });
  }

  trainerFinderHover(){
    this.setState({
      trainerFinder: !this.state.trainerFinder
    });
  }

  wanderlyHover(){
    this.setState({
      wanderly: !this.state.wanderly
    });
  }

	render() {
		let width = $(window).width();
		const customStyles = {
		  content : {
		  	marginTop: '80px',
		    marginLeft: width > 807 ? '20%' : '5%',
		    marginRight: width > 807 ? '20%' : '5%',
		    background:'#f2f4f7'
		  }
		};


		return (
			<div style={{width:'100%', background:'#f2f4f9', paddingTop:'150px', paddingBottom:'100px'}}>
        <h1 data-aos="zoom-out" style={{textAlign:'center',fontWeight:'bold'}}>My projects</h1>
        <div className='container-fluid' style={{width:'90%', paddingTop:'55px'}}>
        	<div className='row'>
						{this.state.scheggie ? 
							<div className='col-lg-3 mx-auto my-3 card' onMouseLeave={this.scheggieHover.bind(this)} style={{height:'400px', minWidth:'300px', maxWidth:'400px',border:'1px solid', borderRadius:'8px', animation:'profile 0.5s ease-in-out 0s 1'}}>
								<div className="card-body" style={{textAlign:'center',marginTop:'20%'}}>
							    <h5 className="card-title" style={{fontWeight:'bold'}}>Scheggie</h5>
							    <p className="card-text text-danger">React - Node.js - MongoDB</p>
							    <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-outline-danger mt-5" onClick={this.openModal.bind(this)}>Watch the demo</button>
							    <Modal
					          isOpen={this.state.modalIsOpen}
					          onAfterOpen={this.afterOpenModal}
					          onRequestClose={this.closeModal.bind(this)}
					          style={customStyles}
					          contentLabel="Example Modal"
					          className='scheggie'
					        >
					          <div className="embed-responsive embed-responsive-16by9" >
											<iframe width="560" height="315" src="https://www.youtube.com/embed/HBlqNzXaH1Y" frameBorder="0" allow="auto my-3play; encrypted-media" allowFullscreen></iframe>										
										</div>
										<ul style={{marginTop:'20px'}}>
											<li>Built a single-page app with React and Redux for efficient data flow and improved maintainability.</li>
											<li>Styled front-end components with Material-UI and Bootstrap for intuitive data interaction.</li>
											<li>Enhanced search precision with Mongoose ORM by using multi-conditional queries.</li>
										</ul>
					        </Modal>
						  	</div>
							</div> :
	        		<div className='col-lg-3 mx-auto my-3 card'  data-aos="slide-up" onMouseEnter={this.scheggieHover.bind(this)} style={{height:'400px', minWidth:'300px', border:'1px solid', borderRadius:'8px', maxWidth:'400px',animation:'show 0.5s ease-out 0s 1'}}>
	        			<img className='card-img-top' src={scheggie} alt='scheggie' style={{paddingTop:'20px', width:'100%', height:'60%'}} />
	        			<div className="card-body" style={{textAlign:'center', paddingTop:'10%'}}>
							    <h5 className="card-title">Scheggie</h5>
							    <p className="card-text">Scheggie is a weekly meal planner application for vegetarians.</p>
							  </div>
	        		</div>
						}
						{this.state.wanderly ? 
							<div className='col-lg-3 mx-auto my-3 card' onMouseLeave={this.wanderlyHover.bind(this)} style={{height:'400px', minWidth:'300px', maxWidth:'400px', border:'1px solid', borderRadius:'8px', animation:'profile 0.5s ease-in-out 0s 1'}}>
								<div className="card-body" style={{textAlign:'center',marginTop:'20%'}}>
							    <h5 className="card-title" style={{fontWeight:'bold'}}>Wanderly</h5>
							    <p className="card-text text-danger">React - Express.js - MongoDB</p>
							    <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-outline-danger mt-5" onClick={this.openModal.bind(this)}>Watch the demo</button>
							    <Modal
					          isOpen={this.state.modalIsOpen}
					          onAfterOpen={this.afterOpenModal}
					          onRequestClose={this.closeModal.bind(this)}
					          style={customStyles}
					          contentLabel="Example Modal"
					          className='scheggie'
					        >
					          <div className="embed-responsive embed-responsive-16by9">
											<iframe width="560" height="315" src="https://www.youtube.com/embed/jvKDQd8Kn2c" frameBorder="0" allow="auto my-3play; encrypted-media" allowFullscreen></iframe>										
										</div>
										<ul style={{marginTop:'20px'}}>
											<li>Built modular front-end components with React for enhanced rendering speed and extensibility.</li>							
											<li>Implemented RESTful API calls with Node.js and Express to fetch data from multiple travel sites.</li>
											<li>Designed database schema with MongoDB for efficient storage and querying.</li>
										</ul>
					        </Modal>
						  	</div>
							</div> :
	        		<div className='col-lg-3 mx-auto my-3 card' data-aos="slide-up" onMouseEnter={this.wanderlyHover.bind(this)} style={{height:'400px', minWidth:'300px', maxWidth:'400px',border:'1px solid', borderRadius:'8px', animation:'show 0.5s ease-out 0s 1'}}>
	        			<img className='card-img-top' src={wanderly} alt='wanderly' style={{paddingTop:'20px', width:'100%', height:'60%'}} />
	        			<div className="card-body" style={{textAlign:'center',paddingTop:'10%'}}>
							    <h5 className="card-title">Wanderly</h5>
							    <p className="card-text">Wanderly is an all-in-one solution for travel planning.</p>
							  </div>
	        		</div>
        		}
        		{this.state.trainerFinder ? 
							<div className='col-lg-3 mx-auto my-3 card' onMouseLeave={this.trainerFinderHover.bind(this)} style={{height:'400px', minWidth:'300px', maxWidth:'400px', border:'1px solid', borderRadius:'8px', animation:'profile 0.5s ease-in-out 0s 1'}}>
								<div className="card-body" style={{textAlign:'center',marginTop:'20%'}}>
							    <h5 className="card-title" style={{fontWeight:'bold'}}>Trainer finder</h5>
							    <p className="card-text text-danger">React - Express.js - Postgres</p>
							    <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-outline-danger mt-5" onClick={this.openModal.bind(this)}>Watch the demo</button>
							    <Modal
					          isOpen={this.state.modalIsOpen}
					          onAfterOpen={this.afterOpenModal}
					          onRequestClose={this.closeModal.bind(this)}
					          style={customStyles}
					          contentLabel="Example Modal"
					          className='scheggie'
					        >
					          <div className="embed-responsive embed-responsive-16by9">
											<iframe width="560" height="315" src="https://www.youtube.com/embed/7UIFBd_ON0c" frameBorder="0" allow="auto my-3play; encrypted-media" allowFullscreen></iframe>										
										</div>
										<ul style={{marginTop:'20px'}}>
											<li>Generated interactive visualizations with D3 for fast and intuitive charts.</li>
											<li>Handled authentication server side with Express while using React Router to synchronize UI with URI.</li>
											<li>Created complex schema design with Knex and Migration to handle multiple types of user accounts.</li>
											<li>Handled payment process with Stripe API to protect users’ financial information.</li>
										</ul>
					        </Modal>
						  	</div>
							</div> :
	        		<div className='col-lg-3 mx-auto my-3 card' data-aos="slide-up" onMouseEnter={this.trainerFinderHover.bind(this)} style={{height:'400px', minWidth:'300px', maxWidth:'400px', border:'1px solid', borderRadius:'8px', animation:'show 0.5s ease-out 0s 1'}}>
	        			<img className='card-img-top' src={trainerFinder} alt='trainerFinder' style={{paddingTop:'20px', width:'100%', height:'60%'}} />
	        			<div className="card-body" style={{textAlign:'center',paddingTop:'10%'}}>
							    <h5 className="card-title">Trainer Finder</h5>
							    <p className="card-text">Trainer Finder is an optimal solution to find a personal trainer in your area.</p>
							  </div>
	        		</div>
        		}
        	</div>
	  		</div>
			</div>


		);
	}
}

export default Projects