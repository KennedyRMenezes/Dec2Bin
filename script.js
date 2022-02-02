

const convertNum = function(){

    let inputValue = Number(document.querySelector('.input--').value);
    console.log(inputValue);
    let showArea = document.querySelector('.result');

    let arr = []; //array a ser alocado com numeros invertidos
    let bin1 = []; //array a ser alocado com os numeros na ordem correta
    let i = 0;
    //Fazendo as contas e colocando remainder no array
    while(inputValue != 0) {
        arr[i] = Math.trunc(inputValue % 2);
        inputValue = Math.trunc(inputValue / 2);
        i++;
    }

    //Revertendo o array para ordem correta
    let a = 0;
    for(let j = arr.length-1; j > -1; j--){
        bin1[a] = arr[j];
        a++;
    }

    //Juntando os numeros do array e transformando num inteiro só
    const bin = Number(bin1.join(''));
    console.log(bin);

    showArea.textContent = bin;
};

document.querySelector('.btn').addEventListener('click', convertNum);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      convertNum();
    }
});