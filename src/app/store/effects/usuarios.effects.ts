import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService
    ) { }

    obtenerUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.obtenerUsuarios),
            mergeMap(
                () => this.usuariosService.getUsers()
                    .pipe(
                        map(usuarios => usuariosActions.obtenerUsuariosSuccess({ usuarios })),
                        catchError(error => of(usuariosActions.obtenerUsuariosError({ payload: error })))
                    )
            )
        )
    );

}