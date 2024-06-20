import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const ContactSection = () => {
    return (
        <SectionContainer>
            <SectionTitle>
                SUBSCRIBE <br />
                <SectionTitleRed>TO OUR NEWSLETTER</SectionTitleRed>
            </SectionTitle>
            <Image
                src="/images/bd-yeah.png"
                alt="yeah image for zorglux"
                width={150}
                height={130}
                style={{
                    position: 'absolute',
                    top: 150,
                    left: '10%',
                    transform: 'rotate(-25deg)',
                }}
            />
            <Image
                src="/images/bd-updates.png"
                alt="yeah image for zorglux"
                width={200}
                height={130}
                style={{
                    position: 'absolute',
                    top: 100,
                    right: '10%',
                    transform: 'rotate(25deg)',
                }}
            />
            <InputContainer>
                <Input placeholder="Mail zorlgux" />
                <SubmitButton>ENVOYER UN MAIL A ZORGLUX</SubmitButton>
            </InputContainer>
        </SectionContainer>
    );
};

const SectionContainer = styled.section`
    position: relative;
    background: #ddc4e2;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const SectionTitle = styled.h1`
    font-family: 'BouncyThin';
    text-align: center;
    color: black;
    font-size: 50px;
`;
const SectionTitleRed = styled.span`
    color: #ed4441;
`;
const InputContainer = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
`;
const Input = styled.input`
    background: white;
    border: 1px solid black;
    height: 50px;
    width: 400px;
    padding: 0 10px;
    color: black;
    font-family: 'BouncyThin';
    font-size: 14px;
    &:focus {
        outline: none;
        outline-width: 0;
    }
`;
const SubmitButton = styled.button`
    height: 50px;
    border-radius: 0;
    border: none;
    padding: 0 15px;
`;

export default ContactSection;
