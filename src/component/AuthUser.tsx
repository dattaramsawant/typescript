import React, { useState } from 'react'
import Button from './Button'

type AuthUser={
    name: string
    email: string
}

function AuthUser() {
    const [user,setUser]=useState<AuthUser | null>(null)

    const handleClick=()=>{
        setUser({
            name:'Datta',
            email:'durvassawant79@gmail.com'
        })
    }
    return (
        <div>
            AuthUser
            <Button handleClick={handleClick} />
            <h2>User name is {user?.name}</h2>
            <h2>User Email is {user?.email}</h2>
        </div>
    )
}

export default AuthUser