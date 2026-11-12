import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PerksSection } from './components/PerksSection';
import { FeaturedSmash } from './components/FeaturedSmash';
import { MenuCatalog } from './components/MenuCatalog';
import { CustomComboBuilder } from './components/CustomComboBuilder';
import { ReviewsAndSocialProof } from './components/ReviewsAndSocialProof';
import { LocationsAndHours } from './components/LocationsAndHours';
import { CartDrawer } from './components/CartDrawer';
import { ItemModal } from './components/ItemModal';
import { FloatingWhatsAppOrder } from './components/FloatingWhatsAppOrder';
import { Footer } from './components/Footer';
import { NAM_MENU } from './data/menu';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  // Marquee star: La Bestia Ñam
  const featuredBurger = NAM_MENU.find((item) => item.id === 'la-bestia-nam') || NAM_MENU[0];

  // Filtered item lists for combo builder
  const burgersAndDogs = NAM_MENU.filter((i) => i.category === 'burgers' || i.category === 'hotdogs');
  const sides = NAM_MENU.filter((i) => i.category === 'papas' || i.category === 'alitas');
  const drinks = NAM_MENU.filter((i) => i.category === 'bebidas');

  const handleAddToCart = (item: MenuItem, asCombo: boolean = false, sauce?: string) => {
    setCartItems((prev) => {
      const existingKey = `${item.id}-${asCombo ? 'combo' : 'solo'}-${sauce || 'default'}`;
      const existingIndex = prev.findIndex((i) => i.id === existingKey);

      if (existingIndex > -1) {
        return prev.map((ci, idx) =>
          idx === existingIndex ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }

      return [
        ...prev,
        {
          id: existingKey,
          item,
          quantity: 1,
          asCombo,
          selectedSauce: sauce
        }
      ];
    });
  };

  const handleAddCustomCombo = (combo: {
    mainItem: MenuItem;
    sideItem: MenuItem;
    drinkItem: MenuItem;
    sauce: string;
    totalPrice: number;
  }) => {
    // Create a special custom combo cart item
    const customComboItem: MenuItem = {
      id: `custom-combo-${Date.now()}`,
      name: `Combo Personalizado: ${combo.mainItem.name}`,
      category: 'burgers',
      tagline: `Con ${combo.sideItem.name} + ${combo.drinkItem.name}`,
      description: `Incluye: ${combo.mainItem.name}, ${combo.sideItem.name}, ${combo.drinkItem.name} y salsa ${combo.sauce}.`,
      priceCOP: combo.totalPrice,
      ingredients: [
        `Plato fuerte: ${combo.mainItem.name}`,
        `Acompañamiento: ${combo.sideItem.name}`,
        `Bebida: ${combo.drinkItem.name}`,
        `Salsa gratis: ${combo.sauce}`
      ],
      badge: 'Combo 15% OFF',
      image: combo.mainItem.image
    };

    setCartItems((prev) => [
      ...prev,
      {
        id: `combo-custom-${Date.now()}`,
        item: customComboItem,
        quantity: 1,
        asCombo: false,
        selectedSauce: combo.sauce
      }
    ]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((i) => i.id !== cartItemId));
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.id === cartItemId ? { ...i, quantity } : i))
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsAppDirect = () => {
    const msg = encodeURIComponent('¡Hola Ñam Bocao! 🍔 Quiero hacer un pedido a domicilio.');
    window.open(`https://wa.me/573000850222?text=${msg}`, '_blank');
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fff3df] text-[#2b2118] flex flex-col font-sans selection:bg-[#ff6b35] selection:text-white">
      
      {/* Top Header */}
      <Header
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
        onScrollToSection={scrollToSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToMenu={() => scrollToSection('menu')}
          onOpenWhatsApp={openWhatsAppDirect}
        />

        {/* Perks Section (The 4 Quality Rules) */}
        <PerksSection />

        {/* Featured Smash Burger: La Bestia Ñam */}
        <FeaturedSmash
          item={featuredBurger}
          onAddToCart={handleAddToCart}
          onOpenDetails={(item) => setSelectedItemForModal(item)}
        />

        {/* Full Interactive Menu */}
        <MenuCatalog
          items={NAM_MENU}
          onAddToCart={handleAddToCart}
          onOpenDetails={(item) => setSelectedItemForModal(item)}
        />

        {/* Interactive Custom Combo Builder */}
        <CustomComboBuilder
          onAddCustomCombo={handleAddCustomCombo}
          burgers={burgersAndDogs}
          sides={sides}
          drinks={drinks}
        />

        {/* Customer Reviews & Social Proof */}
        <ReviewsAndSocialProof />

        {/* Physical Stores, Delivery Area & Late Hours */}
        <LocationsAndHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer with WhatsApp checkout */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Product Detail Modal */}
      <ItemModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
        onAddToCart={(item, asCombo, sauce) => handleAddToCart(item, asCombo, sauce)}
      />

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsAppOrder />

    </div>
  );
}
