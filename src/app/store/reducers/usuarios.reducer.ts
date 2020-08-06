import { createReducer, on } from '@ngrx/store';
import { obtenerUsuarios, obtenerUsuariosSuccess, obtenerUsuariosError } from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
    usuarios: Usuario[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuariosInitialState: UsuariosState = {
    usuarios: [],
    loaded: false,
    loading: false,
    error: null
}

const _usuariosReducer = createReducer(usuariosInitialState,

    on(obtenerUsuarios, state => ({ ...state, loading: true })),
    on(obtenerUsuariosSuccess, (state, { usuarios }) => (
        {
            ...state,
            loading: false,
            loaded: true,
            usuarios: [...usuarios]
        }
    )),
    on(obtenerUsuariosError, (state, { payload }) => (
        {
            ...state,
            loading: false,
            loaded: false,
            error: {
                url: payload.url,
                name: payload.name,
                message: payload.message
            }
        }
    )),

);

export function usuariosReducer(state, action) {
    return _usuariosReducer(state, action);
}