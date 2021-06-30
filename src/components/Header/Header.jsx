import React from 'react';
import styled from 'styled-components';

const Header = props => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" alt="" />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a href="#">
                                <img src="/images/nav-home.svg" alt="" />
                            </a>
                            <span>Home</span>
                        </NavList>
                        <NavList>
                            <a href="#">
                                <img src="/images/nav-network.svg" alt="" />
                            </a>
                            <span>My Network</span>
                        </NavList>
                        <NavList>
                            <a href="#">
                                <img src="/images/nav-jobs.svg" alt="" />
                            </a>
                            <span>Jobs</span>
                        </NavList>
                        <NavList>
                            <a href="#">
                                <img src="/images/nav-messaging.svg" alt="" />
                            </a>
                            <span>Messaging</span>
                        </NavList>
                        <NavList>
                            <a href="#">
                                <img src="/images/nav-notifications.svg" alt="" />
                            </a>
                            <span>Notifications</span>
                        </NavList>
                        <User>
                            <a href="">
                                <img src="/images/user.svg" alt="" />
                                <span>
                                    Me
                                    <img src="/images/down-icon.svg" alt="" />
                                </span>
                                {/* <img src="/images/down-icon.svg" alt="" /> */}
                            </a>
                            <SignOut>
                                <a href="">Sign Out</a>
                            </SignOut>
                        </User>
                        <Work>
                            <a href="">
                                <img src="/images/nav-work.svg" alt="" />
                                <span>
                                    Work
                                    <img src="/images/down-icon.svg" alt="" />
                                </span>
                                {/* <img src="/images/down-icon.svg" alt="" /> */}
                            </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    padding: 0 24px;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background-color: white;
    z-index: 100;
`;

const Content = styled.div`
    max-width: 1128px;
    min-height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0;
`;

const Search = styled.div`
    flex-grow: 1;
    position: relative;
    opacity: 1;

    & > div {
        max-width: 280px;

        input {
            width: 218px;
            height: 34px;
            padding: 0 8px 0 40px;
            font-size: 14px;
            line-height: 1.75;
            font-weight: 400;
            vertical-align: text-top;
            border: none;
            border-color: #dce6f1;
            box-shadow: none;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.9);
            background-color: #eef3f8;
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    pointer-events: none;
    z-index: 1;
`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;

    @media (max-width: 768px) {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background: white;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    .active {
        span::after {
            content: ' ';
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            border-bottom: 2px solid var(--white, #fff); // TODO
            border-color: rgba(0, 0, 0, 0.9);
            transform: scaleX(1);
            transition: transform 0.2s ease-in-out;
        }
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;

    a {
        min-width: 80px;
        min-height: 42px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        line-height: 1.5;
        font-weight: 400;
        background: transparent;
        position: relative;
        text-decoration: none;

        span {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 768px) {
            min-width: 70px;
        }
    }

    &:hover,
    &:active {
        a {
            span {
                color: rgba(0, 0, 0, 0.9); 
            }
        }
    }
`;

const SignOut = styled.div`
    width: 100px;
    height: 40px;
    display: none;
    text-align: center;
    position: absolute;
    top: 45px;
    font-size: 16px;
    transition-duration: 167ms;
    border-radius: 0 0 5px 5px;
    background: white;
`;

const User = styled(NavList)`
    /* a > svg {
        width: 24px;
        border-radius: 50%;
    } */

    a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    span {
        display: flex;
        align-items: center;
    }

    &:hover {
        ${SignOut} {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Header;