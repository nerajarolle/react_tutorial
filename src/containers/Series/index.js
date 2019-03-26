import React, {Component} from 'react';
import axios from 'axios';
import SeriesList from '../../components/SeriesList/index';
import Loader from '../../components/Loader/index';
import Intro from '../../components/Intro/index';

class Series extends Component{

    state = {
        series:[],
        seriesName: '',
        isFetching: false
    }

componentWillMount(){

}
    //axios(`https://api.randomuser.me/?results=${e.target.value}`)



onSeriesInputChange = e => {
  this.setState({seriesName: e.target.value, isFetching: true});

  axios(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
  .then(response => { this.setState({series: response.data, isFetching: false})
  console.log(response);
}).catch(err => console.log(err));
}
//
    render(){

      const { series, seriesName, isFetching } =  this.state;
        return <div>
          <Intro message="Custom intro message" />
          <div>
<input value={seriesName} type="text" onChange={this.onSeriesInputChange} />

      </div>
      { !isFetching &&
        series.length === 0 && seriesName.trim() === ''
      &&
      <p>Please enter the serie name</p>
     }
     {
       !isFetching && series.length === 0 && seriesName.trim() !== ''
       &&
       <p>No serie found with this name</p>
     }
     {
       isFetching && <Loader />

     }
     {
       !isFetching && <SeriesList list={this.state.series} />
     }



        </div>;
    }
}

export default Series;
