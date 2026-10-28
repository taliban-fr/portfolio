import { useState, useEffect } from 'react'

export default function useTypewriter(
  words,
  { type = 80, erase = 40, pause = 1400 } = {}
) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let delay = deleting ? erase : type
    if (!deleting && text === word) delay = pause

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setI(i + 1)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, i, words, type, erase, pause])

  return text
}