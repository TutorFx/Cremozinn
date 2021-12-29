export const state = () => ({
  contato: false,
  menu: [
    ["A Cremozinn", "/quem-somos"],
    ["Produtos", "/produtos"],
    ["Onde Encontarar", "/onde-encontrar"],
    ["Distribuidores", "/distribuidores"],
    ["Downloads", "/downloads"],
    ["Blog", "/blog"],
  ],
  isMenuOpaque: true,
  domain: '',
});
export const mutations = {
  contatoToggle(state) {
    state.contato = !state.contato;
  },
  menuOpaque(state, payload) {
    state.isMenuOpaque = payload;
  },
  setDomain(state, domain) {
    state.domain = domain;
  },
};
export const actions = {
  nuxtServerInit(store, context) {
      store.commit('setDomain', context.req.headers.host);
  },
};
export const getters = {
  domain: (state) => state.domain,
};