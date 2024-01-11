import { GenericValidators } from "src/app/common/form-container/generic.validators";
import { CustomValidators } from "./custom.validators";

const formControllers = [
    {
        order: 2,
        type: "text",
        name: "firstName",
        label: "First name",
        staticContent: null,
        validators: [GenericValidators.required("First name")],
    },
    {
        order: 3,
        type: "text",
        name: "lastName",
        label: "Last name",
        staticContent: null,
        validators: [GenericValidators.required("Last name")],
    },
    {
        order: 4,
        type: "text",
        name: "phoneNumber",
        label: "Phone number",
        staticContent: null,
        validators: [
            GenericValidators.required("Phone number"),
            CustomValidators.isTooShort("Phone number"),
        ],
    },
    {
        order: 5,
        type: "date",
        name: "dateOfbirth",
        label: "Date of Birth",
        staticContent: null,
        validators: [
            GenericValidators.required("Date of Birth"),
            CustomValidators.isDOB("Date of Birth"),
        ],
    },
    // {
    // staticContent: null,//
    // order: 1,
    //     type: "email",
    // 	name: "emailAddress",
    // 	label: "Email Address",
    // 	validators: [GenericValidators.required("Email Address")],
    // },
    {
        order: 8,
        type: "password",
        name: "securityWord",
        label: "Security Word",
        staticContent: [
            {
                type: "header",
                innerText: "Security Word",
            },
            {
                type: "paragraph",
                innerText:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
        ],
        validators: [GenericValidators.required("Security Word")],
    },
    {
        order: 6,
        type: "checkbox",
        name: "vm",
        label: "Virgin Media",
        staticContent: [
            {
                type: "header",
                innerText: "Get the full virgin experience!",
            },
            {
                type: "paragraph",
                innerText:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
        ],
        validators: [CustomValidators.isChecked("Please mark this box")],
    },
    {
        order: 7,
        type: "checkbox",
        name: "companiesGroup",
        label: "Group comapanies, including VM O2 and Priority",
        staticContent: null,
        validators: [],
    },
    {
        order: 0,
        type: "select",
        name: "title",
        label: "Title",
        validators: [],
        staticContent: [
            {
                type: "header",
                innerText: "Contact Details",
            },
        ],
        options: ["Mr", "Madame", "Miss", "Dr"],
    },
];

export default formControllers;
