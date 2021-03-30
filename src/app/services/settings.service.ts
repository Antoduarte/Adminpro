import {
  DOCUMENT
} from '@angular/common';
import {
  Inject,
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  setting = {
    temaUrl: "assets/css/colors/default.css",
    tema: "default"
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.leerLocalstorage();
  }

  guardarLocalstorage() {
    localStorage.setItem('ajustes', JSON.stringify(this.setting));
    console.log('guardado');
  }

  leerLocalstorage() {
    if (localStorage.getItem('ajustes')) {
      this.setting = JSON.parse(localStorage.getItem('ajustes'));
      console.log('cargado');
      this.aplicarTema(this.setting.tema);
    } else {
      this.aplicarTema(this.setting.tema);
    }
  }
  aplicarTema(tema: string) {
    const url = `assets/css/colors/${tema}.css`
    this._document.getElementById('tema').setAttribute('href', url);
    this.setting.tema = tema;
    this.setting.temaUrl = url;
    this.guardarLocalstorage();
  }
}
