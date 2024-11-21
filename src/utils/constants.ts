import { z } from "zod";

export const excludedPaths = ["headphones", "camera", "watches"];

export enum TOKENS {
  REFRESH_TOKEN = "refreshToken",
  ACCESS_TOKEN = "accessToken",
}
export const tdId = 'tdId' 
export enum PAGES_DASHBOARD {
  WISHSLIST = "/wishlist",
  CART = "/cart",
  PROFILE = "profile",
  HOME = "/",
  ABOUT = "/about",
  CONTACT = "/contact-us",
  BLOG = "/blog",
  PRODUCT = "/products",

  FIND_BY = "/products/find-by",
  CATALOG = "/catalog",
  FILTERS = "/filters",
  PAYMENT = "/payment",

  STEP_ONE = '/step-one',
  STEP_TWO = '/step-two',
  STEP_THREE = '/step-three',
}
export enum ERRORS {
  JWT_EXPIRED = "jwt expired",
  UNAUTHORIZED = "Unauthorized",
  NOT_TOKEN = "You are not Login",
}
export type Variant = {
  name: string;
  value: "all" | "new-arrival" | "best-seller" | "discount";
};

export const Values: Variant[] = [
  {
    name: "New Arrival",
    value: "new-arrival",
  },
  {
    name: "Bestseller",
    value: "best-seller",
  },
];

export function validPath(
  categoryTitle: string,
  productTitle: string,
  memory: string,
  color: string
) {
  return `/catalog/${categoryTitle.toLowerCase()}/${productTitle
    .toLowerCase()
    .replace(/\s+/g, "-")}-memory-${memory.toLowerCase()}-color-${color
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
}

export function parseName(fullName: string) {
  const parts = fullName.split("-");

  const body = {
    title: parts.slice(1, -5).join(" "),
    memory: parts[parts.length - 3].toUpperCase(),
    color: parts[parts.length - 1],
  };

  return body;
}

export const formSchema = z.object({
  fullName: z
    .string()
    .min(1, {
      message: "FullName must be at least 2 characters.",
    })
    .optional(),

  email: z.string().email(),

  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

export function Error(error: any) {
  const message = error?.response?.data?.message;

  return message
    ? typeof error?.response?.data?.message === "object"
      ? message[0]
      : message
    : error.message;
}
