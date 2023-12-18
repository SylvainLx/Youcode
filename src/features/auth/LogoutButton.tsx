"use client"

import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { Loader, LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function LogoutButton() {
    const mutation = useMutation({
        mutationFn: async () => signOut(),
    })

  return (
    <Button variant="outline" size="sm" disabled={mutation.isPending} onClick={() => {
        mutation.mutate()
    }}>
      {mutation.isPending ? <Loader className="mr-2" size={12} /> : <LogOut className="mr-2" size={12} />}
      Logout
    </Button>
  )
}
