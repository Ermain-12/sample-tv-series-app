import React, {Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component{

    state = {
        show: null
    }

    componentDidMount(){

        const { id } = this.props.match.params.id
        // this.setState({seriesName: e.target.value, isFetching: true})
        // Now, instead of just fetching for a specific show, we can query the API for any show which the use inputs
        fetch(`http://api.tvmaze.com/search/shows/${id}?embed=episodes`)
                        .then((response) => response.json())
                        .then(json => this.setState({show: json}));
    }

    render(){

        const { show } = this.state;
        return(
            <div>
                {
                    show === null 
                    &&
                    <Loader />
                }
                {
                    show !== null
                    &&
                    <div>
                        <p>{show.name}</p>
                        <p>Premiered: {show.premiered}</p>
                        <p>Rating: {show.ratings}</p>
                        <p>Episodes: {show.__embedded.episodes.length}</p>

                        <p>
                            <img 
                                alt="Show" 
                                src={show.image.medium}
                            />
                        </p>
                    </div>
                }
            </div>
        );
    }
}

export default SingleSeries;
