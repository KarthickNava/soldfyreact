import React from "react";

function useObjectMap(data, mapFn) {
  return data?.map(mapFn);
  // const [mappedData, setMappedData] = useState([]);

  // useEffect(() => {
  //   setMappedData(data.map(mapFn));
  // }, [data, mapFn]);

  // return mappedData;
}

export default useObjectMap;
