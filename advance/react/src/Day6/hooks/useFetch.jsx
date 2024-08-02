import React, { useEffect, useState } from "react";

export default function useFetch(api) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isRefetching, setIsRefetching] = useState(false);

  const refetch = () => {
    setIsRefetching(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError("Some error");
      })
      .finally(() => {
        setIsRefetching(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError("Some error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error, refetch, isRefetching };
}
