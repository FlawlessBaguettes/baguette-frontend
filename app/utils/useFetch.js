import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const refetch = () => {
    setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
        setHasError(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, [url, refetchIndex]);

  return [response, isLoading, hasError, refetch];
}

export default useFetch;
