import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions/usuario.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService
    ) { }

    obtenerUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuarioActions.obtenerUsuario),
            mergeMap(
                (action) => this.usuariosService.getUserById(action.id)
                    .pipe(
                        map(usuario => usuarioActions.obtenerUsuarioSuccess({ usuario })),
                        catchError(error => of(usuarioActions.obtenerUsuarioError({ payload: error })))
                    )
            )
        )
    );
}