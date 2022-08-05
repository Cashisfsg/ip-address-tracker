import React from 'react';
import styled from 'styled-components';
import Label from './ui/Label';
import Text from './ui/Text';

const DetailsItem = ({label, text}) => {
    return (
        <Article>
            <Label>{label}</Label>
            <Text>{text}</Text>
        </Article>
    );
}

export default DetailsItem;

const Article = styled.article`
    display: flex;
    position: relative;
    min-width: 20%;
    flex-direction: column;
    gap: 13px;
    overflow-y: hidden;

    @media (max-width: 740px) {
        gap: 7px;
        width: 100%;
        justify-content: center;
    }

`;
