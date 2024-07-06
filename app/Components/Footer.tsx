import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterSection>
            <FooterLinkContainer>
                <h3 style={{ fontFamily: 'BouncyThin', marginBottom: 10 }}>
                    pages
                </h3>
                <LinkCustom href="/home">Home</LinkCustom>
                <LinkCustom href="/about">À propos</LinkCustom>
                <LinkCustom href="/products">Produits</LinkCustom>
                <LinkCustom href="/blog">Blog</LinkCustom>
                <LinkCustom href="/contact">Contact</LinkCustom>
                <LinkCustom href="/faq">FAQ</LinkCustom>
            </FooterLinkContainer>

            <FooterLinkContainer>
                <h3 style={{ fontFamily: 'BouncyThin', marginBottom: 10 }}>
                    Réseaux de zorglux
                </h3>
                <LinkCustom
                    href="https://x.com/zorglux_zorglub"
                    target="_blank"
                >
                    Twitter
                </LinkCustom>
                <LinkCustom
                    href="https://www.tiktok.com/@zorglux_zorglub"
                    target="_blank"
                >
                    Tiktok
                </LinkCustom>
                <LinkCustom
                    href="https://www.pinterest.fr/zorgluxzorglub/"
                    target="_blank"
                >
                    Pinterest
                </LinkCustom>
                <LinkCustom href="/contact">Behance</LinkCustom>
                <LinkCustom href="/about">Youtube</LinkCustom>
            </FooterLinkContainer>
        </FooterSection>
    );
};

const FooterSection = styled.footer`
    border-top: 1px solid black;
    padding-bottom: 50px;
    background: #ddc4e2;
    padding: 50px 50px;
    display: flex;
    gap: 25px;
    color: black;
`;
const FooterLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LinkCustom = styled(Link)`
    color: black;
    text-decoration: none;
`;
export default Footer;
