import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./frontend/routes/app-routing.module";
import { AppComponent } from "./app.component";
import { AddUserComponent } from "./frontend/gui/adduser/adduser.component";
import { ListUsersComponent } from "./frontend/gui/listusers/listusers.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule, // necessaire dans APPmodule et dans les modules utilisant ngModel !
        AppRoutingModule //pourquoi ici et pas dans declaration ?!?
    ],
    declarations: [
        AppComponent,
        AddUserComponent,  // Quelle différence entre déclaration et imports
        ListUsersComponent  // pour quoi ici et pas dans import ?!?
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
