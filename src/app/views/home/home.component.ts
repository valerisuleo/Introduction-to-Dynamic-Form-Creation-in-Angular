import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormContainerComponent } from "src/app/common/form-container/form-container.component";
import formConfig from "./form-config";

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent extends FormContainerComponent implements OnInit {
    public formControllers: any[];
    public formGroup: FormGroup;

    constructor() {
        super();
    }

    public ngOnInit(): void {
        this.formControllers = this.sortFormApi(formConfig);
        this.formGroup = this.formMaker(this.formControllers);

        console.log("this.formGroup", this.formGroup);
        console.log("this.formControllers", this.formControllers);
    }

    public submit(): void {
        console.log(this.formGroup.value);
    }

    private sortFormApi(array): any[] {
        return array.sort((a, b) =>
            a.order > b.order ? 1 : b.order > a.order ? -1 : 0
        );
    }
}
