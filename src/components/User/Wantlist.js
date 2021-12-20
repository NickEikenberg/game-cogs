import React from 'react';

const Wantlist = () => {
  const userWantlist = [];

  return (
    <div>
      <h1 className="text-3xl">Wantlist</h1>
      {userWantlist.length > 0 ? (
        <h1>Wantlist content</h1>
      ) : (
        <h1>
          Your wantlist is empty. Search for a game to add it to your wantlist.
        </h1>
      )}
    </div>
  );
};

export default Wantlist;
