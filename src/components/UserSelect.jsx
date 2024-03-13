import React, { useContext, useEffect, useState } from 'react'
import { fetchUsers } from '../../utils/utils'
import { UserContext } from '../contexts/User'

export const UserSelect = () => {
    const [fetchedUsers, setFetchedUsers] = useState([])
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        fetchUsers().then((response) => setFetchedUsers(response))
    }, [])

    const handleChange = (event) => {
        setUser(event.target.value)
    }

    const listUsers = (users) => {
        return users.map((user) => <option value={user.username}>{user.username}</option>)
    }

    return (
        <div>
            <select name="login" onChange={handleChange}> Login!
                <option value="" disabled selected> Sign in!</option>
                {listUsers(fetchedUsers)}
            </select>
            <p>Current user: {user}</p>
        </div>
    )
}
