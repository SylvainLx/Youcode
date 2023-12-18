'use client' // Error components must be Client Components
 
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import LogginButton from '@/features/auth/LogginButton'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Card className="m-auto mt-4 max-w-lg">
    <CardHeader>
        You need to be logged in to view this page
    </CardHeader>
    <CardFooter>
        <LogginButton />
    </CardFooter>
    </Card>
  )
}