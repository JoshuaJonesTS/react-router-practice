import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/Layout.page';
import Home from './pages/Home/Home.page';
import Blogs from './pages/Blogs/Blogs.page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>} />
          <Route path="blogs" element={<Blogs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
