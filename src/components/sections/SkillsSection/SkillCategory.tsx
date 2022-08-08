import React, { FC } from 'react';
import SkillList from './SkillList';
import { FlexRow } from '../../layout/Flex';
import { css } from '@emotion/react';
import { Stylable } from '../../../types/_extendFrom';

const SkillCategory: FC<Props> = ({ title, lists, className }) => {
    return (
        <div className={className}>
            <h3>{title}</h3>
            <FlexRow>
                {lists.map((list, index) => (
                    <SkillList key={index} skills={list} css={styles.skillList} />
                ))}
            </FlexRow>
        </div>
    );
};

const styles = {
    skillList: css`
        width: 50%;
    `,
};

interface Props extends Stylable {
    title: string;
    lists: readonly { title: string; icon: string }[][];
}

export default SkillCategory;
