import React from 'react';
import angular from '../../assets/frameworks-logo/angular.png';
import ionic from '../../assets/frameworks-logo/ionic.png';
import node from '../../assets/frameworks-logo/node.png';
import react from '../../assets/frameworks-logo/react.png';

export class FrameworksUsed extends React.Component {
  public render() {
    let frameworks = [
      { img: react, name: 'React' },
      { img: angular, name: 'Angular' },
      { img: node, name: 'Node.Js' },
      { img: react, name: 'React Native' },
      { img: ionic, name: 'Ionic' }
    ];
    return (
      <section className="frameworks-home">
        <div className="row frameworks-content">
          <div className="container">
            <div className="col-md-12">
              <div className="text-title-section">
                <h4>Frameworks</h4>
              </div>
            </div>
            <div className="col-md-12">
              <div className="framework-all">
                {frameworks.map((frame, i) => {
                  return (
                    <div
                      className="framework-item"
                      id={frame.name}
                      style={{ width: `${100 / frameworks.length}%` }}
                    >
                      <div className="img-frame">
                        <img src={frame.img} alt="" className="img-fluid" />
                      </div>
                      <span>{frame.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
