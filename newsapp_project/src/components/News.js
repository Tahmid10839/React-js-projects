import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
// import Spinner from './Spinner';
import Spinner2 from './Spinner2';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // d21e539435c94f6db5726bb78d893e3a
    // 3c9e5a5f517b4068aeae739665b2ddfc
    
    const updateNews = async () => {
        props.setProgress(30);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(60);
        let parsedData = await data.json();
        props.setProgress(80);
        console.log(parsedData);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setPage(page);
        setLoading(false);

        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        document.title = props.category === "" ? "NewsApp" : `${capitalize(props.category)} - NewsApp`;
    }, [])

    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }
    return (
        
        <>
            {/* {this.state.loading && <Spinner/>} */}
            <h2 className="text-center" style={{marginTop: "80px"}}>NewsApp - Top {props.category === "" ? "" : capitalize(props.category)} Headlines</h2>
            {loading && <Spinner2 />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner2 />}>
                <div className="container">
                    <div className="row">
                        {/* {!(this.state.loading) && this.state.articles.map((element)=>{
                            return <div className="col-md-3" key={element.title}>
                                <NewsItem title={element.title!=null?element.title.slice(0,40):element.title} description={element.description!=null?element.description.slice(0,60):element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>
                        })} */}
                        {articles.map((element) => {
                            return <div className="col-md-3" key={element.title}>
                                <NewsItem title={element.title != null ? element.title.slice(0, 40) : element.title} description={element.description != null ? element.description.slice(0, 60) : element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}

News.defaultProps = {
    country: "us",
    pageSize: 20,
    category: "business"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
