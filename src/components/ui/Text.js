import styled from "styled-components";

const Text = styled.p`
    font-weight: 500;
    font-size: 26px;
    line-height: 125%;
    letter-spacing: -0.008em;
    color: #2B2B2B;
    word-wrap: break-word;

    @media (max-width: 740px) {
        width: 100%;
        text-align: center;
        font-size: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: hidden;
    }
`;

export default Text;