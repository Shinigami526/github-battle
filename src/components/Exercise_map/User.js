import React,{ Component } from 'react';


class User extends Component {
    render() {
    const { list } = this.props;
    const Friend = list.filter(user => user.friend === true);
    const NotFriend  = list.filter(user => user.friend !== true);
    return (
        <div>
        <h1>Friend</h1>
        <ul>
         {
             /* SHOW FRIEND*/
             Friend.map(user => <li key={user.id}>{user.name}</li>)
         }
        </ul>
        <hr />
        <h1>No Friend</h1>
        <ul>
        {
            /* SHOW NOT FRIEND */ 
            NotFriend.map(user => <li key={user.id}>{user.name}</li>)
        }
        </ul>
        </div>
    )
    }
}

export default User