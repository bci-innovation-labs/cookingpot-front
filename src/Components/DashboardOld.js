import React, { Component } from 'react';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state= this.props.state;
    }
    render() {
      const { onMenuClick } = this.props;
        return (
            <div>
                <h1>Dashboard</h1>
                <h2>Welcome, {this.state.userName}!</h2>
                <button onClick={ onMenuClick} > Top Weekly Menu </button>
            </div>
        )
    }
}


export default Dashboard
