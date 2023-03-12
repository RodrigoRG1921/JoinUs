/* eslint-disable react/display-name */
import React, { ComponentProps, FC } from 'react'

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export const combineComponents = (...components: FC[]): FC => components.reduce(
  (AccumulatedComponents, CurrentComponent) =>
    ({ children }: ComponentProps<FC>): JSX.Element =>
      (<AccumulatedComponents>
        <CurrentComponent>
          { children }
        </CurrentComponent>
      </AccumulatedComponents>
      ),
  ({ children }) => <>{ children }</>
)