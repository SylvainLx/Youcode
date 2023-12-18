import { getAuthSession } from '@/components/lib/auth'
import React from 'react'
import LogginButton from './LogginButton'
import LoggedInButton from './LoggedInButton'

export type AuthButtonProps = {
      
    }

export default async function AuthButton(props: AuthButtonProps) {
   const session = await getAuthSession()

   const user = session?.user

   if (!user) {
     return (
    <LogginButton />
    )
    }

   
        return (
            <LoggedInButton user={user} />
        )
    
}
