'use client';

import React from 'react';
import { Card, Title } from '@mantine/core';

interface VideoModuleProps {
  title: string;
  src: string;
}

export default function VideoModule({ title, src }: VideoModuleProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="my-8 max-w-fit mx-auto"
    >
      <Title order={2} className="mb-4 font-sans font-ultralight">
        {title}
      </Title>
      <iframe
        className="w-full aspect-video"
        title={title}
        src={'https://youtube.com/embed/' + src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Card>
  );
}
