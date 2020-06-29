import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Notfound from './components/Notfound/Notfound';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="py-5">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
