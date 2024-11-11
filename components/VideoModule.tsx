'use client';

import React from 'react';
import { Card, Title } from '@mantine/core';

interface VideoModuleProps {
  title: string;
  src: string;
}

export default function VideoModule({ title, src }: VideoModuleProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={2} mb="md">
        {title}
      </Title>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          title={title}
          src={'https://youtube.com/embed/' + src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </Card>
  );
}
