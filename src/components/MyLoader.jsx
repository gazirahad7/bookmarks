import React from 'react';

import ContentLoader from 'react-content-loader';

export default function MyLoader() {
  // responsive

  return (
    <ContentLoader
      speed={2}
      width={1000}
      height={320}
      viewBox="0 0 1000 320"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"

    >
      <rect x="20" y="20" rx="5" ry="5" width="220" height="50" />
      <rect x="260" y="20" rx="5" ry="5" width="220" height="50" />
      <rect x="500" y="20" rx="5" ry="5" width="220" height="50" />
      <rect x="740" y="20" rx="5" ry="5" width="220" height="50" />

      <rect x="20" y="90" rx="5" ry="5" width="220" height="50" />
      <rect x="260" y="90" rx="5" ry="5" width="220" height="50" />
      <rect x="500" y="90" rx="5" ry="5" width="220" height="50" />
      <rect x="740" y="90" rx="5" ry="5" width="220" height="50" />

      <rect x="20" y="160" rx="5" ry="5" width="220" height="50" />
      <rect x="260" y="160" rx="5" ry="5" width="220" height="50" />
      <rect x="500" y="160" rx="5" ry="5" width="220" height="50" />
      <rect x="740" y="160" rx="5" ry="5" width="220" height="50" />

    </ContentLoader>
  );
}
