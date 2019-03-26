import React, {Component} from 'react';

const SeriesListItem = ({series}) => (
    <li>
    {series.show.name}
    </li>
)



const SeriesList = (props) => {
    return (
    <div>
        <ul>
        {props.list.map(series => (
          <SeriesListItem series={series} key={series.show.id} />



       ))}
        </ul>

        </div>
)

}
//<SeriesListItem series={series} key={series.show.name.toString()} />S
export default SeriesList;
