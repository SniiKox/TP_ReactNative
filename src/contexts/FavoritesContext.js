import { createContext, useContext, useReducer } from 'react'

// Initialisation du contexte
const FavoritesContext = createContext()

// Définition des actions disponibles dans notre contexte
const actionTypes = {
  ADD: 'ADD',
  DELETE: 'DELETE'
}

// Etat initial du contexte
const initialState = {
  favoritesTeams: []
}

/**
 * Traitement des actions
 * @param {*} state : Etat précédent l'action
 * @param {*} action : action pour mettre à jour l'état global
 * @returns nouvel état mit à jour
 */
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        favoritesTeams: state.favoritesTeams.push(action.name)
      }
    case actionTypes.DELETE:
      return {
        favoritesTeams: []// state.favoritesTeams.filter(e => e !== action.name)
      }
    default:
      throw new Error(`Unhandled action type ${action.type}`)
  }
}

/**
 * Composant Provider : Distribue l'accès à l'état global aux enfants
 * @param {*} param0 : children : les enfants ayant besoin d'accéder à l'état
 * @returns Composant
 */
const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState)
  return <FavoritesContext.Provider value={{ state, dispatch }}>{children}</FavoritesContext.Provider>
}

/**
 * Hook personnalisée permettant de valider l'appel du contexte
 * @returns { state, dispatch }
 */
const useFavorites = () => {
  const context = useContext(FavoritesContext)
  // context = { state, dispatch }
  if (!context) throw new Error('useFavorites must be used inside a FavoritesProvider')
  return context
}

export {
  useFavorites,
  FavoritesProvider,
  actionTypes
}
