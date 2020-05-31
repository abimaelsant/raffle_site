import { Component, OnInit } from '@angular/core';
import { GeralService } from 'app/geral.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './rifas.component.html',
  styleUrls: ['./rifas.component.scss']
})
export class RifaComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;
    rifas:any = [];
    constructor(private router: Router, private service: GeralService) {
        this.lista()
     }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    lista() {
        this.service.httpClient.get(this.service.url + 'raffles').subscribe(res => {
            this.rifas = res;
            if(this.rifas.length < 1) this.router.navigate(['/aviso']);
        })
    }

    selecionaImagem(imagens) {
        if(imagens.length > 0) {
            return imagens[0].url
        }
    }
}
