import { siteConfig as config } from '../src/config.js';

const pending = [];

if (!config.negocio.logoConfirmada) {
  pending.push('Substituir a marca tipográfica pela logo oficial, caso a empresa autorize e forneça o arquivo.');
}

Object.entries(config.imagens).forEach(([key, image]) => {
  if (image.provisoria) {
    pending.push('Imagem "' + key + '" é provisória. Substituir por fotografia oficial do VILA. Fonte atual: ' + image.fonte);
  }
});

config.horarios.forEach((item) => {
  if (!item.confirmado) pending.push('Confirmar horário: ' + item.dias + ' — ' + item.horario);
});

config.destaques.forEach((item) => {
  if (!item.confirmado) pending.push('Confirmar conteúdo: ' + item.titulo);
});

console.log('\nPendências do site VILA gastrobar\n');
if (!pending.length) {
  console.log('Nenhuma pendência registrada.');
} else {
  pending.forEach((item, index) => console.log('- ' + item));
}
console.log('\nModo atual: ' + config.modo + '\n');
