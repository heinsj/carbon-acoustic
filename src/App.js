import React, { Component } from 'react';
import './app.scss';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import AcousticHeader from './components/AcousticHeader';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './content/DashboardPage';
import DetailsPage from './content/DetailsPage';

class App extends Component {
  render() {
    return (
      <>
        <AcousticHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/repos" component={DetailsPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
