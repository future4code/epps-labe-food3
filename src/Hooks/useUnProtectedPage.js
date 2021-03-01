import { useHistory } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            /* criar função no coordinator */
        }
    }, [history])
}

export default useUnprotectedPage