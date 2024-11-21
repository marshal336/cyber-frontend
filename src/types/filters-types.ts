import { IProductFilters } from "./product-types";

export interface IFilters {
  brands: IProductFilters[];
  memorys: IProductFilters[];
  screenType: IProductFilters[];
}

export interface IUseFiltersState {
  items: IFilters;
  loading: boolean;
  error: boolean;
  getFilters: () => Promise<void>;
}
