import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

// Pages
import Dashboard from 'pages/dashboard'
import Landing from 'pages/landing'
import About from 'pages/about'
import Login from 'pages/login'
import Blog from 'pages/blog'
import BlogDetail from 'pages/blog/detail'
import NoPage from 'pages/nopage'

import theme from 'theme'


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:id" component={BlogDetail} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={NoPage} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}
