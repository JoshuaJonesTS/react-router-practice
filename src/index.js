import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/Layout.page';
import Home from './pages/Home/Home.page';
import Blogs from './pages/Blogs/Blogs.page';
import Squares from './pages/Squares/Squares.page';
import State from './pages/State/State.page';
import Count from './pages/Count/Count.page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="squares" element={<Squares/>} />
          <Route path="state" element={<State/>} />
          <Route path="count" element={<Count/>} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
