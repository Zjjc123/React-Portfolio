'use client';
import { Container, Flex } from '@mantine/core';
import VideoModule from './components/VideoModule';
import { BackButton } from '../../components/BackButton';

type Props = {};

export default function VideoPage({}: Props) {
  return (
    <Container py="xl">
      <BackButton href="/" />
      <Flex direction="column" gap="lg">
        <VideoModule
          title="University of Washington ASUW Black Student Commission"
          src="Q0rLdrsbAvU"
        />
        <VideoModule
          title="Ude Dil Levitating - UW Kahaani (1.5M+ Views)"
          src="kxFhZwQ3eu0"
        />
        <VideoModule title="VEX Worlds Reveal - 917M" src="lWE1iFQBnmM" />
        <VideoModule
          title="Viral Vision | Breakthrough Junior Challenge"
          src="8PgU2d7qOgM"
        />
        <VideoModule
          title="EUPHORIA X Bollywood - UW Kahaani"
          src="PMSljieUlmE"
        />
        <VideoModule title="PSA 2020 ILC Winner - HOSA" src="iL9gJoI2TR4" />
      </Flex>
    </Container>
  );
}
