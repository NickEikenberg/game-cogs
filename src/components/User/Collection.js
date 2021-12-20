import React from 'react';

const Collection = () => {
  const userCollection = [];

  return (
    <div>
      <h1 className="text-3xl">My Collection</h1>
      {userCollection.length > 0 ? (
        <h1>Collection Content</h1>
      ) : (
        <h1>
          Your collection is empty. Search for a game to add it to your
          collection.
        </h1>
      )}
    </div>
  );
};

export default Collection;
