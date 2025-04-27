export interface SaleEntry {
  productId: string;
  category: 'kids' | 'men' | 'women' | 'unisex';
  quantitySold: number;
  revenue: number;
  date: string; // ISO string
}

export const mockSalesData: SaleEntry[] = [
  {
    productId: 'p1',
    category: 'men',
    quantitySold: 50,
    revenue: 1250,
    date: '2025-04-01',
  },
  {
    productId: 'p2',
    category: 'women',
    quantitySold: 70,
    revenue: 3150,
    date: '2025-04-01',
  },
  {
    productId: 'p3',
    category: 'kids',
    quantitySold: 30,
    revenue: 480,
    date: '2025-04-02',
  },
  {
    productId: 'p4',
    category: 'unisex',
    quantitySold: 20,
    revenue: 400,
    date: '2025-04-03',
  },
  {
    productId: 'p2',
    category: 'women',
    quantitySold: 40,
    revenue: 1800,
    date: '2025-04-04',
  },
  // ➔ add more days' sales to make it realistic
];
