import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

const authMenuData = [
    {
        title: "Dashboard",
        url: "/dashboard"
    },{
        title: "Profile",
        url: "/profile"
    },{
        title:"Logout",
        url:"Logout"
    },

  ]
  const anonMenuData = [
      {
          title: "Login",
          url: "/login"
      },{
          title:"Register",
          url:"/register"
      },{
          title:"About Us",
          url:"/about"
      },{
          title:"Contact Us",
          url:"/contact"
      },{
          title:"Terms of Service",
          url:"/terms"
      },{
          title:"Privacy Policy",
          url:"/privacy"
      }

    ]

class ItemNode extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isOpen:false
        }
    }

    toggle = () => {
        // console.log("isOpen:", this.state.isOpen);
        this.setState({
            isOpen: !this.state.isOpen
        })
        // this.forceUpdate();
    }

    render() {
        const { title, url, children } = this.props.menuData;
        const sideMenuToggle = this.props.sideMenuToggle;
        if(children)
        {
            return (
                <li className="nav-item dropdown-btn">
                    <Link className={`nav-link ${ this.state.isOpen ? "rotate-90" : ""}`} to="#" onClick={ this.toggle }>
                        { title } <i className="fa fa-caret-right" ></i>
                    </Link>
                    <ul style={{ display: this.state.isOpen ? "block" : "none"}}>
                        { children.map((item, index) => (<ItemNode menuData={ item } key={ index } sideMenuToggle = { sideMenuToggle }></ItemNode>)) }
                    </ul>
                </li>)
        }
        else
        {
            return (
                <li className="nav-item">
                    <NavLink className="nav-link" to={ url } onClick = { sideMenuToggle }>{ title }</NavLink>
                </li>)

        }
    }
}
class SideBarCollapse extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            active: false
        }

        this.sideMenuToggle = this.sideMenuToggle.bind(this);
    }

    sideMenuToggle() {
        this.setState({
            active: !this.state.active
        })
    }

  render() {
    let menuData;
    let menuTitle;

    let userProfileString = localStorage.getItem('user');
    let userProfileDictionary = JSON.parse(userProfileString);
    if (userProfileString === null || userProfileDictionary === undefined){
      menuData = anonMenuData;
      menuTitle = "Cooking Pot";
    }else{
      menuData = authMenuData;
      menuTitle = "Hi, " + userProfileDictionary.firstName;
    }



    return (
    <div>
        <header className="top-navbar navbar navbar-dark fixed-top bg-dark justify-content-between">
            <Link className="navbar-brand" to="#">Cooking Pot</Link>
          
            <ul className="navbar-nav flex-row">

                <li className="nav-item">
                <button className={`navbar-toggler ${ this.state.active ? "active" : ""}` } type="button" id="sidebarCollapse"
                    onClick = { this.sideMenuToggle }>
                    <i className="fa fa-bars"></i>
                </button>
                </li>
            </ul>

        </header>
        <nav id="sidebar" className={ `${ this.state.active ? "active" : ""}` }>
            <div className="sideMenuTouchGlass"
                onClick={ this.sideMenuToggle }
                style={{ display: this.state.active ? "block" : "none"}}></div>
            <Scrollbars>
                <p className="text-center text-light mt-3 mb-2">{menuTitle}</p>
                    <hr className="nav-divider" />
                    <ul className="nav flex-column">
                        { menuData.map((item, index)=>(<ItemNode menuData={item} key={index} sideMenuToggle={this.sideMenuToggle}></ItemNode>)) }
                    </ul>
                </Scrollbars>
        </nav>
    </div>
    )
  }
}
export default SideBarCollapse

/* <p className="text-center text-light mt-3 mb-2">Hi, Rodolfo</p>
<hr className="nav-divider" />
<ul className="nav flex-column">
    <li className="nav-item">
        <NavLink className="nav-link" to="/LoginPage">Login Page</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/ResetPage">Reset Page</NavLink>
    </li>
    <li className="nav-item dropdown-btn">
        <Link className="nav-link" to="#">Register Page <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
        <ul>
            <li className="nav-item">
                <NavLink className="nav-link" to="/RegisterPage">Regisger Form</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/SuccessPage">Success Page</NavLink>
            </li>
        </ul>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/TopMenu">Top Menu</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/Dashboard">Dashboard</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/Widgets">Widgets</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/NotFound404">NotFound404</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/ServerError500">ServerError500</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/Icons">Icons</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/Buttons">Buttons</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/Cards">Cards</NavLink>
    </li>
    <li className="nav-item dropdown-btn">
        <Link className="nav-link" to="#">Tables <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
        <ul>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Table1">Table 1</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Table2">Table 2</NavLink>
            </li>
        </ul>
    </li>
    <li className="nav-item dropdown-btn">
        <Link className="nav-link" to="#">Forms <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
        <ul>
            <li className="nav-item">
                <NavLink className="nav-link" to="/FormElements">Form elements</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/FormValidations">Form validations</NavLink>
            </li>
        </ul>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/ListPage">List Page</NavLink>
    </li>
    <li className="nav-item dropdown-btn">
        <Link className="nav-link" to="#">Details Page <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
        <ul>
            <li className="nav-item">
                <NavLink className="nav-link" to="/DetailsPage1">Details 1</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/DetailsPage2">Detail 2</NavLink>
            </li>
        </ul>
    </li>
    <li className="nav-item dropdown-btn">
        <Link className="nav-link" to="#">Pages <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
        <ul>
            <li className="nav-item">
                <NavLink className="nav-link" to="/CommentsPage">Comments Page</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/SearchPage">Search Page</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Invoice">Invoice</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/FileUpload">File Upload</NavLink>
            </li>
        </ul>
    </li>
    <li className="nav-item dropdown-btn">
        <Link className="nav-link" to="#">Wizards <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
        <ul>
            <li className="nav-item dropdown-btn">
                <Link className="nav-link" to="#">Steps <i className="fa fa-caret-down"></i><i className="fa fa-caret-right"></i></Link>
                <ul>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Step1">Step1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Step2">Step2</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Step3">Step3</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Step4">Step4</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Step5">Step5</NavLink>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Panel">Panel</NavLink>
            </li>
        </ul>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/GoogleMaps">Google Maps</NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/Charting">Charting</NavLink>
    </li>
</ul> */
