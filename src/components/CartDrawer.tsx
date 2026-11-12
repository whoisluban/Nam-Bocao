import React, { useState } from 'react';
import { CartItem, OrderCustomerInfo } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageSquare, Check, ArrowRight, Bike, Store } from 'lucide-react';
import { SAUCES_AVAILABLE } from '../data/menu';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, quantity: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart
}) => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerInfo, setCustomerInfo] = useState<OrderCustomerInfo>({
    name: '',
    phone: '',
    address: '',
    orderType: 'delivery',
    paymentMethod: 'efectivo',
    notes: ''
  });

  if (!isOpen) return null;

  const calculateItemPrice = (item: CartItem) => {
    const base = item.asCombo ? (item.item.comboPriceCOP || item.item.priceCOP) : item.item.priceCOP;
    return base * item.quantity;
  };

  const subtotalCOP = items.reduce((acc, item) => acc + calculateItemPrice(item), 0);
  const deliveryFee = customerInfo.orderType === 'delivery' && subtotalCOP > 0 ? (subtotalCOP >= 60000 ? 0 : 5000) : 0;
  const totalCOP = subtotalCOP + deliveryFee;

  // Generate WhatsApp formatted message
  const generateWhatsAppMessage = () => {
    let text = `🍔 *NUEVO PEDIDO - ÑAM BOCAO!* 🍟\n\n`;
    text += `*Tipo:* ${customerInfo.orderType === 'delivery' ? '🛵 Domicilio' : '🏪 Recoger en Sede'}\n`;
    if (customerInfo.name) text += `*Cliente:* ${customerInfo.name}\n`;
    if (customerInfo.phone) text += `*Teléfono:* ${customerInfo.phone}\n`;
    if (customerInfo.orderType === 'delivery' && customerInfo.address) text += `*Dirección:* ${customerInfo.address}\n`;
    text += `*Método de pago:* ${customerInfo.paymentMethod.toUpperCase()}\n\n`;
    text += `*DETALLE DE LA ORDEN:*\n`;

    items.forEach((item, idx) => {
      const price = calculateItemPrice(item);
      text += `${idx + 1}. ${item.quantity}x ${item.item.name} ${item.asCombo ? '*(COMBO COMPLETO 🍟🥤)*' : '*(Solo)*'} - $${price.toLocaleString('es-CO')} COP\n`;
      if (item.selectedSauce) text += `   • Salsa: ${item.selectedSauce}\n`;
      if (item.specialInstructions) text += `   • Nota: ${item.specialInstructions}\n`;
    });

    text += `\n*Subtotal:* $${subtotalCOP.toLocaleString('es-CO')} COP\n`;
    if (customerInfo.orderType === 'delivery') {
      text += `*Envío:* ${deliveryFee === 0 ? '¡GRATIS!' : `$${deliveryFee.toLocaleString('es-CO')} COP`}\n`;
    }
    text += `*TOTAL A PAGAR:* $${totalCOP.toLocaleString('es-CO')} COP\n\n`;
    text += `¿Me confirman tiempo estimado de entrega por favor? ¡Gracias!`;

    return encodeURIComponent(text);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#fff3df] shadow-2xl flex flex-col justify-between border-l-4 border-[#2b2118] animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 sm:p-6 bg-[#2b2118] text-[#fff3df] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#ffd166]" />
              <h3 className="text-lg font-black font-display text-white">
                Tu Orden en Ñam Bocao!
              </h3>
              <span className="text-xs font-black text-[#2b2118] bg-[#ffd166] px-2 py-0.5 rounded-full">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Cerrar orden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {step === 'cart' && (
              <>
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-[#ffd166] flex items-center justify-center text-[#2b2118] text-3xl mb-4 border-2 border-[#2b2118]">
                      🍔
                    </div>
                    <p className="font-display font-black text-xl text-[#2b2118]">Tu orden está vacía</p>
                    <p className="text-xs text-[#2b2118]/70 font-medium max-w-xs mt-1 mb-6">
                      ¡No dejes que tu estómago sufra! Agrega una Bestia Smash, unas papas cargadas o unas alitas crujientes.
                    </p>
                    <button
                      onClick={onClose}
                      type="button"
                      className="px-6 py-3 text-xs font-black uppercase tracking-wider text-white bg-[#ff6b35] hover:bg-[#e85925] rounded-xl transition-colors shadow-md"
                    >
                      Explorar Menú Brutal
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {/* Free shipping progress */}
                    <div className="p-3 bg-white rounded-2xl border-2 border-[#2b2118]/15 text-xs">
                      {subtotalCOP >= 60000 ? (
                        <p className="font-black text-[#ff6b35] flex items-center gap-1.5">
                          <span>🎉</span> ¡Tienes ENVÍO GRATIS por superar $60.000 COP!
                        </p>
                      ) : (
                        <p className="text-[#2b2118]/80 font-medium">
                          Agrega <strong className="text-[#e8483e] font-black">${(60000 - subtotalCOP).toLocaleString('es-CO')} COP</strong> más para <strong>ENVÍO GRATIS</strong>.
                        </p>
                      )}
                    </div>

                    {/* Item list */}
                    {items.map((cartItem) => {
                      const itemTotal = calculateItemPrice(cartItem);

                      return (
                        <div
                          key={cartItem.id}
                          className="bg-white p-3.5 rounded-2xl border-2 border-[#2b2118]/15 shadow-2xs flex gap-3 items-center"
                        >
                          <img
                            src={cartItem.item.image}
                            alt={cartItem.item.name}
                            className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#2b2118]/10"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-black text-[#2b2118] truncate font-display">
                              {cartItem.item.name}
                            </h4>
                            <p className="text-[11px] font-bold text-[#ff6b35]">
                              {cartItem.asCombo ? '🍟 Combo (Papas + Bebida)' : 'Solo'}
                            </p>
                            {cartItem.selectedSauce && (
                              <p className="text-[10px] text-[#2b2118]/60 truncate">
                                Salsa: {cartItem.selectedSauce}
                              </p>
                            )}
                            <p className="text-xs font-black text-[#2b2118] mt-1 tabular-nums">
                              ${itemTotal.toLocaleString('es-CO')} COP
                            </p>
                          </div>

                          {/* Quantity control */}
                          <div className="flex items-center gap-1 shrink-0 bg-[#fff3df] p-1 rounded-xl border border-[#2b2118]/15">
                            <button
                              onClick={() => onUpdateQuantity(cartItem.id, cartItem.quantity - 1)}
                              className="p-1 text-[#2b2118] hover:text-[#e8483e] transition-colors"
                              aria-label="Disminuir"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-5 text-center text-xs font-black text-[#2b2118] tabular-nums">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(cartItem.id, cartItem.quantity + 1)}
                              className="p-1 text-[#2b2118] hover:text-[#ff6b35] transition-colors"
                              aria-label="Aumentar"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onUpdateQuantity(cartItem.id, 0)}
                            className="p-1 text-neutral-300 hover:text-[#e8483e] transition-colors"
                            aria-label="Eliminar"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {step === 'checkout' && (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div>
                  <h4 className="text-lg font-black font-display text-[#2b2118]">
                    ¿A dónde te enviamos el bocao?
                  </h4>
                  <p className="text-xs text-[#2b2118]/70 font-medium">
                    Preparamos todo al momento para que llegue al dente.
                  </p>
                </div>

                {/* Delivery vs Pickup switch */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-white rounded-xl border-2 border-[#2b2118]">
                  <button
                    type="button"
                    onClick={() => setCustomerInfo({ ...customerInfo, orderType: 'delivery' })}
                    className={`py-2 px-3 rounded-lg text-xs font-black flex items-center justify-center gap-1.5 transition-colors ${
                      customerInfo.orderType === 'delivery'
                        ? 'bg-[#ff6b35] text-white'
                        : 'text-[#2b2118] hover:bg-[#fff3df]'
                    }`}
                  >
                    <Bike className="w-4 h-4" />
                    <span>A Domicilio</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCustomerInfo({ ...customerInfo, orderType: 'pickup' })}
                    className={`py-2 px-3 rounded-lg text-xs font-black flex items-center justify-center gap-1.5 transition-colors ${
                      customerInfo.orderType === 'pickup'
                        ? 'bg-[#ff6b35] text-white'
                        : 'text-[#2b2118] hover:bg-[#fff3df]'
                    }`}
                  >
                    <Store className="w-4 h-4" />
                    <span>Recoger en Sede</span>
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-[#2b2118] mb-1">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#2b2118]/20 text-sm font-medium focus:outline-hidden focus:border-[#ff6b35]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-[#2b2118] mb-1">
                    WhatsApp de Contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 300 000 0000"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#2b2118]/20 text-sm font-medium focus:outline-hidden focus:border-[#ff6b35]"
                  />
                </div>

                {customerInfo.orderType === 'delivery' && (
                  <div>
                    <label className="block text-xs font-black uppercase text-[#2b2118] mb-1">
                      Dirección Completa & Apto *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Calle 10 # 38-42, Edificio Solar, Apto 402"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#2b2118]/20 text-sm font-medium focus:outline-hidden focus:border-[#ff6b35]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-black uppercase text-[#2b2118] mb-1">
                    Método de Pago
                  </label>
                  <select
                    value={customerInfo.paymentMethod}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, paymentMethod: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border-2 border-[#2b2118]/20 text-xs font-bold text-[#2b2118]"
                  >
                    <option value="efectivo">Efectivo contra entrega</option>
                    <option value="nequi">Transferencia Nequi / Daviplata</option>
                    <option value="tarjeta">Datáfono (Tarjeta débito / crédito)</option>
                  </select>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="w-1/3 py-3 text-xs font-black uppercase text-[#2b2118] bg-[#ffd166] rounded-xl hover:bg-[#f0bd46]"
                  >
                    Volver
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 text-xs font-black uppercase tracking-wider text-white bg-[#ff6b35] hover:bg-[#e85925] rounded-xl shadow-md"
                  >
                    Confirmar Orden
                  </button>
                </div>
              </form>
            )}

            {step === 'success' && (
              <div className="py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#ffd166] text-[#2b2118] flex items-center justify-center mx-auto mb-4 border-2 border-[#2b2118]">
                  <Check className="w-8 h-8 text-[#e8483e]" />
                </div>
                <h4 className="text-2xl font-black font-display text-[#2b2118]">
                  ¡Orden Recibida en Fogón!
                </h4>
                <p className="text-xs text-[#2b2118]/80 font-bold mt-1 mb-6">
                  ¡Gracias {customerInfo.name}! Estamos alistando tus papas y burgers crujientes.
                </p>

                <div className="bg-white p-4 rounded-2xl border-2 border-[#2b2118] text-left text-xs space-y-1 mb-6">
                  <p><span className="font-black">Total:</span> ${totalCOP.toLocaleString('es-CO')} COP</p>
                  <p><span className="font-black">Entrega:</span> {customerInfo.orderType === 'delivery' ? customerInfo.address : 'Recoges en Sede'}</p>
                  <p><span className="font-black">Tiempo estimado:</span> 25 a 35 minutos</p>
                </div>

                <a
                  href={`https://wa.me/573000850222?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-4 text-xs font-black uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-md transition-colors mb-3"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar a WhatsApp para Monitorear</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    onClearCart();
                    setStep('cart');
                    onClose();
                  }}
                  className="text-xs font-bold text-[#2b2118]/70 hover:text-[#2b2118] underline"
                >
                  Cerrar y seguir viendo
                </button>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && step === 'cart' && (
            <div className="p-5 sm:p-6 bg-white border-t-2 border-[#2b2118]/15 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#2b2118]/80 font-bold">
                <span>Subtotal</span>
                <span className="tabular-nums">${subtotalCOP.toLocaleString('es-CO')} COP</span>
              </div>
              {customerInfo.orderType === 'delivery' && (
                <div className="flex items-center justify-between text-xs text-[#2b2118]/80 font-bold">
                  <span>Envío a domicilio</span>
                  <span className="tabular-nums">
                    {deliveryFee === 0 ? <strong className="text-[#ff6b35]">GRATIS</strong> : `$${deliveryFee.toLocaleString('es-CO')} COP`}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between pt-2 border-t border-[#2b2118]/10 text-sm font-black text-[#2b2118]">
                <span>Total Estimado</span>
                <span className="text-2xl font-black font-display text-[#e8483e] tabular-nums">
                  ${totalCOP.toLocaleString('es-CO')} COP
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/573000850222?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-black uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-sm transition-all active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Pedir directo por WhatsApp (1 Clic)</span>
                </a>

                <button
                  onClick={() => setStep('checkout')}
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-black uppercase tracking-wider text-white bg-[#ff6b35] hover:bg-[#e85925] rounded-xl shadow-md transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span>Continuar con Datos de Entrega</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
