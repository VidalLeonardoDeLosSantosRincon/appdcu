//dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//components
import App from './Components/App';
import Dictionary from './Components/Dictionary';
import Translater from './Components/Translater';
import Home from './Components/Home';
import Words from './Components/Words'
import Phrases from './Components/Phrases';

const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/dictionary" component={Dictionary}/>
        <Route exact path="/translater" component={Translater}/>
        <Route exact path="/words" component={Words}/>
        <Route exact path="/phrases" component={Phrases}/>
        


    </Switch>
</App>;

export default AppRoutes;