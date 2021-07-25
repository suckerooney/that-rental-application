import { Rule } from "antd/lib/form";

// Name Rules
const nameMin: number = 2;
const nameMax: number = 30;
const namePattern: RegExp =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
export const NameRules: Rule[] = [
  {
    required: true,
    message: "Please enter your name",
  },
  {
    min: nameMin,
    message: `Name must be at least ${nameMin} characters`,
  },
  {
    max: nameMax,
    message: `Name cannot be more that ${nameMax} characters`,
  },
  {
    pattern: namePattern,
    message: `Please enter a valid name`,
  },
];

// Email Rules
export const EmailRules: Rule[] = [
  {
    required: true,
    message: "Please enter your email",
  },
  {
    type: "email",
    message: `Please enter a valid email`,
  },
];

// Password Rules
export const PasswordRules: Rule[] = [
  {
    required: true,
    message: "Please enter your password",
  },
];

// Password Creation Rules
const passwordMin: number = 8;
const passwordMax: number = 100;
export const PasswordCreationRules: Rule[] = [
  {
    required: true,
    message: "Please enter a password",
  },
  {
    min: passwordMin,
    message: `Password must be at least ${passwordMin} characters`,
  },
  {
    max: passwordMax,
    message: `Password cannot be more than ${passwordMin} characters`,
  },
];

// Confirm Password Rules
export const ConfirmPasswordRules: Rule[] = [
  {
    required: true,
    message: "Please confirm your password",
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Passwords do not match"));
    },
  }),
];

// Phone Rules
export const PhoneRules: Rule[] = [
  {
    required: true,
    message: "",
  },
];
