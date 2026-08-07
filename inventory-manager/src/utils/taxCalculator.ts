import {Product} from "../models/Product";

export function TaxCalculator(product: Product): number {
    return product.getPriceWithTax(0.1);
}