import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PrivacyComponent extends Component{
  render(){
    return(
        <div className="container-fluid">
            <div className="d-flex align-items-stretch">
                <main id="main" role="main">
                    <h1>Generic Privacy Policy</h1>
                    <p>Last updated: April 26, 2019</p><br />
                    <p>Websites linking to this page have chosen to adopt this generic privacy policy as their own. This means that they agree to abide by the principles laid out below.</p><br />
                    <h3>Information that is gathered from visitors</h3>
                    <p>In common with other websites, log files are stored on the web server saving details such as the visitor's IP address, browser type, referring page and time of visit.</p>
                    <p>Cookies may be used to remember visitor preferences when interacting with the website.</p>
                    <p>Where registration is required, the visitor's email and a username will be stored on the server.</p>
                    <h3>How the Information is used</h3>
                    <p>The information is used to enhance the vistor's experience when using the website to display personalised content and possibly advertising.</p>
                    <p>E-mail addresses will not be sold, rented or leased to 3rd parties.</p>
                    <p>E-mail may be sent to inform you of news of our services or offers by us or our affiliates.</p>
                    <h3>Visitor Options</h3>
                    <p>If you have subscribed to one of our services, you may unsubscribe by following the instructions which are included in e-mail that you receive.</p>
                    <p>You may be able to block cookies via your browser settings but this may prevent you from access to certain features of the website.</p>
                    <h3>Cookies</h3>
                    <p>Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. Also they may be used to track your return visits to the website.</p>
                    <p>3rd party advertising companies may also use cookies for tracking purposes.</p>
                    <h2>Google Ads</h2>
                    <p>Google, as a third party vendor, uses cookies to serve ads.</p>
                    <p>Google's use of the DART cookie enables it to serve ads to visitors based on their visit to sites they visit on the Internet.</p>
                    <p>Website visitors may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</p>
                </main>
            </div>
        </div>
    )
  }
}

export default PrivacyComponent;
