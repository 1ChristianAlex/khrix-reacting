import React from 'react';
import img_Christian from '../assets/me.jpg';
export class Christian extends React.Component {
  public render() {
    return (
      <section className="christian-alex">
        <div className="row">
          <div className="col-md-12">
            <div className="user">
              <img
                src={img_Christian}
                alt=""
                className="img-fluid img-thumbnail"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
