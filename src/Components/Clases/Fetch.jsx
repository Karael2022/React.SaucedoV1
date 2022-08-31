import React, { useEffect } from 'react'

const Fetch = () => {
    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((res) =>res.json())
        .then((json) => console.log(json))
        .catch((e) => console.log(e))
        .finally(() => console.log('Lo ultimo que hago'));
    },[]);
  return <div>Fetch</div>;
 
}
export default Fetch

