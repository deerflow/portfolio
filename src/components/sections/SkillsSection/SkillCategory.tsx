import React, { FC } from 'react';
import SkillList from './SkillList';
import { FlexRow } from '../../layout/Flex';

const SkillCategory: FC<Props> = ({ title, lists }) => {
    return (
        <div>
            <h3>{title}</h3>
            <FlexRow>
                {lists.map(list => (
                    <SkillList skills={list} />
                ))}
            </FlexRow>
        </div>
    );
};

interface Props {
    title: string;
    lists: readonly { title: string; icon: string }[][];
}

export default SkillCategory;
