import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useAuth = () => {
    const router = useRouter();

    useEffect(() => {
        const token = window.localStorage.getItem("@TOKEN");
        if (!token) {
            router.push("/");
        }
    }, []);

};

export default useAuth;