import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NavbarAbout from './components/NavbarAbout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Todo/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const AboutApp_Title = "App";
  const AboutApp_Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum sem justo, et rhoncus quam consectetur in. Nunc fringilla, tellus eget vehicula eleifend, nibh elit accumsan mi, sit amet lobortis sapien odio ac dolor.";
  const AboutAuthor_Title = "Author";
  const AboutAuthor_Text = "This app was developed by someone, a self-taught web developer and technical writer";

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Navbar />
            <Home />
          </Route>
          <Route path='/about' exact>
            <NavbarAbout />
            <About title='Page' />
          </Route>
          <Route path="/about/about-app">
            <NavbarAbout />
            <About title={AboutApp_Title} text={AboutApp_Text} />
          </Route>
          <Route path="/about/about-author">
            <NavbarAbout />
            <About title={AboutAuthor_Title} text={AboutAuthor_Text} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
