import { useEffect, useMemo, useState } from "react"


export function useMediaQuery(query) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query])
  const [match, setMatch] = useState(mediaQuery.matches)

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches)
    mediaQuery.addEventListener("change", onChange)

    return () => mediaQuery.removeEventListener("change", onChange)
  }, [mediaQuery])

  return match
}

export function useMediaQueries() {
  const size1600 = useMediaQuery("(max-width: 1600px)")
  const size1200 = useMediaQuery("(max-width: 1200px)")
  const size1300 = useMediaQuery("(max-width: 1300px)")
  const size1025 = useMediaQuery("(max-width: 1025px)")
  const size990 = useMediaQuery("(max-width: 990px)")
  const size650 = useMediaQuery("(max-width: 650px)")
  const size400 = useMediaQuery("(max-width: 400px)")

  return { size650, size1200, size1600, size1025, size990, size1300, size400}
}