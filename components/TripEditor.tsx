'use client';

import { useState } from 'react';

export default function TripEditor() {
  const [title, setTitle] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <h1>🧳 배쭈꾸의 여행계획</h1>
      <input
        placeholder="여행 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>여행 제목: {title}</p>
    </div>
  );
}
