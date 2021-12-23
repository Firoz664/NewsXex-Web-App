/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

export class NewsItem extends Component {
  
    render() {
        let {title ,description,imageUrl,url,author,date,source} =this.props;

        return (
            <div className="my-3">
               <div className="card" >
                <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                        {source}</span>
                    <img src={!imageUrl?"https://images.indianexpress.com/2021/11/parliament-6.jpg":imageUrl} className="card-img-top" alt="..."/>
                     <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                   </div>
                </div>
            </div>
            
        )
    }
}

export default NewsItem



