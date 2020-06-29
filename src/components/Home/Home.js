import React from 'react';
import image from '../../assets/image/9.jpg';
const Home = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h3>Hello Ite Mohiuddin</h3>
            <h2>I am a Web Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae odit neque commodi ratione quo quos aspernatur. Provident rem excepturi saepe, asperiores perferendis hic vel eos iste, error modi omnis temporibus ad dolores qui eveniet. Cumque temporibus quas fuga aperiam dolores deserunt quis quisquam natus sed blanditiis doloribus, explicabo obcaecati?</p>
          </div>
          <div className=" col-lg-6  col-md-6">
              <img src={image} className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;