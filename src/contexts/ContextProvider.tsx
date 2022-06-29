import React, {createContext, useContext} from "react";

type StateContextType = {
  chat?: boolean,
  cart?: boolean,
  userProfile?: boolean,
  notification?: boolean,
  activeMenu?: boolean,
  setActiveMenu?: (value: boolean) => void
}

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  activeMenu: false
}

const StateContext = createContext<StateContextType>(initialState)

type ContextProviderType = {
  children: React.ReactNode
}

export const ContextProvider = ({children}: ContextProviderType) => {
  const [ activeMenu, setActiveMenu ] = React.useState(false)

  const value = React.useMemo(() => ({
    activeMenu,
    setActiveMenu
  }), [activeMenu])

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)