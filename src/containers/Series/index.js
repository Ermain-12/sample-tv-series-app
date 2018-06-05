import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component{

    state = {
        series: []
      }
    
      // Changes the length of the array displayed on-screen after 2 seconds
      componentDidMount() {
        // const series = ["Vikings", "The Flash"]
        // setTimeout(() => {
        //  this.setState({ series : series});
        // }, 2000);
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
                        .then((response) => response.json())
                        .then(json => this.setState({series: json}));
      }

    render(){
        return (
            <div>Series Container: The length of series array: {this.state.series.length}
                <SeriesList list={this.state.series}/>
            </div>
        )
    }
}

export default Series;
