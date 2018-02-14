//DECLARACIÓN DE OBJETOS Y VARIABLES
//http://www.whatsmyuseragent.com/WhatsAUserAgent
var agente = navigator.userAgent.toLowerCase();
var moviles = /iphone|ipod|ipad|android|blackberry|opera mini|iemobile|mobile/;
var navegador, plataforma;


//DECLARACIÓN DE FUNCIONES
function detectarDispositivo()
{
	//alert("funciona");
	//console.log(navigator);
	//document.write(agente);
	//document.write(agente.search(moviles));
	var aDondeVoy;

	if(agente.search(moviles)>-1)
	{
		//alert("Estas en un navegador Móvil");
		aDondeVoy = "activos/mobile.html";
	}
	else
	{
		//alert("Estas en un navegador Desktop");
		aDondeVoy = "activos/desktop.html";
	}

	window.location.href = aDondeVoy;
}

function detectarIE()
{
	var posicionIE, versionIE;
	posicionIE = agente.indexOf("msie");
	//alert(posicionIE);
	versionIE = agente.substring(posicionIE+5,posicionIE+8);
	//alert(versionIE);

	if(agente.indexOf("rv:11")>-1)
		navegador = "IE 11";
	else if(versionIE=="10.")
		navegador = "IE 10";
	else if(versionIE=="9.0")
		navegador = "IE 9";
	else if(versionIE=="8.0")
		navegador = "IE 8";
	else if(versionIE=="7.0")
		navegador = "IE 7";
	else if(versionIE=="6.0")
		navegador = "IE 6";
	else
		navegador = "Más viejo que IE 6";

	return navegador;
}

function detectarNavegador()
{
	if(agente.indexOf("chrome")>-1)
		navegador = "Chrome";
	else if(agente.indexOf("firefox")>-1)
		navegador = "Firefox";
	else if(agente.indexOf("opera")>-1)
		navegador = "Opera";
	else if(agente.indexOf("safari")>-1)
		navegador = "Safari";
	else if(agente.indexOf("msie")>-1 || agente.indexOf("rv:11")>-1)
		//navegador = agente;
		detectarIE();
	else
		navegador = "Navegador Desconocido";

	document.getElementById("navegador").innerHTML = navegador;
}

function detectarPlataforma()
{
	if(agente.indexOf("win")>-1)
	{
		plataforma = (agente.search(moviles)>-1)?"Windows Phone":"Windows NT";
	}
	else if(agente.indexOf("mac")>-1)
	{
		plataforma = (agente.search(moviles)>-1)?"iOS":"Mac OS";
	}
	else if(agente.indexOf("linux")>-1)
	{
		plataforma = (agente.search(moviles)>-1)?"Android":"Linux";
	}
	else if(agente.indexOf("blackberry")>-1)
	{
		plataforma = "BlackBerry";
	}
	else
	{
		plataforma = (agente.search(moviles)>-1)?"Plataforma Móvil Desconocida":"Plataforma de Escritorio Desconocida";	
	}

	document.getElementById("plataforma").innerHTML = plataforma;
}

function detectarUsuario()
{
	detectarPlataforma();
	detectarNavegador();
	document.getElementById("user-agent").innerHTML = agente;
}

//ASIGNACIÓN DE EVENTOS