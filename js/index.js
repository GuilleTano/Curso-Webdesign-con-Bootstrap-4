$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $(".carousel").carousel({
        interval: 2000,
    });
});
$("#contacto").on("show.bs.modal", function(e){
    console.log("El modal se esta desplegando");
    btnContacto.classList.remove("btn-outline-success");
    btnContacto.classList.add("btn-primary");
    btnContacto.disabled = true;
});
$("#contacto").on("shown.bs.modal", function(e){
    console.log("El modal se esta mostrando");
});
$("#contacto").on("hide.bs.modal", function(e){
    console.log("El modal se esta ocultando");
});
$("#contacto").on("hidden.bs.modal", function(e){
    console.log("El modal se ocultó");
    btnContacto.classList.remove("btn-primary");
    btnContacto.classList.add("btn-outline-success");
    btnContacto.disabled = false;
});