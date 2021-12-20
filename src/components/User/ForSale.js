import React from 'react';

const ForSale = () => {
  const userForSale = [];

  return (
    <div>
      <h1 className="text-3xl">For Sale</h1>
      {userForSale.length > 0 ? (
        <h1>For sale content</h1>
      ) : (
        <h1>You have no games for sale. Add some from your collection.</h1>
      )}
    </div>
  );
};

export default ForSale;
