import React, {Component} from 'react';

const UsersListItem = ({users}) => (
    <li>
    {users.email}
    </li>
)



const UsersList = props => {
    return (
    <div>
        <ul>
        {props.list.map(users =>
         <UsersListItem users={users} key={users.email.toString()} />
         )}
        </ul>

        </div>
)

}

export default UsersList;
