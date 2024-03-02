export interface Product {
  _id: string;
  productName: string;
  description?: string;
  unitPrice: number;
  unitsInStock: number;
  categoryId: string;
}
export interface ProductState {
  list: Product[] | any[];
  status: "idle" | "loading" | "success" | "failed";
  error: string | null;
  selected: Product | null;
}

export interface ProductType {
  key: string;
  _id: string;
  productName: string;
  unitsInStock: number;
  description?: string;
  unitPrice: number;
  setting?: React.ReactNode;
}
