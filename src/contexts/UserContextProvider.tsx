import React, {createContext, useContext} from "react";

type UserContextType = {
  id?: number,
  isLogin?: boolean,
  setIsLogin?: (value: boolean) => void
}

const initialState = {
  isLogin: false
}

const UserContext = createContext<UserContextType>(initialState)

type UserContextProviderType = {
  children: React.ReactNode
}

export const UserContextProvider = ({children}: UserContextProviderType) => {
  const [ isLogin, setIsLogin ] = React.useState(false)

  const value = React.useMemo(() => ({
    setIsLogin,
    isLogin
  }), [isLogin, setIsLogin])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)