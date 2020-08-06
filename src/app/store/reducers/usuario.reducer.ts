import { createReducer, on } from '@ngrx/store';
import { obtenerUsuario, obtenerUsuarioSuccess, obtenerUsuarioError } from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
    id: string,
    usuario: Usuario,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuarioInitialState: UsuarioState = {
    id: null,
    usuario: null,
    loaded: false,
    loading: false,
    error: null
}

const _usuarioReducer = createReducer(usuarioInitialState,

    on(obtenerUsuario, (state, { id }) => (
        {
            ...state,
            loading: true,
            id
        }
    )),
    on(obtenerUsuarioSuccess, (state, { usuario }) => (
        {
            ...state,
            loading: false,
            loaded: true,
            usuario: { ...usuario }
        }
    )),
    on(obtenerUsuarioError, (state, { payload }) => (
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

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}