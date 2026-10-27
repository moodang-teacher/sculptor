import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. PRODUCT CATALOG DATA
// ==========================================
export const PRODUCTS = {
  'teal-hoodie': {
    id: 'teal-hoodie',
    name: 'Velour Track Hooded Zip-Up Teal',
    koreanName: '벨루어 트랙 후디 집업 틸',
    price: 178200,
    formattedPrice: '₩178,200',
    originalPrice: '₩198,000',
    img: '/assets/images/drop_teal_hoodie.png',
    category: 'NEW DROP / HOODIE',
    desc: '은은한 광택감의 프리미엄 벨루어 원단과 메탈릭 지퍼 라인이 조화를 이루는 시그니처 트랙 집업. 탈부착 가능한 페이크 퍼 트리밍 후드로 2000년대 Y2K 감성을 완성합니다.',
    sizes: ['S', 'M', 'L'],
    colors: ['Teal', 'Charcoal Grey']
  },
  'fur-coat': {
    id: 'fur-coat',
    name: 'Faux Shaggy Fur Coat Raw',
    koreanName: '포 샤기 퍼 코트 로우',
    price: 237150,
    formattedPrice: '₩237,150',
    originalPrice: '₩263,500',
    img: '/assets/images/drop_fur_coat.png',
    category: 'NEW DROP / OUTER',
    desc: '풍성한 볼륨감의 샤기 에코 퍼로 제작되어 드라마틱한 실루엣을 자아내는 숏 기장 코트. 안감 누빔 패딩으로 보온성과 스타일을 동시에 선사합니다.',
    sizes: ['S', 'M'],
    colors: ['Raw Ivory', 'Onyx Black']
  },
  'boyfriend-shirt': {
    id: 'boyfriend-shirt',
    name: 'Boyfriend Hooded Shirts Navy Check',
    koreanName: '보이프렌드 후디드 셔츠 네이비 체크',
    price: 149400,
    formattedPrice: '₩149,400',
    originalPrice: '₩166,000',
    img: '/assets/images/drop_boyfriend_shirt.png',
    category: 'NEW DROP / SHIRTS',
    desc: '빈티지 블리치 워싱이 가미된 타탄체크 패브릭에 코튼 후드를 레이어드한 루즈 핏 오버셔츠. 단독 착용 또는 이너 탑과의 스타일리시한 레이어드가 용이합니다.',
    sizes: ['S', 'M', 'L'],
    colors: ['Navy Check', 'Dark Forest Check']
  },
  'chainmail-bag': {
    id: 'chainmail-bag',
    name: 'Cross Chainmail Big Bag Turquoise',
    koreanName: '크로스 체인메일 빅 백 터콰이즈',
    price: 233100,
    formattedPrice: '₩233,100',
    originalPrice: '₩259,000',
    img: '/assets/images/drop_chainmail_bag.png',
    category: 'NEW DROP / BAG',
    desc: '체인메일 메탈릭 텍스처와 굵은 체인 스트랩, 사이드 태슬 디테일로 완성된 빅 숄더백. 시선을 사로잡는 터콰이즈 메탈릭 컬러웨이입니다.',
    sizes: ['ONE SIZE'],
    colors: ['Turquoise', 'Liquid Silver']
  },
  'napoleon-bomber': {
    id: 'napoleon-bomber',
    name: 'Napoleon Bomber Jacket Beige',
    koreanName: '나폴레옹 봄버 재킷 베이지',
    price: 224100,
    formattedPrice: '₩224,100',
    originalPrice: '₩249,000',
    img: '/assets/images/best_bomber.png',
    category: 'BEST SELLER / JACKET',
    desc: '밀리터리 나폴레옹 제복 디테일과 볼륨감 있는 벌룬 슬리브가 결합된 크롭 봄버. 앤틱 엠보싱 버튼과 하이넥 스탠드 칼라가 고급스러운 무드를 연출합니다.',
    sizes: ['S', 'M'],
    colors: ['Beige', 'Washed Olive']
  },
  'longsleeve-be-mine': {
    id: 'longsleeve-be-mine',
    name: 'My Go To Long Sleeve Be Mine',
    koreanName: '마이 고 투 롱슬리브 비 마인',
    price: 64800,
    formattedPrice: '₩64,800',
    originalPrice: '₩72,000',
    img: '/assets/images/best_longsleeve.png',
    category: 'BEST SELLER / TOP',
    desc: '레트로 락 그래픽 아트워크와 빈티지 피그먼트 다잉으로 멋을 더한 슬림핏 롱슬리브 티셔츠. 신축성이 우수한 소프트 모달 코튼 블렌드 소재입니다.',
    sizes: ['S', 'M', 'L'],
    colors: ['Vintage Ash', 'Faded Purple']
  },
  'glow-hoodie': {
    id: 'glow-hoodie',
    name: 'Glow In The Dark Zip-Up Hoodie White',
    koreanName: '글로우 인 더 다크 집업 후디 화이트',
    price: 104300,
    formattedPrice: '₩104,300',
    originalPrice: '₩115,000',
    img: '/assets/images/best_glow_hoodie.png',
    category: 'BEST SELLER / HOODIE',
    desc: '빛을 머금어 어둠 속에서 빛나는 특수 축광 자수 그래픽 로고가 포인트인 크롭 집업 후디. 탄탄한 480g 헤비 쮸리 원단으로 제작되었습니다.',
    sizes: ['S', 'M'],
    colors: ['White', 'Heather Melange']
  },
  'faithless-jeans': {
    id: 'faithless-jeans',
    name: 'Faithless Jeans Light Blue',
    koreanName: '페이스리스 진스 라이트 블루',
    price: 224100,
    formattedPrice: '₩224,100',
    originalPrice: '₩249,000',
    img: '/assets/images/best_faithless_jeans.png',
    category: 'BEST SELLER / DENIM',
    desc: '핸드 브러시 페이딩 워싱과 바이컬러 헴라인 커프 디테일이 돋보이는 시그니처 와이드 부츠컷 데님. 밑단이 신발을 감싸는 이상적인 실루엣을 구현합니다.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Light Blue', 'Raw Indigo']
  },
  'slouch-bag': {
    id: 'slouch-bag',
    name: 'Quilted Slouch Bag Mauve',
    koreanName: '퀼티드 슬라우치 백 모브',
    price: 129600,
    formattedPrice: '₩129,600',
    originalPrice: '₩144,000',
    img: '/assets/images/best_slouch_bag.png',
    category: 'BEST SELLER / BAG',
    desc: '소프트한 패디드 퀼팅 질감과 유려한 드레이프 라인이 매력적인 호보 스타일 슬라우치 백. 넉넉한 수납공간과 가벼운 착용감을 자랑합니다.',
    sizes: ['ONE SIZE'],
    colors: ['Mauve Mist', 'Obsidian Black']
  },
  // Lookbook items
  'lace-corset': {
    id: 'lace-corset',
    name: 'Lace Trimmed Knit Corset Top',
    koreanName: '레이스 트림 니트 코르셋 탑',
    price: 89000,
    formattedPrice: '₩89,000',
    originalPrice: '₩98,000',
    img: '/assets/images/style_look_hero.png',
    category: 'STYLE EDIT / TOP',
    desc: '섬세한 플로럴 레이스 트리밍과 바스트 셔링 디테일의 페어리코어 무드 니트 코르셋 탑.',
    sizes: ['S', 'M'],
    colors: ['Vanilla Cream', 'Dusty Rose']
  },
  'cyber-tiara': {
    id: 'cyber-tiara',
    name: 'Cyber Star Tiara Headpiece',
    koreanName: '사이버 스타 티아라 헤드피스',
    price: 45000,
    formattedPrice: '₩45,000',
    originalPrice: '₩50,000',
    img: '/assets/images/style_look_hero.png',
    category: 'STYLE EDIT / ACC',
    desc: '고딕 메탈 스파이크와 크리스탈 스타 참이 장식된 런웨이 에디션 헤드피스.',
    sizes: ['ONE SIZE'],
    colors: ['Antique Silver']
  }
};

// ==========================================
// 2. SHOPPING CART STATE (LocalStorage)
// ==========================================
class CartManager {
  constructor() {
    this.items = this.loadCart();
    this.updateUI();
  }

  loadCart() {
    try {
      const stored = localStorage.getItem('sculptor_cart_v1');
      return stored ? JSON.parse(stored) : [
        {
          id: 'teal-hoodie',
          size: 'M',
          color: 'Teal',
          quantity: 1,
          addedAt: Date.now()
        }
      ];
    } catch {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('sculptor_cart_v1', JSON.stringify(this.items));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }

  addItem(productId, size = 'M', color = null, quantity = 1) {
    const product = PRODUCTS[productId];
    if (!product) return;

    const chosenColor = color || product.colors[0];
    const existing = this.items.find(
      item => item.id === productId && item.size === size && item.color === chosenColor
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        id: productId,
        size,
        color: chosenColor,
        quantity,
        addedAt: Date.now()
      });
    }

    this.saveCart();
    this.updateUI();
    this.showToast(`'${product.name}' 상품이 백에 담겼습니다.`);
    this.openDrawer();
  }

  updateQuantity(index, delta) {
    if (!this.items[index]) return;
    this.items[index].quantity += delta;
    if (this.items[index].quantity <= 0) {
      this.items.splice(index, 1);
    }
    this.saveCart();
    this.updateUI();
  }

  removeItem(index) {
    if (!this.items[index]) return;
    this.items.splice(index, 1);
    this.saveCart();
    this.updateUI();
  }

  getTotalCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce((sum, item) => {
      const prod = PRODUCTS[item.id];
      return sum + (prod ? prod.price * item.quantity : 0);
    }, 0);
  }

  updateUI() {
    const count = this.getTotalCount();
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(b => {
      b.textContent = count;
      b.classList.toggle('hidden', count === 0);
    });

    const cartContainer = document.getElementById('cartItemsList');
    const emptyState = document.getElementById('cartEmptyState');
    const subtotalEl = document.getElementById('cartSubtotalAmount');
    const freeShippingBar = document.getElementById('freeShippingBar');
    const freeShippingText = document.getElementById('freeShippingText');

    if (!cartContainer) return;

    if (this.items.length === 0) {
      cartContainer.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (subtotalEl) subtotalEl.textContent = '₩0';
      if (freeShippingBar) freeShippingBar.style.width = '0%';
      if (freeShippingText) freeShippingText.textContent = '50,000원 추가 구매 시 무료배송';
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    const total = this.getTotalPrice();
    if (subtotalEl) {
      subtotalEl.textContent = `₩${total.toLocaleString()}`;
    }

    // Free shipping threshold: 50,000 KRW
    const threshold = 100000;
    if (freeShippingBar && freeShippingText) {
      const pct = Math.min(100, Math.round((total / threshold) * 100));
      freeShippingBar.style.width = `${pct}%`;
      if (total >= threshold) {
        freeShippingText.innerHTML = '<span class="text-pink-600 font-semibold">🎉 무료배송 혜택 적용 완료!</span>';
      } else {
        const remaining = threshold - total;
        freeShippingText.textContent = `${remaining.toLocaleString()}원 더 담으면 무료배송!`;
      }
    }

    cartContainer.innerHTML = this.items.map((item, idx) => {
      const prod = PRODUCTS[item.id];
      if (!prod) return '';
      return `
        <div class="flex gap-4 p-4 border-b border-neutral-100 items-start group">
          <div class="w-20 h-24 bg-neutral-50 rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
            <img src="${prod.img}" alt="${prod.name}" class="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-start gap-2">
              <h4 class="text-xs font-semibold text-neutral-900 truncate tracking-tight">${prod.name}</h4>
              <button data-remove-cart="${idx}" class="text-neutral-400 hover:text-red-500 transition-colors p-1" title="삭제">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <p class="text-[11px] text-neutral-500 mt-0.5">${item.size} / ${item.color}</p>
            <div class="flex justify-between items-center mt-3">
              <div class="flex items-center border border-neutral-200 rounded text-xs">
                <button data-qty-change="${idx}" data-delta="-1" class="px-2 py-1 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors">-</button>
                <span class="px-2.5 py-1 font-medium tabular-nums text-neutral-800">${item.quantity}</span>
                <button data-qty-change="${idx}" data-delta="1" class="px-2 py-1 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors">+</button>
              </div>
              <span class="text-xs font-semibold text-neutral-900 tabular-nums">₩${(prod.price * item.quantity).toLocaleString()}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Wire listeners
    cartContainer.querySelectorAll('[data-qty-change]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.getAttribute('data-qty-change'), 10);
        const delta = parseInt(btn.getAttribute('data-delta'), 10);
        this.updateQuantity(idx, delta);
      });
    });

    cartContainer.querySelectorAll('[data-remove-cart]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.getAttribute('data-remove-cart'), 10);
        this.removeItem(idx);
      });
    });
  }

  openDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartBackdrop');
    if (!drawer || !backdrop) return;
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
  }

  closeDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartBackdrop');
    if (!drawer || !backdrop) return;
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    drawer.classList.add('translate-x-full');
    drawer.classList.remove('translate-x-0');
    document.body.style.overflow = '';
  }

  showToast(message) {
    const toast = document.getElementById('notificationToast');
    const textEl = document.getElementById('toastMessage');
    if (!toast || !textEl) return;
    textEl.textContent = message;
    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
      toast.classList.add('translate-y-24', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 2800);
  }
}

// ==========================================
// 3. QUICK VIEW MODAL MANAGER
// ==========================================
class QuickViewManager {
  constructor(cart) {
    this.cart = cart;
    this.modal = document.getElementById('quickViewModal');
    this.backdrop = document.getElementById('quickViewBackdrop');
    this.currentProduct = null;
    this.selectedSize = null;
    this.selectedColor = null;
    this.quantity = 1;
    this.init();
  }

  init() {
    const closeBtn = document.getElementById('closeQuickView');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (this.backdrop) this.backdrop.addEventListener('click', () => this.close());

    // Delegate quick view triggers
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-quick-view]');
      if (target) {
        e.preventDefault();
        const prodId = target.getAttribute('data-quick-view');
        this.open(prodId);
      }
    });

    // Add to cart inside modal
    const addToBagBtn = document.getElementById('modalAddToBag');
    if (addToBagBtn) {
      addToBagBtn.addEventListener('click', () => {
        if (!this.currentProduct) return;
        this.cart.addItem(
          this.currentProduct.id,
          this.selectedSize,
          this.selectedColor,
          this.quantity
        );
        this.close();
      });
    }

    // Quantity controls inside modal
    const minus = document.getElementById('modalQtyMinus');
    const plus = document.getElementById('modalQtyPlus');
    const qtyVal = document.getElementById('modalQtyVal');
    if (minus && plus && qtyVal) {
      minus.addEventListener('click', () => {
        if (this.quantity > 1) {
          this.quantity--;
          qtyVal.textContent = this.quantity;
        }
      });
      plus.addEventListener('click', () => {
        this.quantity++;
        qtyVal.textContent = this.quantity;
      });
    }
  }

  open(productId) {
    const prod = PRODUCTS[productId];
    if (!prod || !this.modal || !this.backdrop) return;
    this.currentProduct = prod;
    this.selectedSize = prod.sizes[0];
    this.selectedColor = prod.colors[0];
    this.quantity = 1;

    // Fill data
    document.getElementById('modalCategory').textContent = prod.category;
    document.getElementById('modalTitle').textContent = prod.name;
    document.getElementById('modalSubtitle').textContent = prod.koreanName;
    document.getElementById('modalPrice').textContent = prod.formattedPrice;
    document.getElementById('modalOriginalPrice').textContent = prod.originalPrice || '';
    document.getElementById('modalDesc').textContent = prod.desc;
    document.getElementById('modalImage').src = prod.img;
    document.getElementById('modalImage').alt = prod.name;
    document.getElementById('modalQtyVal').textContent = '1';

    // Sizes
    const sizeContainer = document.getElementById('modalSizeOptions');
    sizeContainer.innerHTML = prod.sizes.map(s => `
      <button type="button" data-select-size="${s}" class="px-3.5 py-1.5 text-xs font-medium border rounded transition-colors ${
        s === this.selectedSize
          ? 'border-neutral-900 bg-neutral-900 text-white'
          : 'border-neutral-200 text-neutral-700 hover:border-neutral-400'
      }">${s}</button>
    `).join('');

    sizeContainer.querySelectorAll('[data-select-size]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedSize = btn.getAttribute('data-select-size');
        sizeContainer.querySelectorAll('button').forEach(b => {
          b.className = 'px-3.5 py-1.5 text-xs font-medium border border-neutral-200 text-neutral-700 hover:border-neutral-400 rounded transition-colors';
        });
        btn.className = 'px-3.5 py-1.5 text-xs font-medium border border-neutral-900 bg-neutral-900 text-white rounded transition-colors';
      });
    });

    // Colors
    const colorContainer = document.getElementById('modalColorOptions');
    colorContainer.innerHTML = prod.colors.map(c => `
      <button type="button" data-select-color="${c}" class="px-3 py-1 text-xs border rounded transition-colors ${
        c === this.selectedColor
          ? 'border-neutral-900 bg-neutral-100 font-semibold text-neutral-900'
          : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
      }">${c}</button>
    `).join('');

    colorContainer.querySelectorAll('[data-select-color]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedColor = btn.getAttribute('data-select-color');
        colorContainer.querySelectorAll('button').forEach(b => {
          b.className = 'px-3 py-1 text-xs border border-neutral-200 text-neutral-600 hover:border-neutral-300 rounded transition-colors';
        });
        btn.className = 'px-3 py-1 text-xs border border-neutral-900 bg-neutral-100 font-semibold text-neutral-900 rounded transition-colors';
      });
    });

    // Show modal
    this.backdrop.classList.remove('opacity-0', 'pointer-events-none');
    this.backdrop.classList.add('opacity-100', 'pointer-events-auto');
    this.modal.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    this.modal.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.modal || !this.backdrop) return;
    this.backdrop.classList.add('opacity-0', 'pointer-events-none');
    this.backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    this.modal.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    this.modal.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 4. FAIRYCORE SPARKLE & MAGNETIC CURSOR
// ==========================================
function initFairycoreSparkles() {
  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let lastSparkleX = mouseX;
  let lastSparkleY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (dot) {
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }

    // Sparkle generator on move distance > 40px
    const dist = Math.hypot(mouseX - lastSparkleX, mouseY - lastSparkleY);
    if (dist > 35) {
      createSparkle(mouseX, mouseY);
      lastSparkleX = mouseX;
      lastSparkleY = mouseY;
    }
  });

  // Smooth lerp for outer ring
  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    if (ring) {
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    }
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover states on links/buttons
  document.querySelectorAll('a, button, [data-interactive]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring?.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      ring?.classList.remove('cursor-hover');
    });
  });

  function createSparkle(x, y) {
    // Sparkle particle DOM element
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-particle';
    const offsetX = (Math.random() - 0.5) * 24;
    const offsetY = (Math.random() - 0.5) * 24;
    sparkle.style.left = `${x + offsetX}px`;
    sparkle.style.top = `${y + offsetY}px`;

    const colors = ['#E82B8C', '#24C7B8', '#F5A623', '#A855F7', '#FFFFFF'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.floor(Math.random() * 10) + 8;

    sparkle.innerHTML = `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">
        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"/>
      </svg>
    `;

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  }
}

// ==========================================
// 5. SMOOTH SCROLL (LENIS) & GSAP SCROLLTRIGGER
// ==========================================
function initLenisAndGSAP() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Animate hero campaign on load & scroll
  gsap.from('#heroImage', {
    scale: 1.08,
    opacity: 0.8,
    duration: 1.6,
    ease: 'power3.out'
  });

  // Scroll parallax on Hero banner
  gsap.to('#heroImage', {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: {
      trigger: '#heroSection',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Section titles reveal
  gsap.utils.toArray('.reveal-heading').forEach((heading) => {
    gsap.from(heading, {
      y: 35,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Ornamental dividers reveal
  gsap.utils.toArray('.ornament-divider').forEach((div) => {
    gsap.from(div, {
      scaleX: 0.6,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: div,
        start: 'top 90%',
      }
    });
  });

  return lenis;
}

// ==========================================
// 6. SWIPER CAROUSEL (NEW DROP)
// ==========================================
function initNewDropSwiper() {
  const swiperEl = document.querySelector('.new-drop-swiper');
  if (!swiperEl) return;

  new Swiper(swiperEl, {
    modules: [Navigation, Autoplay],
    slidesPerView: 1.2,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-btn-next-drop',
      prevEl: '.swiper-btn-prev-drop',
    },
    breakpoints: {
      640: {
        slidesPerView: 2.2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },
  });
}

// ==========================================
// 7. LOOKBOOK HOTSPOTS & STYLE EDIT INTERACTION
// ==========================================
function initLookbookHotspots(quickView) {
  const pins = document.querySelectorAll('[data-hotspot-target]');
  pins.forEach(pin => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = pin.getAttribute('data-hotspot-target');
      if (targetId) {
        quickView.open(targetId);
      }
    });
  });
}

// ==========================================
// 8. MEDIA MODAL (INSIDE SCULPTOR)
// ==========================================
function initInsideSculptorModals() {
  const popupBtn = document.getElementById('btnHyundaiPopup');
  const btsBtn = document.getElementById('btnBtsVideo');
  const mediaModal = document.getElementById('insideMediaModal');
  const mediaBackdrop = document.getElementById('insideMediaBackdrop');
  const mediaContent = document.getElementById('insideMediaContent');
  const closeBtn = document.getElementById('closeInsideMedia');

  function openMedia(title, subtitle, bodyHtml) {
    if (!mediaModal || !mediaBackdrop || !mediaContent) return;
    document.getElementById('insideMediaTitle').textContent = title;
    document.getElementById('insideMediaSubtitle').textContent = subtitle;
    mediaContent.innerHTML = bodyHtml;

    mediaBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    mediaBackdrop.classList.add('opacity-100', 'pointer-events-auto');
    mediaModal.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    mediaModal.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
  }

  function closeMedia() {
    if (!mediaModal || !mediaBackdrop) return;
    mediaBackdrop.classList.add('opacity-0', 'pointer-events-none');
    mediaBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
    mediaModal.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    mediaModal.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeMedia);
  if (mediaBackdrop) mediaBackdrop.addEventListener('click', closeMedia);

  if (popupBtn) {
    popupBtn.addEventListener('click', () => {
      openMedia(
        'SCULPTOR x THE HYUNDAI SEOUL POP-UP',
        '2026 FW 컬렉션 런칭 기념 더현대 서울 팝업스토어',
        `
        <div class="space-y-4 text-xs text-neutral-600 leading-relaxed">
          <div class="aspect-video w-full rounded overflow-hidden bg-neutral-900 mb-4">
            <img src="/assets/images/inside_hyundai_seoul.jpg" alt="The Hyundai Seoul PopUp" class="w-full h-full object-cover"/>
          </div>
          <div class="bg-pink-50 p-4 rounded border border-pink-100">
            <h5 class="font-bold text-pink-700 text-sm mb-1">POP-UP EVENT OVERVIEW</h5>
            <p class="text-neutral-700">스컬프터 2026 FW 시즌의 무드를 현실에서 오감으로 경험할 수 있는 익스클루시브 공간입니다. 현장 한정 리미티드 굿즈와 실버 페어리 참 증정 이벤트가 준비되어 있습니다.</p>
          </div>
          <div class="grid grid-cols-2 gap-3 pt-2">
            <div class="p-3 border border-neutral-200 rounded">
              <span class="text-[10px] text-neutral-400 font-mono uppercase block">Date</span>
              <strong class="text-neutral-900">2026. 11. 07 (금) - 11. 20 (목)</strong>
            </div>
            <div class="p-3 border border-neutral-200 rounded">
              <span class="text-[10px] text-neutral-400 font-mono uppercase block">Location</span>
              <strong class="text-neutral-900">더현대 서울 B2 아이코닉 존</strong>
            </div>
          </div>
        </div>
        `
      );
    });
  }

  if (btsBtn) {
    btsBtn.addEventListener('click', () => {
      openMedia(
        'FW26 PHOTOSHOOT BEHIND THE SCENES',
        '런던 로케이션 캠페인 촬영 현장 아카이브',
        `
        <div class="space-y-4 text-xs text-neutral-600 leading-relaxed">
          <div class="aspect-video w-full rounded overflow-hidden bg-neutral-900 mb-4 relative flex items-center justify-center">
            <img src="/assets/images/inside_bts_photoshoot.jpg" alt="BTS" class="w-full h-full object-cover opacity-90"/>
            <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div class="w-14 h-14 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <svg class="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            </div>
          </div>
          <p class="text-neutral-700">Y2K 레트로 감성과 현대적 하이패션이 만난 2026 FW 스컬프터 필름. 디렉터 인터뷰 및 모델들의 유쾌한 셀피 컷, 런웨이 피팅 모먼트를 만나보세요.</p>
        </div>
        `
      );
    });
  }
}

// ==========================================
// 9. SEARCH BAR & MOBILE MENU
// ==========================================
function initSearchAndMenu() {
  const searchBtn = document.getElementById('btnOpenSearch');
  const searchModal = document.getElementById('searchModal');
  const searchBackdrop = document.getElementById('searchBackdrop');
  const closeSearch = document.getElementById('btnCloseSearch');
  const searchInput = document.getElementById('siteSearchInput');
  const searchResults = document.getElementById('searchResults');

  function openSearch() {
    searchBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    searchBackdrop.classList.add('opacity-100', 'pointer-events-auto');
    searchModal.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
    searchModal.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
    searchInput?.focus();
  }

  function closeSearchModal() {
    searchBackdrop.classList.add('opacity-0', 'pointer-events-none');
    searchBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
    searchModal.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
    searchModal.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (closeSearch) closeSearch.addEventListener('click', closeSearchModal);
  if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearchModal);

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        searchResults.innerHTML = '<p class="text-xs text-neutral-400 py-4 text-center">검색어를 입력해보세요 (예: Hoodie, Jeans, Fur, Bomber)</p>';
        return;
      }

      const matches = Object.values(PRODUCTS).filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.koreanName.includes(q) ||
        p.category.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = '<p class="text-xs text-neutral-400 py-4 text-center">일치하는 상품이 없습니다.</p>';
        return;
      }

      searchResults.innerHTML = matches.map(p => `
        <div data-quick-view="${p.id}" class="flex items-center gap-3 p-2.5 rounded hover:bg-neutral-100 cursor-pointer transition-colors group">
          <img src="${p.img}" alt="${p.name}" class="w-12 h-12 object-contain bg-white rounded p-1 flex-shrink-0" />
          <div class="min-w-0 flex-1">
            <h5 class="text-xs font-medium text-neutral-900 group-hover:text-pink-600 transition-colors truncate">${p.name}</h5>
            <p class="text-[11px] text-neutral-400">${p.koreanName}</p>
          </div>
          <span class="text-xs font-semibold text-neutral-900 tabular-nums">${p.formattedPrice}</span>
        </div>
      `).join('');
    });
  }

  // Mobile menu toggle
  const menuBtn = document.getElementById('btnMobileMenu');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
  const closeMobileMenu = document.getElementById('btnCloseMobileMenu');

  if (menuBtn && mobileMenuDrawer) {
    menuBtn.addEventListener('click', () => {
      mobileMenuBackdrop?.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenuBackdrop?.classList.add('opacity-100', 'pointer-events-auto');
      mobileMenuDrawer.classList.remove('-translate-x-full');
      mobileMenuDrawer.classList.add('translate-x-0');
    });

    const closeNav = () => {
      mobileMenuBackdrop?.classList.add('opacity-0', 'pointer-events-none');
      mobileMenuBackdrop?.classList.remove('opacity-100', 'pointer-events-auto');
      mobileMenuDrawer.classList.add('-translate-x-full');
      mobileMenuDrawer.classList.remove('translate-x-0');
    };

    closeMobileMenu?.addEventListener('click', closeNav);
    mobileMenuBackdrop?.addEventListener('click', closeNav);
    mobileMenuDrawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  }
}

// ==========================================
// 10. INITIALIZATION RUNNER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const cart = new CartManager();
  const quickView = new QuickViewManager(cart);

  // Cart Drawer triggers
  document.getElementById('btnOpenCart')?.addEventListener('click', () => cart.openDrawer());
  document.getElementById('btnCloseCart')?.addEventListener('click', () => cart.closeDrawer());
  document.getElementById('cartBackdrop')?.addEventListener('click', () => cart.closeDrawer());

  // Direct Add To Bag on Product Cards
  document.querySelectorAll('[data-direct-add]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-direct-add');
      cart.addItem(id, 'M', null, 1);
    });
  });

  // Checkout button simulation
  document.getElementById('btnCheckout')?.addEventListener('click', () => {
    if (cart.items.length === 0) {
      cart.showToast('백이 비어있습니다.');
      return;
    }
    cart.showToast('주문 결제 페이지로 안전하게 연결됩니다.');
  });

  initFairycoreSparkles();
  initLenisAndGSAP();
  initNewDropSwiper();
  initLookbookHotspots(quickView);
  initInsideSculptorModals();
  initSearchAndMenu();
});
