import React, { useEffect } from "react";
import styled from "styled-components";

const STORY = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding-bottom: .4rem;
    border-bottom: solid .1rem rgba(0, 0, 0, .3);
`

const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .2rem;
`

/**
* @param {object} props - Props
* @param {number} position - Story number
* @param {object} content - Story information to display (title, url, score, by, time, descendants)
* @returns {component} - Story div
*/

function Story ({ position, content }) {
    const { title, url, score, by, time, descendants } = content;

    let link = "";
    let date = "";

    if (url !== undefined) {
        link = new URL(url);
    }

    if (date !== undefined) {
        date = new Date(new Date() - new Date (time*1000)).getHours();
    };

    return (
        <STORY>
            <span>{position + 1}.</span>
            <CONTENT>
                <p>
                    <a href = {url}>{title} </a>
                    {link !== "" && <a href = {link.origin}>({link.host})</a>}
                </p>
                <p> {score} points <span>by</span> {by} <span>{date} hour ago</span> | {descendants} comments </p>
            </CONTENT>
        </STORY>
    );
};

export default Story;