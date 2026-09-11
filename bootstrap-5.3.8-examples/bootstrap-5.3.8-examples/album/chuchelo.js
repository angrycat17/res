function buttonclose() {
  /* window.location.reload()
  */
   const elements =document.getElementsByClassName("input")[0];
   console.log (elements.value)
  const name =document.getElementsByClassName("input")[1];
  console.log (name.value)
   const modalbody =document.getElementsByClassName("modal-body")[0];
   modalbody.innerHTML ="Дякую за замовлення " + name.value
}