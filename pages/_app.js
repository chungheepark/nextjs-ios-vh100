import '../styles/globals.css'
import {useCallback, useEffect} from "react";
import debounce from 'lodash/debounce';

const setVw2Root = () =>
  document.querySelector(':root')
    .style
    .setProperty('--vw', window.innerWidth / 100 + 'px')

const setVh2Root = () =>
  document.querySelector(':root')
    .style
    .setProperty('--vh', window.innerHeight / 100 + 'px')

function MyApp({Component, pageProps}) {

  const debouncedResizeCallback = useCallback(debounce(() => {
    console.log('resize')
    setVw2Root()
    setVh2Root()
  }, 50), [])

  useEffect(() => {
    setVw2Root()
    setVh2Root()

    window.addEventListener('resize', debouncedResizeCallback)

    return () => window.removeEventListener('resize', debouncedResizeCallback)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
