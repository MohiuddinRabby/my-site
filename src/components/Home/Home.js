import React from 'react';
import image from '../../assets/image/9.jpg';
import './Home.css';
const Home = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 py-5">
            <div className="about-description">
              <h1 className="" style={{ color: '#0099e6' }}>Hi</h1>
              <p>Welcome to my site. If you have landed on my site searching for me then I am glad you are interested about me, nice.</p>
              <p>I am Mohiuddin (Golam Mohiuddin). I am a techy guy, who is passionate about softwares and programming. I’ve completed my bachelors degree in Software Engineering, and i'm from Bangladesh. My primary expertise is with <span className="react-text">React</span> I love to do things mostly with <span className="javascript-text">JavaScript</span>&nbsp;&nbsp;<span className="react-text" >React</span>&nbsp;&nbsp;<span className="bootstrap-text">Bootstrap</span></p>
              <p>I use React and Linux on my day-to-day work. I am a fast learner and always searching to learn something new and interesting. I am very passionate about what I do.</p>
            </div>
          </div>
          <div className=" col-lg-6  col-md-6">
            {/* <img src={image} className="img-fluid" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;