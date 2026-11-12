import { MenuItem } from '../types';
import heroImg from '../assets/images/nam_bocao_hero_1793286432460.jpg';
import smashImg from '../assets/images/nam_smash_burger_1793286448087.jpg';
import loadedFriesImg from '../assets/images/nam_loaded_fries_1793286449479.jpg';
import hotdogImg from '../assets/images/nam_hotdog_1793286448842.jpg';
import papasTrufadasImg from '../assets/images/papas_trufadas_parmesano_1793287024287.jpg';
import crispyPolloImg from '../assets/images/crispy_pollo_furia_1793288721492.jpg';

export { heroImg };

export const NAM_MENU: MenuItem[] = [
  {
    id: 'la-bestia-nam',
    name: 'La Bestia Ñam',
    category: 'burgers',
    tagline: 'Nuestra Smash Doble Legendaria',
    description: 'Doble carne de res Angus smash con bordes ultracrujientes, doble queso cheddar fundido, tocineta ahumada en leña, cebolla caramelizada y salsa secreta Ñam en pan brioche artesanal dorado con mantequilla.',
    priceCOP: 29900,
    comboPriceCOP: 38900,
    ingredients: [
      '2x 100g carne de res Angus seleccionada',
      'Queso cheddar americano fundido',
      'Tocineta ahumada crujiente',
      'Cebolla caramelizada lentamente',
      'Salsa secreta especial Ñam',
      'Pan brioche horneado a diario'
    ],
    badge: 'La Más Pedida 🔥',
    isBestSeller: true,
    image: smashImg,
    servingsInfo: 'Para apetitos feroces'
  },
  {
    id: 'papas-bestiales',
    name: 'Papas Bestiales Cargadas',
    category: 'papas',
    tagline: 'Cheddar derretido, pulled pork y tocineta',
    description: 'Canasta de papas rústicas crujientes bañadas en ríos de queso cheddar caliente, trozos generosos de pulled pork ahumado en salsa BBQ de la casa, tocineta crocante y cebollín fresco picado.',
    priceCOP: 24900,
    comboPriceCOP: 29900,
    ingredients: [
      '350g papas rústicas sazonadas',
      'Crema de queso cheddar fundido',
      'Pulled pork desmechado en BBQ',
      'Crocante de tocineta ahumada',
      'Cebollín fresco de huerta'
    ],
    badge: 'Top Para Compartir',
    isBestSeller: true,
    image: loadedFriesImg,
    servingsInfo: 'Alcanza para 2 o 1 con hambre'
  },
  {
    id: 'perro-salvaje',
    name: 'Perro Salvaje Ñam',
    category: 'hotdogs',
    tagline: 'El rey callejero con salchicha ahumada',
    description: 'Salchicha parrillera artesanal ahumada, cobija de queso mozzarella gratinado a la plancha, tocineta en cubos, lluvia de papa fosforito crocante, piña melada y salsa tártara de ajo asado.',
    priceCOP: 22900,
    comboPriceCOP: 31900,
    ingredients: [
      'Salchicha artesanal de res y cerdo',
      'Queso mozzarella fundido',
      'Tocineta en dados dorados',
      'Ripio de papita crocante',
      'Piña caramelizada casera',
      'Salsa tártara de la casa'
    ],
    badge: 'Sabor Callejero',
    isBestSeller: true,
    image: hotdogImg,
    servingsInfo: 'Sabor callejero elevado'
  },
  {
    id: 'crispy-pollo-furia',
    name: 'Crispy Pollo Furia',
    category: 'burgers',
    tagline: 'Pechuga marinada con apanado extra crunch',
    description: 'Generosa pechuga de pollo marinada en buttermilk y especias cajún, frita en aceite con toques de trufa para lograr una costra dorada ultracrujiente, queso derretido, pepinillos agridulces y mayonesa especial en pan brioche artesanal.',
    priceCOP: 27900,
    comboPriceCOP: 36900,
    ingredients: [
      '180g pechuga de pollo marinada en buttermilk',
      'Apanado extra crujiente cajún',
      'Aceite con esencia de trufa',
      'Queso americano derretido',
      'Pepinillos agridulces',
      'Mayonesa especial de la casa',
      'Pan brioche artesanal dorado'
    ],
    badge: 'Extra Crujiente',
    isBestSeller: false,
    image: crispyPolloImg,
    servingsInfo: 'Crujido inolvidable'
  },
  {
    id: 'papas-trufadas-parmesano',
    name: 'Papas Trufadas & Parmesano',
    category: 'papas',
    tagline: 'Un toque gourmet callejero',
    description: 'Papas fritas corte fino perfumadas con aceite de trufa blanca, lluvia abundante de queso parmesano recién rallado, pimienta negra molida y dip de alioli cremoso.',
    priceCOP: 21900,
    comboPriceCOP: 27900,
    ingredients: [
      'Papas doradas finas',
      'Aceite de trufa blanca',
      'Queso parmesano curado',
      'Alioli de ajo confitado'
    ],
    badge: 'Especialidad',
    isBestSeller: false,
    image: papasTrufadasImg,
    servingsInfo: 'Aroma irresistible'
  },
  {
    id: 'alitas-bbq-bocao',
    name: 'Alitas Glaseadas BBQ Bourbon',
    category: 'alitas',
    tagline: '8 piezas bañadas en salsa caramelo y humo',
    description: 'Alitas de pollo doradas y jugosas por dentro, bañadas en nuestra salsa barbacoa reducida con toques de bourbon y miel de caña. Vienen con palitos de apio y dip de blue cheese.',
    priceCOP: 26900,
    comboPriceCOP: 34900,
    ingredients: [
      '8 piezas de alitas carnosas',
      'Glaseado BBQ Bourbon ahumado',
      'Semillas de ajonjolí tostado',
      'Dip ranch o blue cheese'
    ],
    badge: 'Para Chuparse los Dedos',
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    servingsInfo: '8 alitas + dips'
  },
  {
    id: 'cheese-bites-crunch',
    name: 'Cheese Bites Ñam (10 Uds)',
    category: 'alitas',
    tagline: 'Bocados de queso mozzarella fundido',
    description: 'Bocaditos esféricos de puro queso mozzarella con empanizado crujiente de orégano y panko. Rompen crujiendo y se estiran sin fin. Acompañados de dip marinara caliente.',
    priceCOP: 18900,
    comboPriceCOP: 23900,
    ingredients: [
      '10 bocaditos de queso mozzarella',
      'Costra dorada panko y hierbas',
      'Salsa pomodoro con albahaca'
    ],
    badge: 'Favorito Picoteo',
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=800&q=80',
    servingsInfo: '10 unidades fundidas'
  },
  {
    id: 'malteada-monstruosa',
    name: 'Malteada Monstruosa Oreo & Arequipe',
    category: 'bebidas',
    tagline: 'El postre en vaso más espeso de la ciudad',
    description: 'Helado artesanal de vainilla batido con leche entera, galletas Oreo trituradas, vetas espesas de arequipe de paila, corona de crema chantilly y una galleta entera de remate.',
    priceCOP: 16900,
    ingredients: [
      'Helado premium de vainilla',
      'Galletas Oreo trituradas',
      'Arequipe tradicional',
      'Crema batida y lluvia de chocolate'
    ],
    badge: 'Puro Placer',
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    servingsInfo: 'Vaso de 16 oz colmado'
  }
];

export const SAUCES_AVAILABLE = [
  'Salsa Secreta Ñam (Ahumada & Agridulce)',
  'Tártara de Ajo Asado',
  'BBQ Bourbon Dulce',
  'Miel Mostaza Rústica',
  'Alioli Trufado (+ $2.000)',
  'Picante Furia Habanero'
];

export const BRAND_PERKS = [
  {
    title: 'Carne 100% Fresca Angus',
    description: 'Molienda propia a diario, jamás congelada. Jugosa y con costra smash perfecta.',
    icon: 'Flame'
  },
  {
    title: 'Pan Brioche Dorado',
    description: 'Esponjoso, con el dulzor justo y tostado con mantequilla antes de servir.',
    icon: 'Sparkles'
  },
  {
    title: 'Papas Reales',
    description: 'Corte natural, doble fritura crujiente y sazón de la casa.',
    icon: 'Zap'
  },
  {
    title: 'Delivery Volando',
    description: 'Empaque térmico especial para que tus papas y burgers lleguen calientes y crujientes.',
    icon: 'Clock'
  }
];
