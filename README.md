# VILA gastrobar — site demonstrativo

Site institucional desenvolvido para o VILA gastrobar, em Itu/SP.

## GitHub Pages

O projeto foi preparado para publicação diretamente pela branch `main`, pasta raiz (`/root`).

Em **Settings → Pages**:
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

Não há etapa de build obrigatória para o site publicado: `index.html`, `styles.css` e `src/` funcionam diretamente no GitHub Pages.

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Pendências

```bash
npm run pendencias
```

O arquivo `src/config.js` centraliza dados editáveis, modo demonstração/público, links, horários, categorias e imagens.

### Modo demonstração

`modo: 'demonstracao'` mantém a galeria ilustrativa visível.

### Modo público

Troque para `modo: 'publico'`. A galeria demonstrativa é ocultada automaticamente.

## Observação sobre imagens

As imagens atuais são provisórias e licenciadas via Unsplash. Antes da publicação definitiva, substitua por fotografias oficiais do VILA e altere `provisoria` para `false`.
