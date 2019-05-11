import React from 'react';

export class Banners extends React.Component {
  public render() {
    return (
      <section className="banner-home">
        <div className="row">
          <div className="container">
            <div className="col-md-12">
              <div className="banner-content">
                <div className="banner-text">
                  <h2>Segurando a sua ideia</h2>
                  <h1>Bholder</h1>
                  <h3>Bholder é uma startup criada para executar ideias</h3>
                </div>
                <button className="btn btn-banner">Conheça</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
