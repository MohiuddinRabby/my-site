import React from 'react';
import image from '../../assets/image/14.JPG';
import './Home.css';
const Home = () => {
  const primaryTextColor = {
    // color1: '#3399ff',
    color1: '#007399',
    color2: '#004080',
    color3: '#206040',
    borderRadious: '50%'
  }
  return (
    <div className="py-4">
      <div className="container py-2">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="about-description">
              <p className="display-4" style={{ color: primaryTextColor.color1 }}>Hello</p>
              <h2 style={{ color: primaryTextColor.color1 }}>My Name is Mohiuddin</h2>
              <p>Welcome to my site. If you have landed on my site searching for me then I am glad you are interested about me, nice.</p>
              <p>I am a techy guy, who is passionate about softwares and programming. I’ve completed my bachelors degree in Software Engineering, and i'm from <span className="bangladesh-text">Bangladesh</span>. My primary interest is with <span className="react-text">React</span>. And I love to do things mostly with <span className="javascript-text">JavaScript</span>, <span className="react-text" >React</span>, <span className="bootstrap-text">Bootstrap</span></p>

              <p>I use <span className="react-text" >React</span> and <span className="linux-text">Linux</span> on my day-to-day work. I am a fast learner and always searching to learn something new and interesting. I am very passionate about what I do.</p>
              <p className="hobby-text">Outside of programming I love to do Photography and have a quite interest in Video editing(not started yet). Some of my photo is available on <a href="https://www.pexels.com/@xosef-346551" rel="noopener noreferrer" target="_blank" style={{ color: primaryTextColor.color3 }}>Pexels</a></p>
            </div>
          </div>
          <div className="col-lg-6  col-md-6 col-sm-6">
            <div className="row">
              <div className="col-lg-6  col-md-6 col-sm-6"></div>
              <div className="col-lg-6  col-md-6 col-sm-6 py-5">
                <img src={image} className="img-fluid rounded-circle" alt="" />
                <h3 className="text-center py-2" style={{ color: primaryTextColor.color1 }}>Social Profiles</h3>
                <div className="text-center">
                  <div className="row">
                    <div className="col-4 social facebook">
                      <abbr title="instagram">
                        <a href="https://www.instagram.com/xosef" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-instagram fa-3x"></i>
                        </a>
                      </abbr>
                    </div>
                    <div className="col-4 social github">
                      <abbr title="github">
                        <a href="https://github.com/MohiuddinRabby" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-github-square fa-3x"></i>
                        </a>
                      </abbr>
                    </div>
                    <div className="col-4 social linkedin">
                      <abbr title="linkedin">
                        <a href="https://www.linkedin.com/in/mohiuddin-rabby-b49797123" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-linkedin fa-3x"></i>
                        </a>
                      </abbr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;