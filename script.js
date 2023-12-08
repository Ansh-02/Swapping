function swapElements(id1, id2) {
  var element1 = document.getElementById(id1);
  var element2 = document.getElementById(id2);

  var temp = element1.innerHTML;
  element1.innerHTML = element2.innerHTML;
  element2.innerHTML = temp;
}
