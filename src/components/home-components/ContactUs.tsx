import React from 'react';
export class ContactUs extends React.Component {
  public render() {
    return (
      <section className="ContactUs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-title-section">
                <h4>Contato</h4>
              </div>
            </div>
            <div className="col-md-7">
              <div className="span-contact">
                <span>
                  Entre em contato com a{' '}
                  <span id="bholder-contato">Bholder</span>
                </span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="btn-contato">
                <button className="btn contactUs">Entre em contato</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
