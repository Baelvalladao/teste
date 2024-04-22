
/*
    O grafo tem o vértice inicial na minha casa, se dividindo por dois caminhos. O caminho que inicia no
    vertice D, começa na rua João Pinheiro. O caminho que se inicia no vertice A, começa pela rua 
    Visconde de Mauá. Os custos foram definidos de acordo com o fluxo de carros no período e a quantidade de gasolina utilizada, uma vez que um caminho tem mais descidas e nesse horário ele representa o contra fluxo, e outro caminho tem mais subidas e um maior fluxo de carro por conta do movimento de saída dos colégios que existem no caminho, como o Joao 23, por exemplo. A heurística utilizada será a distância euclidiana em relação a meta. 





*/



import Grafo from "./Grafo.js";
import Vertice from "./Vertice.js";

let casa = new Vertice("casa", null);
let vianna = new Vertice("vianna", 0);
let a = new Vertice("a", 9.2);
let b = new Vertice("b", 7.5);
let c = new Vertice("c", 6.0);
let d = new Vertice("d", 5.2);
let e = new Vertice("e", 3.9);
let f = new Vertice("f", 3.3);
let g = new Vertice("g", 2.9);
let h = new Vertice("h", 4.7);


let grafo = new Grafo(casa,vianna);

casa.adicionarAresta(d, 4.9);
casa.adicionarAresta(a, 3.1);
a.adicionarAresta(b, 3.1);
d.adicionarAresta(e, 2.2);
e.adicionarAresta(f, 2.2);
f.adicionarAresta(b, 5.1);
f.adicionarAresta(g, 2.2);
b.adicionarAresta(f, 5.1);
b.adicionarAresta(c, 3.5);
c.adicionarAresta(h, 4.8);
h.adicionarAresta(vianna, 3.1);
g.adicionarAresta(vianna, 2.5);

let caminho = grafo.buscaAestrela();

console.log(caminho.imprimeCaminho(), caminho.retornaCustoTotal());

/* A heurística utilizada será a distância euclidiana em relação a meta. 
