'use client' 
 
import { useEffect } from 'react'
 
export default function Error({error, reset,
}: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button className='bg-amber-400 rounded-2xl p-2 hover:cursor-pointer'
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}