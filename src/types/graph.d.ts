export const typeDefs = ["type User {\n  id: Int!\n  email: String\n  firstName: String!\n  lastName: String!\n  age: Int!\n  password: String\n  verifiedEmail: Boolean!\n  phoneNumber: String\n  verifiedPhoneNumber: String!\n  profilePhoto: String!\n  createdAt: String!\n  updatedAt: String\n  fullName: String\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastOrientation: Float!\n}\n\ntype Query {\n  user: User\n  verification: Verification\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
  verification: Verification | null;
}

export interface User {
  id: number;
  email: string | null;
  firstName: string;
  lastName: string;
  age: number;
  password: string | null;
  verifiedEmail: boolean;
  phoneNumber: string | null;
  verifiedPhoneNumber: string;
  profilePhoto: string;
  createdAt: string;
  updatedAt: string | null;
  fullName: string | null;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number | null;
  lastLat: number | null;
  lastOrientation: number;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  createdAt: string;
  updatedAt: string;
}
