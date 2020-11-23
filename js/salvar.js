
const salva = document.querySelector('[data-salva="salva"]');
let texto = document.getElementById('resultado');

console.log(texto.innerText);

function salvar() {
  console.log(texto.innerText);

  let blob = new Blob([texto.innerText],

    {
      type: "text/plain;charset=utf8"
    }
  );
  saveAs(blob, "mips" + ".txt");
}
salva.addEventListener('click', salvar);