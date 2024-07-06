'use client';

import React from 'react';
import styled from 'styled-components';

export default function Products() {
    return (
        <Container>
            <h1>Nos Produits</h1>
            <p>
                Découvrez notre gamme exclusive de produits Zorglux. Des gadgets
                innovants aux articles de collection, trouvez tout ce dont vous
                avez besoin pour plonger dans l&apos;univers de Zorglux.
            </p>
            <section>
                <h2>Gadgets de Zorglux</h2>
                <ul>
                    <li>
                        <a href="/products/zorglux-gadget-1">Gadget 1</a>
                    </li>
                    <li>
                        <a href="/products/zorglux-gadget-2">Gadget 2</a>
                    </li>
                    <li>
                        <a href="/products/zorglux-gadget-3">Gadget 3</a>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Articles de Collection</h2>
                <ul>
                    <li>
                        <a href="/products/zorglux-figurine">
                            Figurine Zorglux
                        </a>
                    </li>
                    <li>
                        <a href="/products/zorglux-poster">Poster Zorglux</a>
                    </li>
                    <li>
                        <a href="/products/zorglux-tshirt">T-shirt Zorglux</a>
                    </li>
                </ul>
            </section>
        </Container>
    );
}

const Container = styled.section`
    background: #fff9eb;
    min-height: 100vh;
    color: black;
    font-family: 'BouncyThin';
    padding: 15px;
`;
