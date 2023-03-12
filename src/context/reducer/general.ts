import { ActionMap } from '../utils'

export enum Types {
  SET_INPUT_TEXT = 'SET_INPUT_TEXT',
}

type Payload = {
  [Types.SET_INPUT_TEXT] : {
    inputText: string
  }
}

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>]

export interface IState {
  inputText: string
}

export const initialState: IState = {
  inputText: '',
}

export const reducer = (state: IState, action: Actions) => {
  const { type } = action
  switch (type) {
  case Types.SET_INPUT_TEXT:
    return {
      ...state,
      inputText: action.payload.inputText
    }
  default:
    throw new Error('Define an action')
  }
}