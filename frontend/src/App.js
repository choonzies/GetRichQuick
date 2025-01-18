import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  return (
    <Router> {/* Ensure that everything is inside <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page route */}
        <Route path="/main" element={<Main />} />  {/* Main page route */}
      </Routes>
    </Router>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
