import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const obtenerUsuario = createAction(
    '[Usuario] Obtener usuarios',
    props<{ id: string }>()
);

export const obtenerUsuarioSuccess = createAction(
    '[Usuario] Obtener usuario Success',
    props<{ usuario: Usuario }>()
);

export const obtenerUsuarioError = createAction(
    '[Usuario] Obtener usuario Error',
    props<{ payload: any }>()
);