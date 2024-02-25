import React from 'react';
import styled, { keyframes } from 'styled-components';
import DefaultLayout from '../components/layout/Default';
import Head from '../components/layout/Head';
import Aside from '../components/primitives/Aside';
import P from '../components/primitives/P';
import A from '../components/primitives/A';
import Img from '../components/primitives/Img';
import Icon from '../components/ui/Icon';
import YoutubeIcon from './icons/youtube.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledAside = styled(Aside)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: calc(${(props) => props.theme.spaceUnit} * 4);
    margin-bottom: calc(${(props) => props.theme.spaceUnit} * 4);
`;

const Logo = styled(Img)`
    height: 30vh;
    width: 30vh;
    border-radius: 50%; /* Make it a circle */
`;

export default function Index({ site, name }) {
    /**
     * site come from site.js data file in _data
     */

    const { title, slogan, youtube, about } = site;

    return (
        <DefaultLayout
            head={<Head title={title} slogan={slogan} description={slogan} />}
            title={title}
        >
            <P center>{about}</P>
            <center>
                <Logo src="/img/curiouscap.png" alt="Eleventy logo" />
            </center>
            <P center>
                <A href={youtube}>
                    <Icon icon={YoutubeIcon} left />
                </A>
                <A
                    href={youtube}
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                >
                    Follow me on YouTube
                </A>
            </P>
        </DefaultLayout>
    );
}
