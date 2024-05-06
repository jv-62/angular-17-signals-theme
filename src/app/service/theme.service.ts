import {Injectable,signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  public themeSignal = signal<string>('dark');

  constructor() { }
  
  setTheme(theme: string){
    this.themeSignal.set(theme);
  }
  
  updateTheme(){
    this.themeSignal.update(value => value === 'dark' ? 'light' : 'dark')
  }
}
