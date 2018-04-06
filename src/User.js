import React from 'react';

const User = (props) => {
    return(
        <div>
            <h2>User Component</h2>
            <p>Hello, {props.name}</p>
        </div>
    );
}

export default User;