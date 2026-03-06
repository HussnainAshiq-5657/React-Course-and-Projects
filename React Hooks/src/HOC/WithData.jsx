import React, { useEffect, useState } from 'react';

function withData(WrappedComponent, url) {
  return () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data.posts));
    }, []);
    return (
      <>
        <div>
          <WrappedComponent data={data} />
        </div>
      </>
    );
  };
}

export default withData;
