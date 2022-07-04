import React, { FC } from 'react';
import profilePicture from '../assets/jpg/profile.jpg';
import styled from '@emotion/styled';

const ProfilePicture: FC = () => {
    return (
        <Root>
            <img src={profilePicture} />
        </Root>
    );
};

const Root = styled.div`
    border: 2px solid black;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: var(--color-static-accent);
    box-shadow: -12px 12px 0px var(--color-shadow);
`;

export default ProfilePicture;
