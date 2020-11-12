import React from 'react';

const Link =({ active ,onClick , childern}) =>
(
    <button 
    onClick = {onClick}
    disabled= {active} 
    style=
    {{
        marginLeft: '4px',
        padding:'20px'
    }}>
     {childern}
    </button>
);
export default Link;