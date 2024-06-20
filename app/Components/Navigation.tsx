'use client';

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export default function Navigation() {
    return (
        <Header>
            <nav>
                <MenuList>
                    <div style={{ fontSize: '30px', fontFamily: 'Bouncy' }}>
                        <span
                            style={{
                                fontWeight: 'bold',
                                fontFamily: 'BouncyBlack',
                            }}
                        >
                            Z
                        </span>
                        orglux
                    </div>
                    <div
                        style={{
                            flexDirection: 'row',
                            display: 'flex',
                            gap: 15,
                            alignItems: 'center',
                            fontFamily: 'Montserrat',
                            fontWeight: 500,
                        }}
                    >
                        <li>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                                href="/"
                            >
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                                href="/about"
                            >
                                <p>About</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                                href="/product"
                            >
                                <p>Products</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                                href="/blog"
                            >
                                <p>Blog</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                                href="/contact"
                            >
                                <p>Contact</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                                href="/faq"
                            >
                                <p>FAQ</p>
                            </Link>
                        </li>
                    </div>
                    <div style={{ fontSize: '30px', color: '#F9FEBC' }}>
                        <span style={{ fontWeight: 'bold' }}>Z</span>orglux
                    </div>
                </MenuList>
            </nav>
        </Header>
    );
}

const Header = styled.header`
    background: #f9febc;
    color: black;
    padding: 20px;
`;

const MenuList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
`;
