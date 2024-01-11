export interface IFormFieldProps {
    name: string;
    label: string;
    type?: string;
    options?: string[];
}

export interface FormConfig {
    name: string;
    validators?: any[];
}
