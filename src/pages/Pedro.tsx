import React from 'react';
import img_cagao from '../assets/pedro.jpg';
export class Pedro extends React.Component {
  public render() {
    return (
      <section className="pedro-anjos">
        <div className="row">
          <div className="col-md-12">
            <div className="user">
              <img src={img_cagao} alt="" className="img-fluid img-thumbnail" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
