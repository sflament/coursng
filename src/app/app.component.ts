import { Component } from "@angular/core";
import {baseList} from "./backend/baseContent.module";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    ngOnInit(): void {
        // Init your component properties here.
        console.log("on demarre app.component");
        console.log(baseList);

    }
}
