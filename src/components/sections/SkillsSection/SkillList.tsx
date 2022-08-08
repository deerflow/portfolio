import React, { FC } from 'react';
import { FlexRow } from '../../layout/Flex';
import { Stylable } from '../../../types/_extendFrom';
import styled from '@emotion/styled';
import { Skill } from '../../../types/api';

const SkillList: FC<Props> = ({ skills, className }) => {
    return (
        <List className={className}>
            {skills.map(skill => (
                <ListItem key={skill.title}>
                    <Row justifyContent='center' alignItems='center'>
                        <SkillIcon src={skill.icon} alt={skill.alt ?? `Logo de ${skill.title}`} />
                    </Row>
                    <SkillTitle>{skill.title}</SkillTitle>
                </ListItem>
            ))}
        </List>
    );
};

const List = styled.ul`
    list-style: none;
    font-family: 'IBM Plex Mono', monospace;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    width: 15rem;
`;

const Row = styled(FlexRow)`
    width: 3rem;
    height: 3rem;
    min-width: 3rem;
`;

const SkillIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`;

const SkillTitle = styled.p`
    width: fit-content;
`;

interface Props extends Stylable {
    skills: Skill[];
}

export default SkillList;
