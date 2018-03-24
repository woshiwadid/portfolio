import React, { Component } from 'react';
import About from './About.js';
import Projects from './Projects.js';
import Home from './home.js'
import './App.css';
import Contacts from'./Contacts.js';
import scrollToComponent from 'react-scroll-to-component';
import $ from "jquery";
import AOS from 'aos'; 
import '../node_modules/aos/dist/aos.css'; 


class App extends Component {
  constructor() {
    super();
    AOS.init({
    });
  }

  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 

  componentDidMount() {
    // console.log(123, $('.about').position().top)
    let aboutTop = $('#about-me').position().top - 60;
    $(window).on('scroll', () => {
      // console.log(1234, $(window).scrollTop())
      if($(window).scrollTop() > aboutTop) {
        $('nav').addClass('fixed-top');
        $('nav').removeClass('bg-dark');
        $('nav').addClass('bg-info');
      } else {
        $('nav').removeClass('fixed-top');
        $('nav').removeClass('bg-info');
        $('nav').addClass('bg-dark');

      }
    })
  }

  handleOnClick() {
    scrollToComponent(this.about,{align:'top'})
  }

  handleBtnOnClick () {
    // console.log($('#humbger-btn').css('display'))\
    $('#navbarSupportedContent').removeClass('show')
    $('#navbarSupportedContent').css({height: 'auto', width: 'auto'})
    $('#humbger-btn').removeClass('collapsed')
  }

  render() {
    return (
      <div>
        <section className='home' ref={(section) => { this.home = section; }}>
          <Home  handleClick={this.handleOnClick.bind(this)}/>
        </section>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <button className="navbar-toggler" id='humbger-btn'type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav">
              <li className="nav-item px-3">
                <a className="nav-link text-white" href="#home" onClick={() => {this.handleBtnOnClick(); scrollToComponent(this.home, { offset: 0, align: 'top', duration: 500})}}>Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-white" href="#about" onClick={() => {this.handleBtnOnClick(); scrollToComponent(this.about, { offset: 0, align: 'top', duration: 500})}}>About <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-white" href="#" onClick={() => {this.handleBtnOnClick(); scrollToComponent(this.projects, { offset: 0, align: 'top', duration: 500})}}>Projects</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link text-white" href="#" onClick={() => {this.handleBtnOnClick(); scrollToComponent(this.contacts, { offset: 0, align: 'top', duration: 500})}}>Contacts</a>
              </li>
            </ul>
          </div>
        </nav>
        <section className='about' ref={(section) => { this.about = section; }}>
          <About />
        </section>
        <section className='projects' ref={(section) => { this.projects = section; }}>
          <Projects />
        </section>
        <section className='contacts' ref={(section) => { this.contacts = section; }}>
          <Contacts />
        </section>
      </div>
    );
  }
}

export default App;
