import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Authors from './components/authors/Authors';
import Books from './components/books/Books';
import Users from './components/users/Users';
import Hiring from './components/hirings/Hirings';
import './assets/NavBar.css'; // Include the CSS file

const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/authors">Authors</Link>
            <ul>
              <li><Link to="/authors/create">Create Author</Link></li>
              <li><Link to="/authors/list">List Authors</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/books">Books</Link>
            <ul>
              <li><Link to="/books/create">Create Book</Link></li>
              <li><Link to="/books/list">List Books</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/users">Users</Link>
            <ul>
              <li><Link to="/users/create">Create User</Link></li>
              <li><Link to="/users/list">List Users</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/hiring">Hiring</Link>
            <ul>
              <li><Link to="/hiring/create">Create Hiring</Link></li>
              <li><Link to="/hiring/list">List Hiring</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors/*" element={<Authors action='' />} />
          <Route path="/books/*" element={<Books action=''/>} />
          <Route path="/users/*" element={<Users action=''/>} />
          <Route path="/hiring/*" element={<Hiring action='' />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;