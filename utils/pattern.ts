export const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const date_format_regex =
  /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
export const number_regex = /^[+-]?\d+(\.\d+)?$/;
export const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*[^a-zA-Z0-9~!@#$%^*\-_=+/;:,.?\[\]{}]).{6,28}$/;
export const name_regex = /^\S.{3,18}\S$/;
