function AtualizarValor(value) {
                document.getElementById("CaractereValor").textContent = value;
            }

            function GerarSenha() {
                var letras = "abcdefghijklmnopq";
                var numeros = "1234567890";
                var caracteresEspeciais = "!@#$%¨&*()_+=-{}[]/?;:.><,";
                var incluirLetras = document.getElementById("IncluirLetras").checked;
                var incluirNumeros = document.getElementById("incluirNumeros").checked;
                var incluirCaractereEspecial = document.getElementById("IncluirCS").checked;
                var comprimento = parseInt(document.getElementById("caracteres").value);
                var senha = "";
                var caracteresPermitidos = "";

                if (incluirLetras) {
                    caracteresPermitidos += letras;
                }
                if (incluirNumeros) {
                    caracteresPermitidos += numeros;
                }
                if (incluirCaractereEspecial) {
                     caracteresPermitidos += caracteresEspeciais;
                }

                for (var i = 0; i < comprimento; i++) {
                    var Aleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
                    senha += caracteresPermitidos.charAt(Aleatorio);
                }

                document.getElementById("texto").value = senha;
            }