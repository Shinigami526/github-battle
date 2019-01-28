import React, { Component } from 'react';
import Badge from './Badge';

const USER_DATA = {
  name:"Javier Segovia",
  username:"shinigami",
  img:'https://avatars3.githubusercontent.com/u/40581031?s=400&u=5b882e8643a6f2298187071c6fb3d38a26680e97&v=4'
}

class Entry extends Component {
  render() {
    return(
      <Badge
        user={USER_DATA}
       />
    )
  }
}
export default Entry
