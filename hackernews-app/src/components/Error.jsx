import React from "react";
import styled from "styled-components";

const ERROR = styled.div`
    display: flex;
    margin: 5rem;
    justify-content: center;
    color: #F00;
    font-size: 5rem;
`

/**
* @returns {component} - Error when an error is caught
*/

function Error () {
    return (
        <ERROR>Il y a une erreur...</ERROR>
    );
};

export default Error;