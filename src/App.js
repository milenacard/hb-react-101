import React, { Component } from 'react'

import randomColor from 'randomcolor'

import TextRetriever from './components/TextRetriever'
import Text from './components/Text'

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
      <React.Fragment>
        <TextRetriever onSubmit={this.updateData} />
        {this.state.countries.map(({name, color}) => {
          return <Text key={name + color} content={name} color={color} />
        })}
      </React.Fragment>
    )
  }
}
