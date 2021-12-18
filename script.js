$(function () {
  const ajax = new SajatAjax();
  const taskok = [];
  let apivegpont = "http://localhost:3000/tasks?_expand=user";

  ajax.myAjax(apivegpont, taskok, taskLista);

  function taskLista(taskok) {
    const szuloElem = $(".taskok");
    const sablonElem = $("footer .task");
    szuloElem.empty();
    sablonElem.show();
    taskok.forEach(function (elem) {
      let node = sablonElem.clone().appendTo(szuloElem);
      const obj = new Task(node, elem);
    });
    sablonElem.hide();

    $(window).on('torles', (event) => {
        console.log(event.detail);
      })
  }

  

  $("#szur").on("change", () => {
    let apivegpontLocal = apivegpont;
    let ertek = $("#szur").val();
    if (ertek == "hat") {
      let rendez = "&_sort=datum&_order=asc";
      apivegpontLocal += rendez;
      ajax.myAjax(apivegpontLocal, taskok, taskLista);
    }
  });

  $("#feladat").on("keyup", () => {
    let apivegpontLocal = apivegpont;
    let ertek = $("#feladat").val();
    let rendez = "&q=" + ertek;
    apivegpontLocal += rendez;
    ajax.myAjax(apivegpontLocal, taskok, taskLista);
  });

  $(".tor").on("click", () => {
    
  });
  
});
