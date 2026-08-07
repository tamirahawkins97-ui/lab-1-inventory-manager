import { Product } from './Product';

export class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }
    override getPriceWithTax(taxRate: number = 0.1): number {
        return this.price * (1 + taxRate);
    }
    get formattedWeight(): string {
        return `${this.weight} kg`
    }
}

const physicalProduct = new PhysicalProduct("SKU001", "Physical Product", 100, 2.5);
console.log(physicalProduct.displayDetails()); // Output: SKU: SKU001, Name: Physical Product, Price: $100.00 weight: 2.5 kg