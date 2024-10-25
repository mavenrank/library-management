import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Authors from './components/authors/Authors';
import CreateAuthor from './components/authors/CreateAuthor';
import ListAuthors from './components/authors/ListAuthors';
import Books from './components/books/Books';
import CreateBook from './components/books/CreateBook';
import ListBooks from './components/books/ListBooks';
import Users from './components/users/Users';
import CreateUser from './components/users/CreateUser';
import ListUsers from './components/users/ListUsers';
import Hiring from './components/hirings/Hirings';
import CreateHiring from './components/hirings/CreateHiring';
import HiringList from './components/hirings/HiringList';
import './assets/NavBar.css';

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
          <Route path="/authors" element={<Authors />}>
            <Route path="create" element={<CreateAuthor />} />
            <Route path="list" element={<ListAuthors />} />
          </Route>
          <Route path="/books" element={<Books />}>
            <Route path="create" element={<CreateBook />} />
            <Route path="list" element={<ListBooks />} />
          </Route>
          <Route path="/users" element={<Users />}>
            <Route path="create" element={<CreateUser />} />
            <Route path="list" element={<ListUsers />} />
          </Route>
          <Route path="/hiring" element={<Hiring />}>
            <Route path="create" element={<CreateHiring />} />
            <Route path="list" element={<HiringList />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
