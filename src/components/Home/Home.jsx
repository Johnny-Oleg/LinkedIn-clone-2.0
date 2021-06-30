import React from 'react'
import styled from 'styled-components';

import LeftSide from '../LeftSide/LeftSide';
import Main from '../Main/Main';
import RightSide from '../RightSide/RightSide';

const Home = props => {
    return (
        <Container>
            <Section>
                <h5>
                    <a href="">Hiring in a hurry? - </a>
                </h5>
                <p>
                    Find a talented pros in record time with Upwork and keep business moving.
                </p>
            </Section>
            <Layout>
                <LeftSide />
                <Main />
                <RightSide />
            </Layout>
        </Container>
    )
}

const Container = styled.div`
    max-width: 100%;
    padding-top: 52px;
`;

const Content = styled.div`
    max-width: 1128px;
    margin-right: auto;
    margin-left: auto;
`;

const Section = styled.section`
    min-height: 50px;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    text-align: center;
    box-sizing: content-box;
    text-decoration: underline;

    h5 {
        font-size: 14px;
        color: #0a66c2;

        a {
            font-weight: 700;
        }
    }

    p {
        font-size: 14px;
        font-weight: 600;
        color: #434649;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 5px;
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: 'leftside main rightside';
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 25px 0;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;

export default Home;