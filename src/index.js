import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './styles/main.scss';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Header from './components/header';

// ReactDOM.render(
//   <Router>
//     <Routes>
//       {/* <Route exact path="/" element={<MovieList />} /> */}
//       <Route path="/" element={<Navigate to="/movie" />} />
//       <Route path="/movie" element={<MovieList />} />
//       <Route path="/movie/details/:movieId" element={<MovieDetails />} />
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );

const App = () => {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/movie" element={<MovieList />} />
        <Route path="/movie/details/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// ReactDOM.render(<App />, document.getElementById('root'));