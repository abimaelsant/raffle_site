import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { RifaComponent } from './examples/rifas/rifas.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { RifaDetalheComponent } from './examples/rifa/rifas.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'contato',     component: ProfileComponent },
    { path: 'rifas',       component: RifaComponent },
    { path: 'rifas/:id',     component: RifaDetalheComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
