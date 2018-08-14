import { Component } from '@angular/core';
import {showWarningOnce} from "tslint/lib/error";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showWarning:boolean = false;

    doShowWarning() {
        this.showWarning = !this.showWarning;
    }

}
