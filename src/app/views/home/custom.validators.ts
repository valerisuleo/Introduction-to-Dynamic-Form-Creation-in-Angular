import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
	static isTooShort(label: string): any {
		return function (control: AbstractControl): ValidationErrors | null {
			if (control.value.length < 10) {
				return {
					isTooShort: {
						message: `${label} cannot be shorter than 10`,
					},
				};
			} else {
				return null;
			}
		};
	}

	static isChecked(label: string): any {
		return function (control: AbstractControl): ValidationErrors | null {
			if (!control.value) {
				return {
					isChecked: {
						message: `${label} is required`,
					},
				};
			} else {
				return null;
			}
		};
	}

    static isDOB(label: string): any {
		return function (control: AbstractControl): ValidationErrors | null {
			if (!control.value) {
                // SOME REGEX
				return {
					isDOB: {
						message: `${label} cannot be something different...`,
					},
				};
			} else {
				return null;
			}
		};
	}
}
