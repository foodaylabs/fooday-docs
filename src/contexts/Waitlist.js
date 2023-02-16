import { createContext, useContext, useMemo, useReducer } from 'react'
import { useApi } from './Api'

const initialState = {
  email: undefined,
  ig: undefined,
  succeeded: false,
  popupOpened: false,
}

export const waitlistContext = createContext({
  ...initialState,
  dispatch: () => {},
})

function reducer(state, action) {
  switch (action.type) {
    case 'openPopup':
      return { ...state, popupOpened: true, email: action.data?.email, ig: action.data?.ig }
    case 'closePopup':
      return { ...state, popupOpened: true, succeeded: false }
    case 'succeeded':
      return { ...state, popupOpened: true, succeeded: true }
  }
}

export default function WaitlistProvider({ children }) {
  const { Provider } = waitlistContext
  const api = useApi()
  const [state, dispatch] = useReducer(reducer, initialState)
  const callbacks = useMemo(() => {
    return {
      joinWaitlist: async (email, ig) => {
        api
          .joinWaitlist(email, ig)
          .then(() => dispatch({ type: 'succeeded' }))
          .catch(err => alert('failed to join waitlist. details: ' + err.message))
      },
      openPopup: () => dispatch({ type: 'openPopup' }),
      closePopup: () => dispatch({ type: 'closePopup' }),
    }
  }, [api])
  return <Provider value={{ ...state, ...callbacks }}>{children}</Provider>
}

export const useWaitlist = () => useContext(waitlistContext)
