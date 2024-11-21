import { IUser } from "./auth-types";
import { ICart } from "./cart-types";

export type Status = "PENDING" | "SUCCESS" | "ERROR"

export interface ITransaction {
  country?: string;
  city?: string;
  phoneNumber?: string;
  street?: string;
  shipmentMethodId?: number;
  status: Status;
  transactionId: string;
  user: IUser & {cart: ICart}
  shipmentMethod?: ShipmentMethod
}

export interface ShipmentMethod {
  id: number
  title: string
  description: string
  createdAt: string
  updatedAt: string
}