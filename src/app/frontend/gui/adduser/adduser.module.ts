import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AddUserComponent } from "./adduser.component";
import { AppRoutingModule } from "../../routes/app-routing.module";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AddUserComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AddUserModule {}