import React from 'react';

function WithAuth(WrappedComponent) {
  return ({ props }) => {
    const LoggedIn = true;
    if (!LoggedIn) return <h1>PLease LoginIn to Continue..........</h1>;
    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };
}

export default WithAuth;
