import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const LeftSide = ({ user }) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        {user && user.photoURL ? 
                            <UserPhoto src={user.photoURL}/> :
                            <Photo />
                        }
                        <Link>Welcome, {user ? user.displayName : 'there'}!</Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <div>
                        <a>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </a>
                        <img src="/images/widget-icon.svg" alt="" />
                    </div>
                </Widget>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="" />
                        My items
                    </span>
                </Item>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/images/plus-icon.svg" alt="" />
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
        </Container>
    )
}

const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
    margin-bottom: 8px;
    text-align: center;
    overflow: hidden;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    transition: box-shadow 83ms;
    position: relative;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const CardBackground = styled.div`
    height: 54px;
    margin: -12px -12px 0;
    background-image: url('/images/card-bg.svg');
    background-position: center;
    background-size: 462px;
`;

const Photo = styled.div`
    width: 72px;
    height: 72px;
    margin: -38px auto 12px;
    background-image: url('/images/photo.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    background-clip: content-box;
    box-sizing: border-box;
    background-color: #fff;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: none;
`;

const UserPhoto = styled.img`
    width: 72px;
    height: 72px;
    margin: -38px auto 12px;
    box-sizing: border-box;
    background-color: #fff;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: none;
`;

const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
`;

const AddPhotoText = styled.div`
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
    color: #0a66c2;
`;

const Widget = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);

    & > div {
        padding: 4px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }

        a {
            display: flex;
            flex-direction: column;
            text-align-last: left;

            span {
                font-size: 12px;
                line-height: 1.333;

                &:first-child {
                    color: rgba(0, 0, 0, 0.6);
                }

                &:nth-child(2) {
                    color: rgba(0, 0, 0, 1);
                }
            }
        }
    }

    svg {
        color: rgba(0, 0, 0, 1);
    }
`;

const Item = styled.div`
    padding: 12px;
    display: block;
    text-align: left;
    font-size: 12px;
    border-color: rgba(0, 0, 0, 0.8);

    span {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 1);

        svg {
            color: rgba(0, 0, 0, 0.6);
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`;

const CommunityCard = styled(ArtCard)`
    padding: 8px 0 0;
    display: flex;
    flex-direction: column;
    text-align: left;

    a {
        padding: 4px 12px 4px 12px;
        color: black;
        font-size: 12px;

        &:hover {
            color: #0a66c2;
        }

        span {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &:last-child {
            padding: 12px;
            text-decoration: none;
            border-top: 1px solid #d6cec2;
            color: rgba(0, 0, 0, 0.6);

            &:hover {
                background-color: rgba(0, 0, 0, 0.08);
            }
        }
    }
`;

const mapStateToProps = state => {
    return {
        user: state.userState.user
    }
}

export default connect(mapStateToProps)(LeftSide);