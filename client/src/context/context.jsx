import { createContext, useContext, useState } from 'react'

const Context = createContext()
export const useAppContext = () => useContext(Context)

export const ContextProvider = ({ children }) => {
  const initialState = {
    title: "MERN app works..."
  }

	const [state, setState] = useState(initialState)

  const context = {
    state, setState
  }

	return (
		<Context.Provider value={context}>
      {children}
    </Context.Provider>
	)
}
