import {
  DOCUMENT
} from '@angular/common';
import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document , private settingservice:SettingsService) {}

  ngOnInit(): void {
   this.aplicarCheck()
  }

  cambiarTema(tema: string, link:any) {
    this.check(link);
    
    this.settingservice.aplicarTema(tema);
  }

  check(link:any) {

    let selectores = this._document.getElementsByClassName('selector');

    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.toggle('working');
  }

  aplicarCheck(){
    let selectores = this._document.getElementsByClassName('selector');
    for (let ref of selectores) {
     if( ref.getAttribute('data-theme') === this.settingservice.setting.tema){
      ref.classList.add('working');
     }
    }
  }
}
