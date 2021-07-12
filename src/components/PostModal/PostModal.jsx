import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import styled from 'styled-components';

const PostModal = props => {
    const [editorText, setEditorText] = useState('');
    const [shareImage, setShareImage] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [assetArea, setAssetArea] = useState('');

    const handleChange = e => {
        const image = e.target.files[0];

        if (image === '' || image === undefined) {
            alert(`not an image, the file is a ${typeof image}`);

            return;
        }

        setShareImage(image);
    }

    const switchAssetArea = area => {
        setShareImage('');
        setVideoLink('');
        setAssetArea(area);
    }

    const reset = e => {
        setEditorText('');
        setShareImage('');
        setVideoLink('');
        setAssetArea('');

        props.handleClick(e);
    }

    return (
        <>
            {props.showModal === 'open' && (
            <Container>
                <Content>
                    <Header>
                        <h2>Create a post</h2>
                        <button onClick={e => reset(e)}>
                            <img src="/images/close-icon.svg" alt="" />
                        </button>
                    </Header>
                    <SharedContent>
                        <UserInfo>
                            {props.user.photoURL ? 
                                <img src={props.user.photoURL} alt="" /> :
                                <img src="/images/user.svg" alt="" />
                            }
                            <span>{props.user.displayName}</span>
                        </UserInfo>
                        <Editor>
                            <textarea 
                                value={editorText} 
                                onChange={e => setEditorText(e.target.value)}
                                placeholder="What do you want to talk about?"
                                autoFocus={true}
                            >
                            </textarea>
                            {assetArea === 'image' ?
                            (<UploadImage> 
                                <input 
                                    id="file"
                                    type="file" 
                                    accept="image/gif, image/jpeg, image/png"
                                    name="image"
                                    onChange={handleChange}
                                />
                                <span>
                                    <label htmlFor="file">Select an image to share</label>
                                </span>
                                {shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />}
                            </UploadImage>) : assetArea === 'media' &&
                            (<>
                                <input 
                                    value={videoLink}
                                    type="text" 
                                    placeholder="Please input a video link"
                                    onChange={e => setVideoLink(e.target.value)}
                                />
                                {videoLink &&
                                    <ReactPlayer width={'100%'} url={videoLink} />
                                }
                            </>)
                            }
                        </Editor>
                    </SharedContent>
                    <ShareCreation>
                        <AttachAssets>
                            <AssetButton onClick={() => switchAssetArea('image')}>
                                <img src="/images/share-img.svg" alt="" />
                            </AssetButton>
                            <AssetButton onClick={() => switchAssetArea('media')}>
                                <img src="/images/share-video.svg" alt="" />
                            </AssetButton>
                            <AssetButton>
                                <img src="/images/share-doc.svg" alt="" />
                            </AssetButton>
                            <AssetButton>
                                <img src="/images/share-hiring.svg" alt="" />
                            </AssetButton>
                            <AssetButton>
                                <img src="/images/celebrate.svg" alt="" />
                            </AssetButton>
                            <AssetButton>
                                <img src="/images/poll.svg" alt="" />
                            </AssetButton>
                            <AssetButton>
                                <img src="/images/ellipsis.svg" alt="" />
                            </AssetButton>
                        </AttachAssets>
                        <ShareComment>
                            <AssetButton>
                                <img src="/images/share-comment.svg" alt="" />
                                Anyone
                            </AssetButton>
                        </ShareComment>
                        <PostButton disabled={!editorText ? true : false}>Post</PostButton>
                    </ShareCreation>
                </Content>
            </Container>
            )}
        </>
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
    animation: fadeIn 0.5s;
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

        svg,
        img {
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

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
    min-width: auto;
    height: 40px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
`;

const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;

    ${AssetButton} {
        width: 40px;
    }
`;

const ShareComment = styled.div`
    margin-right: auto;
    padding-left: 8px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);

    ${AssetButton} {
        img {
            margin-right: 5px;
        }
    }
`;

const PostButton = styled.button`
    min-width: 124px; // 60px
    height: 32px;
    padding-right: 16px;
    padding-left: 16px;
    border-radius: 20px;
    cursor: pointer;
    background: ${props => props.disabled ? '#00000014' : '#0a66c2'};
    color: ${props => props.disabled ? '#0000004D' : '#FFFFFF'};

    /* &:hover {
        background: #004182;
    } */
`;

const Editor = styled.div`
    padding: 12px 4px;

    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
        font-size: 16px; // ?
    }

    input {
        width: 100%;
        height: 35px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 16px;
    }
`;

const UploadImage = styled.div`
    text-align: center;

    img {
        width: 100%;
    }

    input {
        display: none;
    }

    label {
        color: rgba(0, 0, 0, 0.5);
    }
`;

const mapStateToProps = state => {
  return {
      user: state.userState.user,
  };
}

const mapDispatchToProps = dispatch => ({
//   getUserAuth: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);