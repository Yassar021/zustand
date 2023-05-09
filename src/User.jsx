import { shallow } from 'zustand/shallow';
import { useAppStore } from './stores/app-store';
import { useState } from 'react';

const User = () => {
    const [user, getUser, logoutUser] = useAppStore(
        (state) => [state.user, state.getUser, state.logoutUser],
        shallow
    );
    const [username, setUsername] = useState('');

    return (
        <div>
            <p>Login by username</p>
            <input
                type="text"
                placeholder='New Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type='button' onClick={() => getUser(username)}>Login</button>
            {user.login && (
                <>
                    <p>Logged in as {user.login}</p>
                    <img src={user.avatar_url} width='100px' height='100px' alt="profile" />
                    <p>{user.location}</p>
                    <button type='button' onClick={logoutUser}>Logout</button>
                </>
            )}
        </div>
    )
}

export default User