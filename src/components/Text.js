import React, { Component } from 'react'

export default class Text extends Component{
  constructor (props) {
    super(props)

    this.state = {
      active: true
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState((prevState) => {
      return {active: !prevState.active}
    })
    this.props.callback && this.props.callback()
  }

  render () {
    const style = {
      color: this.state.active ? this.props.color : 'black'
    }

    return (
      <p onClick={this.toggle} className="text" style={style}>
        {this.props.content}
      </p>
    )
  }
}
