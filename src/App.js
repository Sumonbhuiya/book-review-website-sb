import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import About from './components/About/About';
import Teachers from './components/Teachers/Teachers';
import Infos from './components/Infos/Infos';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      {/* router dom  */}
      <Router>
        {/* header  */}
        <Header></Header>
        <Switch>
          {/* all path one by one  */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/service">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/teacher">
            <Teachers></Teachers>
          </Route>
          <Route exact path="/info">
            <Infos></Infos>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* footer  */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
