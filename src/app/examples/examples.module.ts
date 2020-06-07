import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { LandingComponent } from './landing/landing.component';
import { RifaComponent } from './rifas/rifas.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamplesComponent } from './examples.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RifaDetalheComponent } from './rifa/rifas.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        }),
        MDBBootstrapModule.forRoot(),
        RouterModule
    ],
    declarations: [
        LandingComponent,
        RifaComponent,
        RifaDetalheComponent,
        ExamplesComponent,
        ProfileComponent
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
})
export class ExamplesModule { }
