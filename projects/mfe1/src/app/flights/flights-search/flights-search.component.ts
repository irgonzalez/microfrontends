import { Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-flights-search',
    templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

    @ViewChild('vc', { read: ViewContainerRef, static: true })
    viewContainer: ViewContainerRef;

    constructor(
        @Inject(Injector) private injector,
        @Inject(ComponentFactoryResolver) private cfr,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    /**
     * IMPORTANTE:
     * Considerar en el ruteo la ruta principal desde la cual se cargará el módulo
     * Ej:
     *  this.router.navigate(['../path'], { relativeTo: this.route })
     */

    search(): void {
        this.router.navigate(['../lorem/parametros', 12], { relativeTo: this.route })
    }

    terms(): void {
        this.router.navigate(['../lorem'], { relativeTo: this.route })
    }


}
