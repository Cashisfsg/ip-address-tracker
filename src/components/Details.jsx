import React from 'react';
import styled from 'styled-components';
import DetailsItem from './DetailsItem';
import Line from './ui/Line';

const Details = ({ip, city, region, timezone, isp}) => {
    return (
        <DetailsContainer>
            <DetailsItem label='ip address' text={ip}></DetailsItem>
            <DetailsItem label='location' text={`${city}, ${region}`}></DetailsItem>
            <DetailsItem label='timezone' text={timezone}></DetailsItem>
            <DetailsItem label='isp' text={isp}></DetailsItem>
        </DetailsContainer>
    );
}

export default Details;

const DetailsContainer = styled.main`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    transform: translate(-50%, -50%);
    grid-column-gap: 5%;
    left: 50%;
    margin: 0 auto;
    padding: 35px 32px 32px;
    width: 75%;
    height: 160px;
    background: #FFF;
    border-radius: 15px;
    z-index: 450;

    @media (max-width: 740px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
        grid-row-gap: 24px;
        place-items: center;
        height: max-content;
        width: calc(100% - 48px);
        max-width: 555px;
        transform: translate(-50%, -130px);
    }
`;
