import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FoodRecipeRows extends Component{
  render(){
    const { onMenuClick, data } = this.props;
      let elements = [];
      for(let i = 0; i< data.length; i++){
        let row = data[i];
        elements.push(
          <tr key={row.id}>
              <td>
                  <img src={row.pictureURL} alt={row.name} height="42" width="42" />
              </td>
              <td>{row.name}</td>
              <td>{row.shortDescription}</td>
              <td>{row.score}/5</td>
              <td>view <i className="fa fa-chevron-right color-blue"></i></td>
          </tr>
        )
      }
  return elements;
  }
}

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state= this.props.state;
    }
    render() {
      const { onMenuClick, data } = this.props;
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
                                      <th></th>
                                      <th>Name</th>
                                      <th>Description</th>
                                      <th>Score</th>
                                      <th></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                      <FoodRecipeRows data={data} />
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
