import React, { Component } from 'react'

export class Link extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
  }
  handleClick = (e) => {
    e.preventDefault;
    //  history.pushState(initialState, title, location)
    history.pushState(null, '', this.props.to)
  }
  render() {
    return <a href="#" onClick={this.handleClick}>{this.props.children}</a>
  }
}
