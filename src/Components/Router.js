import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Movie from "../Routes/Movie";
import Detail from "../Routes/Detail";
import Search from "../Routes/Search";
import Header from "./Header";
export default () =>(
    <Router>
      <>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} />
        　　 <Route path="/favmovie" component={Movie} />
        　　 <Route path="/movie/:id" component={Detail} />
        　　 <Route path="/search" component={Search} />
        　　 <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
);
