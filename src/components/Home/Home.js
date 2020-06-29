import React from 'react';
import image from '../../assets/image/9.jpg';
const Home = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 py-5">
            <h1 className="" style={{ color: '#00802b' }}>Hi</h1>
            <p>Welcome to my site. If you have landed on my site searching for me then I am glad you are interested about me, nice.</p>
            <p>I am Mohiuddin (Golam Mohiuddin). I am a techy guy, who is passionate about softwares and programming. I’ve completed my bachelors degree in Software Engineering, and i'm from Bangladesh. My primary expertise is with React. I love to do things mostly with JavaScript and React.</p>
            <p>I use React and Linux on my day-to-day work. I am a fast learner and I am always searching to learn something new and interesting. I am very passionate about what I do.</p>
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