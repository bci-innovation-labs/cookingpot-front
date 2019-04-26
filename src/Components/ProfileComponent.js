import React,{Component} from 'react';

class ProfileComponent extends Component {
  render(){
    const {onProfileClick,onChange,email,firstname,lastname,password}=this.props;
    return(
      <div className="container-fluid">
          <div className="d-flex align-items-stretch">
              <main id="main" role="main">
                  <h1>Profile</h1>

                  <div className="col-md-5 mx-auto mt-2">
                      <h3 className="pt-4 pb-2 text-center">Profile Form</h3>
                      <form id="residential-form" className="needs-validation">
                          <p className="border-bottom mb-3 pb-1 text-secondary">Personal Details</p>
                          <div id="all-errors" className="alert alert-error fade show" role="alert">
                              <strong>There were errors during registration:</strong>

                              <div id="firstname-error" className="form-error"></div>
                              <div id="lastname-error" className="form-error"></div>
                              <div id="phonenumber-error" className="form-error"></div>
                              <div id="mobilenumber-error" className="form-error"></div>
                              <div id="email-error" className="form-error"></div>
                              <div id="ok-email-error" className="form-error"></div>
                              <div id="ok-text-error" className="form-error"></div>
                              <div id="dob-error" className="form-error"></div>
                              <div id="gender-error" className="form-error"></div>

                          </div>
                          <div className="form-row">
                              <div className="form-group col-md-12 mb-4">
                                  <label htmlFor="firstname">First name</label>
                                  <input value={firstname} onChange={onChange} type="text" className="form-control form-control-lg border border-primary" id="firstname"
                                      name="firstname" placeholder="First name" minLength="3" required />
                              </div>
                              <div className="form-group col-md-12 mb-4">
                                  <label htmlFor="lastname">Last name</label>
                                  <input value={lastname} onChange={onChange} type="text" className="form-control form-control-lg border border-primary" id="lastname"
                                      name="lastname" placeholder="Last name" minLength="3" required />
                              </div>
                              <div className="form-group col-md-7 mb-4">
                                  <label htmlFor="password">Password(optional)</label>
                                  <input value= {password} onChange={onChange} type="text" className="form-control form-control-lg border border-success"
                                      id="password" name="password" placeholder="password" minLength="10"
                                      maxLength="14" />
                              </div>
                              <div className="form-group col-md-12 mb-4">
                                  <label htmlFor="email">E-Mail (optional)</label>
                                  <input value={email} onChange={onChange} type="email" className="form-control form-control-lg border border-success" id="email"
                                      name="email" placeholder="Email Address" />
                              </div>
                          </div>
                          <div className="form-group col-md-12 mb-3 mx-auto text-center">
                              <button onClick={onProfileClick} className="btn btn-success btn-lg btn-fxw mt-4" type="submit">
                                  <i className="fas fa-check"></i>&nbsp;
                                  Save
                              </button>
                          </div>
                      </form>
                  </div>
              </main>
          </div>
      </div>
    )
  }
}

export default ProfileComponent;
