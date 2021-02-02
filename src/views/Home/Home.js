import CIcon from '@coreui/icons-react';
import { CButton, CCol, CCollapse, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CForm, CImg, CInput, CLink, CNavbar, CNavbarBrand, CNavbarNav, CNavLink, CRow, CToggler, CWidgetDropdown } from '@coreui/react'
import React, { useState } from 'react'
import {Helmet} from "react-helmet";

import './home.scss';
import { useEffect } from 'react';


const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  // src/views/Home/javascript.js
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "views/Home/javascript.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
    console.log("ssss");
      document.body.removeChild(script);
      
    }
  }, []);

console.log("java");

  return (
    <div className="">

      <div className="start-body">



<Helmet>
<script  type="text/javascript" >
  {`
  function WordShuffler(holder,opt){
    var that = this;
    var time = 0;
    this.now;
    this.then = Date.now();
    
    this.delta;
    this.currentTimeOffset = 0;
    
    this.word = null;
    this.currentWord = null;
    this.currentCharacter = 0;
    this.currentWordLength = 0;
  
  
    var options = {
      fps : 20,
      timeOffset : 5,
      textColor : '#000',
      fontSize : "50px",
      useCanvas : false,
      mixCapital : false,
      mixSpecialCharacters : false,
      needUpdate : true,
      colors : [
        '#f44336','#e91e63','#9c27b0',
        '#673ab7','#3f51b5','#2196f3',
        '#03a9f4','#00bcd4','#009688',
        '#4caf50','#8bc34a','#cddc39',
        '#ffeb3b','#ffc107','#ff9800',
        '#ff5722','#795548','#9e9e9e',
        '#607d8b'
      ]
    }
  
    if(typeof opt != "undefined"){
      for(key in opt){
        options[key] = opt[key];
      }
    }
  
  
    
    this.needUpdate = true;
    this.fps = options.fps;
    this.interval = 1000/this.fps;
    this.timeOffset = options.timeOffset;
    this.textColor = options.textColor;
    this.fontSize = options.fontSize;
    this.mixCapital = options.mixCapital;
    this.mixSpecialCharacters = options.mixSpecialCharacters;
    this.colors = options.colors;
  
     this.useCanvas = options.useCanvas;
    
    this.chars = [
      'A','B','C','D',
      'E','F','G','H',
      'I','J','K','L',
      'M','N','O','P',
      'Q','R','S','T',
      'U','V','W','X',
      'Y','Z'
    ];
    this.specialCharacters = [
      '!','§','$','%',
      '&','/','(',')',
      '=','?','_','<',
      '>','^','°','*',
      '#','-',':',';','~'
    ]
  
    if(this.mixSpecialCharacters){
      this.chars = this.chars.concat(this.specialCharacters);
    }
  
    this.getRandomColor = function () {
      var randNum = Math.floor( Math.random() * this.colors.length );
      return this.colors[randNum];
    }
  
    //if Canvas
   
    this.position = {
      x : 0,
      y : 50
    }
  
    //if DOM
    if(typeof holder != "undefined"){
      this.holder = holder;
    }
  
    if(!this.useCanvas && typeof this.holder == "undefined"){
      console.warn('Holder must be defined in DOM Mode. Use Canvas or define Holder');
    }
  
  
    this.getRandCharacter = function(characterToReplace){    
      if(characterToReplace == " "){
        return ' ';
      }
      var randNum = Math.floor(Math.random() * this.chars.length);
      var lowChoice =  -.5 + Math.random();
      var picketCharacter = this.chars[randNum];
      var choosen = picketCharacter.toLowerCase();
      if(this.mixCapital){
        choosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
      }
      return choosen;
      
    }
  
    this.writeWord = function(word){
      this.word = word;
      this.currentWord = word.split('');
      this.currentWordLength = this.currentWord.length;
  
    }
  
    this.generateSingleCharacter = function (color,character) {
      var span = document.createElement('span');
      span.style.color = color;
      span.innerHTML = character;
      return span;
    }
  
    this.updateCharacter = function (time) {
      
        this.now = Date.now();
        this.delta = this.now - this.then;
  
         
  
        if (this.delta > this.interval) {
          this.currentTimeOffset++;
        
          var word = [];
  
          if(this.currentTimeOffset === this.timeOffset && this.currentCharacter !== this.currentWordLength){
            this.currentCharacter++;
            this.currentTimeOffset = 0;
          }
          for(var k=0;k<this.currentCharacter;k++){
            word.push(this.currentWord[k]);
          }
  
          for(var i=0;i<this.currentWordLength - this.currentCharacter;i++){
            word.push(this.getRandCharacter(this.currentWord[this.currentCharacter+i]));
          }
  
  
          if(that.useCanvas){
            c.clearRect(0,0,stage.x * stage.dpr , stage.y * stage.dpr);
            c.font = that.fontSize + " sans-serif";
            var spacing = 0;
            word.forEach(function (w,index) {
              if(index > that.currentCharacter){
                c.fillStyle = that.getRandomColor();
              }else{
                c.fillStyle = that.textColor;
              }
              c.fillText(w, that.position.x + spacing, that.position.y);
              spacing += c.measureText(w).width;
            });
          }else{
  
            if(that.currentCharacter === that.currentWordLength){
              that.needUpdate = false;
            }
            this.holder.innerHTML = '';
            word.forEach(function (w,index) {
              var color = null
              if(index > that.currentCharacter){
                color = that.getRandomColor();
              }else{
                color = that.textColor;
              }
              that.holder.appendChild(that.generateSingleCharacter(color, w));
            }); 
          }
          this.then = this.now - (this.delta % this.interval);
        }
    }
  
    this.restart = function () {
      this.currentCharacter = 0;
      this.needUpdate = true;
    }
  
    function update(time) {
      time++;
      if(that.needUpdate){
        that.updateCharacter(time);
      }
      requestAnimationFrame(update);
    }
  
    this.writeWord(this.holder.innerHTML);
  
  
    console.log(this.currentWord);
    update(time);
  }
  
  
  
  
  var headline = document.getElementById('headline');
  var text = document.getElementById('text');
  var shuffler = document.getElementById('shuffler');
  
  var headText = new WordShuffler(headline,{
    textColor : '#fff',
    timeOffset : 18,
    mixCapital : true,
    mixSpecialCharacters : true
  });
  
  var pText = new WordShuffler(text,{
    textColor : '#fff',
    timeOffset : 2
  });
  
  var buttonText = new WordShuffler(shuffler,{
    textColor : 'tomato',
    timeOffset : 10
  });
  
  
  
    shuffler.addEventListener('click',function () {
      headText.restart();
      pText.restart();
      buttonText.restart();
    });

`}
</script>
</Helmet>




        {/* ---------------Navbar------------- */}
        <div className="navbar-start">
          <CNavbar expandable="sm" className="navbar-home p-2 sticky-top sticky " >
            <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
            <CNavbarBrand className="navbar-brand "  >
              <CImg
                src={process.env.PUBLIC_URL + "/images/logs.png"}

                height="50px"
              // className="mb-2"
              />
            </CNavbarBrand>
            <CCollapse show={isOpen} navbar>
              <CNavbarNav className="navbar-text text-center">
                <CLink href="/" className="navbar-12 pr-3 pl-3 text-decoration-none" ><span className="navbar-12">Home</span></CLink>
                <CLink className="navbar-12 pr-3 pl-3 text-decoration-none "><span className="navbar-12"> About</span></CLink>
                <CLink className="navbar-12 pr-3 pl-3 text-decoration-none"><span className="navbar-12">Contact</span></CLink>
                <CLink className="navbar-12 pr-3 pl-3 text-decoration-none"><span className="navbar-12">Link</span></CLink>


              </CNavbarNav>
              <CNavbarNav className=" ml-auto text-center d-flex justify-content-center">
                <CLink href="/#/login" className="nav-righty text-white ml-3 mr-3 text-decoration-none "><span className="nav-righty">Login </span></CLink>
                <CLink href="#/register" className="nav-righty text-white ml-3 mr-3  text-decoration-none"><span className="nav-righty">Sign Up </span></CLink>


              </CNavbarNav>
            </CCollapse>
          </CNavbar>

        </div>

        {/* _---------------------- */}

 
        {/* -------------------- Prac ----------------- */}
        <div>
          <CNavbar expandable="sm" color="white" className="shadow" >
            <CToggler style={{ background: "#f5f5f5" }} inNavbar onClick={() => setIsOpen(!isOpen)} />

            <CNavbarBrand>
              <img height="50px"
                src={process.env.PUBLIC_URL + "/images/logs.png"}
                className="navbar-logo-img"
              >

              </img>
            </CNavbarBrand>
            <CCollapse clasname="text-info info-text" color="info" show={isOpen} navbar>
              <CNavbarNav className="navbar-text text-center">
                <CLink href="/" className="navbar-12 pr-3 pl-3 text-decoration-none" ><span className="navbar-12 text-info">Home</span></CLink>
                <CLink className="navbar-12 pr-3 pl-3 text-decoration-none "><span className="navbar-12 text-info"> About</span></CLink>
              </CNavbarNav>
              <CNavbarNav className="ml-auto">
                <CForm inline>
                  <CInput
                    className="mr-sm-2"
                    placeholder="Search"
                    size="sm"
                  />
                  <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton>
                </CForm>
                <CDropdown
                  inNav
                >


                </CDropdown>
                <CDropdown
                  inNav
                >


                </CDropdown>
              </CNavbarNav>
            </CCollapse>
          </CNavbar>
        </div>

        {/* ----------------------------------------- */}

        <article>
	<h1 id="headline">Random Text Shuffle</h1>
	<p id="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dignissimos sint dolores necessitatibus repellendus in nemo expedita ullam numquam, placeat, laborum beatae, vero. Similique dolorem enim repellat impedit reiciendis, non.</p>
	<button id="shuffler">shuffle</button>
</article>
        <div className="home-body ">
          <div className="start-body" fluid>
            <CContainer className="start-container m-auto" >
              <CRow clasname="head-start  m-auto">
                <CCol className=" m-auto" md="5" >
                  <p className="col-start" >Great Companies are</p>
                  <p className="col-para">Zenduty's end-to-end incident alerting, on-call management
                     and response orchestration platform helps you institutionalize reliability into your production operations </p>
                  <CButton className="start-button">Free Demo</CButton>
                  <CButton className="start-button2">Create Account</CButton>
                </CCol>
                <CCol className="m-auto " md="5">
                  <CImg className="card-img-top p-3 pb-5 mb-5 mt-5" src={process.env.PUBLIC_URL + "/images/landingpage.webp"} alt="Card image cap" />
                </CCol>
              </CRow>

            </CContainer>
          </div>
        </div>


      </div>

      <div className="main-body-home c-app c-default-layout flex-row justify-content-center ">

        {/*         
      <div className={'row mt-2'}>
      <div className={'col-12'}> */}
        <CContainer className=" mt-3">
          <CRow className="home-container mt-3">
            <CCol md="5" className=" text-center m-3 mt-5">
              <p className="home-cp">Manage all your production alert in one place.</p>
              <p className="home-cp2 text-white ">Integrate with 100+ monitoring tools and manage all your production alerts from a unified incident dashboard</p>
            </CCol>
            <CCol md="5" className="mt-5">

              <CImg className="card-img-top p-3" src={process.env.PUBLIC_URL + "/images/logo-collage.webp"} alt="Card image cap" />
            </CCol>


          </CRow>
          <CRow className="home-container1 mt-5">
            <CCol md="5" className="text-center ml-3 mt-5">
              <p className="home-cp"> Escalate alerts to the right people </p>
              <p className="home-cp2 text-white ">Respond to incidents faster by escalating critical alerts to the right teams via SMS,
              Phone, Slack, Microsoft Teams, Android/iOS push notifications and Email.
              Automatically bring in the relevant subject matter experts and stakeholders into the incident response process</p>
            </CCol>
            <CCol md="5" className="mt-5">

              <CImg className="card-img-top" src={process.env.PUBLIC_URL + "/images/escalation-policy.webp"} alt="Card image cap" />
            </CCol>


          </CRow>

        </CContainer>



      
      </div>



      {/* -------------------- Prac ------------ */}

      {/* ----------------------------- */}


      <div>

        <footer class="footer-section">
          <div class="container">
            <div class="footer-cta pt-5 pb-5">
              <div class="row">
                <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="cta-text">
                      <h4>Find us</h4>
                      <span>Mumbai, mumbai mumbai</span>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                    <i class="fas fa-phone"></i>
                    <div class="cta-text">
                      <h4>Call us</h4>
                      <span>981234567</span>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                    <i class="far fa-envelope-open"></i>
                    <div class="cta-text">
                      <h4>Mail us</h4>
                      <span>mail@info.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-content pt-5 pb-5">
              <div class="row">
                <div class="col-xl-4 col-lg-4 mb-50">
                  <div class="footer-widget">


                    <div class="footer-social-icon">
                      <span>Follow us</span>
                      <a href="/"><i class="fab fa-facebook-f facebook-bg"></i></a>
                      <a href="/"><i class="fab fa-twitter twitter-bg"></i></a>
                      <a href="/"><i class="fab fa-google-plus-g google-bg"></i></a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div class="footer-widget">
                    <div class="footer-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/">About US</a></li>
                      <li><a href="/"> Our Services</a></li>
                      <li><a href="/">Contact Us</a></li>
                      <li><a href="/">Expert Team</a></li>


                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="copyright-area">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div class="copyright-text">
                    <p>Copyright &copy; 2020, All Right Reserved <a href="https://codepen.io/anupkumar92/">DevOp's</a></p>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div class="footer-menu">
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/">Terms</a></li>
                      <li><a href="/">Privacy</a></li>
                      <li><a href="/">Policy</a></li>
                      <li><a href="/">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>


    </div>
  )
}

export default Home
