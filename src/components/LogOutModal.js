import { useSignOut } from 'react-auth-kit';

const LogoutModal = () => {
    
    const signOut = useSignOut()

    return (
        <div>
            <p>Logout?</p>
            <button className='logout_in_Modal_btn' onClick={() => signOut()}>
                Logout
            </button>
        </div>
    )
}

export default LogoutModal;