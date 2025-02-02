import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }
          }>
            <span className=" badge rounded-pill bg-primary">{source}</span>
            </div>
            <img src={!imageUrl ? "https://imageio.forbes.com/specials-images/imageserve/6799ee9d06c09fce1732e7e0/0x0.jpg?format=jpg&crop=3030,1705,x0,y233,safe&height=900&width=1600&fit=bounds" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{!description ? "For more information please click the Read More button below" : description}...</p>
              <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
          </div>
        </div>
        )
  }
}

        export default NewsItem