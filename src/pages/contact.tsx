import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import GlobalLayout from '../components/GlobalLayout';
import styled from '@emotion/styled';
import StateProvider from '../components/StateProvider';
import Section from '../components/Section';
import settings from '../settings';
import META from '../content/META';

const Contact: FC<PageProps> = ({ location }) => {
    return (
        <StateProvider>
            <GlobalLayout location={location} title='Portfolio - Florian Alù' description={META.description.contact}>
                <HeaderSpace />
                <MainSection
                    backgroundColor='secondary'
                    borders='all-but-bottom'
                    padding
                    stripped
                    stripOrientation='-45deg'
                >
                    <Heading1>Contact</Heading1>
                    <Address>
                        <Name>Florian Alù</Name>
                        <a href='mailto:alu.florian@gmail.com'>alu.florian@gmail.com</a>
                        <a href='tel:0648937151'>06 48 93 71 51</a>
                        <SocialLink href='https://www.linkedin.com/in/florian-alù/'>
                            {svgs.linkedIn}
                            LinkedIn
                        </SocialLink>
                        <SocialLink href='https://github.com/deerflow'>
                            {svgs.gitHub}
                            GitHub
                        </SocialLink>
                    </Address>
                </MainSection>
            </GlobalLayout>
        </StateProvider>
    );
};

const HeaderSpace = styled.div`
    height: var(--dimension-header-height);
`;

const MainSection = styled(Section)`
    min-height: calc(100vh - var(--dimension-header-height) - var(--dimension-initial-padding) + 1rem);
    display: flex;
    flex-direction: column;
`;

const Heading1 = styled.h1`
    margin: 0.75rem 0 1.5rem 0;
    @media (max-width: 370px) {
        font-size: max(17.3vw, 2rem);
    }
    @media (max-width: 210px) {
        overflow-wrap: break-word;
    }
`;

const Address = styled.address`
    font-style: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 2rem;
    flex-grow: 1;
    margin-bottom: 3rem;
    & > *:not(:last-child) {
        margin-bottom: 2rem;
    }
    @media (max-width: 420px) {
        font-size: 1.5rem;
        svg {
            width: 1.5rem;
        }
        & > *:not(:last-child) {
            margin-bottom: 1.5rem;
        }
    }
    @media (max-width: 340px) {
        font-size: 1rem;
        svg {
            width: 1rem;
        }
        & > *:not(:last-child) {
            margin-bottom: 1rem;
        }
    }
    @media (max-width: 235px) {
        overflow-wrap: break-word;
    }
`;

const Name = styled.p`
    // Overwrites global p media query
    @media (max-width: 370px) {
        font-size: 1.5rem;
    }
    @media (max-width: 340px) {
        font-size: 1rem;
    }
`;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    & svg {
        margin-right: 0.25rem;
        @media (max-width: 160px) {
            display: none;
        }
    }
`;

const Svg = styled.svg`
    & path {
        fill: var(--color-link);
        transition: fill ${settings.themeTransitionDuration}ms;
    }
`;

const svgs = {
    gitHub: (
        <Svg width='32' height='32' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M17.9304 0C8.02898 0 0 8.02758 0 17.9304C0 25.8526 5.13759 32.5737 12.2619 34.9446C13.158 35.1105 13.4871 34.5556 13.4871 34.082C13.4871 33.6545 13.4703 32.2419 13.4627 30.7437C8.47434 31.8284 7.42177 28.6282 7.42177 28.6282C6.60614 26.5556 5.43094 26.0047 5.43094 26.0047C3.80419 24.8917 5.55356 24.9145 5.55356 24.9145C7.35413 25.0411 8.30222 26.7623 8.30222 26.7623C9.90141 29.5035 12.4968 28.711 13.52 28.253C13.6808 27.0939 14.1456 26.3031 14.6583 25.8553C10.6758 25.4018 6.48914 23.8643 6.48914 16.994C6.48914 15.0365 7.18959 13.4369 8.33667 12.1812C8.15048 11.7295 7.5368 9.90591 8.51034 7.43611C8.51034 7.43611 10.016 6.95419 13.4425 9.27408C14.8726 8.87667 16.4066 8.67755 17.9304 8.6708C19.4542 8.67755 20.9893 8.87667 22.4222 9.27408C25.8446 6.95419 27.3482 7.43611 27.3482 7.43611C28.3241 9.90591 27.7102 11.7295 27.524 12.1812C28.6736 13.4369 29.3693 15.0363 29.3693 16.994C29.3693 23.8807 25.1747 25.3972 21.1821 25.841C21.8251 26.3974 22.3982 27.4887 22.3982 29.1614C22.3982 31.5605 22.3774 33.4914 22.3774 34.082C22.3774 34.5592 22.7001 35.1183 23.6091 34.9422C30.7295 32.5686 35.8606 25.85 35.8606 17.9304C35.8606 8.02758 27.8328 0 17.9304 0Z'
                fill='black'
            />
            <path
                d='M6.71547 25.5423C6.6761 25.6313 6.53575 25.658 6.40821 25.597C6.27813 25.5385 6.205 25.417 6.24719 25.3275C6.28586 25.2358 6.42621 25.2103 6.556 25.2719C6.68636 25.3302 6.76061 25.4528 6.71547 25.5423V25.5423ZM7.59747 26.3292C7.51197 26.4085 7.34477 26.3717 7.23128 26.2464C7.114 26.1214 7.09206 25.9543 7.17883 25.8737C7.267 25.7946 7.42914 25.8315 7.54671 25.9567C7.66399 26.0831 7.68677 26.2492 7.59733 26.3294L7.59747 26.3292ZM8.20258 27.3361C8.09261 27.4124 7.91289 27.3409 7.80194 27.1814C7.69211 27.0221 7.69211 26.8308 7.80433 26.7542C7.91571 26.6775 8.09261 26.7464 8.20511 26.9046C8.3148 27.0668 8.3148 27.258 8.20244 27.3362L8.20258 27.3361ZM9.22577 28.5023C9.12747 28.6106 8.91822 28.5816 8.76494 28.4337C8.60828 28.2891 8.56455 28.0839 8.66313 27.9755C8.76255 27.8669 8.97306 27.8975 9.12747 28.0441C9.28314 28.1884 9.33067 28.3951 9.22591 28.5023H9.22577ZM10.5482 28.896C10.505 29.0364 10.3034 29.1002 10.1003 29.0406C9.89753 28.9791 9.76478 28.8146 9.80571 28.6727C9.84789 28.5314 10.0504 28.4649 10.255 28.5287C10.4575 28.5899 10.5905 28.7532 10.5483 28.896H10.5482ZM12.0535 29.063C12.0585 29.2109 11.8863 29.3335 11.6731 29.3362C11.4586 29.3408 11.2852 29.2212 11.283 29.0758C11.283 28.9264 11.4513 28.8049 11.6656 28.8014C11.8788 28.7972 12.0535 28.916 12.0535 29.063V29.063ZM13.532 29.0063C13.5576 29.1506 13.4094 29.2988 13.1977 29.3382C12.9896 29.3761 12.7969 29.2871 12.7704 29.1441C12.7445 28.9962 12.8955 28.8481 13.1032 28.8097C13.3153 28.7729 13.505 28.8596 13.532 29.0063'
                fill='black'
            />
        </Svg>
    ),
    linkedIn: (
        <Svg width='32' height='32' viewBox='0 0 36 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_54_6)'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2.66062 0.0722656C1.19166 0.0722656 0 1.22764 0 2.65105V33.4943C0 34.9179 1.1918 36.0723 2.66062 36.0723H33.3394C34.8089 36.0723 36 34.9177 36 33.4939V2.65105C36 1.22764 34.8089 0.0722656 33.3394 0.0722656H2.66062ZM10.9401 13.9922V30.1995H5.553V13.9922H10.9401ZM11.2951 8.97987C11.2951 10.5352 10.1258 11.7797 8.24766 11.7797L8.24724 11.7796H8.21236C6.40435 11.7796 5.23547 10.535 5.23547 8.97973C5.23547 7.38912 6.43965 6.17932 8.28338 6.17932C10.1258 6.17932 11.26 7.38912 11.2951 8.97987ZM19.3085 30.1995H13.9219L13.9217 30.2C13.9217 30.2 13.9925 15.5132 13.9222 13.9927H19.3089V16.2868C20.025 15.1827 21.3066 13.6122 24.164 13.6122C27.7082 13.6122 30.3654 15.9287 30.3654 20.9067V30.1995H24.9789V21.5299C24.9789 19.351 24.1989 17.8648 22.2501 17.8648C20.7616 17.8648 19.8752 18.8671 19.486 19.8353C19.3437 20.1808 19.3085 20.6658 19.3085 21.1496V30.1995Z'
                    fill='black'
                />
            </g>
            <defs>
                <clipPath id='clip0_54_6'>
                    <rect width='36' height='36.1446' fill='white' />
                </clipPath>
            </defs>
        </Svg>
    ),
};
export default Contact;
