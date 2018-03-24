import React, { Component } from 'react';
import $ from 'jquery';
import chao from './chao.jpg';
import fast from './fast.jpg';
import AOS from 'aos'; 
import '../node_modules/aos/dist/aos.css'; 

class About extends Component {
  constructor(props, context) { 
    super(props, context); 
    AOS.init({
      // once:true
    }); 
  } 

  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 

  componentDidMount () {
    const targetPosition = $('#about-me').position().top + 500
    $(document).scroll(() => {
      const currentScreenBot = $(window).scrollTop() + $(window).height()
      // console.log(currentScreenBot)
      if (currentScreenBot > targetPosition) {
        $('#about-left-container').css({
          animation: 'profile 0.5s ease-in-out 0s 1'
        })
        $('.bar-group').css({
          animation: 'bar-group 0.5s ease-in-out 0s 1'
        })
        $('.about-right-bar').css({
          animation:'bar 0.5s ease-in-out 0s 1'
        })

        $(document).off('scroll')
      }
    })
  }

  componentWillUnmount () {
    $(document).off('scroll')
  }

	render() {
		return (
        <div id='about-me'>
          <h1 data-aos='zoom-in' style={{paddingTop:'150px', textAlign:'center',fontWeight:'bold'}}>ABOUT ME</h1>
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-lg-5' data-aos='flip-right' style={{textAlign:'center'}}>
                <img src={chao} alt='selfie' style={{width:'50%',borderRadius:'50%'}}/> 
                <div>
                  <p style={{fontSize:'1.5em'}}>
                    I am a full-stack web developer who is passionate about building quality single-page applications, creating and evolving better user experience.
                  </p>
                  <p style={{fontSize:'1em'}}>
                    I have experience working on teams using well-established front-end JavaScript frameworks like React.js and AngularJS. I've designed back-end systems built on Node.js/Express channelling application interactions with SQL and NoSQL databases.
                  </p>
                </div>
              </div>
              <div className='col-lg-1'></div>
              <div className='col-lg-6 mt-5 bar-group' data-aos="fade-left">
                <div className='progress' style={{height:'40px',marginTop:'10px'}}>
                  <div className="progress-bar progress-bar-striped bg-info progress-bar-animated about-right-bar" role="progressbar" style={{width:'80%', ariaValuenow:"80",ariaValuemin:"0", ariaValuemax:"100"}}>
                    <div style={{height:'100%',width:'120px',textAlign:'center', background:'lightblue',fontSize:'large',color:'white'}}>Javascript</div>
                  </div>
                </div>
                <div className='progress' style={{height:'40px',marginTop:'10px'}}>
                  <div className="progress-bar progress-bar-striped bg-info progress-bar-animated about-right-bar" role="progressbar" style={{width:'70%', ariaValuenow:"70",ariaValuemin:"0", ariaValuemax:"100"}}>
                    <div style={{height:'100%',width:'120px',textAlign:'center', background:'lightblue',fontSize:'large',color:'white', paddingTop:'7px'}}>CSS</div>
                  </div>
                </div>
                <div className='progress' style={{height:'40px',marginTop:'10px'}}>
                  <div className="progress-bar progress-bar-striped bg-info progress-bar-animated about-right-bar" role="progressbar" style={{width:'70%', ariaValuenow:"70",ariaValuemin:"0", ariaValuemax:"100"}}>
                    <div style={{height:'100%',width:'120px',textAlign:'center', background:'lightblue',fontSize:'large',color:'white', paddingTop:'7px'}}>HTML</div>
                  </div>
                </div>
                <div className='progress' style={{height:'40px',marginTop:'10px'}}>
                  <div className="progress-bar progress-bar-striped bg-info progress-bar-animated about-right-bar" role="progressbar" style={{width:'80%', ariaValuenow:"80",ariaValuemin:"0", ariaValuemax:"100"}}>
                   <div style={{height:'100%',width:'120px',textAlign:'center', background:'lightblue',fontSize:'large',color:'white', paddingTop:'7px'}}>React</div>
                  </div>
                </div> 
                <div className='progress' style={{height:'40px',marginTop:'10px'}}>
                  <div className="progress-bar progress-bar-striped bg-info progress-bar-animated about-right-bar" role="progressbar" style={{width:'60%', ariaValuenow:"60",ariaValuemin:"0", ariaValuemax:"100"}}>
                   <div style={{height:'100%',width:'120px',textAlign:'center', background:'lightblue',fontSize:'large',color:'white', paddingTop:'7px'}}>Node.js</div>
                  </div>
                </div> 
                <div className='progress' style={{height:'40px',marginTop:'10px'}}>
                  <div className="progress-bar progress-bar-striped bg-info progress-bar-animated about-right-bar" role="progressbar" style={{width:'65%', ariaValuenow:"65",ariaValuemin:"0", ariaValuemax:"100"}}>
                   <div style={{height:'100%',width:'120px',textAlign:'center', background:'lightblue',fontSize:'large',color:'white', paddingTop:'7px'}}>SQL</div>
                  </div>
                </div> 
                <div className='progress' style={{height:'40px',marginTop:'10px'}}>
                  <div className="progress-bar progress-bar-striped bg-info progress-bar-animated about-right-bar" role="progressbar" style={{width:'70%', ariaValuenow:"70",ariaValuemin:"0", ariaValuemax:"100"}}>
                    <div style={{height:'100%',width:'120px',textAlign:'center', background:'lightblue',fontSize:'large',color:'white', paddingTop:'7px'}}>NoSQL</div>
                  </div>
                </div> 
                <div className='progress' style={{height:'40px',marginTop:'10px'}}>
                  <div className="progress-bar progress-bar-striped bg-info progress-bar-animated about-right-bar" role="progressbar" style={{width:'65%', ariaValuenow:"65",ariaValuemin:"0", ariaValuemax:"100"}}>
                    <div style={{height:'100%',width:'120px',textAlign:'center', background:'lightblue',fontSize:'large',color:'white', paddingTop:'7px'}}>UI Design</div>
                  </div>
                </div> 
                <div className='progress' style={{height:'40px',marginTop:'10px'}}>
                  <div className="progress-bar progress-bar-striped bg-info progress-bar-animated about-right-bar" role="progressbar" style={{width:'60%', ariaValuenow:"60",ariaValuemin:"0", ariaValuemax:"100"}}>
                    <div style={{height:'100%',width:'120px',textAlign:'center', background:'lightblue',fontSize:'large',color:'white', paddingTop:'7px'}}>D3</div>
                  </div>
                </div>
                <div className='progress' style={{height:'40px',marginTop:'10px'}}>
                  <div className="progress-bar progress-bar-striped bg-info progress-bar-animated about-right-bar" role="progressbar" style={{width:'80%', ariaValuenow:"80",ariaValuemin:"0", ariaValuemax:"100"}}>
                    <div style={{height:'100%',width:'120px',textAlign:'center', background:'lightblue',fontSize:'large',color:'white', paddingTop:'7px'}}>Bootstrap</div>
                  </div>
                </div> 
              </div>
            </div>  
          </div>
        </div>
			);
	}
}



export default About;