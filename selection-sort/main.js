
const selectionSort = (list)=>{
    
    let lista = list

    let min_index = 0
    for (let j = 0; j < lista.length -1; j++){
        min_index = j // para mundar o index para o proximo
      
        for (let i = j; i < lista.length; i++){
            /* -- 
                o index da lista lista tem que ser j para ele avanca para o proximo numero no outro laco
                se ele pecorreu o item 0 no j aqui nesse laco a gente nao precisar pecorrer mais essa posicao
            -- */
            if(lista[i] < lista[min_index]){
                /*-- 
                    quando achamos temos que mudar o min_index pela o index do menor elemento 
                    ex: no min_index = 2 e seu valor e 8 => mas achamos um valor no index 4 e seu valor e 3
                    trocamos o min_index pelo index do menor valor...
                --*/
                min_index = i
               
            } 
        }
   
        if(lista[j] > lista[min_index]){
            const aux = lista[j]
            lista[j] = lista[min_index]
            lista[min_index] = aux
    
        }
    }
}
const list = [7,1,5,8,3]
selectionSort(list)