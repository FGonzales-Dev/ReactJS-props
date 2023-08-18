import React from "react";

export default function StyleButton(props){
    const label = props.label
    const id = props.id
    const buttonClicked = props.buttonClicked

    return <button onClick={buttonClicked} id={id}>
        {label}
    </button>
}
