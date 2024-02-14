export interface IName {
  firstName: string;
  lastName: string;
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
