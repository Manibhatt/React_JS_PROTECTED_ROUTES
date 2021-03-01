import LandingPage from './screen/LandingPage'
import AppLayout from './app.layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <ProtectedRoute exact path="/app" component={AppLayout}></ProtectedRoute>
          <Route exact path="*" component={() => "404 Not found"}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
