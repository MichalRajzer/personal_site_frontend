import { Router, Link } from "@reach/router";

import Posts from "./components/posts";
import Post from "./components/post";

function App() {
  return (
    <div>
      <Navbar current="/">About</Navbar>
      <Router>
        <About path="/" />
        <Posts path="/blog" />
        <Post path="/blog/posts/:id" />
      </Router>
    </div>
  );
}

const About = (props) => (
  <div className="content">
    <div className="nameHeader">
      <div>
        <h1>Hey!</h1>
        <h1>My name is Michał</h1>
        <h1> I'm a fullstack developer!</h1>
      </div>
    </div>
  </div>
);

const Navbar = (props) => (
  <div className="navigation">
    <nav className="navbar">
      <Link to={props.current} className="nav-link">
        Michał.Rajzer({props.children})
      </Link>
      <Link to="/#" className="nav-link">
        About
      </Link>
      <Link to="/#" className="nav-link">
        Projects
      </Link>
      <Link to="/blog" className="nav-link">
        Blog
      </Link>
      <Link to="/#" className="nav-link">
        Contact
      </Link>
    </nav>
  </div>
);

export default App;
