import React from 'react';
import styled from 'styled-components';
import BgImage from '../icons/bg.png'
import Title from './ui/Title';
import Input from './ui/Input';

const Header = ({onClick}) => {

    return (
        <HeaderContainer>
            <Title>
                IP address tracker
            </Title>
            <Input onClick={onClick}/>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.header`
    width: 100%;
    height: 280px;
    padding: 0 24px;
    background-image: url(${BgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 740px) {
        height: 300px;
    }
`;


