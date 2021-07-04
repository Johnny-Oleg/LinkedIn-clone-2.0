import React from 'react';
import styled from 'styled-components';

const Main = props => {
    return (
        <Container>
            <ShareBox>
                Share
                <div>
                    <img src="/images/user.svg" alt="" />
                    <button>Start a post</button>
                </div>
                <div>
                    <button>
                        <img src="/images/photo-icon.svg" alt="" />
                        <span>Photo</span>
                    </button>
                    <button>
                        <img src="/images/video-icon.svg" alt="" />
                        <span>Video</span>
                    </button>
                    <button>
                        <img src="/images/event-icon.svg" alt="" />
                        <span>Event</span>
                    </button>
                    <button>
                        <img src="/images/article-icon.svg" alt="" />
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>
        </Container>
    )
}

const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
    margin-bottom: 8px;
    text-align: center;
    overflow: hidden;
    border-radius: 5px;
    border: none;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    margin: 0 0 8px;
    color: #958b7b;
    background: white;

    div {
        button {
            min-height: 48px;
            display: flex;
            font-size: 14px;
            line-height: 1.5;
            outline: none;
            border: none;
            color: rgba(0, 0, 0, 0.6);
            background: transparent;
        }
    }
`;

export default Main;    