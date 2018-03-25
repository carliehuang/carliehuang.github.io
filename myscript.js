            function hideshowDiv() {
                setTimeout(function () {
                    $("#smaller").hide();
                    setTimeout(function () {
                        $("#smaller").show();
                        toggleDiv();
                    }, 3800);
                }); 
            }
            hideshowDiv();