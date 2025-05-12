import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Stil dosyasını kullanmıyorsanız boş bırakabilirsiniz
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Form inputları değiştiğinde bu metod tetiklenir
  onInputChange(event: any, field: string): void {
    const value = event.target.value;
    if (field === 'email') {
      this.email = value;
    } else if (field === 'password') {
      this.password = value;
    }
  }

  // Form submit edildiğinde bu metod tetiklenir
  onSubmit(event: Event): void {
    event.preventDefault(); // Formun sayfayı yenilemesini engeller

    // Basit bir kontrol, form verilerini doğrulamak için kullanılabilir
    if (this.email && this.password) {
      // Giriş başarılı ise yönlendirme
      this.router.navigate(['/dashboard']);
    } else {
      alert('Lütfen tüm alanları doğru doldurduğunuzdan emin olun!');
    }
  }
}
