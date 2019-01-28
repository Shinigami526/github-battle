import React from 'react';

const Badge = ({ img, name, username }) => {
  return (
    <div className="app">
    <img src={img} />
    <h1>Name: {name}</h1>
    <h3>Username: {username}</h3>
    </div>
  )
}

export default Badge
