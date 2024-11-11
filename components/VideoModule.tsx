'use client';

import React from 'react';
import { Card, Title } from '@mantine/core';

interface VideoModuleProps {
  title: string;
  src: string;
}

const VideoModule: React.FC<VideoModuleProps> = (props) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="my-8 max-w-fit mx-auto"
    >
      <Title order={2} className="mb-4 font-sans font-ultralight">
        {props.title}
      </Title>
      <iframe
        className="w-full aspect-video"
        title={props.title}
        src={'https://youtube.com/embed/' + props.src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Card>
  );
};

export default VideoModule;
