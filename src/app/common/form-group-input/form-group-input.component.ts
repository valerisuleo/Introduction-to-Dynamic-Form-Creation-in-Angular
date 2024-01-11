import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IFormFieldProps } from "../intefaces";

@Component({
    selector: "bootstrap-form-group-input",
    templateUrl: "./form-group-input.component.html",
    styleUrls: ["./form-group-input.component.scss"],
})
export class FormGroupInputComponent {
    @Input() props: IFormFieldProps;
    @Input() formGroup: FormGroup;

    constructor() {}

    get input() {
        return this.formGroup.get(this.props.name);
    }
}
