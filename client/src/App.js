import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import BlogPost from "./BlogPost";
import NotFound from "./NotFound";
import Contact from "./Contact";
import About from "./About";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Home} />
          <Route path="/blog/:blog_post_slug" component={BlogPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
