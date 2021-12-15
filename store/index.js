export const state = () => ({
    contato: false,
    menu: [['A Cremozinn', '/quem-somos'], ['Produtos', '/produtos'], ['Distribuidores', '/distribuidores'], ['Downloads', '/downloads'], ['Blog', '/blog']],
  });
  export const mutations = {
    contatoToggle(state) {
      state.contato = !state.contato;
    },
  };
  