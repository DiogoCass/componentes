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

createLinkElementAndAppendInHead('https://cdn.jsdelivr.net/npm/@sweetalert2/themes/default/default.css');
createScriptElementAndAppendInHead('https://cdn.jsdelivr.net/npm/sweetalert2/dist/sweetalert2.min.js');
createScriptElementAndAppendInHead('https://cdn.jsdelivr.net/gh/DiogoCass/componentes@refs/heads/main/tt.js');
