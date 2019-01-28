import React from 'react';
import Avatar from './Avatar';
import Label from './Label';
import ScreenName from './ScreenName';


const Badge = (props) => {
  return (
    <div className="app">
    <Avatar img={props.user.img} />
    <Label name={props.user.name} />
    <ScreenName username={props.user.username} />
    </div>
  )
}

export default Badge
