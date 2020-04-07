import React, { useState, useEffect } from 'react';
import { ReactComponent as CloudSaved } from '../SVG/cloudSaved.svg';

export default function LoadingAnimation() {
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimated(false), 3500);
    return () => clearTimeout(timeout);
  }, []);

  return isAnimated ? (
    <>
      <div className='animation'>
        {Array.from({ length: 8 }, (_) => (
          <div className='animation-point'></div>
        ))}
      </div>
      <p>Sending data to the server.</p>
    </>
  ) : (
    <>
      <CloudSaved />
      <p>Data has been sent to the server.</p>
    </>
  );
}
