import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Intro from '../../components/Intro';
import Loader from '../../components/Loader';

class Series extends Component{

      state = {
        series: [],
        seriesName: '',
        isFetching: false
      }
    
      // Changes the length of the array displayed on-screen after 2 seconds
      /*
      componentDidMount() {
        // const series = ["Vikings", "The Flash"]
        // setTimeout(() => {
        //  this.setState({ series : series});
        // }, 2000);
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
                        .then((response) => response.json())
                        .then(json => this.setState({series: json}));
      }
      */
    onSeriesInputChange = e => {

        this.setState({seriesName: e.target.value, isFetching: true})
        // Now, instead of just fetching for a specific show, we can query the API for any show which the use inputs
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
                        .then((response) => response.json())
                        .then(json => this.setState({series: json, isFetching: false}));
        // console.log(e);
        // console.log(e.target.value);
    }

    // Series Container: The length of series array: {this.state.series.length}

    render(){
        const {series, seriesName, isFetching} = this.state;

        return (
            <div>
                <Intro message="Here, you will find your most loved series!"/>
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange}/>
                </div>
                    {
                        !isFetching && series.length === 0 && seriesName.trim() === ''
                        && 
                        <p>Please Enter a Series Name: </p>
                    }
                    {
                        isFetching && series.length === 0 && seriesName.trim() !== ''
                        && 
                        <p>No results for the series have been found</p>
                    }
                    {
                        isFetching
                        &&
                        <p><Loader /></p>
                    }
                    {
                        !isFetching
                        &&
                        <SeriesList list={this.state.series}/>
                    }
            </div>
        )
    }
}

export default Series;
