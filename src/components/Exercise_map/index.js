import React, { Component } from 'react';
import User from './User';

class MapandFilter extends Component {
    render() {
        return (
            <User list={[
                { id: 1, name: 'Tyler', friend: true},
                { id: 2, name: 'Ryan', friend: true },
                { id: 3, name: 'Michael', friend: false },
                { id: 4, name: 'Mikenzi', friend: false },
                { id: 5, name: 'Jessica', friend: true },
                { id: 6, name: 'Dan', friend: false }
            ]}/>
        )
    }
}

export default MapandFilter