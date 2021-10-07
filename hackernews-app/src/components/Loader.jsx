import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const LOADER = styled.i`
    animation: ${rotate} 1.5s infinite linear;
    display: flex;
    margin: 5rem;
    justify-content: center;
    font-size: 5rem;
    cursor: auto;

    &:hover {
        color: inherit
    }
`

/**
* @returns {component} - Loader when data id being fetched
*/

function Loader () {
    return (
        <LOADER className = "fas fa-redo-alt"></LOADER>
    );
};

export default Loader;