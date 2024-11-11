'use client';

import React from 'react';
import { Card, Skeleton, Title } from '@mantine/core';

interface VideoModuleProps {
  title: string;
  src: string;
}

export default function VideoModule({ title, src }: VideoModuleProps) {
  const [loading, setLoading] = React.useState(true);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={2} mb="md">
        {title}
      </Title>
      <div style={{ position: 'relative', paddingTop: '40%' }}>
        <Skeleton
          visible={loading}
          style={{
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
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
            onLoad={() => setLoading(false)}
          />
        </Skeleton>
      </div>
    </Card>
  );
}
