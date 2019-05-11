import React from 'react';

export class WhyBholder extends React.Component {
  public render() {
    let items_bholder = [
      {
        icon: 'fa-mobile',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores, eius, atque incidunt illo asperiores debitis mollitia quia quis fugiat quasi, ipsum nihil optio reiciendis. Ut atque odio veritatis magnam?'
      },
      {
        icon: 'fa-desktop',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores, eius, atque incidunt illo asperiores debitis mollitia quia quis fugiat quasi, ipsum nihil optio reiciendis. Ut atque odio veritatis magnam?'
      },
      {
        icon: 'fa-rocket',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores, eius, atque incidunt illo asperiores debitis mollitia quia quis fugiat quasi, ipsum nihil optio reiciendis. Ut atque odio veritatis magnam?'
      }
    ];
    return (
      <section className="why-bholder">
        <div className="container">
          <div className="content-why-section">
            <div className="row">
              <div className="col-md-12">
                <div className="text-title-section">
                  <h4>Por quê Bholder</h4>
                </div>
              </div>
              {items_bholder.map(item => {
                return (
                  <div className="col-md-4">
                    <div className="why-explain">
                      <div className="why-icon">
                        <i className={`fas ${item.icon}`} />
                      </div>
                      <div className="why-text">{item.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
