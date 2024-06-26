import {Component,inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ThemeService} from '../../service/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themeService: ThemeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.updateTheme();
  }
}
