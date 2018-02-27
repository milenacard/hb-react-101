import React, { Component } from 'react'

export default class TextInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler (event) {
    this.setState({
      value: event.currentTarget.value
    })
  }

  onSubmitHandler (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.value)
  }

  componentDidMount () {
    this.input.focus()
  }

  render () {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type='text'
          value={this.state.value}
          ref={(input) => { this.input = input }}
          onChange={this.onChangeHandler} />
        <button type='submit'>Add</button>
      </form>
    )
  }
}
