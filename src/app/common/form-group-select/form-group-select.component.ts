import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IFormFieldProps } from "../intefaces";

@Component({
	selector: "bootstrap-form-group-select",
	templateUrl: "./form-group-select.component.html",
	styleUrls: ["./form-group-select.component.scss"],
})
export class FormGroupSelectComponent {
    @Input() props: IFormFieldProps;
    @Input() formGroup: FormGroup;

    constructor() {}

    get select() {
        return this.formGroup.get(this.props.name);
    }

}
