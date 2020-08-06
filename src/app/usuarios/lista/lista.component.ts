import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store'
import { obtenerUsuarios } from '../../store/actions/usuarios.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit, OnDestroy {

  usersSubscription: Subscription;

  users: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.usersSubscription = this.store
      .select('usuarios')
      .subscribe(({ usuarios, loading, error }) => {
        this.users = usuarios;
        this.loading = loading;
        this.error = error;
      })
    this.store.dispatch(obtenerUsuarios());
  }

  ngOnDestroy(): void {

  }

}
