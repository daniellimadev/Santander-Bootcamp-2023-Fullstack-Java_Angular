/** 
 * Variaves
*/

// Tipos Primitivos:boolean, number, string
// Exemplo:
let ligado:boolean = false;
let nome:string = "Daniel";
let idade:number = 23;
let altura:number = 1.72;

// Tipos Especiais: null, undefined
let nulo:null = null;
let indefinido:undefined =undefined;

// Tipos Abrangente ou genéricos: any, void
function executaQuery():void {}
let retorno:void;
let retornoView1:any = "Daniel";
let retornoView2:any = 1.72;
let retornoView3:false;

// tipo Objeto - sem previsibilidade:
let produto:object = {
    name:"Daniel",
    cidade:"Sao Paulo-Sp",
    idade:23
}

// tipo objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome:string;
    preco:number;
    quantidade:number;
}

let meuProduto: ProdutoLoja = {
    nome:"Blusa",
    preco: 20.99,
    quantidade: 4
}

// -------------*******************-------------

// ------------- Multi-Type -------------

/**
 * arrays
 */

let dados1:string[] = ["Daniel","ana"];
let dados2: Array<string> = ["Daniel","ana"];
let dados3:number[] = [1,2,3,4,5.9,6,7];
let dados4: Array<number> = [1,2,3,4,5.9,6,7];
let dados5:boolean[] = [false,true]
let dados6:Array<boolean> = [true,false];

// array multi tipos
let informacao: (string | number)[] = ["Daniel",23];

/**
 * Tuplas
 */

// A tuplas tem que seguir como foi declarado, dessa forma o exemplo abaixo esta errado!!
// let boleto:[string,number,boolean] = [false,"Daniel",23];
// Agora a de baixo esta correto!!
let boleto:[string,number,boolean] = ["Daniel",23,false];

// ------------- Arrays-Metedos -------------

// dados1.map()
// dados2.pop()
// dados3.reduce()
// dados4.filter()

// -------------*******************-------------

/**
 * Datas
 */

// let aniversario:Date = new Date("2023-08-09 03:20")


