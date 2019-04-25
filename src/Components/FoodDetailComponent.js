import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class FoodDetailComponent extends Component{
  render(){
    const {foodDetail} = this.props;
    return(
      <div className="container-fluid">
          <div className="d-flex align-items-stretch">
              <main id="main" role="main">


             <nav aria-label="breadcrumb">
             <ol className="breadcrumb">

             <li className="breadcrumb-item">
             <a href="/dashboard">
             <i className="fas fa-arrow-left"></i>&nbsp;
             Dashbord
             </a></li>
             <li className="breadcrumb-item active" aria-current="page">Food Detail</li>
             </ol>
            </nav>

                  <h1>Food Detail</h1>
                  <div className="row mt-4 pt-3 mb-4 pb-2">
                      <div className="col-md-10 mx-auto p-2">
                          <table className="table table-bordered custom-cell-w">
                              <tbody>
                              <tr className="bg-dark">
                                  <th scope="row" colSpan="2" className="text-light">Personal details</th>
                              </tr>
                              <tr>
                                  <th scope="row" className="bg-light">Name</th>
                                  <td>{foodDetail.name}</td>
                              </tr>

                              <tr>
                                  <th scope="row" className="bg-light">description</th>
                                  <td>{foodDetail.longDescription}</td>
                              </tr>


                              </tbody>
                          </table>
                          <div className="form-group col-md-12 mb-3 mx-auto text-center">
                          <Link to="/dashboard" className="btn btn-success btn-lg btn-fxw mt-4">
                                  <i className="fas fa-arrow-left"></i>&nbsp;
                                  Back to Dashbord
                          </Link>
                          </div>
                      </div>
                  </div>
              </main>
          </div>
      </div>
    )
  }
}

  export default FoodDetailComponent;
