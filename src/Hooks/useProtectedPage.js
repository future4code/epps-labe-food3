import { useHistory } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const useProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (!token){
            /* criar função no coordinator */
        }
    }, [history])
}

export default useProtectedPage