import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { obtenerUsuario } from '../../store/actions/usuario.actions';
import { Subscription } from 'rxjs';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  loading: boolean = false;
  error: any;

  userSubscription: Subscription;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.store.select('usuario').subscribe(({ usuario, loading, error }) => {
      this.usuario = usuario;
      this.loading = loading;
      this.error = error;
    })
    this.router.params.subscribe(params => {
      this.store.dispatch(obtenerUsuario({ id: params.id }));
    });
  }

}
