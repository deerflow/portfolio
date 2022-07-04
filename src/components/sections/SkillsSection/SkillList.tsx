import React, { FC } from 'react';
import { css } from '@emotion/react';

const SkillList: FC<Props> = ({ skills }) => {
    return (
        <ul
            css={css`
                list-style: none;
            `}
        >
            {skills.map(skill => (
                <li
                    key={skill.title}
                    css={css`
                        display: flex;
                        align-items: center;
                        font-family: 'IBM Plex Mono', monospace;
                    `}
                >
                    <div
                        css={css`
                            width: 3rem;
                            height: 3rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        `}
                    >
                        <img src={skill.icon} />
                    </div>
                    {skill.title}
                </li>
            ))}
        </ul>
    );
};

interface Props {
    skills: readonly { title: string; icon: string }[];
}

export default SkillList;
