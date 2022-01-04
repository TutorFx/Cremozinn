export const state = () => ({
  contato: false,
  menu: [
    ["A Cremozinn", "/quem-somos"],
    ["Produtos", "/produtos"],
    ["Onde Encontrar", "/onde-encontrar"],
    ["Distribuidores", "/distribuidores"],
    ["Downloads", "/downloads"],
    ["Blog", "/blog"],
  ],
  isMenuOpaque: true,
});
export const mutations = {
  contatoToggle(state) {
    state.contato = !state.contato;
  },
  menuOpaque(state, payload) {
    state.isMenuOpaque = payload;
  },
};