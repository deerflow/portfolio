import React, { FC } from 'react';
import profilePicture from '../assets/profile.jpg';
import { css } from '@emotion/react';

const ProfilePicture: FC = () => {
    return (
        <div
            css={css`
                border: 2px solid black;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                background-color: var(--color-static-accent);
                box-shadow: -12px 12px 0px var(--color-shadow);
            `}
        >
            <img src={profilePicture} />
        </div>
    );
};

export default ProfilePicture;
