import './App.css';
import image from './assets/images/card-img-7.png';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img src={image} alt="blog" />
        </div>
        <div className="texts">
          <h2>How to become a great developer in less than one year</h2>
          <p className="info">
            <a className="author">Kingsley Ibe</a>
            <time>2023-07-11 2:45</time>
          </p>
          <p className="summary">How to become a great developer in less than one year, How to become a great developer in less than one year</p>
        </div>
      </div>
    </main>

  );
}

export default App;
