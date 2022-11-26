export interface ApiMetadata {
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: string;
  thumbnail: string;
}

export interface ApiProductResponse extends ApiMetadata {
  products: Product[];
}
