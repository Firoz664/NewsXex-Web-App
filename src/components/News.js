/* eslint-disable no-undef */
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:9,
    category: 'general',

  }
    static propTypes = {
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string,
      
    }
    capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  } 
    constructor(props){
        super(props);
        console.log("Hello this constructor");
        this.state={
            articles:[],
            loading:true,
            page:1


        }
        document.title =`${this.capitalizeFirstLetter(this.props.category)} - TheExpressNews`;
    }
    async componentDidMount(){
      this.props.setProgress(0)
      
      console.log("ok component");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      this.props.setProgress(70)
      let parseData =await data.json();
      console.log(parseData);
      this.props.setProgress(100)
      
      this.setState({articles:parseData.articles, totalResults:parseData.totalResults,loading:false})
    }ticles

    handlePrevClick =async()=>{
      console.log("previous click");

      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData =await data.json();
      console.log(parseData);
      this.setState({articles:parseData.articles})

      this.setState({
        page:this.state.page - 1,
        articles:parseData.articles,
        loading:false
      })

    }


    handleNextClick = async()=>{
      console.log("next click");
      if(!(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize))){

        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData =await data.json();
        
        this.setState({
          page:this.state.page + 1,
          articles:parseData.articles,
          loading:false
        })
      }
    }

    render() {
        return (
            <div className="container">
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '10px' }}>TheExpesssNews -Top on Headlines  {this.capitalizeFirstLetter(this.props.category)}  category</h1>
                
                {this.state.loading && <Spinner/>}
                
                <div className="row">
                  {!this.state.loading && this.state.articles.map((element)=>{
                      return  <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,70):""} imageUrl={element.urlToImage}
                            url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                        />
                    </div> 
                  })}    
                </div> 
                <div className="container d-flex justify-content-between"> 
                  <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                  <button disabled={(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button> 
                </div> 
            </div>
        )
    }
}
