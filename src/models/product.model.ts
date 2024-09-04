export class Product {
  id?: number;
  productName?: string;
  price?: number;
  categoryId?: number;
  constructor({ id, categoryId, productName, price }) {
    if (id !== null) this.id = id;
    if (productName !== null) this.productName = productName;
    if (price !== null) this.price = price;
    if (categoryId !== null) this.categoryId = categoryId;
  }
}
