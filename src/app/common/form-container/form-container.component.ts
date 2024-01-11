import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormConfig } from "../intefaces";

@Component({
    selector: "bootstrap-form",
    templateUrl: "./form-container.component.html",
    styleUrls: ["./form-container.component.scss"],
})
export class FormContainerComponent {
    @Input() props: FormGroup;

    constructor() {}

    public formMaker(array: FormConfig[]): FormGroup {
        const controls = Object.assign(
            {},
            ...array.map((item) => ({
                [item.name]: new FormControl("", item.validators || []),
            }))
        );
        return new FormGroup(controls);
    }
}
