import React from 'react';
import image from '../../assets/image/4.jpg';
import './Home.css';
const Home = () => {
  const primaryTextColor = {
    // color1: '#3399ff',
    color1: '#007399',
    color2: '#004080',
    borderRadious: '50%'
  }
  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="about-description">
              <p className="display-4" style={{ color: primaryTextColor.color1 }}>Hello</p>
              <h2 style={{ color: primaryTextColor.color1 }}>My Name is Mohiuddin</h2>
              <p>Welcome to my site. If you have landed on my site searching for me then I am glad you are interested about me, nice.</p>
              <p>I am a techy guy, who is passionate about softwares and programming. I’ve completed my bachelors degree in Software Engineering, and i'm from <span className="bangladesh-text">Bangladesh</span>. My primary interest is with <span className="react-text">React</span>. And I love to do things mostly with <span className="javascript-text">JavaScript</span>, <span className="react-text" >React</span>, <span className="bootstrap-text">Bootstrap</span></p>

              <p>I use <span className="react-text" >React</span> and <span className="linux-text">Linux</span> on my day-to-day work. I am a fast learner and always searching to learn something new and interesting. I am very passionate about what I do.</p>
            </div>
          </div>
          <div className="col-lg-6  col-md-6 col-sm-6">
            <img src={image} className="avatar img-fluid" style={{ borderRadius: '75%' }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;