import React, {
  Dispatch,
  useReducer,
  createContext,
  useContext,
  useMemo,
} from 'react'

import {
  Actions,
  initialState,
  IState,
  reducer
} from '../reducer/general'


interface IContextProps {
  state: IState,
  dispatch: Dispatch<Actions>
}

export const Store = createContext({} as IContextProps)

export const useAppContext = () => useContext(Store)

const State = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <Store.Provider value={ value }>
      { props.children }
    </Store.Provider>
  )
}

export default State