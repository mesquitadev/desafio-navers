import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthState {
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  token: string;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const token = await AsyncStorage.getItem('@NaveRS:token');

      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        console.log(token);
        setData({token});
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({email, password}) => {
    const response = await api.post('/users/login', {
      email,
      password,
    });
    const {token} = response.data;

    await AsyncStorage.setItem('@NaveRS:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;
    console.log('tk', token);

    setData({token});
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@NaveRS:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{token: data.token, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthProvider, useAuth};
