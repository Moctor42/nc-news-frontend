import React from 'react'
import imgUrl from '../../assets/whoops.png'

export const Error = () => {
    return (
        <div className="page-style">
            <h2 className="page-header">There's nothing here...</h2>
            <img src={imgUrl} alt="a man looking at a missing server" title="server must be out for lunch" />
        </div>
    )
}
