import { HashRouter, Switch, Route } from 'react-router-dom';
import ContactUs from './Routes/ContactUs';
import Home from './Routes/Home';

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contactUs" exact component={ContactUs} />
      </Switch>
    </HashRouter>
  );
}

export default App;