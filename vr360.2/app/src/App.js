import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import home from './pages/home'
import NavigationBar from './component/NavigationBar'
import FooterArea from './component/FooterArea';

function App() {
  return (
    < >
    <NavigationBar />
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        
      </Switch>
    </Router>
    <FooterArea />
    </>
    
  );
}

export default App;
