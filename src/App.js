import React, { Component, Fragment } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import randomColor from 'randomcolor'

import { Home, Add } from './pages'
import { Menu } from './components'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      countries: props.data
    }

    this.updateData = this.updateData.bind(this)
  }

  updateData (newCountry) {
    this.setState((prevState) => {
      return {
        countries: [
          ...prevState.countries,
          {name: newCountry, color: randomColor()}
        ]
      }
    })
  }

  render () {
    return (
      <Router>
        <Fragment>
          <Menu />
          <Route exact path='/'
            render={() => <Home data={this.state.countries} />} />
          <Route exact path='/add'
            render={() => <Add updateData={this.updateData} />} />
        </Fragment>
      </Router>
    )
  }
}
