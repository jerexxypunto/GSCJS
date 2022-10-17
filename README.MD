# GSC-JS
<b>Autor:</b> Jeremías San Martín.

<b>Web del Autor:</b> https://gscdesigns.net.

# Documentación
Todas las caracteristicas de esta libreria estan dentro de un objeto javaScript llamado <code>GSCJS</code>

## Capturar nodos
### QueryOnly
`GSCJS.queryOnly(element)`

Selecciona un solo elemento en le documento y lo retorna

### QueryAll
`GSCJS.queryAll(element)`

Toma un nodeList del DOM y retorna un Array con todos sus elementos

## Crear nodos
`GSCJS.crearNodo(tag, txt)`

Esta funcion retorna un nodo HTML con su contenido

## Gestión de nodos
`GSCJS.hasClass(target, classname)`
Esta funcion retorna true si el nodo objetivo tiene la classe espesificada y false si no tiene la clase.

## Gestión de URL
### Get URL
Retorna toda la url

`GSCJS.getURL()`
### Get URL Origin
Retorna solo el dominio de la url

`GSCJS.getURLorigin()`

### Get URL Path
Retorna el Path de la url (lo que le sigue a la extención midominio.com/ruta)

`GSCJS.getURLpath()`

### Get URL Hash
Retorna el hash

`GSCJS.getURLhash()`

### Get Parameter  By Name
Devuelve los parametros que pasen por GET

`GSCJS.getParameterByName(name)`

## Fragmentos
Retorna un documentfragment

`GSCJS.fragmento()`

## JavaScript Asyncono
Función para comunicarse con una API de forma asincronica

`gscFetch (url, callback, mode)`


* @param `url` dirección https de la API
* @param `callback` función callback
* @param `mode` Este parametro define el modo de prosesado de la promesa. 

  Este parametro puede tomar 3 valores
  * `json`
  * `blob`
  * `text`


# ¿Cómo funciona la función gscFetch?
<pre>
async function gscFetch (url, callback, mode){
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
</pre>


# Código
<pre>
const GSCJS = {
  autor: "Jeremías San Martín",
  web: "https://gscdesigns.net/",
  /**
   * Selecciona un solo elemento en le documeneto
   * @param {nodeHTML} element
   * @returns {NodeHTML}
   */
  queryOnly: function queryOnly(element) {
    const selection = document.querySelector(element);
    return selection;
  },
  /**
   * Toma un nodeList del DOM y retorna un
   * Array con todos sus elementos.
   * 
   * @param {NodeList} element
   * @returns {Array}
   */
  queryAll: function queryAll(element) {
    const nodeList = document.querySelectorAll(element);
    const selection = [...nodeList];
    return selection;
  },
  /**
   * Esta funcion retorna un nodo HTML con su contenido.
   *
   * @param {string} tag Una etiqueta HTML
   * @param {string} txt El contenido de la etiqueta HTML
   * @returns {NodeHTML} Un nodo
   */
  crearNodo: function crearNodo(tag, txt) {
    const node = document.createElement(tag);
    node.textContent = txt;
    return node;
  },
  /**
   * Esta funcion retorna true si el nodo objetivo tiene la classe
   * espesificada y false si no tiene la clase.
   *
   * @param {NodeHTML} targetObjet El NodoHTML objeto de la verificación
   * @param {string} classname
   * @returns {boolean}
   */
  hasClass: function hasClass(target, classname) {
    const targetObjet = document.querySelector(target);
    const response = targetObjet.classList.contain(classname);
    return response;
  },
  // Retorna toda la URL
  getURL: function getURL() {
    const url = location.href;
    return url;
  },
  // Retorna solo la URL
  getURLorigin: function getURLorigin() {
    const url = location.origin;
    return url;
  },
  // Retorna la ruta del URL (lo que le sigue a la extención midominio.com/ruta)
  getURLpath: function getURLpath() {
    const url = location.pathname;
    return url;
  },
  // Retorna el hash
  getURLhash: function getURLhash() {
    let url = location.hash;
    if(url == ''){
      url = undefined;
    }
    return url;
  },
  /**
   * 
   * @returns documentfragment
   */
  crearFragmento: function fragmento (){
    const documentFragement = document.createDocumentFragment();
    return documentFragement;
  }
};

</pre>
