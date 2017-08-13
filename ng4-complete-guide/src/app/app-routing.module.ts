import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth-guard.service";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home/home.component";
const appRoutes: Routes = [
    // {
    //     path: '', redirectTo: '/recipes', pathMatch: 'full'
    // },
    {   
        path: '', component: HomeComponent, pathMatch : 'full'
    },
    {
        path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard]
    },
    {   
        path: 'shopping-list', component: ShoppingListComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [RouterModule]
})
export class AppRoutingModule {

}