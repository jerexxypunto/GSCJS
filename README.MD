# GSC-JS
<b>Autor:</b> Jeremías San Martín.

<b>Web del Autor:</b> https://gscdesigns.net.

## Documentación
Todas las caracteristicas de esta libreria estan dentro de un objeto javaScript llamado <code>GSCJS</code>

<pre>
const GSCJS = {
    autor:"Jeremías San Martín",
    web:"https://gscdesigns.net/",
    /**
     * Esta funcion retorna un nodo HTML con su contenido.
     * 
     * @param {string} tag Una etiqueta HTML
     * @param {string} txt El contenido de la etiqueta HTML
     * @returns {NodeHTML} Un nodo
     */
    crearNodo : function crearNodo(tag,txt){
      const node = document.createElement(tag);
      node.textContent = txt;
      return node;
    },
    /**
     * Esta funcion retorna true si el nodo objetivo tiene la classe
     * espesificada y false si no tiene la clase.
     * 
     * @param {NodeHTML} target El NodoHTML objeto de la verificación
     * @param {string} classname 
     * @returns {boolean}
     */
    hasClass: function hasClass(target,classname){
        const target = document.querySelector(target);
        const response = target.classList.contain(classname);
        return response;
    }
}
</pre>
