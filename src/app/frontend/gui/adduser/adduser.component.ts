import { Component, OnInit } from "@angular/core";
import {User} from '../../models/user.model';
import {UserList, ListService} from '../../services/listservice.module';
import { RouterExtensions } from "nativescript-angular/router";
//import { FormGroup } from "@angular/forms";
//import{BaseService} from '../../../backend/base.module';
//import { clipPathProperty } from "tns-core-modules/ui/page/page";
//import { NativeScriptFormsModule } from "nativescript-angular/forms";

@Component({
    selector: "adduser",
    moduleId: module.id,
    templateUrl: "./adduser.component.html"
})
export class AddUserComponent implements OnInit {

    public user:User;
    public users:UserList;
    public myservice:ListService;

    ///public toto:FormGroup; // formsgroup, formbuilder, formcontrolname, controle de saisie embarqué dans le composant

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
        this.user = new User("","");
        this.myservice = new ListService("employees");
    }

    ngOnInit(): void {
        // Init your component properties here.
        console.log("on demarre la page adduser:")
        //this.user = {prenom:"champ1",nom:"champ2"};
        // comment récupérer la base en backend ??
        // pour que ce soit dans la base qu'on puisse stocker les utilisateurs et pas dans la variable de ce module
    }

    public submit() {
        console.log("Text: " + this.user.prenom + " " + this.user.nom);
        this.myservice.store(this.user.prenom,this.user.nom);

        //console.log(JSON.stringify(this.myservice.giveList()));
        this.user = {prenom:"",nom:""};
    }

    public goListe() {
        console.log("naviger vers autre page");
        this.user = {prenom:"",nom:""};
        this.routerExtensions.navigate(["/listusers"]);
    }
}
