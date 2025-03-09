if(typeof notificar !== "undefined") {
        
        (()=>{
        
        var icn;
        if (notificar.icone == "confirmacao") {
            icn = "success";
        }
        else if (notificar.icone == "interrogacao") {
            icn = "question";
        }
        else if (notificar.icone == "exclamacao") {
            icn = "warning";
        }
        else if (notificar.icone == "informacao") {
            icn = "info";
        }
        else if (notificar.icone == "exclusao") {
            icn = "error";
        }
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: notificar.tempo || null,
            timerProgressBar: true,
        })
        Toast.fire({
                icon: icn || null,
                title: notificar.mensagem || 'Noficação sem texto realizada'
        })

        })({})
        
        }
