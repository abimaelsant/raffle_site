import { Component, OnInit } from '@angular/core';
import { GeralService } from 'app/geral.service';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-login',
    templateUrl: './rifas.component.html',
    styleUrls: ['./rifas.component.scss']
})
export class RifaDetalheComponent implements OnInit {

    data: Date = new Date();
    focus;
    focus1;
    rifa: any = new Object();
    id: any;
    points: any = [];
    mensagemPoint: string;
    status:string;
    closeResult: string;
    comprador:any = new Object({ point: '', name: '', phone: '' });
    ganhador:any = null;
    phoneNumber:any = '';
    constructor(private service: GeralService, private route: ActivatedRoute, private modalService: NgbModal) {
        this.id = this.route.snapshot.paramMap.get("id");
        this.detalhe()
    }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    detalhe() {
        this.service.httpClient.get(this.service.url + 'raffles/' + this.id).subscribe(res => {
            this.rifa = res;
            this.points = this.rifa.point_sale;
            this.ganhador = this.points.find(res => res.award_sentence == true);
        })
    }

    returnMensagem(point, status, name) {
        const nome = name ? name : ''
        if (status == 'PAGO') return 'Número ' + point + ' pago por: ' + nome
        if (status == 'RESERVADO') return 'Número ' + point + ' reservado por: ' + nome
    }

    checkStatusCor(status) {
        if(status == 'ABERTO') return 'btn btn-info btn-circle btn-lg'
        if(status == 'PAGO') return 'btn btn-success btn-circle btn-lg'
        if(status == 'RESERVADO') return 'btn btn-warning btn-circle btn-lg'
      }

    selecionaImagem(imagens) {
        if (imagens.length > 0) {
            return imagens[0].url
        }
    }

    filtro(status) {
        const params = new HttpParams({
            fromObject: {
              status: status
            }
          });
        this.service.httpClient.get(this.service.url + 'raffles/' + this.id + '?'+params).subscribe(res => {
            this.rifa = res;
            this.points = this.rifa.point_sale;
        })
    }

    filtroNumeroTelefone() {
        const params = new HttpParams({
            fromObject: {
                numberPhone: this.phoneNumber
            }
          });
        this.service.httpClient.get(this.service.url + 'raffles/' + this.id + '?'+params).subscribe(res => {
            this.rifa = res;
            this.points = this.rifa.point_sale;
        })
    }

    getPoint(point) {
        this.comprador.point = point;
    }

    comprar() {
        this.service.httpClient.put(this.service.url + 'buy-point/' + this.id, this.comprador).subscribe(res => {
            this.detalhe()
        }) 
    }

    open(content, type, modalDimension) {
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else if (modalDimension == undefined && type === 'Login') {
          this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
        } else {
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }

    }

    openBuscaPontosModal(content, type, modalDimension) {
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else if (modalDimension == undefined && type === 'Login') {
          this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
        } else {
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }

    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
