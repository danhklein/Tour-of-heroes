"use strict";
const router_1 = require('@angular/router');
const heroes_component_1 = require('./heroes.component');
const dashboard_component_1 = require('./dashboard.component');
const hero_detail_component_1 = require('./hero-detail.component');
const appRoutes = [
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map