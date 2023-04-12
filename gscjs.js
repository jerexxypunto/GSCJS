class GSCJS {
  constructor() { 
    this.man = {
      queryOnly:'Selecciona un Nodo',
      queryAll:'Selecciona una lista de nodos y lo guarda en Array',
      crearNodo:' Esta funcion retorna un nodo HTML con su contenido.',
      hasClass:'Esta funcion retorna true si el nodo objetivo tiene la classe espesificada y false si no tiene la clase.',
      getURL:'Retorna toda la URL',
      getURLOrigin:'Retorna solo la URL',
      getURLpath: 'Retorna el path de una URL',
      getURLhash:'Retorna el hash',
      getURLParams:'Retorna un objeto con los parametros de la URL',
      crearFragmento:'Crea un document fragment',


    }
   }

   
    /**
   * Selecciona un solo elemento en le documeneto
   * @param {nodeHTML} element
   * @returns {NodeHTML}
   */
   queryOnly(element) {
    let nodo = document.querySelector(element);
    if (nodo) {
      return nodo;
    } else {
      setTimeout(() => {
        return buscarNodo(element);
      }, 100); // espera 100 milisegundos antes de buscar de nuevo
    }
  }
  /**
   * Toma un nodeList del DOM y retorna un
   * Array con todos sus elementos.
   *
   * @param {NodeList} element
   * @returns {Array}
   */
  queryAll(element) {
    const nodeList = document.querySelectorAll(element);
    if (nodeList) {
      return [...nodeList];
    } else {
      setTimeout(() => {
        return queryAll(element);
      }, 100); // espera 100 milisegundos antes de buscar de nuevo
    }
    

  }
  /**
   * Esta funcion retorna un nodo HTML con su contenido.
   *
   * @param {string} tag Una etiqueta HTML
   * @param {string} txt El contenido de la etiqueta HTML
   * @returns {NodeHTML} Un nodo
   */
  crearNodo(tag, txt) {
    const node = document.createElement(tag);
    node.textContent = txt;
    return node;
  }
  /**
   * Esta funcion retorna true si el nodo objetivo tiene la classe
   * espesificada y false si no tiene la clase.
   *
   * @param {NodeHTML} targetObjet El NodoHTML objeto de la verificación
   * @param {string} classname
   * @returns {boolean}
   */
  hasClass(target, classname) {
    const targetObjet = document.querySelector(target);
    const response = targetObjet.classList.contain(classname);
    return response;
  }
  // Retorna toda la URL
  getURL() {
    const url = location.href;
    return url;
  }
  // Retorna solo la URL
  getURLorigin() {
    const url = location.origin;
    return url;
  }
  // Retorna la ruta del URL (lo que le sigue a la extención midominio.com/ruta)
  getURLpath() {
    const url = location.pathname;
    return url;
  }
  // Retorna el hash
  getURLhash() {
    let url = location.hash;
    if (url == "") {
      url = undefined;
    }
    return url;
  }

  getURLParams(){
    // Divide la URL en dos partes: la primera parte es la URL base y la segunda parte son los parámetros de la URL
    const urlParts = url.split('?');

    // Si la URL no tiene parámetros, no hacemos nada
    if (urlParts.length === 1) {
      console.error('La URL no tiene parámetros');
    } else {
      // La segunda parte contiene los parámetros, divídelos en un array
      const queryParams = urlParts[1].split('&');
      
      // Crea un objeto para almacenar los parámetros
      const params = {};
      
      // Itera sobre los parámetros y almacena sus valores en el objeto params
      queryParams.forEach(queryParam => {
        const [key, value] = queryParam.split('=');
        params[key] = value;
      });
      
      
    }
    return params;
  }
  /**
   *
   * @returns documentfragment
   */
  crearFragmento() {
    const documentFragement = document.createDocumentFragment();
    return documentFragement;
  }

  setCounter(nodoTarget, time) {
    let finalCount = nodoTarget.getAttribute("data-gsc-count");
    if(finalCount != null){
      finalCount = parseInt(finalCount);
      let currentCount = 0;
      const counter = setInterval(() => {
        if (currentCount > 0) {
          nodoTarget.textContent = currentCount;
          if (currentCount === finalCount) clearInterval(counter);
        }
        currentCount++;
      }, time);
    }else{
      console.error(`No has definido la propiedad 'data-gsc-count'`);  
    }
    
  }
  
}



async function gscFetch(url, callback, mode) {
  const get = await fetch(url);
  let response;
  switch (mode) {
    case "json":
      response = await get.json();
      break;
    case "blob":
      response = await get.blob();
      break;
    default:
      response = await get.text();
      break;
  }
  callback(response);
}

const gscConsole = (e) => console.log(e);
