import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Arrow from '../../icons/arrow.svg'

const Input = ({onClick}) => {

    const [value, setValue] = useState('');
    const [isBlur, setIsBlur] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const re = RegExp(/^(?:(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(?!$)|$)){4}/)

    const handleValidation = () => {
        setIsBlur(true);
        setIsValid(re.test(value));
    }

    return (
        <Wrapper>
            <CustomInput 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                maxLength={15}
                onBlur={handleValidation}
                onFocus={() => setIsBlur(false)}
                blur={isBlur}
                valid={isValid}
            />
            <Button 
                disabled={!isValid && isBlur}
                onClick={() => onClick(value)}
            >
                <img src={Arrow} alt='' />
            </Button>
        </Wrapper>
    );
}

export default Input;

const Wrapper = styled.div`
    display: flex;
    max-width: 555px;
    height: 58px;
    margin: 0 auto;

    background: #FFFFFF;
    border-radius: 15px;
`;

const CustomInput = styled.input.attrs({
    placeholder: 'Search for any IP address or domain'
})`
    width: 100%;
    height: 100%;
    padding: 18.5px 24px;
    border-radius: 15px 0px 0px 15px;  

    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.008em;
    color: #2B2B2B;
    font-weight: 400;

    outline: ${({valid, blur}) => valid ? 'none' : !blur ? 'none' : '2px solid red'};
    border: none;
    
`;

const Button = styled.button`
    height: 58px;
    min-width: 58px;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    border-radius: 0px 15px 15px 0px;  
    cursor: pointer;

    border: none;
    outline: none;

    :disabled {
        outline: 2px solid red;
    }
`;
