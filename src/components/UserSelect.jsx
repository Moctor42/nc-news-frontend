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
        return users.map((user) => <option key={user.username} value={user.username}>{user.username}</option>)
    }

    return (
        <div>
            <select name="login" defaultValue="" onChange={handleChange}> Login!
                <option value="" disabled > Sign in!</option>
                {listUsers(fetchedUsers)}
            </select>
            <p>Current user: {user}</p>
        </div>
    )
}
