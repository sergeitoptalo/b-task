import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainLayout from './layout/main-layout';
import EpisodesPage from './pages/episodes-page';
import EpisodePage from './pages/episode-details-page';
import './App.scss';

function App(): JSX.Element {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/">
          <MainLayout>
            <Route exact path="/">
              <Redirect to="/episodes" />
            </Route>
            <Route exact path="/episodes">
              <EpisodesPage />
            </Route>
            <Route exact path="/episodes/:id">
              <EpisodePage />
            </Route>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
