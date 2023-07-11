import './App.css';
import Post from './components/Post';
import Header from './components/common/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={
        <main>
        <Header />
        <Post />
      </main>
      } />

      <Route path={'/login'} element={
        <main>
          <Header />
          <div>Login</div>
        </main>
      } />

    </Routes>

  );
}

export default App;
