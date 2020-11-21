import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Detail from './components/Detail';
import About from './routes/About';
import Home from "./routes/Home"


function App() {
  return(
    <HashRouter>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}
export default App;