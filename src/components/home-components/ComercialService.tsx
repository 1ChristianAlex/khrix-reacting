import React from 'react';
export class ComercialService extends React.Component {
  public render() {
    let services = [
      {
        name: 'Desenvolvimento de aplicações Web e mobile',
        icon: 'fa-code',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores, eius, atque incidunt illo asperiores debitis mollitia quia quis fugiat quasi, ipsum nihil optio reiciendis. Ut atque odio veritatis magnam?'
      },
      {
        name: 'Suporte',
        icon: 'fa-hands',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores, eius, atque incidunt illo asperiores debitis mollitia quia quis fugiat quasi, ipsum nihil optio reiciendis. Ut atque odio veritatis magnam?'
      },
      {
        name: 'Aprendizagem',
        icon: 'fa-brain',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores, eius, atque incidunt illo asperiores debitis mollitia quia quis fugiat quasi, ipsum nihil optio reiciendis. Ut atque odio veritatis magnam?'
      }
    ];
    return (
      <section className="comercial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-title-section">
                <h4>Serviços</h4>
              </div>
            </div>
            {services.map(service => {
              return (
                <div className="col-md-4" id={service.name}>
                  <div className="service-content">
                    <div className="service-icon">
                      <i className={`fas ${service.icon}`} />
                    </div>
                    <div className="service-text">
                      <h1>{service.name}</h1>
                      <p>{service.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
