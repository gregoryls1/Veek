import React from 'react'

import './BackDrop.css'

const backdrop = props => (
    <div className="backdrop" onClick={ props.click }>&#10006;</div>
);

export default backdrop