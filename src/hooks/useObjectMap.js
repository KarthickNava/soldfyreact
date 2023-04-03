import { useState, useEffect } from 'react';

function useObjectMap(data, mapFn) {
  const [mappedData, setMappedData] = useState([]);

  useEffect(() => {
    setMappedData(data.map(mapFn));
  }, [data, mapFn]);

  return mappedData;
}

export default useObjectMap;
