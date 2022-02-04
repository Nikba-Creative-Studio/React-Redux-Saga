import React from 'react';

export const Alert = ({props}) => {
    
    const {type, text} = props;

    return (
        <div className={`alert alert-${type}`}>
            {text}
        </div>
    )
}