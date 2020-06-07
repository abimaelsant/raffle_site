import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbDateStruct, NgbModal, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { GeralService } from 'app/geral.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    h1 {
        font-weight: italic;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {
    data: Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;

    date: { year: number, month: number };
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;
    rifaPrincipal: any = new Object();
    rifas: any = [];
    mensagem: string;
    imagemPrincipal: string;
    numeroRandom:number = 0;
    checkExisteConteudo:boolean = true;
    slides: any = [[]];
    chunk(arr: any, chunkSize: any) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }


    constructor(private router: Router, private modalService: NgbModal, private service: GeralService, private renderer: Renderer2, config: NgbAccordionConfig) {
        config.closeOthers = true;
        config.type = 'info';
        this.buscaRifas();
    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    }
    ngOnDestroy() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }

    buscaRifas() {
        this.service.httpClient.get(this.service.url + 'home').subscribe(res => {
            this.rifas = res;
            if(this.rifas.length < 1) {
                this.router.navigate(['/contato']);
                this.checkExisteConteudo = false;
            }
            this.slides = this.chunk(this.rifas, 3);
            if (this.rifas.length > 0) {
                this.rifaPrincipal = this.rifas[0]
                if (this.rifaPrincipal.images.length > 0) {
                    this.numeroRandom = this.gerarNumeroRandomico(this.rifaPrincipal.images.length - 1)
                    this.imagemPrincipal = this.rifaPrincipal.images[this.numeroRandom].url
                }
            } else {
                this.mensagem = 'Nenhuma rifa disponível no momento'
            }
        })
    }

    gerarNumeroRandomico (numero) {
        return Math.floor(Math.random() * (numero + 1));
    }

}
