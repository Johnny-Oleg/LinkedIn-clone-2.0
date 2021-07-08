import React from 'react';
import styled from 'styled-components';

const PostModal = props => {
    return (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button>
                        <img src="/images/close-icon.svg" alt="" />
                    </button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        <img src="/images/user.svg" alt="" />
                        <span>Name</span>
                    </UserInfo>
                </SharedContent>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: black;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
`;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    max-height: 90%;
    margin: 0 auto;
    top: 32px;
    display: flex;
    flex-direction: column;
    overflow: initial;
    border-radius: 5px;
    background-color: white;
    position: relative;
`;

const Header = styled.div`
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.6);

    button {
        width: 40px;
        height: 40px;
        max-width: auto;
        color: rgba(0, 0, 0, 0.15);

        svg {
            pointer-events: none;
        }
    }
`;

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 8px 12px;
    vertical-align: baseline;
    overflow-y: auto;
    background: transparent;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;

    svg,
    img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }

    span {
        margin-left: 5px;
        font-size: 16px;
        line-height: 1.5;
        font-weight: 600;
    }
`;

export default PostModal;