import React from 'react';

function withStyle(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <>
        <div className="border border-red-500 p-10">
          <WrappedComponent {...props} />
        </div>
      </>
    );
  };
}

export default withStyle;
