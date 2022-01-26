import { useEffect, useState, useDebugValue } from 'react'

function useApiCall(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [mayorError, setMayorEror] = useState(null)

  useEffect(() => {
    let controller = new AbortController()
    let signal = controller.signal
    setMayorEror(false)
    setError(false)

    setLoading(true)
    fetch(url, { signal })
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 400) {
          setError(data.msg)
          setLoading(false)
          return
        }
        if (data.code === 500) {
          setMayorEror(data.msg)
          setLoading(false)
          return
        }

        setData(data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        setError(err)
      })

    return () => {
      controller.abort()
      setLoading(false)
      setError(null)
      setMayorEror(null)
    }
  }, [url])
  useDebugValue(data ? data : error)
  return [data, error, mayorError, loading]
}

export default useApiCall
