import styled from "styled-components";

const Label = styled.label`
    font-weight: 600;
    font-size: 13px;
    line-height: 125%;
    letter-spacing: 0.1em;
    color: #969696;
    text-transform: uppercase;

    @media (max-width: 740px) {
        font-size: 12px;
        margin: 0 auto;
    }
`;

export default Label;