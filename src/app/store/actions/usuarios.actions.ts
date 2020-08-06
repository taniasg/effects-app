import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const obtenerUsuarios = createAction('[Usuarios] Obtener usuarios');

export const obtenerUsuariosSuccess = createAction(
    '[Usuarios] Obtener usuarios Success',
    props<{ usuarios: Usuario[] }>()
);

export const obtenerUsuariosError = createAction(
    '[Usuarios] Obtener usuarios Error',
    props<{ payload: any }>()
);