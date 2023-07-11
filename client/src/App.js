import './App.css';
import Layout from './components/Layout';
import Post from './components/Post';
import Header from './components/common/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Post />} />
        <Route path={'/login'} element={<div>Login</div>} />
      </Route>
    </Routes>

  );
}

export default App;
