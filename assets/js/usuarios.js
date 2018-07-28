$(document).on("ready", main);

function main(){
	$("select").change(function(){
		var selected = $(this).val(); 
		$.ajax({
			url:"localhost/SAE/C_Administrar_Usuarios/cantidad",
			type: "POST",
			data: {cantidad:selected},
			success:function(){
				window.location.href = "localhost/SAE/C_Administrar_Usuarios";
			}
		});
	});
}