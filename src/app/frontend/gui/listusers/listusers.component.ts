import { Component, OnInit } from "@angular/core";
import {User} from '../../models/user.model';
import {UserList, ListService} from '../../services/listservice.module';
import { RouterExtensions } from "nativescript-angular/router";
//import { Observable as RxObservable } from "rxjs";

@Component({
    selector: "listusers",
    moduleId: module.id,
    templateUrl: "./listusers.component.html"
})
export class ListUsersComponent implements OnInit {

    //public user:User;
    public myListe:Array<User>;
    public myService:ListService;

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
        //this.myService = new ListService("employes");
        //this.myListe = this.myService.giveList();
    }

    ngOnInit(): void {
        // Init your component properties here.
        console.log("on demarre la page listusers:");
        this.myService = new ListService("employes");
        this.myListe = this.myService.giveList();
        //console.log(JSON.stringify(this.myListe))
    }

    public addUser() {
        console.log("naviger vers autre page");
        this.routerExtensions.navigate(["/adduser"]);
    }
}
