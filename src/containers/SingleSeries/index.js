import React, {Component} from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';
import SingleSerieInfo from '../../components/SingleSerieInfo';
import { Link } from 'react-router-dom';

class SingleSeries extends Component {
  state = {
    show:null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
    .then(response => { this.setState({show: response.data})
  })
}

render(){
   const { show } = this.state;
    console.log(show);
    return (
      <div>
      <Link to="/"><button>Home</button></Link>
    {
      show === null && <Loader />
    }
    {
      show !== null &&
      <div>
      <SingleSerieInfo show={show}/>
      </div>
    }


  </div>
)

}
}

export default SingleSeries;
