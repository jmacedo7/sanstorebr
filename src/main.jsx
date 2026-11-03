import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Gamepad2, Headset, UsersRound, MessageCircle, Clock3, Sparkles, ShoppingCart, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import './style.css';

const discord = 'https://discord.com/invite/PcM7ntRnj';
const tiktok = 'https://www.tiktok.com/@santxs.1v1010';
const WHATSAPP_NUMBER = '557598164933';
const CART_STORAGE_KEY = 'san-store-br-cart';

const categories = [
  { id: 'tudo-2-reais', name: 'Tudo 2 Reais', icon: 'R$2' },
  { id: 'tudo-5-reais', name: 'Tudo 5 Reais', icon: 'R$5' },
  { id: 'combos', name: 'Combos', icon: '×' },
  { id: 'b0nc0s-f3k3s', name: 'Bancos F4k3s', icon: '◈' },
  { id: 'xit-ff-mobile', name: 'Free Fire / Xits', icon: '◎' },
  { id: 'cloud-pcs-jogos', name: 'Cloud PCs e Jogos', icon: '⌘' },
];

const products = [
  { id: 'roblox-lite', name: 'Roblox lite', folder: 'roblox-lite', image: 'banner.jfif', desc: 'Produto digital Roblox Lite.', tag: 'GAME', category: 'tudo-2-reais', price: 1.99, available: true },
  { id: 'painel-seguidores', name: 'Painel seguidores', image: 'identidade/bannersemtexto.jfif', desc: 'Painel seguidores.', tag: 'DIGITAL', category: 'tudo-2-reais', price: 1.99, available: true },
  { id: 'gerador-cpf', name: 'Gerador de CPF', folder: 'geradores', image: 'banner.jfif', desc: 'Gerador de CPF.', tag: 'FERRAMENTAS', category: 'tudo-2-reais', price: 1.99, available: true },
  { id: 'gerador-cartao-credito', name: 'Gerador Cartão de Crédito', folder: 'geradores', image: 'banner.jfif', desc: 'Gerador Cartão de Crédito.', tag: 'FERRAMENTAS', category: 'tudo-2-reais', price: 1.99, available: true },
  { id: 'netflix-premium', name: 'Netflix Premium', image: 'identidade/bannersemtexto.jfif', desc: 'Netflix Premium.', tag: 'DIGITAL', category: 'tudo-5-reais', price: 4.99, available: true },
  { id: 'xbox-ultimo-30-dias', name: 'Xbox Premium', image: 'identidade/bannersemtexto.jfif', desc: 'Xbox Premium.', tag: 'GAME', category: 'tudo-5-reais', price: 4.99, available: true },
  { id: 'gerador-email', name: 'Gerador de email', folder: 'geradores', image: 'banner.jfif', desc: 'Gerador de email.', tag: 'FERRAMENTAS', category: 'tudo-5-reais', price: 4.89, available: true },
  { id: 'combo-xits-ff', name: 'Combo Xits Ff', folder: 'xit-ff-mobile', image: 'bbdf3a88-b4a4-4a7c-82ff-f030b235710f.jfif', desc: 'Combo Xits para Free Fire.', tag: 'COMBO', category: 'combos', price: 7.99, available: true },
  { id: 'combo-cursos', name: 'Combo cursos', image: 'identidade/bannersemtexto.jfif', desc: 'Combo cursos.', tag: 'COMBO', category: 'combos', price: 4.99, available: true },
  { id: 'combo-otimizacoes', name: 'Combo otimizações', folder: 'pack-otimizacoes', image: 'banner.jfif', desc: 'Combo otimizações.', tag: 'COMBO', category: 'combos', price: 2.99, available: true },
  { id: 'combo-revenda', name: 'Combo revenda', image: 'identidade/bannersemtexto.jfif', desc: 'Combo para revenda.', tag: 'COMBO', category: 'combos', price: 7.99, available: true },
  { id: 'combo-10k-videos-virais', name: 'Combo 10k vídeos virais', folder: 'pack-virais', image: 'banner.jfif', desc: 'Combo de 10 mil vídeos virais.', tag: 'COMBO', category: 'combos', price: 12.99, available: true },
  { id: 'combo-tutoriais', name: 'Combo tutoriais', image: 'identidade/bannersemtexto.jfif', desc: 'Combo tutoriais.', tag: 'COMBO', category: 'combos', price: 4.99, available: true },
  { id: 'n0b4nk-f0k3', name: 'N0b4nk f0k3', folder: 'bancos', image: 'banner.jfif', desc: 'Produto digital conforme catálogo da loja.', tag: 'DIGITAL', category: 'b0nc0s-f3k3s', price: 2, available: true },
  { id: 'pagbank-f4k3', name: 'Pagbank F4K3', folder: 'bancos', image: 'banner.jfif', desc: 'Produto digital conforme catálogo da loja.', tag: 'DIGITAL', category: 'b0nc0s-f3k3s', price: 2, available: true },
  { id: 'm3rcado-p4g0-fake', name: 'M3rcado p4g0 fake', folder: 'bancos', image: 'banner.jfif', desc: 'Produto digital conforme catálogo da loja.', tag: 'DIGITAL', category: 'b0nc0s-f3k3s', price: 2, available: true },
  { id: 'ger4d0r-d3-b0l3t0s-f4k3', name: 'Ger4d0r d3 b0l3t0s F4k3', folder: 'bancos', image: 'banner.jfif', desc: 'Produto digital conforme catálogo da loja.', tag: 'DIGITAL', category: 'b0nc0s-f3k3s', price: 2, available: true },
  { id: 'xit-disfarcado-premium', name: 'Xit disfarçado premium', folder: 'xit-ff-mobile', image: 'bbdf3a88-b4a4-4a7c-82ff-f030b235710f.jfif', desc: 'Produto digital para Free Fire Mobile.', tag: 'MOBILE', category: 'xit-ff-mobile', price: 5.99, available: true },
  { id: 'proxy-premium', name: 'Proxy premium', folder: 'xit-ff-mobile', image: 'bbdf3a88-b4a4-4a7c-82ff-f030b235710f.jfif', desc: 'Produto digital para Free Fire Mobile.', tag: 'MOBILE', category: 'xit-ff-mobile', price: 5.99, available: true },
  { id: 'yellow-aimbot', name: 'Yellow aimbot', folder: 'xit-ff-mobile', image: 'bbdf3a88-b4a4-4a7c-82ff-f030b235710f.jfif', desc: 'Produto digital para Free Fire Mobile.', tag: 'MOBILE', category: 'xit-ff-mobile', price: 6.99, available: true },
  { id: 'cloud-pc-rtx-5070', name: 'Cloud PC RTX 5070', folder: 'cloud-pc-rtx-5070', image: 'banner.jfif', desc: 'Conheça o Cloud PC RTX 5070.', tag: 'CLOUD PC', category: 'cloud-pcs-jogos', price: 8.9, available: true },
  { id: 'pc-virtual-rtx-3060', name: 'PC Virtual RTX 3060', folder: 'pc-virtual-rtx-3060', image: 'banner.jfif', desc: 'Conheça o PC Virtual RTX 3060.', tag: 'PC VIRTUAL', category: 'cloud-pcs-jogos', price: 7.59, available: true },
  { id: 'gta-5-lite', name: 'GTA 5 LITE', folder: 'gta-5-lite', image: 'banner.jfif', desc: 'Versão Lite de GTA 5.', tag: 'GAME', category: 'cloud-pcs-jogos', price: 9.99, available: true },
];

const benefits = [
  { Icon: Gamepad2, title: 'Variedade de produtos', text: 'Diferentes categorias digitais reunidas em um só lugar.' },
  { Icon: Headset, title: 'Atendimento próximo', text: 'Fale diretamente com a equipe pelo servidor da loja.' },
  { Icon: UsersRound, title: 'Comunidade Discord', text: 'Um espaço para conhecer a loja e entrar em contato.' },
  { Icon: MessageCircle, title: 'Contato simples', text: 'Acesse nosso canal de atendimento de forma prática.' },
];

const money = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
const productImage = (product) => {
  const path = product.folder
    ? `/produtos/${product.folder}/${product.image}`
    : `/${product.image}`;
  return product.category === 'b0nc0s-f3k3s'
    || ['gta-5-lite', 'cloud-pc-rtx-5070', 'pc-virtual-rtx-3060'].includes(product.id)
    ? `${path}?v=20261103-2`
    : path;
};

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) || '{}');
      return savedCart && typeof savedCart === 'object' && !Array.isArray(savedCart) ? savedCart : {};
    } catch {
      return {};
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, [activeCategory]);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const visibleProducts = useMemo(() => products.filter((product) => activeCategory === 'all' || product.category === activeCategory), [activeCategory]);
  const cartItems = useMemo(() => products.filter((product) => cart[product.id]).map((product) => ({ ...product, quantity: cart[product.id] })), [cart]);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const close = () => setMenu(false);

  const changeQuantity = (product, delta) => {
    if (!product.available || !Number.isFinite(product.price) || product.price <= 0) return;
    setCart((current) => {
      const nextQuantity = (current[product.id] || 0) + delta;
      const next = { ...current };
      if (nextQuantity <= 0) delete next[product.id]; else next[product.id] = nextQuantity;
      return next;
    });
  };

  const checkout = () => {
    if (!cartItems.length) { setNotice('Adicione produtos disponíveis para montar seu pedido.'); return; }
    if (!/^\d{12,15}$/.test(WHATSAPP_NUMBER)) { setNotice('O número da loja ainda não foi configurado.'); return; }
    const lines = cartItems.map((item) => `- ${item.name} — Quantidade: ${item.quantity} — ${money(item.price)} cada — Subtotal: ${money(item.price * item.quantity)}`);
    const message = `Olá! Quero comprar na SAN Store BR! 🛒\n\nMeu pedido:\n\n${lines.join('\n')}\n\n*Total: ${money(subtotal)}*\n\nGostaria de finalizar essa compra. Como podemos prosseguir com o pagamento e a entrega?\n\nObrigado! ❤️`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setNotice('Pedido preparado no WhatsApp. Revise e envie a mensagem para a loja.');
  };

  return <>
    <header className={scrolled ? 'header scrolled' : 'header'}><div className="nav wrap">
      <a className="brand" href="#inicio" onClick={close}><img src="/identidade/logo.jpeg" alt="SAN STORE BR"/><span>SAN STORE <b>BR</b></span></a>
      <button className="menu-toggle" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      <nav className={menu ? 'nav-links open' : 'nav-links'}><a href="#inicio" onClick={close}>Início</a><a href="#catalogo" onClick={close}>Catálogo</a><a href="#sobre" onClick={close}>Sobre nós</a><a href="#suporte" onClick={close}>Suporte</a><button className="cart-nav" onClick={() => { setCartOpen(true); close(); }} aria-label={`Abrir carrinho com ${itemCount} itens`}><ShoppingCart size={17}/> Carrinho <span>{itemCount}</span></button><a className="nav-cta" href={discord} target="_blank" rel="noreferrer">Entrar no Discord <ArrowUpRight size={16}/></a></nav>
    </div></header>
    <main>
      <section id="inicio" className="hero"><div className="hero-grid wrap"><div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> LOJA DIGITAL • COMUNIDADE GAMER</div><h1>SUA LOJA DIGITAL<br/>DE <em>CONFIANÇA.</em></h1><p>PCs virtuais, games, ferramentas e produtos digitais. Tudo em um só lugar.</p><div className="hero-actions"><a className="btn primary" href="#catalogo">Explorar catálogo <ArrowRight size={17}/></a><a className="btn secondary" href={discord} target="_blank" rel="noreferrer">Entrar no Discord <ArrowUpRight size={17}/></a></div><div className="hero-note"><span className="note-line"/> Atendimento anunciado 24 horas</div></div><div className="hero-art"><div className="art-glow"/><img className="mascot" src="/identidade/bannersemtexto.jfif" alt="Mascote Tio Patinhas da SAN STORE BR"/><div className="art-caption"><span>01 / SAN STORE BR</span><span>PRODUTOS DIGITAIS</span></div><div className="art-mark">SAN<br/><b>STORE</b></div></div></div><a className="scroll-cue" href="#catalogo" aria-label="Descer para o catálogo"><ArrowDown size={16}/><span>ROLE PARA EXPLORAR</span></a><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/></section>
      <section className="section featured"><div className="wrap"><div className="section-head reveal"><div><div className="eyebrow"><span className="eyebrow-mark">01</span> DESTAQUES DA LOJA</div><h2>MAIS <em>PROCURADOS</em></h2></div><p>Conheça os produtos em destaque e fale com nossa equipe para saber mais.</p></div><div className="featured-grid">{[products.find((product) => product.id === 'gta-5-lite'), products.find((product) => product.id === 'cloud-pc-rtx-5070')].map((p, i) => <article className={`featured-card featured-${i === 0 ? 'gta' : 'cloud'} reveal`} key={p.name}><img src={productImage(p)} alt={`Imagem de ${p.name}`}/><div className="featured-shade"/><div className="featured-content"><span className="featured-kicker">EM DESTAQUE</span><h3>{p.name}</h3><p>{p.desc}</p><a href="#catalogo" onClick={() => setActiveCategory(p.category)} className="btn primary">Ver produto <ArrowRight size={16}/></a></div></article>)}</div></div></section>
      <section className="community"><div className="community-inner wrap reveal"><div className="community-stamp"><Sparkles size={25}/><span>SS<br/>BR</span></div><div className="community-copy"><div className="eyebrow"><span className="live-dot"/> NOS ENCONTRAMOS NO DISCORD</div><h2>Faça parte da comunidade<br/><em>SAN STORE BR.</em></h2><p>Entre no nosso Discord, conheça nossos produtos e fale diretamente com nossa equipe.</p></div><a className="btn light" href={discord} target="_blank" rel="noreferrer">Entrar na comunidade <ArrowUpRight size={17}/></a><div className="community-lines"/></div></section>
      <section id="catalogo" className="section catalog"><div className="wrap"><div className="section-head reveal"><div><div className="eyebrow"><span className="eyebrow-mark">01</span> CATÁLOGO</div><h2>Encontre o que<br/><em>combina com você.</em></h2></div><p>Escolha uma categoria e explore as opções disponíveis. Os produtos e preços serão cadastrados pela loja.</p></div>
        <nav className="category-nav" aria-label="Categorias do catálogo">{categories.map((category) => <button key={category.id} className={`category-chip ${activeCategory === category.id ? 'selected' : ''}`} aria-pressed={activeCategory === category.id} onClick={() => setActiveCategory(category.id)}><span className="category-icon">{category.icon}</span>{category.name}</button>)}</nav>
        <div className="catalog-toolbar"><span>{activeCategory === 'all' ? 'Todos os produtos' : categories.find((category) => category.id === activeCategory)?.name}</span><button className={activeCategory === 'all' ? 'filter-all selected' : 'filter-all'} onClick={() => setActiveCategory('all')}>Ver tudo <ArrowRight size={14}/></button></div>
        {visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product, index) => <article className="product-card reveal" style={{ '--delay': `${index * 55}ms` }} key={product.id}><div className="product-image"><img loading="lazy" src={productImage(product)} alt={`Imagem de ${product.name}`}/><span className="product-tag">{product.tag}</span><span className="image-arrow"><ShoppingBag size={16}/></span></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.desc}</p></div><div className="product-price-row"><strong>{Number.isFinite(product.price) ? money(product.price) : 'Preço a cadastrar'}</strong><span className={product.available ? 'availability available' : 'availability'}>{product.available ? 'Disponível' : 'Em breve'}</span></div><button className="add-cart" disabled={!product.available || !Number.isFinite(product.price)} onClick={() => { changeQuantity(product, 1); setNotice(`${product.name} adicionado ao carrinho.`); }}><Plus size={15}/> Adicionar ao carrinho</button></div></article>)}</div> : <div className="empty-category"><ShoppingBag size={25}/><h3>Produtos desta categoria em breve</h3><p>Os itens serão publicados aqui quando forem cadastrados pela loja.</p></div>}
      </div></section>
      <section id="sobre" className="section about"><div className="wrap about-grid"><div className="about-visual reveal"><div className="about-frame"><video src="/identidade/logo_animada.mp4" autoPlay muted loop playsInline aria-label="Logo animada da SAN STORE BR"/></div><div className="since-card"><span>DESDE</span><b>16.10.26</b></div></div><div className="about-copy reveal"><div className="eyebrow"><span className="eyebrow-mark">02</span> SOBRE NÓS</div><h2>Digital, gamer<br/>e <em>feito pra comunidade.</em></h2><p>A SAN STORE BR nasceu com o propósito de reunir diferentes produtos digitais e soluções em um só lugar. Trabalhamos para oferecer uma experiência simples, atendimento próximo e uma comunidade onde nossos clientes podem encontrar diferentes opções para suas necessidades.</p><p>Uma loja geral de produtos digitais, presente na comunidade gamer e tecnológica.</p><a className="text-link" href={discord} target="_blank" rel="noreferrer">Conheça nossa comunidade <ArrowRight size={16}/></a></div></div></section>
      <section className="section benefits"><div className="wrap"><div className="section-head reveal"><div><div className="eyebrow"><span className="eyebrow-mark">03</span> POR QUE SAN STORE</div><h2>Uma experiência<br/><em>simples e direta.</em></h2></div><p>Nosso foco é facilitar seu contato com a loja e deixar as opções ao seu alcance.</p></div><div className="benefit-grid">{benefits.map(({ Icon, title, text }, i) => <article className="benefit-card reveal" style={{ '--delay': `${i * 70}ms` }} key={title}><span className="benefit-icon"><Icon size={21}/></span><span className="benefit-index">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="suporte" className="section support"><div className="wrap support-row reveal"><div><div className="eyebrow"><span className="eyebrow-mark">04</span> SUPORTE</div><h2>Estamos no <em>Discord.</em></h2><p>Atendimento anunciado 24 horas. Acesse o servidor para falar com a equipe.</p></div><a className="btn primary" href={discord} target="_blank" rel="noreferrer">Acessar suporte <ArrowRight size={17}/></a><div className="support-hours"><Clock3 size={17}/><span>SUPORTE<br/><b>24 HORAS</b></span></div></div></section>
    </main>
      <footer className="footer"><div className="wrap"><div className="footer-main"><a href="#inicio" className="brand footer-brand"><img src="/identidade/logo.jpeg" alt=""/><span>SAN STORE <b>BR</b></span></a><p>Produtos digitais, tecnologia e comunidade.</p><div className="footer-social"><a href={discord} target="_blank" rel="noreferrer">Discord <ArrowUpRight size={15}/></a><a href={tiktok} target="_blank" rel="noreferrer">TikTok <ArrowUpRight size={15}/></a></div></div><div className="footer-bottom"><span>© 2026 SAN STORE BR &amp; D7 STUDIO. Todos os direitos reservados.</span><span>Fundação em 16/10/2026</span><div><a href="#inicio">Início</a><a href="#catalogo">Catálogo</a><a href="#sobre">Sobre nós</a><a href="#suporte">Suporte</a></div></div></div></footer>
    <button className="discord-float" onClick={() => setCartOpen(true)} aria-label={`Abrir carrinho com ${itemCount} itens`}><ShoppingCart size={20}/><span>{itemCount ? `${itemCount} no carrinho` : 'Ver carrinho'}</span>{itemCount > 0 && <b>{itemCount}</b>}</button>
    {cartOpen && <div className="cart-backdrop" onClick={() => setCartOpen(false)}><aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" onClick={(event) => event.stopPropagation()}><div className="cart-header"><div><span className="eyebrow"><span className="eyebrow-mark">SAN STORE BR</span></span><h2 id="cart-title">Seu carrinho <span>({itemCount})</span></h2></div><button className="icon-button" aria-label="Fechar carrinho" onClick={() => setCartOpen(false)}><X/></button></div>
      {cartItems.length ? <><div className="cart-lines">{cartItems.map((item) => <article className="cart-line" key={item.id}><img src={productImage(item)} alt=""/><div className="cart-line-copy"><h3>{item.name}</h3><span>{money(item.price)} / unidade</span><div className="quantity-control"><button aria-label={`Diminuir ${item.name}`} onClick={() => changeQuantity(item, -1)}><Minus size={14}/></button><span>{item.quantity}</span><button aria-label={`Aumentar ${item.name}`} onClick={() => changeQuantity(item, 1)}><Plus size={14}/></button></div></div><div className="cart-line-total"><b>{money(item.price * item.quantity)}</b><button aria-label={`Remover ${item.name}`} onClick={() => setCart((current) => { const next = { ...current }; delete next[item.id]; return next; })}><Trash2 size={15}/></button></div></article>)}</div><div className="cart-summary"><div><span>Subtotal</span><b>{money(subtotal)}</b></div><div className="cart-total"><span>Total do pedido</span><b>{money(subtotal)}</b></div><p>Pagamento e entrega serão combinados diretamente pelo WhatsApp.</p><button className="btn primary checkout-button" onClick={checkout}>Finalizar pedido pelo WhatsApp <ArrowUpRight size={17}/></button></div></> : <div className="cart-empty"><ShoppingCart size={34}/><h3>Seu carrinho está vazio</h3><p>Produtos disponíveis poderão ser adicionados para revisar seu pedido aqui.</p><button className="btn primary" onClick={() => { setCartOpen(false); document.querySelector('#catalogo')?.scrollIntoView({ behavior: 'smooth' }); }}>Explorar catálogo <ArrowRight size={16}/></button></div>}
    </aside></div>}
    {notice && <div className="toast" role="status"><span>{notice}</span><button aria-label="Fechar aviso" onClick={() => setNotice('')}><X size={15}/></button></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
