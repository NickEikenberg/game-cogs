import React from 'react';

const Platforms = ({ platforms }) => {
  const platformNames = platforms.map((x) => x.name);

  return (
    <div>
      <h1>PLATFORMS</h1>
      {platformNames.map((name) => (
        <h1 key={name} className="text-sm">
          {name}
        </h1>
      ))}
    </div>
  );
};

export default Platforms;
