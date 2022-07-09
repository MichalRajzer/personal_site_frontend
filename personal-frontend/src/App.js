import { Router, Link } from "@reach/router";

import Posts from "./components/posts";
import Post from "./components/post";

function App() {
  return (
    <div>
      <Navbar current="/">About</Navbar>
      <div className="content">
        <Router>
          <About path="/" />
          <Posts path="/blog" />
          <Post path="/blog/posts/:id" />
        </Router>
      </div>
    </div>
  );
}

const About = (props) => (
  <div>
    <div className="nameHeader">
      <div style={{ padding: 0, margin: 0 }}>
        <h1>Hey!</h1>
        <h1>My name is Michał</h1>
        <h1> I'm a fullstack developer!</h1>
      </div>
    </div>
    <svg class="arrows">
      <path class="a1" d="M0 0 L30 32 L60 0"></path>
      <path class="a2" d="M0 20 L30 52 L60 20"></path>
      <path class="a3" d="M0 40 L30 72 L60 40"></path>
    </svg>

    <div></div>
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
