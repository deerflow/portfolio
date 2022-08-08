import React, { FC } from 'react';
import SkillList from './SkillList';
import { FlexRow } from '../../layout/Flex';
import { Stylable } from '../../../types/_extendFrom';
import styled from '@emotion/styled';

const SkillCategory: FC<Props> = ({ title, lists, className }) => {
    return (
        <div className={className}>
            <h3>{title}</h3>
            <FlexRow>
                {lists.map((list, index) => (
                    <StyledSkillList key={index} skills={list} />
                ))}
            </FlexRow>
        </div>
    );
};

const StyledSkillList = styled(SkillList)`
    width: 50%;
`;

interface Props extends Stylable {
    title: string;
    lists: readonly { title: string; icon: string }[][];
}

export default SkillCategory;
