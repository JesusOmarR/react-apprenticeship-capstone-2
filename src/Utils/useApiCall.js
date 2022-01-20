import { useEffect, useState, useDebugValue } from 'react'

function useApiCall(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let controller = new AbortController()
    let signal = controller.signal
    setData({})
    setLoading(true)
    fetch(url, { signal })
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data)
      })
      .catch((err) => {
        setLoading(false)
        setError(err)
      })

    return () => {
      controller.abort()
    }
  }, [url])
  useDebugValue(data ? data : error)
  return [data, error, loading]
}

export default useApiCall
