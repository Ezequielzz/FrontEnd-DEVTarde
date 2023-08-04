function cadastrar() {
    let nome = document.getElementById("lnome").value;
    let senha = document.getElementById("lsenha").value;
    let email = document.getElementById("lemail").value;
  
    if (nome == "" || senha == "" || email == "") {
      alert("Por favor, preencha todos os campos.");
      return false;
  
    } else {
      alert("Cadastro realizado!");
      window.location.href = "login.html";
    }
  
    // Armazenar no localStorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("senha", senha);
  
    document.getElementById("lnome").value = "";
    document.getElementById("lsenha").value = "";
  }
  
  function login() {
    let nome = document.getElementById("lnome").value;
    let senha = document.getElementById("lsenha").value;
  
    // Verificação de dados
    let storedNome = localStorage.getItem("nome");
    let storedSenha = localStorage.getItem("senha");
  
    if (nome === storedNome && senha === storedSenha) {
      alert("Login realizado!");
      window.location.href = "index.html";
  
    } else {
      alert("Nome de usuário ou senha incorretos!");
      return;
    }
  
    document.getElementById("lnome").value = "";
    document.getElementById("lsenha").value = "";
  }