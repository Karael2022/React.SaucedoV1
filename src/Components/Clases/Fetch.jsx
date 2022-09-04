import React, { useEffect } from 'react'

const Fetch = () => {
    useEffect(() => {
        fetch('http swapi.dev/api/planets/1/')
        .then((res) =>res.json())
        .then((json) => console.log(json))
        .catch((e) => console.log(e))
        .finally(() => console.log('Lo ultimo que hago'));
    },[]);
  return <div>Fetch</div>;
 
}
export default Fetch

