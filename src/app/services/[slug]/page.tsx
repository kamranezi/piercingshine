
import React from 'react';

export default function ServiceSlugPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Услуга: {params.slug}</h1>
    </div>
  );
}
