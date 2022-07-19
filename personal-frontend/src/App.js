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
    <div className="contentBlockOne">
    <div className="nameHeader">
      <div style={{ padding: 0, margin: 0}}>
        <h1>Hey!</h1>
        <h1>My name is Michał</h1>
        <h1>I'm a fullstack developer!</h1>
      </div>
    </div>
    <svg className="arrows">
      <path className="a1" d="M0 0 L30 32 L60 0"></path>
      <path className="a2" d="M0 20 L30 52 L60 20"></path>
      <path className="a3" d="M0 40 L30 72 L60 40"></path>
    </svg>
    <div className="spacer spacerOne"></div>
    </div>
    <div className="textBlock textOne">
      <h2 className="headTwo">Something more about me.</h2>
      <p>
        I attended highschool from 2019 to 2022 and during that time I studied
        in the International Baccalaureate programme. I took up higher level
        computer science, maths, and physics. I started my journey with
        programming when I was 12 and my father introduced me to the Arduino
        ecosystem. Nowadays I focus mostly on webdev but I dabble in IoT and
        automation.
      </p>
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
