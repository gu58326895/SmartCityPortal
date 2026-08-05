import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { getCurrentUser } from '../api/portalApi';

export default function RequireAuth() {
    const location = useLocation();
    const [checking, setChecking] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        getCurrentUser()
            .then(() => setAuthenticated(true))
            .catch(() => setAuthenticated(false))
            .finally(() => setChecking(false));
    }, []);

    if (checking) {
        return (
            <div className="auth-checking">
                <Spin size="large" />
            </div>
        );
    }

    if (!authenticated) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <Outlet />;
}
