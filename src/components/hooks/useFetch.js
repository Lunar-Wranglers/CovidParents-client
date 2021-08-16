import { useState, useEffect } from 'react'
import vaxFacts from '../../api/vaxFacts'

const useFetch = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
  })
  
  useEffect(() => {
    if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await vaxFacts.get(`/${data.slug}`)
            setData({ ...data, results: res.data })
          } catch (err) {
            reporter.warn(`BLERG`)
          }
        }
        fetch()
      }, 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [data.slug])
  
  return { data, setData }
}

export default useFetch