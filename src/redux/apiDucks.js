import axios from "axios";

// constantes
const InitialState = {
  array: [],
};

//types
const OBTENER_NOTAS = "OBTENER_NOTAS";

// reducer
export default function apiReducer(state = InitialState, action) {
  switch (action.type) {
    case OBTENER_NOTAS:
      return {
        ...state,
        array: action.payload,
      };

    default:
      return state;
  }
}

// acciones
export const obtenerNotasAccion = () => async (dispatch, getState) => {
  try {
    const arr = await axios.get(`https://api-test-ln.herokuapp.com/articles`);
    const arr1 = arr.data.articles.filter((element) =>
      element.subtype.includes("7")
    );

    dispatch({
      type: OBTENER_NOTAS,
      payload: arr1,
    });
  } catch (error) {
    console.log(error);
  }
};
