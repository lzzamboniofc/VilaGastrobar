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
const closeMenu = () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
};
menuButton.addEventListener('click', () => {
  const open = !nav.classList.contains('open');
  nav.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

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
