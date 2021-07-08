import React from 'react';
import styled from 'styled-components';

import PostModal from '../PostModal/PostModal';

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
            <div>
                <Article>
                    <SharedActor>
                        <div>
                            <img src="/images/user.svg" alt="" />
                            <a>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </a>
                        </div>
                        <button>
                            <img src="/images/ellipsis.svg" alt="" />
                        </button>
                    </SharedActor>
                    <Description></Description>
                    <SharedImg>
                        <a>
                            <img src="/images/shared-image.jpg" alt="" />
                        </a>
                    </SharedImg>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                                <span>3557</span>
                            </button>
                        </li>
                        <li>
                            <a>2 comments</a>
                        </li>
                    </SocialCounts>
                    <SocialActions>
                        <button>
                            <img src="/images/like-icon.svg" alt="" />
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="/images/comments-icon.svg" alt="" />
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src="/images/share-icon.svg" alt="" />
                            <span>Share</span>
                        </button>
                        <button>
                            <img src="/images/send-icon.svg" alt="" />
                            <span>Send</span>
                        </button>
                    </SocialActions>
                </Article>
                <PostModal />
            </div>
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
            align-items: center;
            font-size: 14px;
            line-height: 1.5;
            font-weight: 600;
            outline: none;
            border: none;
            color: rgba(0, 0, 0, 0.6);
            background: transparent;
        }

        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0 16px;

            img {
                width: 48px;
                margin-right: 8px;
                border-radius: 50%;
            }

            button {
                flex-grow: 1;
                margin: 4px 0;
                padding-left: 16px;
                text-align: left;
                border-radius: 35px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background-color: white;
            }
        }

        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button {
                img {
                    margin: 0 4px 0 -2px;
                }

                span {
                    color: #70b5f9;
                }
            }
        }
    }
`;

const Article = styled(CommonCard)`
    margin: 0 0 8px;
    padding: 0;
    overflow: visible;
`;

const SharedActor = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    /* padding-right: 40px; */
    margin-bottom: 8px;
    padding: 12px 16px 0;

    div {
        display: flex;
        flex-grow: 1;
        margin-right: 12px;
        overflow: hidden;

        img {
            width: 48px;
            height: 48px;
        }

        & > a {
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            flex-basis: 0;
            margin-left: 8px;
            text-decoration: none;
            overflow: hidden;

            span {
                text-align: left;

                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }

                &:nth-child(n + 1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }

    button {
        position: absolute;
        top: 0;
        right: 12px;
        background: transparent;
        border: none;
        outline: none;
    }
`;

const Description = styled.div`
    padding: 0 16px;
    text-align: left;
    font-size: 14px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
`;

const SharedImg = styled.div`
    width: 100%;
    display: block;
    margin-top: 8px;
    position: relative;
    background-color: #f9fafb;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const SocialCounts = styled.ul`
    display: flex;
    align-items: flex-start;
    margin: 0 16px;
    padding: 8px 0;
    line-height: 1.3;
    overflow: auto;
    list-style: none;
    border-bottom: 1px solid #e9e5df;

    li {
        margin-right: 5px;
        font-size: 12px;

        button {
            display: flex;
        }
    }
`;

const SocialActions = styled.div`
    min-height: 40px;
    display: flex;
    /* justify-content: flex-start; */
    justify-content: space-around; // or space-between;
    align-items: center;
    margin: 0;
    padding: 4px 8px;

    button {
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #00000099;

        @media (min-width: 768px) {
            span {
                margin-left: 8px;
            }
        }
    }
`;

export default Main;    