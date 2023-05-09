import { useAppStore } from "./stores/app-store"

const Username = () => {
    const username = useAppStore((state) => state.username);
    const updateUsername = useAppStore((state) => state.updateUsername);
    console.log('render username');

    return (
        <div>
            <p>Username : {username}</p>
            <input type="text" placeholder="new username" onChange={(event) => {
                const newUsername = event.target.value;

                updateUsername(newUsername);
            }} />
        </div>
    )
}

export default Username