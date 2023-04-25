import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

import { FaFacebook, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';


function App() {
  const introProps = useSpring({
    from: { opacity: 0, marginTop: -50 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 1000 },
  });

  const aboutProps = useSpring({
    from: { opacity: 0, marginLeft: -50 },
    to: { opacity: 1, marginLeft: 0 },
    config: { duration: 1000 },
  });
  const skillProps = useSpring({
    from: { opacity: 0, marginLeft: -50 },
    to: { opacity: 1, marginLeft: 0 },
    config: { duration: 1000 },
  });

  const projectsProps = useSpring({
    from: { opacity: 0, marginRight: -50 },
    to: { opacity: 1, marginRight: 0 },
    config: { duration: 1000 },
  });

  const contactProps = useSpring({
    from: { opacity: 0, marginBottom: -50 },
    to: { opacity: 1, marginBottom: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    document.title = "My Portfolio";
  }, []);


  return (
    <div className="App">
      <animated.div style={introProps} className="Intro">
        <div className='top'>
          <div className='heading'>
            <h1>Hi, I'm Liji Mathew.</h1>
            <h4>I'm a software developer</h4>
            <div className="IntroButtons">
              <a href="https://drive.google.com/file/d/1waT_cuZyA0SbVRZ7FNVAv-Zr37-TXtt_/view?usp=share_link" download>
                <button>Download Resume</button>
              </a>
            </div>
            </div>
        </div>
      </animated.div>



       <animated.div>
          <div className='Social'>
            <h2 style={{textAlign:'center'}}>Social</h2>
            <div className='social-item'>
              <a href='https://www.facebook.com/liji.mathew.12914'><FaFacebook /></a>
              
              <a href='https://www.linkedin.com/in/lijimathew-m/'><FaLinkedinIn/></a>  
              
              <a href='https://www.instagram.com/liji_mathew_angry_bird/'><FaInstagramSquare/></a>  
          </div>
          </div>
       </animated.div>
      
      
      <div className="About">
        <h2>About Me</h2>
        <animated.p style={aboutProps}>
          I'm a passionate software developer with experience in React, Python and MySql.
          I love creating beautiful and functional web applications that solve real-world problems.Frontend developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored. Enjoy working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally picking up the slack when necessary.
        </animated.p>
      </div>

      <div className="Skills">
        <h2>Skills</h2>
        <animated.div style={skillProps}>

       
          <div className='skill'>

              <div className='item'>
              <label for="file">Python</label>
              <progress id="file" value="75" max="100"> 92% </progress>
              </div>

              <div className='item'>
              <label for="file">C</label>
              <progress id="file" value="55" max="100"> 62% </progress>
              </div>
              <div className='item'>
              <label for="file">Java</label>
              <progress id="file" value="55" max="100"> 62% </progress>
              </div>
       
            <div className='item'>
            <label for="file">HTML</label>
            <progress id="file" value="98" max="100"> 92% </progress>
            </div>

              <div className='item'>
              <label for="file">CSS</label>
              <progress id="file" value="90" max="100"> 62% </progress>
              </div>
              <div className='item'>
              <label for="file">Bootstrap</label>
              <progress id="file" value="90" max="100"> 62% </progress>
              </div>
       
       
            <div className='item'>
            <label for="file">MySql</label>
            <progress id="file" value="80" max="100"> 92% </progress>
            </div>
            <div className='item'>
            <label for="file">Figma</label>
            <progress id="file" value="97" max="100"> 92% </progress>
            </div>

            <div className='item'>
            <label for="file">AdobeXD</label>
            <progress id="file" value="96" max="100"> 62% </progress>
            </div>
        </div>
        </animated.div>
      </div>

      
        <animated.div style={projectsProps} className="ProjectList">
        <div className="Projects">
        <h2>Projects</h2>
          <div className="Project">
            <h3>VIGILANTE FOR RABBLE</h3>
            <p>"Vigilante for rabble" is Web application. System focuse to tracking wild animals and alert to forest departments as well as farmers. Combine works of forest department, Krishibhavan and hospital for claim procedure.</p>
            <p>Frontend: HTML, PHP, JavaScript, CSS, python</p>
            <p>Backend:   MySQL</p>
            <p>GitHub code link: https://github.com/lijimathew123/vigilate-for-rabble</p>
          </div>
          <div className="Project">
            <h3>SCHOOL MANAGEMENT SYSTEM</h3>
            <p>School management system is web application build for school students and teachers. This system provides facility such as personal communication between teacher and student. Also provide facility such as upload notes, attendance and other works.</p>
             <p>Frontend: HTML,CSS,Bootstrap</p>
             <p>Backend: Sqlite</p>
             <p>Framework: Django</p>
          </div>
          <div className="Project">
            <h3>Yuva Radio</h3>
            <p>yuva Radio is stand alone system in which students of a campus can register through system and they can upload thair abilities such as song , messages , current affairs etc . Admin can varify the content based on criteria and he can accept it or reject. So the system can save lot of time for recording and editing. Also avoid problems that  occure at the time of live recording. </p>
             <p>Frontend: HTML,CSS,Bootstrap</p>
             <p>Backend: MySQL</p>
             
          </div>
          </div>
        </animated.div>
     

      <animated.div style={contactProps} className="Contact">
        <h2>Contact Me</h2>
        <form action="mailto:mliji93@gmail.com">
          
          
          <input type="text" name="name" id="name" placeholder='Name here' />

          
          <input type="email" name="email" id="email" placeholder='Email here'/>

      
          <textarea name="message" id="message" rows="5" placeholder='Message here'></textarea>

          <button type='submit'>Send</button>
        </form>
      </animated.div>
    </div>
  );
}

export default App;
