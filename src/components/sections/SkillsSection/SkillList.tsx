import React, { FC } from 'react';
import { css } from '@emotion/react';
import { FlexRow } from '../../layout/Flex';
import { Stylable } from '../../../types/_extendFrom';

const SkillList: FC<Props> = ({ skills, className }) => {
    return (
        <ul css={[styles.list, className]}>
            {skills.map(skill => (
                <li key={skill.title} css={styles.li}>
                    <FlexRow style={styles.row} justifyContent='center' alignItems='center'>
                        <img src={skill.icon} />
                    </FlexRow>
                    <p css={styles.p}>{skill.title}</p>
                </li>
            ))}
        </ul>
    );
};

const styles = {
    list: css`
        list-style: none;
        font-family: 'IBM Plex Mono', monospace;
    `,
    li: css`
        display: flex;
        align-items: center;
        width: 15rem;
    `,
    row: css`
        width: 3rem;
        height: 3rem;
        min-width: 3rem;
    `,
    p: css`
        width: fit-content;
    `,
};

interface Props extends Stylable {
    skills: readonly { title: string; icon: string }[];
}

export default SkillList;
