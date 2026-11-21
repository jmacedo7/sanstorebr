import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Gamepad2, Headset, UsersRound, MessageCircle, Clock3, Sparkles, Tag, ChevronRight } from 'lucide-react';
import './style.css';

const discord = 'https://discord.com/invite/PcM7ntRnj';
const tiktok = 'https://www.tiktok.com/@santxs.1v1010';

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
  { id: 'netflix-premium', name: 'Netflix Premium', folder: 'netflix', image: 'bannernetflix.jfif', desc: 'Netflix Premium.', tag: 'DIGITAL', category: 'tudo-5-reais', price: 4.99, available: true },
  { id: 'xbox-ultimo-30-dias', name: 'Xbox Premium', folder: 'xbox', image: 'banner.jfif', desc: 'Xbox Premium.', tag: 'GAME', category: 'tudo-5-reais', price: 4.99, available: true },
  { id: 'gerador-email', name: 'Gerador de email', folder: 'geradores', image: 'banner.jfif', desc: 'Gerador de email.', tag: 'FERRAMENTAS', category: 'tudo-5-reais', price: 4.89, available: true },
  { id: 'combo-xits-ff', name: 'Combo Xits Ff', folder: 'xit-ff-mobile', image: 'banner.jfif', desc: 'Combo Xits para Free Fire.', tag: 'COMBO', category: 'combos', price: 7.99, available: true },
  { id: 'combo-cursos', name: 'Combo cursos', image: 'identidade/bannersemtexto.jfif', desc: 'Combo cursos.', tag: 'COMBO', category: 'combos', price: 4.99, available: true },
  { id: 'combo-otimizacoes', name: 'Combo otimizações', folder: 'pack-otimizacoes', image: 'banner.jfif', desc: 'Combo otimizações.', tag: 'COMBO', category: 'combos', price: 2.99, available: true },
  { id: 'combo-revenda', name: 'Combo revenda', image: 'identidade/bannersemtexto.jfif', desc: 'Combo para revenda.', tag: 'COMBO', category: 'combos', price: 7.99, available: true },
  { id: 'combo-10k-videos-virais', name: 'Combo 10k vídeos virais', folder: 'pack-virais', image: 'banner.jfif', desc: 'Combo de 10 mil vídeos virais.', tag: 'COMBO', category: 'combos', price: 12.99, available: true },
  { id: 'combo-tutoriais', name: 'Combo tutoriais', image: 'identidade/bannersemtexto.jfif', desc: 'Combo tutoriais.', tag: 'COMBO', category: 'combos', price: 4.99, available: true },
  { id: 'n0b4nk-f0k3', name: 'N0b4nk f0k3', folder: 'bancos', image: 'banner.jfif', desc: 'Produto digital conforme catálogo da loja.', tag: 'DIGITAL', category: 'b0nc0s-f3k3s', price: 2, available: true },
  { id: 'pagbank-f4k3', name: 'Pagbank F4K3', folder: 'bancos', image: 'banner.jfif', desc: 'Produto digital conforme catálogo da loja.', tag: 'DIGITAL', category: 'b0nc0s-f3k3s', price: 2, available: true },
  { id: 'm3rcado-p4g0-fake', name: 'M3rcado p4g0 fake', folder: 'bancos', image: 'banner.jfif', desc: 'Produto digital conforme catálogo da loja.', tag: 'DIGITAL', category: 'b0nc0s-f3k3s', price: 2, available: true },
  { id: 'ger4d0r-d3-b0l3t0s-f4k3', name: 'Ger4d0r d3 b0l3t0s F4k3', folder: 'bancos', image: 'banner.jfif', desc: 'Produto digital conforme catálogo da loja.', tag: 'DIGITAL', category: 'b0nc0s-f3k3s', price: 2, available: true },
  { id: 'xit-disfarcado-premium', name: 'Xit disfarçado premium', folder: 'xit-ff-mobile', image: 'banner.jfif', desc: 'Produto digital para Free Fire Mobile.', tag: 'MOBILE', category: 'xit-ff-mobile', price: 5.99, available: true },
  { id: 'proxy-premium', name: 'Proxy premium', folder: 'xit-ff-mobile', image: 'banner.jfif', desc: 'Produto digital para Free Fire Mobile.', tag: 'MOBILE', category: 'xit-ff-mobile', price: 5.99, available: true },
  { id: 'yellow-aimbot', name: 'Yellow aimbot', folder: 'xit-ff-mobile', image: 'banner.jfif', desc: 'Produto digital para Free Fire Mobile.', tag: 'MOBILE', category: 'xit-ff-mobile', price: 6.99, available: true },
  { id: 'ff-2022', name: 'FF 2022', folder: 'FF-2022', image: 'banner.webp', desc: 'Produto digital para Free Fire Mobile.', tag: 'MOBILE', category: 'xit-ff-mobile', price: 8.99, available: true },
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
    || ['gta-5-lite', 'cloud-pc-rtx-5070', 'pc-virtual-rtx-3060', 'netflix-premium', 'xbox-ultimo-30-dias'].includes(product.id)
    ? `${path}?v=20261103-2`
    : path;
};

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const bestsellerTrack = useRef(null);
  const close = () => setMenu(false);
  const showCategory = (id) => {
    setActiveCategory(id);
    close();
    window.setTimeout(() => document.querySelector('#catalogo')?.scrollIntoView({ behavior: 'smooth' }), 40);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    const track = bestsellerTrack.current;
    if (!track) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let timer;
    let resumeTimer;
    let hoverPaused = false;
    let dragStartX = 0;
    let dragStartScroll = 0;
    let dragging = false;
    const stop = () => window.clearInterval(timer);
    const advance = () => {
      const card = track.querySelector('.featured-card');
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const step = card.getBoundingClientRect().width + gap;
      const max = track.scrollWidth - track.clientWidth;
      if (max <= 2) return;
      if (track.scrollLeft >= max - step / 2) track.scrollTo({ left: 0, behavior: 'smooth' });
      else track.scrollBy({ left: step, behavior: 'smooth' });
    };
    const start = () => {
      stop();
      if (!reducedMotion && !hoverPaused) timer = window.setInterval(advance, 4200);
    };
    const pauseBriefly = () => {
      stop();
      window.clearTimeout(resumeTimer);
      if (!hoverPaused && !reducedMotion) resumeTimer = window.setTimeout(start, 6500);
    };
    const onWheel = (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        track.scrollBy({ left: event.deltaY, behavior: 'smooth' });
        pauseBriefly();
      }
    };
    const onEnter = () => { hoverPaused = true; stop(); window.clearTimeout(resumeTimer); };
    const onLeave = () => { hoverPaused = false; start(); };
    const onPointerDown = (event) => {
      pauseBriefly();
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      dragging = true;
      dragStartX = event.clientX;
      dragStartScroll = track.scrollLeft;
      track.classList.add('is-dragging');
      track.setPointerCapture(event.pointerId);
    };
    const onPointerMove = (event) => {
      if (dragging) track.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
    };
    const onPointerUp = () => { dragging = false; track.classList.remove('is-dragging'); };
    track.addEventListener('wheel', onWheel, { passive: false });
    track.addEventListener('pointerenter', onEnter);
    track.addEventListener('pointerleave', onLeave);
    track.addEventListener('pointerdown', onPointerDown);
    track.addEventListener('pointermove', onPointerMove);
    track.addEventListener('pointerup', onPointerUp);
    track.addEventListener('pointercancel', onPointerUp);
    track.addEventListener('touchstart', pauseBriefly, { passive: true });
    track.addEventListener('focusin', onEnter);
    track.addEventListener('focusout', onLeave);
    start();
    return () => {
      stop(); window.clearTimeout(resumeTimer);
      track.removeEventListener('wheel', onWheel);
      track.removeEventListener('pointerenter', onEnter);
      track.removeEventListener('pointerleave', onLeave);
      track.removeEventListener('pointerdown', onPointerDown);
      track.removeEventListener('pointermove', onPointerMove);
      track.removeEventListener('pointerup', onPointerUp);
      track.removeEventListener('pointercancel', onPointerUp);
      track.removeEventListener('touchstart', pauseBriefly);
      track.removeEventListener('focusin', onEnter);
      track.removeEventListener('focusout', onLeave);
    };
  }, [activeCategory]);

  const moveBestsellers = (direction) => bestsellerTrack.current?.scrollBy({ left: direction * bestsellerTrack.current.clientWidth * 0.78, behavior: 'smooth' });

  const productCard = (product, index) => <article className="product-card reveal visible" style={{ '--delay': `${index * 45}ms` }} key={product.id}>
    <div className="product-image"><img loading="lazy" src={productImage(product)} alt={`Imagem de ${product.name}`} onError={(event) => { event.currentTarget.src = '/identidade/bannersemtexto.jfif'; }}/><span className="product-tag">{product.tag}</span><span className="image-arrow"><ArrowUpRight size={16}/></span></div>
    <div className="product-info"><div><h3>{product.name}</h3><p>{product.desc}</p></div><div className="product-price-row"><strong>{Number.isFinite(product.price) ? money(product.price) : 'Consulte a loja'}</strong><span className={product.available ? 'availability available' : 'availability'}>{product.available ? 'Disponível' : 'Em breve'}</span></div><a className="product-link" href={discord} target="_blank" rel="noreferrer">Consultar pelo Discord <ArrowUpRight size={14}/></a></div>
  </article>;

  const categoriesWithProducts = categories.map((category) => ({ ...category, items: products.filter((product) => product.category === category.id) }));
  const featured = ['pc-virtual-rtx-3060', 'gta-5-lite', 'netflix-premium', 'xbox-ultimo-30-dias'].map((id) => products.find((product) => product.id === id)).filter(Boolean);
  const featuredIds = new Set(featured.map((product) => product.id));
  const selectedProducts = activeCategory === 'all' ? products : products.filter((product) => product.category === activeCategory);

  return <>
    <div className="announcement"><span><Tag size={14}/> OFERTAS E NOVIDADES DA LOJA</span><a href={discord} target="_blank" rel="noreferrer">Entre no Discord para conferir <ArrowUpRight size={14}/></a></div>
    <header className={scrolled ? 'header scrolled' : 'header'}><div className="nav wrap">
      <a className="brand" href="#inicio" onClick={close}><img src="/identidade/logo.jpeg" alt="SAN STORE BR"/><span>SAN STORE <b>BR</b></span></a>
      <button className="menu-toggle" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      <nav className={menu ? 'nav-links open' : 'nav-links'}><a href="#inicio" onClick={close}>Início</a><a href="#categorias" onClick={close}>Categorias</a><a href="#catalogo" onClick={close}>Produtos</a><a href="#sobre" onClick={close}>Sobre</a><a className="nav-cta" href={discord} target="_blank" rel="noreferrer">Entrar no Discord <ArrowUpRight size={16}/></a></nav>
    </div></header>
    <main>
      <section id="inicio" className="hero"><div className="hero-grid wrap"><div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> LOJA DIGITAL • COMUNIDADE GAMER</div><h1>SUA LOJA DIGITAL<br/>DE <em>CONFIANÇA.</em></h1><p>Games, PCs virtuais e produtos digitais para a sua comunidade. Encontre sua próxima novidade na SAN Store BR.</p><div className="hero-actions"><a className="btn primary" href="#categorias">Explorar categorias <ArrowRight size={17}/></a><a className="btn secondary" href={discord} target="_blank" rel="noreferrer">Fale com a loja <ArrowUpRight size={17}/></a></div><div className="hero-note"><span className="note-line"/> Atendimento pelo Discord</div></div><div className="hero-art"><div className="art-glow"/><img className="mascot" src="/identidade/bannersemtexto.jfif" alt="Mascote Tio Patinhas da SAN STORE BR"/><div className="art-caption"><span>SAN STORE BR</span><span>PRODUTOS DIGITAIS</span></div><div className="art-mark">SAN<br/><b>STORE</b></div></div></div><a className="scroll-cue" href="#destaques" aria-label="Descer para os destaques"><ArrowDown size={16}/><span>ROLE PARA EXPLORAR</span></a><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/></section>
      {activeCategory === 'all' && <section id="destaques" className="section featured"><div className="wrap"><div className="section-head reveal"><div><div className="eyebrow"><span className="eyebrow-mark">01</span> SELEÇÃO SAN STORE</div><h2>MAIS <em>VENDIDOS</em></h2></div><div className="carousel-controls"><span>Deslize para explorar</span><button aria-label="Anterior" onClick={() => moveBestsellers(-1)}><ChevronLeft size={18}/></button><button aria-label="Próximo" onClick={() => moveBestsellers(1)}><ChevronRight size={18}/></button></div></div><div className="featured-grid bestseller-track" ref={bestsellerTrack} aria-label="Produtos mais vendidos">{featured.map((product, i) => <article className={`featured-card featured-${i % 2 === 0 ? 'gta' : 'cloud'} reveal visible`} key={product.id}><img src={productImage(product)} alt={`Imagem de ${product.name}`}/><div className="featured-shade"/><div className="featured-content"><span className="featured-kicker">MAIS VENDIDO</span><h3>{product.name}</h3><p>{product.desc}</p><button onClick={() => showCategory(product.category)} className="btn primary">Explorar produto <ArrowRight size={16}/></button></div></article>)}</div></div></section>}
      <section id="categorias" className="section popular"><div className="wrap"><div className="section-head reveal"><div><div className="eyebrow"><span className="eyebrow-mark">02</span> EXPLORE A LOJA</div><h2>CATEGORIAS <em>POPULARES</em></h2></div><p>Escolha uma categoria e encontre os produtos disponíveis.</p></div><div className="category-cards">{categoriesWithProducts.map((category, index) => <button className="category-card reveal" key={category.id} onClick={() => showCategory(category.id)}><span className="category-art"><img src={category.items[0] ? productImage(category.items[0]) : '/identidade/bannersemtexto.jfif'} alt=""/><span className="category-art-shade"/><span className="category-icon">{category.icon}</span><span className="category-count">{category.items.length} PRODUTOS</span></span><span className="category-card-title">{category.name}<ChevronRight size={17}/></span></button>)}</div></div></section>
      <section id="catalogo" className="section catalog"><div className="wrap"><div className="section-head reveal"><div><div className="eyebrow"><span className="eyebrow-mark">03</span> CATÁLOGO SAN STORE</div><h2>ENCONTRE O QUE<br/><em>COMBINA COM VOCÊ.</em></h2></div><p>Consulte os produtos e fale diretamente com a loja pelo Discord.</p></div><nav className="category-nav" aria-label="Categorias do catálogo">{categories.map((category) => <button key={category.id} className={`category-chip ${activeCategory === category.id ? 'selected' : ''}`} aria-pressed={activeCategory === category.id} onClick={() => setActiveCategory(category.id)}><span className="category-icon">{category.icon}</span>{category.name}</button>)}</nav><div className="catalog-toolbar"><span>{activeCategory === 'all' ? 'Escolha uma categoria para explorar' : categories.find((category) => category.id === activeCategory)?.name}</span>{activeCategory !== 'all' && <button className="back-to-shelves" onClick={() => setActiveCategory('all')}>Voltar às vitrines</button>}<a className="filter-all" href={discord} target="_blank" rel="noreferrer">Dúvidas? Chame no Discord <ArrowUpRight size={14}/></a></div>{activeCategory === 'all' ? <div className="empty-category"><h3>Explore o catálogo por categoria</h3><p>Escolha uma categoria acima para ver os produtos disponíveis. As vitrines completas estão logo abaixo.</p></div> : selectedProducts.length ? <div className="product-grid">{selectedProducts.map(productCard)}</div> : <div className="empty-category"><h3>Produtos desta categoria em breve</h3><p>Confira as novidades no Discord da SAN Store BR.</p></div>}</div></section>
      {activeCategory === 'all' && categoriesWithProducts.map((category, i) => category.items.length > 0 && <section className={`category-shelf shelf-${i % 2}`} key={category.id}><div className="wrap"><div className="shelf-heading"><div><div className="eyebrow"><span className="eyebrow-mark">0{i + 4}</span> VITRINE SAN STORE</div><h2>{category.name}</h2></div><button className="view-category" onClick={() => showCategory(category.id)}>Ver todos os produtos <ArrowRight size={16}/></button></div><div className="product-grid">{category.items.filter((product) => !featuredIds.has(product.id)).slice(0, 4).map(productCard)}</div></div></section>)}
      <section className="community"><div className="community-inner wrap reveal"><div className="community-stamp"><Sparkles size={25}/><span>SS<br/>BR</span></div><div className="community-copy"><div className="eyebrow"><span className="live-dot"/> NOS ENCONTRAMOS NO DISCORD</div><h2>Faça parte da comunidade<br/><em>SAN STORE BR.</em></h2><p>Conheça nossos produtos e fale diretamente com a equipe.</p></div><a className="btn light" href={discord} target="_blank" rel="noreferrer">Entrar na comunidade <ArrowUpRight size={17}/></a><div className="community-lines"/></div></section>
      <section id="sobre" className="section about"><div className="wrap about-grid"><div className="about-visual reveal"><div className="about-frame"><video src="/identidade/logo_animada.mp4" autoPlay muted loop playsInline aria-label="Logo animada da SAN STORE BR"/></div><div className="since-card"><span>DESDE</span><b>16.10.26</b></div></div><div className="about-copy reveal"><div className="eyebrow"><span className="eyebrow-mark">01</span> SOBRE NÓS</div><h2>Digital, gamer<br/>e <em>feito pra comunidade.</em></h2><p>A SAN STORE BR reúne diferentes produtos digitais e soluções em um só lugar, com atendimento próximo e uma comunidade para encontrar novas opções.</p><p>Uma loja de produtos digitais presente na comunidade gamer e tecnológica.</p><a className="text-link" href={discord} target="_blank" rel="noreferrer">Conheça nossa comunidade <ArrowRight size={16}/></a></div></div></section>
      <section className="section benefits"><div className="wrap"><div className="section-head reveal"><div><div className="eyebrow"><span className="eyebrow-mark">02</span> POR QUE SAN STORE</div><h2>UMA EXPERIÊNCIA<br/><em>SIMPLES E DIRETA.</em></h2></div><p>Nosso foco é facilitar seu contato com a loja e deixar as opções ao seu alcance.</p></div><div className="benefit-grid">{benefits.map(({ Icon, title, text }, i) => <article className="benefit-card reveal" style={{ '--delay': `${i * 70}ms` }} key={title}><span className="benefit-icon"><Icon size={21}/></span><span className="benefit-index">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="suporte" className="section support"><div className="wrap support-row reveal"><div><div className="eyebrow"><span className="eyebrow-mark">03</span> SUPORTE</div><h2>Estamos no <em>Discord.</em></h2><p>Fale com a equipe pelo servidor da loja.</p></div><a className="btn primary" href={discord} target="_blank" rel="noreferrer">Acessar suporte <ArrowRight size={17}/></a><div className="support-hours"><Clock3 size={17}/><span>ATENDIMENTO<br/><b>NO DISCORD</b></span></div></div></section>
    </main>
    <footer className="footer"><div className="wrap"><div className="footer-main"><a href="#inicio" className="brand footer-brand"><img src="/identidade/logo.jpeg" alt=""/><span>SAN STORE <b>BR</b></span></a><p>Produtos digitais, tecnologia e comunidade gamer. Fale com a equipe pelo Discord.</p><div className="footer-social"><a href={discord} target="_blank" rel="noreferrer">Discord <ArrowUpRight size={15}/></a><a href={tiktok} target="_blank" rel="noreferrer">TikTok <ArrowUpRight size={15}/></a></div></div><div className="footer-bottom"><span>© 2026 SAN STORE BR &amp; D7 STUDIO. Todos os direitos reservados.</span><span>Fundação em 16/10/2026</span><div><a href="#inicio">Início</a><a href="#categorias">Categorias</a><a href="#catalogo">Produtos</a><a href="#suporte">Suporte</a></div></div></div></footer>
    <a className="discord-float" href={discord} target="_blank" rel="noreferrer" aria-label="Acessar Discord da SAN STORE BR"><MessageCircle size={20}/><span>Fale com a loja</span></a>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
