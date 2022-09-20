import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
export default class News extends Component {
 
  static defaultProps={
      country:"in",
      pageSize:5,
      category:"general"
      
  }
   
  static propTypes={
 country:PropTypes.string,
 pageSize:PropTypes.number,
 category:PropTypes.string
  }
  captializeFirstLetter=(string)=>{
    return string.slice(0,1).toUpperCase()+string.slice(1)
  }

    constructor(props)
    {
        super(props);
        this.state={
            articles:[],
            loading:true,
            page:1,
            totalResults:0
        }
        document.title=`${this.captializeFirstLetter(this.props.category)}-Samachar`

   
        
    }
    async handleChange()
    {
      this.props.setProgress(10)
     const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c98c266d0bb94925b8280653e86b318d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        this.props.setProgress(50)
       let parsedData=await data.json();
       this.props.setProgress(100)
       this.setState({ articles:parsedData.articles,loading:false,totalResults:parsedData.totalResults})
       
    }
    async componentDidMount()
    {
  
        this.handleChange()


    }
   handlePrevClick=async()=>{
// let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c98c266d0bb94925b8280653e86b318d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
// this.setState({loading:true});
// let data=await fetch(url);
// let parsedData=await data.json();
// this.setState({articles:parsedData.articles, page:this.state.page-1,loading:false})
this.setState({page:this.state.page-1})
this.handleChange()
    }
   handleNextClick=async()=>{
//     this.setState({loading:true});
//     if(this.state.page+1<Math.ceil(this.state.totalResults/this.props.pageSize));
//  {console.log(this.state.page+1<Math.ceil(this.state.totalResults/this.props.pageSize))
//     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c98c266d0bb94925b8280653e86b318d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//     let data=await fetch(url);
//     let parsedData=await data.json();
//     this.setState({articles:parsedData.articles, page:this.state.page+1,loading:false})
//    }
this.setState({page:this.state.page+1})
this.handleChange()
    }
    fetchMoreData = async() => {

      
      this.setState({page:this.state.page+1})
      const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c98c266d0bb94925b8280653e86b318d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      
     let parsedData=await data.json();
     
     this.setState({ articles:this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults})
    };
    
  render() {
    
    return (
      
        <>
           <InfiniteScroll className='text-center'
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className='container text-center '>
        <h1 className='my-3'>Samachar {this.captializeFirstLetter(this.props.category) } Headlines </h1>
    
            <div className='row'>
         {!this.state.loading && <Spinner/>}
            { this.state.articles.map((element)=>{
            
            return <div className='col-md-4 my-2 text-center' key={element.url}>
          <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""} newsURL={element.url?element.url:""} author={element.author} date={element.publishedAt} source={element.source.name}/>
         
          </div>
        })}
            </div>
        </div>
        </InfiniteScroll>
    
     </>
    )
  }
}
