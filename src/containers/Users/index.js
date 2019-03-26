import React, {Component} from 'react';
import axios from 'axios';
//import UsersList from '../../components/UsersList/index';

class Users extends Component{

    state = {
        users:[],
        userEmail: '',
        isFetching: false
    }

componentWillMount() {
    axios(`https://api.randomuser.me/?results=10`)
    .then(response => {console.log(response);
                       this.setState({users: response.data});

          }).catch(err => console.log(err));
}

    render(){

      const { users, userEmail, isFetching } =  this.state;
        return <div>
          <div>
        
            Lenght of users =  {this.state.users.length}

        //<UsersList list={this.state.users} />
        </div>
        </div>;
    }
}

export default Users;
