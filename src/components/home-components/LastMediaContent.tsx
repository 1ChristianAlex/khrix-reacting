import React from 'react';
import { Link } from 'react-router-dom';
import postThumb from '../../assets/miles.jpeg';
import podcastThumb from '../../assets/podcast-thumb.jpg';

export class LastMediaContent extends React.Component {
  public render() {
    return (
      <section className="LastMediaContent">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="last-post-blog">
                <div className="text-title-section">
                  <h4>Blog</h4>
                </div>
                <div className="media-content">
                  <div className="mediaThumb">
                    <Link to="/SinglePostBlog">
                      <img src={postThumb} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="media-title">
                    <h1>post</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="last-post-blog">
                <div className="text-title-section">
                  <h4>Podcast</h4>
                </div>
                <div className="media-content">
                  <div className="mediaThumb">
                    <a href="https://soundcloud.com/coffee-cast-760755949/atencao-memoria-e-aprendizagem-atraves-dos-joguinhos">
                      <img src={podcastThumb} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="media-title">
                    <h1>post</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
