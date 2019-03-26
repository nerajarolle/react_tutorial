import React, {Component} from 'react';

//const SingleSeriesInfo = (props) => {
class SingleSeriesInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {show_episodes: false,
    show: null};

    // This binding is necessary to make `this` work in the callback
    this.changeState = this.changeState.bind(this);
  }


componentWillMount(){
    this.setState({show: this.props.show});
    //const { show } = props;
}

changeState() {
  const state = this.state.show_episodes;
  this.setState({show_episodes: !state});
}

  //console.log(show._embedded.episodes);
render(){
  const {show} = this.state;
    return (
      <div>
      <h3><p>{show.name}</p></h3>
      <p>{ show.image !== null && <img src={show.image.medium} alt="show"/> }</p>
      <p>Premiered - {show.premiered}</p>
      { show.rating.average !== null && <p>Rating - {show.rating.average}</p>}
      { show.rating.average === null && <p>Rating - N/A</p>}
      <p>Episodes - {show._embedded.episodes.length}</p>

      <button onClick={this.changeState}>Show Episodes</button>
      {
        this.state.show_episodes === true &&
        <div>
        <ol>
        {show._embedded.episodes.map(show =>
          <li key={show.id.toString()}>{show.name}</li>)}
        </ol>
        </div>
      }

      </div>
    )

}
}

export default SingleSeriesInfo;

/*
<h3><p>{this.state.show.name}</p></h3>
<p>{ this.state.show.image !== null && <img src={show.image.medium} alt="image"/> }</p>
<p>Premiered - {show.premiered}</p>
{ show.rating.average !== null && <p>Rating - {show.rating.average}</p>}
{ show.rating.average === null && <p>Rating - N/A</p>}
<p>Episodes - {show._embedded.episodes.length}</p>
<ul>
{show._embedded.episodes.map(show =>
  <li>{show.name}</li>)}
</ul>
*/
