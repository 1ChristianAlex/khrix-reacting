import React from 'react';
import Project_Image from '../../assets/hope-splash.png';
interface IProps {}
interface IState {
  project_name: string;
  text: string;
}
export class LastProject extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      project_name: 'Hope',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores, eius, atque incidunt illo asperiores debitis mollitia quia quis fugiat quasi, ipsum nihil optio reiciendis. Ut atque odio veritatis magnam?'
    };
  }
  public render() {
    return (
      <section className="last-project">
        <div className="container">
          <div className="content-last-projects">
            <div className="row">
              <div className="col-md-12">
                <div className="text-title-section">
                  <h4>Ultimo Projeto</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project-splash">
                  <img src={Project_Image} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="project-text">
                  <h1>{this.state.project_name}</h1>
                  <p>{this.state.text}</p>
                  <p>{this.state.text}</p>
                  <p>{this.state.text}</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="btn-see-more-projects">
                  <button className="btn see-more-btn">
                    Veja mais projetos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
