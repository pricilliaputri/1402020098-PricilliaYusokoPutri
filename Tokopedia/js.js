$(document).ready(function(){
    $("#pulsa").click(function() {
        $("#notlpn").change(function(){
            if ($("#notlpn").val() > 0){
                $("#nominal").prop("disabled", false);
            }
            console.log($("#notlpn").val())
        });
        $("#pulsa").css("border-bottom", "2px solid #03ac0e");
        $("#pulsa").css("color", "#03ac0e");
        $("#data").css("padding", "10px 0");
        $("#data").css("color", "black");
        $("#data").css("border-bottom", "2px solid transparent");
        $("#nominal").show();
        $(".btn-buy1").show();
        $("#kuota").hide();
        $(".btn-buy2").hide();
    });
    
    $("#nominal").change(function() {
        $(".btn-buy1").prop("disabled", false);
        $(".btn-buy1").css('background-color', '#03ac0e');
        $(".btn-buy1").css('color', 'white');
    });

    $(".btn-buy1").click(function(){
        if($("#nominal").val() >= 10.000){
            var num2 = 2000;
            var a = document.getElementById("nominal").value;
            var b = parseInt(a) + parseInt(num2);
            var conf = confirm('Pembelian Pulsa Sebesar ' + a + ' ke nomor ' + $("#notlpn").val());
            if( conf === false){
                
            }else{
                confirm('Total harga Pulsa Rp. ' + b + ',- ke nomor ' + $("#notlpn ").val() + ' sedang di proses. TerimaKasih :)');
            }
           
            
        }else{
            var num3 = 3000;
            var c = document.getElementById("nominal").value;
            var d = parseInt(c) + num2;
            var cnf = confirm('Pembelian Pulsa Sebesar ' + c + ' ke nomor ' + $("#notlpn").val());
            if(cnf === true){
                confirm('Total harga Pulsa Rp. ' + d + ' ke nomor ' + $("#notlpn ").val() + ' sedang di proses. TerimaKasih :)');
            }
        }
    });

    $("#notlpn").change(function(){
        if ($("#notlpn").val() > 0){
            $("#kuota").prop("disabled", false);
        }
        console.log($("#notlpn").val())
    });

    $("#data").click(function() {
        
        $("#notlpn").change(function(){
            if ($("#notlpn").val() > 0){
                $("#kuota").prop("disabled", false);
            }
            console.log($("#notlpn").val())
        });
            $("#data").css("border-bottom", "2px solid #03ac0e");
            $("#data").css("color", "#03ac0e");
            $("#pulsa").css("padding", "10px 0");
            $("#pulsa").css("color", "black");
            $("#pulsa").css("border-bottom", "2px solid transparent");
            $("#nominal").hide();
            $(".btn-buy1").hide();
            $("#kuota").prop("hidden", false);
            $("#kuota").show();
            $(".btn-buy2").prop("hidden", false);
            $(".btn-buy2").show();
    });

    $("#notlpn").keypress(function(value) {
        if (value.which != 8 && value.which != 0 && (value.which < 48 || value.which > 57)) {
            return false;
        }
    });
    

    $("#kuota").change(function() {
        $(".btn-buy2").prop("disabled", false);
        $(".btn-buy2").css('background-color', '#03ac0e');
        $(".btn-buy2").css('color', 'white');
    });

    $(".btn-buy2").click(function(){
        if($("#kuota").val() === "Pilihan"){
            alert("Pilihan tidak sesuai! Silahkan isi pilihan dengan benar!")
        }else{
            var price = $("#kuota").val().substring($("#kuota").val().length - 10);
            var conf3 = confirm("Pembelian paket data " + $("#kuota").val()+ " ke nomor " + $("#notlpn ").val());
            if(conf3 === true ){
                confirm("Total harga paket data " + price + ",- ke nomor " + $("#notlpn").val() + " sedang di proses. Terima kasih :)");
            }else{

            }
        }

    });

    function onlyNumberKey(evt) {
		// Only ASCII character in that range allowed
		var ASCIICode = (evt.which) ? evt.which : evt.keyCode
		if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
			return false;
		return true;
	}
});