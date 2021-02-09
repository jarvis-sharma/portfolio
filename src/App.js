import './App.css';
import Left from './left.js'
import Right from './right.js'
import Introduction from './introduction.js'
import Skills from './skills.js'
import Projects from './projects.js'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <table className="table">
          <td>
            <div className="left">
              <Left />
            </div>
          </td>
          <td>
            <div className="right">
              <Right />
                <Switch>
                  <Route exact path="/">
                    <Introduction />
                  </Route>
                  <Route path="/skills">
                    <Skills />
                  </Route>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route path="/">
                    <Introduction />
                  </Route>
              </Switch>

            </div>
          </td>
        </table>
      </div>
    </div>
    </Router>
  );
}

export default App;
