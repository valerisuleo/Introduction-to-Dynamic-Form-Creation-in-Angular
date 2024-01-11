import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IFormFieldProps } from "../intefaces";

@Component({
	selector: "bootstrap-form-group-checkbox",
	templateUrl: "./form-group-checkbox.component.html",
	styleUrls: ["./form-group-checkbox.component.scss"],
})
export class FormGroupCheckboxComponent {
    @Input() props: IFormFieldProps;
    @Input() formGroup: FormGroup;

    constructor() {}

    get input() {
        return this.formGroup.get(this.props.name);
    }

    
}
