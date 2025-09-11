import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Movie from "./components/Movie";

function About() {
  return <div className="container py-4"><h1>About Me</h1><p>ONLY TESTT 1</p></div>;
}

function Contact() {
  return <div className="container py-4"><h1>Contact</h1><p>ONLY TEST 2</p></div>;
}

export default function App() {
  useEffect(() => { document.title = "My app"; }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div className='container py-5 text-center'>404 Not Found <Link to='/'>Go Home</Link></div>} />
      </Routes>
    </BrowserRouter>
  );
}
