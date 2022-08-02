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

    @media (max-width: 775px) {
        padding: 0.66rem;
        box-shadow: -8px 8px 0px var(--color-shadow);
        img {
            width: 154px;
            height: 154px;
        }
    }

    @media (max-width: 340px) {
        padding: 3.1vw;
        box-shadow: -2.35vw 2.35vw 0px var(--color-shadow);

        img {
            width: 45vw;
            height: 45vw;
        }
    }
`;

export default ProfilePicture;
