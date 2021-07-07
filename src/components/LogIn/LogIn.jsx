import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const LogIn = props => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg" alt="" />
                </Hero>
                <Form>
                    <Google>
                        <img src="/images/google.svg" alt="" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    padding: 0;
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    position: relative;

    & > a {
        width: 135px;
        height: 34px;

        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    margin-right: 12px;
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.6);

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
    }
`;

const SignIn = styled.a`
    padding: 10px 24px;
    text-align: center;
    box-shadow: inset 0 0 0 1px #0a66c2;
    background-color: rgba(0, 0, 0, 0);
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    line-height: 40px;
    font-weight: 600;

    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }
`;

const Section = styled.section`
    max-width: 1128px;
    width: 100%;
    min-height: 700px;
    /* padding-top: 40px;
    padding-bottom: 138px; */
    margin: auto;
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    align-content: start;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        min-height: 0;
        margin: auto;
    }
`;

const Hero = styled.div`
    width: 100%;

    h1 {
        width: 55%;
        padding-bottom: 0;
        font-size: 56px;
        line-height: 70px;
        font-weight: 700;
        color: #2977c9;

        @media (max-width: 768px) {
            width: 100%;
            text-align: center;
            font-size: 20px;
            line-height: 2;
        }
    }

    img {
        width: 700px;
        height: 670px;
        position: absolute;
        right: -150px;
        bottom: -2px;
        /* z-index: -1; */

        @media (max-width: 768px) {
            width: initial;
            height: initial;
            position: initial;
            top: 230px;
        }
    }
`;

const Form = styled.div`
    width: 408px;
    margin-top: 100px;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const Google = styled.button`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    border-radius: 28px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    /* box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 0 / 0); */
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%);
    background-color: #fff;
    transition-duration: 167ms;
    z-index: 0;

    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
`;

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);