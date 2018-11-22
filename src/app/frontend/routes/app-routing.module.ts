import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AddUserComponent } from "../gui/adduser/adduser.component";
import { ListUsersComponent } from "../gui/listusers/listusers.component";

const routes: Routes = [
    { path: "", redirectTo: "adduser", pathMatch: "full" },
    { path: "adduser", component: AddUserComponent }, // car deja en declaration dans appmodule
    { path: "listusers", component: ListUsersComponent } 
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
