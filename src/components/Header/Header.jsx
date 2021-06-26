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

export default Header;