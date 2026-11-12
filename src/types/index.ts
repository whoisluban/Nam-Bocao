export type MenuCategory = 'all' | 'burgers' | 'papas' | 'hotdogs' | 'alitas' | 'bebidas';

export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'papas' | 'hotdogs' | 'alitas' | 'bebidas';
  tagline: string;
  description: string;
  priceCOP: number;
  comboPriceCOP?: number;
  ingredients: string[];
  badge?: string;
  isBestSeller?: boolean;
  isSpicy?: boolean;
  image: string;
  servingsInfo?: string;
}

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  asCombo: boolean;
  selectedSauce?: string;
  specialInstructions?: string;
}

export interface OrderCustomerInfo {
  name: string;
  phone: string;
  address: string;
  orderType: 'delivery' | 'pickup';
  paymentMethod: 'efectivo' | 'nequi' | 'tarjeta';
  notes?: string;
}
