import React, { ReactNode, createContext, useState } from 'react';

interface User {
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TEST_ACCOUNTS = [
    { email: 'demo@example.com', password: 'password123', name: 'Demo User' },
    { email: 'test@user.com', password: 'testpass', name: 'Test User' },
];

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const account = TEST_ACCOUNTS.find((acc) => acc.email.toLowerCase() === email.toLowerCase() && acc.password === password);

        if (account) {
            setUser({ email: account.email, name: account.name });
            return { success: true, message: 'Login successful!' };
        } else {
            return { success: false, message: 'Invalid email or password' };
        }
    };

    const logout = () => {
        setUser(null);
    };

    const value: AuthContextType = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
