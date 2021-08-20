<template>
  <div class="form-area">
    <div class="form-submit">
      <div class="login-text">
        <p class="title">Login</p>
        <p class="subtitle">Junte-se a revolução Solar</p>
      </div>
      <button @click="signinwithgoogle" class="login-button">
        <img class="icon" src="../assets/google.svg" alt="Google">
        <p class="button-text">Faça login com o Google</p>
      </button>
      <div class="separator">
        <div class="line"></div>
        <p>ou faça login com o seu e-mail</p>
        <div class="line"></div>
      </div>
      <form class="form">
        <p><strong>E-mail<span>*</span></strong></p>
        <input v-model="email" @blur="validateEmail" required placeholder="someone@example.com" type="email">
        <p><strong>Senha<span>*</span></strong></p>
        <input required placeholder="********" type="password">
        <button class="entrar" type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { firebase, auth } from '../services/firebase'

export default {
  data () {
    return {
      email: '',
      msg: [],
      user: {}
    }
  },
  methods: {
    validateEmail() {
      if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
        this.msg = 'valid'
      } else {
        alert("Insira um endereço de e-mail valido")
      }
    },
    async signinwithgoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();

      const result = await auth.signInWithPopup(provider);
        if (result.user) {
          const { displayName, photoURL, uid } = result.user;

          if ( !displayName || !photoURL ) {
            throw new Error('missing information from Google account')
          }

          this.user = ({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }

      console.log(this.user)
    }
  }
}
</script>

<style scoped>
  .form-area {
    grid-area: 'form';

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-submit {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 31rem;
    height: 36.563rem;
  }

  .title {
    font-weight: bold;
    font-size: 2.25rem;

    margin-bottom: 0.625rem;
  }

  .subtitle {
    font-weight: medium;
    font-size: 1.5rem;

    color: rgba(0, 0, 0, 0.6);

    margin-bottom: 2.5rem;
  }

  .login-button {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 3.125rem;
    border: 1px solid rgba(0, 0, 0, 0.5);

    cursor: pointer;

    background-color: transparent;

    padding: 0.625rem 1.875rem 0.625rem 1.875rem;
    
    margin-bottom: 2.5rem;
  }

  .icon {
    width: 2.125rem;
    height: 2.125rem;

    margin-right: 1.25rem;
  }

  .button-text {
    font-weight: bold;
    font-size: 1.125rem;

    color: rgba(0, 0, 0, 0.7);
  }

  .separator {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 2.5rem;
  }

  .separator p {
    font-weight: bold;

    color: rgba(0, 0, 0, 0.6);
  }

  .line {
    width: 6.25rem;
    height: 1px;

    margin: 0 0.600rem 0 0.600rem;

    background: rgba(0, 0, 0, 0.6);
  }

  .form p {
    font-size: 1.125rem;
    font-weight: bold;

    margin-bottom: 0.625rem;
  }

  span {
    color: #28479A;
  }

  .form input {
    border-radius: 3.125rem;
    border: 1px solid rgba(0, 0, 0, 0.5);

    width: calc(100% - 1.875rem - 1.875rem);
    height: 3.375rem;

    margin-bottom: 2.5rem;

    padding-left: 1.875rem;
    padding-right: 1.875rem;

    color: rgba(0, 0, 0, 0.7);

    font-size: 1.125rem;
  }

  .form input:focus {
    outline: none;
  }

  .form input::placeholder {

    color: rgba(0, 0, 0, 0.7);

    font-size: 1.125rem;
  }

  .entrar {
    width: 100%;
    height: 3.375rem;

    border-radius: 3.125rem;
    border: none;

    background: #0CA265;

    color: white;

    font-size: 1.125rem;
    font-weight: bold;

    cursor: pointer;
  }
</style>
