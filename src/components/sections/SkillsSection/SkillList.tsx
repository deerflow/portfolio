import React, { FC } from 'react';
import { css } from '@emotion/react';
import { FlexRow } from '../../layout/Flex';
import { Stylable } from '../../../types/_extendFrom';

const SkillList: FC<Props> = ({ skills, style }) => {
    return (
        <ul
            css={css`
                list-style: none;
                ${style}
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
                    <FlexRow
                        style={css`
                            width: 3rem;
                            height: 3rem;
                            min-width: 3rem;
                        `}
                        justifyContent='center'
                        alignItems='center'
                    >
                        <img src={skill.icon} />
                    </FlexRow>
                    <p
                        css={css`
                            min-width: 12rem;
                        `}
                    >
                        {skill.title}
                    </p>
                </li>
            ))}
        </ul>
    );
};

interface Props extends Stylable {
    skills: readonly { title: string; icon: string }[];
}

export default SkillList;
