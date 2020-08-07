export interface User {
   email: string;
   password: string;
   returnSecureToken?: boolean;
}

export interface FbAuthResponse {
   idToken: string;
   expiresIn: string;
}

export interface Contact {
   id?: string;
   name: string;
   network: string;
   info: string;
   date: Date;
}

export interface FbCreateResponse {
   name: string;
}
