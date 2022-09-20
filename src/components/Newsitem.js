import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsURL,author,date,source}=this.props
    return (
      <div>
        <div className="card my-2" >
  <img src={imageUrl?imageUrl:"https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg?w=826&t=st=1661800505~exp=1661801105~hmac=5b4aaf88cda261cfe0388cf8cd51780f0289542a18233c5b82b1cd810fe44432"} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'80%'}}>
    {source}
    
  </span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} | {new Date(date).toLocaleString()}</small></p>
    <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
