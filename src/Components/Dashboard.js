import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state= this.props.state;
    }
    render() {
      const { onMenuClick } = this.props;
        return (
          <div className="container-fluid">
              <div className="d-flex align-items-stretch">
                  <main id="main" role="main">
                      <h1>Top weekly Menu</h1>
                      <div className="col-sm-12 mx-auto mt-4 pt-4">
                          <h2>Recent Clients</h2>
                          <div className="table-responsive">
                              <table className="table table-striped">
                                  <thead>
                                  <tr>
                                      <th>Name</th>
                                      <th>Description</th>
                                      <th>Score</th>
                                      <th></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                      <td>Hamberger</td>
                                      <td>hahaha</td>
                                      <td>5/5</td>
                                      <td>view <i className="fa fa-chevron-right color-blue"></i></td>
                                  </tr>
                                
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </main>
              </div>
          </div>



        )
    }
}


export default Dashboard