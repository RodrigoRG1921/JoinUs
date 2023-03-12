import { combineComponents } from '../utils'
import GeneralProvider from './general'

const providers = [GeneralProvider]

export const AppContextProvider = combineComponents(...providers)