import { AbstractControl, ValidationErrors } from "@angular/forms";

export class GenericValidators {
	static required(label: string): any {
		return function (control: AbstractControl): ValidationErrors | null {
			if (!control.value.length) {
				return {
					required: {
						message: `${label} is required`,
					},
				};
			} else {
				return null;
			}
		};
	}
}
