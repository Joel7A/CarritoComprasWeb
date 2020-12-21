$(document).ready(function () {
    $("tr #btnDelete").click(function () {
        var idp = $(this).parent().fint("#idp").val();
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
                    if (willDelete) {
                        eliminar(idp);
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        }).then((willDelete) => {
                            if (willDelete) {
                                parent.location.href = "Controlador?accion=carrito";
                            }
                        });
                    } else {
                        swal("Your imaginary file is safe!");
                    }
                });

    });
    function eliminar(idp) {
        var url = "Controlador?accion=Delete";
        $.ajax({
            type: 'POST',
            url: url,
            data: "idp=" + idp,
            success: function (data, textStatus, jpXHP) {
            }
        });
    }
    
    $("tr #Cantidad").click(function(){
       var idp = $(this).parent().find("#idpro").val();
       var cantidad = $(this).parent().find("#Cantidad").val();
       var url = "Controlador?accion=ActualizarCantidad";
       $.ajax({
          type: 'POST',
          url: url,
          data: "idp="+idp+"&Cantidad="+cantidad,
            success: function (data, textStatus, jqXHR) {
                location.href="Controlador?accion=Carrito";
            }
       });
    });
});

