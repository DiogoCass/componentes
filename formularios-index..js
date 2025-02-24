(() => {
    const DOMString = `
    <main>
    <div class="prompt">
      <form novalidate>
        <center><h1>Seja Bem Vindo!</h1></center>
        <div class="name">
          <label for="name">Este aplicativo foi criado com muita dedicação de um jovem programador. Preencher esse registo é necessario apenas uma vez, para contabilizar uma estatistica de alçance de usuarios.</label>
          <input type="text" name="name" id="name" placeholder="Identifique-se aqui para finalizar..." required />
          <span></span>
        </div>
        <div class="lang">
          <label>Escolha seu idioma</label>
          <input type="radio" name="lang" required value="pt" checked>Portugues
          <input type="radio" name="lang" required value="en">Ingles
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </main>
    `
    const createLinkElementAndAppendInHead = (path) => {
        const element = document.createElement('link');
        element.href = `${path}`;
        element.rel = 'stylesheet';
        document.head.append(element);
    }
    const createScriptElementAndAppendInHead = (path) => {
        const elementt = document.createElement('script');
        elementt.src = `${path}`;
        elementt.type = 'text/javascript';
        document.head.append(elementt);
    }
     createLinkElementAndAppendInHead('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap'); createLinkElementAndAppendInHead('https://cdn.jsdelivr.net/gh/DiogoCass/componentes@refs/heads/main/formulario.css');
createScriptElementAndAppendInHead('https://cdn.jsdelivr.net/gh/DiogoCass/componentes@refs/heads/main/formulario.js');
    document.body.insertAdjacentHTML('afterbegin', DOMString)
})();
