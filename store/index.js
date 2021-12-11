export const state = () => ({
    contato: false,
  });
  export const mutations = {
    contatoToggle(state) {
      state.contato = !state.contato;
    },
  };
  