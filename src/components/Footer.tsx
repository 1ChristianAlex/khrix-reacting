import React from 'react';
export class Footer extends React.Component {
  public render() {
    return (
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 id="bholder-footer">Bholder</h1>
              <span className="inc-footer">© 2018 Bholder Inc.</span>
            </div>
            <div className="col-md-4">
              <ul className="list-footer-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-footer-links">
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Culture</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Policies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
