import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'repuesto',
        loadComponent: () => import('./repuesto/repuesto.component').then(m => m.RepuestoComponent),
        data: {
          title: 'Repuesto'
        }
      },
      {
        path: 'ventas',
        loadComponent: () => import('./ventas/ventas.component').then(m => m.VentasComponent),
        data: {
          title: 'Ventas'
        }
      },
      {
        path: 'reportes',
        loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
        data: {
          title: 'Reportes'
        }
      }
    ]
  }
];