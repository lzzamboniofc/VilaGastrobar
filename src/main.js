import { siteConfig as config } from './config.js';

const bySelector = (selector) => [...document.querySelectorAll(selector)];

bySelector('[data-brand]').forEach((el) => { el.textContent = config.negocio.nomeCurto; });

const whatsappUrl = 'https://wa.me/' + config.contato.telefoneE164;
bySelector('[data-whatsapp]').forEach((el) => { el.href = whatsappUrl; });
bySelector('[data-instagram]').forEach((el) => { el.href = config.contato.instagram; });
bySelector('[data-directions]').forEach((el) => { el.href = config.links.directions; });
bySelector('[data-phone]').forEach((el) => { el.textContent = config.contato.telefone; });
bySelector('[data-phone-link]').forEach((el) => { el.href = 'tel:+' + config.contato.telefoneE164; });

Object.entries(config.imagens).forEach(([key, image]) => {
  bySelector('[data-image="' + key + '"]').forEach((img) => {
    img.src = image.url;
    img.alt = image.alt;
    img.loading = key === 'hero' ? 'eager' : 'lazy';
    img.decoding = 'async';
  });
});

const destaques = config.destaques.filter((item) => config.modo === 'demonstracao' || item.confirmado);
const destaquesRoot = document.querySelector('[data-destaques]');
destaques.forEach((item) => {
  const row = document.createElement('article');
  row.className = 'menu-line';
  const title = document.createElement('h3');
  title.textContent = item.titulo;
  const text = document.createElement('p');
  text.textContent = item.texto;
  row.append(title, text);
  destaquesRoot.appendChild(row);
});

const hoursRoot = document.querySelector('[data-hours]');
config.horarios
  .filter((item) => config.modo === 'demonstracao' || item.confirmado)
  .forEach((item) => {
    const row = document.createElement('div');
    row.className = 'hour-row';
    const days = document.createElement('span');
    days.textContent = item.dias;
    const time = document.createElement('span');
    time.textContent = item.horario;
    row.append(days, time);
    hoursRoot.appendChild(row);
  });

const faqRoot = document.querySelector('[data-faq]');
config.faq
  .filter((item) => config.modo === 'demonstracao' || item.confirmado)
  .forEach((item) => {
    const article = document.createElement('article');
    article.className = 'faq-item';

    const button = document.createElement('button');
    button.className = 'faq-question';
    button.type = 'button';
    button.setAttribute('aria-expanded', 'false');

    const label = document.createElement('span');
    label.textContent = item.pergunta;
    const icon = document.createElement('span');
    icon.textContent = '+';
    icon.setAttribute('aria-hidden', 'true');

    const answer = document.createElement('div');
    answer.className = 'faq-answer';
    const inside = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = item.resposta;
    inside.appendChild(p);
    answer.appendChild(inside);

    button.append(label, icon);
    button.addEventListener('click', () => {
      const open = article.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      icon.textContent = open ? '−' : '+';
    });

    article.append(button, answer);
    faqRoot.appendChild(article);
  });

if (config.modo !== 'demonstracao') {
  bySelector('.demo-only').forEach((el) => el.hidden = true);
}

const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const menuLinks = [...nav.querySelectorAll('a')];
const mobileQuery = window.matchMedia('(max-width: 900px)');
let previousFocus = null;

const setMenuOpen = (open) => {
  const shouldOpen = open && mobileQuery.matches;
  nav.classList.toggle('open', shouldOpen);
  menuButton.setAttribute('aria-expanded', String(shouldOpen));
  menuButton.setAttribute('aria-label', shouldOpen ? 'Fechar menu' : 'Abrir menu');
  document.body.classList.toggle('menu-open', shouldOpen);
  document.documentElement.classList.toggle('menu-open', shouldOpen);
  if (shouldOpen) {
    previousFocus = document.activeElement;
    menuLinks[0]?.focus({ preventScroll: true });
  } else if (previousFocus && nav.contains(document.activeElement)) {
    menuButton.focus({ preventScroll: true });
    previousFocus = null;
  }
};

menuButton.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));
menuLinks.forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', (event) => {
  if (!nav.classList.contains('open')) return;
  if (event.key === 'Escape') {
    setMenuOpen(false);
    menuButton.focus({ preventScroll: true });
  }
  if (event.key === 'Tab') {
    const focusables = [menuButton, ...menuLinks];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
mobileQuery.addEventListener('change', () => setMenuOpen(false));

const dialog = document.querySelector('#lightbox');
const dialogImage = dialog.querySelector('img');
document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.lightbox;
    const image = config.imagens[key];
    dialogImage.src = image.url;
    dialogImage.alt = image.alt;
    dialog.showModal();
  });
});
dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
