export interface IName {
  firstName: string;
  lastName: string;
}

export interface IPassword {
  password: string;
  confirmPassword: string;
}

export interface IUpdatePassword extends IPassword {
  currentPassword: string;
}

export interface IPhoneNumber {
  phone_number: string;
}

export interface IEmail {
  email: string;
}

export interface IImage {
  image?: string;
}

export interface IUpdateUser extends IName, IPhoneNumber, IEmail, IImage {}
