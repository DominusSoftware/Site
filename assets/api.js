const url = "http://192.168.0.113:3030/api";

function validarFormulario() {
  let nome = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("message").value;

  // Expressão regular para verificar o formato do email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica se o campo nome está vazio
  if (nome.trim() === "") {
    alert("Por favor, preencha o campo nome.");
    return false;
  }

  // Verifica se o campo email está vazio ou não segue o formato válido
  if (email.trim() === "" || !emailRegex.test(email)) {
    alert("Por favor, preencha um email válido.");
    return false;
  }

  // Verifica se o campo mensagem está vazio
  if (mensagem.trim() === "") {
    alert("Por favor, preencha o campo mensagem.");
    return false;
  }

  // Se todos os campos forem válidos, o formulário é enviado
  alert("Formulário enviado com sucesso!");
  return true;
}

const sendMailContact = (event) => {
  event.preventDefault();
  // Valida o formulário
  if (!validarFormulario()) {
    return;
  }

  // Obtém os valores dos campos
  let nome = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("message").value;

  // Cria a URL com os parâmetros
  let urlComParametros = `${url}/sendMailContact?name=${nome}&email=${email}&text=${mensagem}`;
  console.log(urlComParametros);
  // Envia a requisição para a API
  fetch(urlComParametros, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

function validarTrabalheConosco() {
  let nome = document.getElementById("Nome").value;
  let email = document.getElementById("email-job").value;
  let telefone = document.getElementById("telefone").value;
  let cargo = document.getElementById("cargo").value;
  let pdf = document.getElementById("pdf").value;

  // Expressão regular para verificar o formato do email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica se o campo nome está vazio
  if (nome.trim() === "") {
    alert("Por favor, preencha o campo nome.");
    return false;
  }

  // Verifica se o campo email está vazio ou não segue o formato válido
  if (email.trim() === "" || !emailRegex.test(email)) {
    alert("Por favor, preencha um email válido de cima.");
    return false;
  }
  // Verifica se o campo telefone está vazio
  if (telefone.trim() === "") {
    alert("Por favor, preencha o campo telefone.");
    return false;
  }
  // Verifica se o campo cargo está vazio
  if (cargo.trim() === "") {
    alert("Por favor, preencha o campo cargo.");
    return false;
  }
  // Verifica se foi enviado arquivo
  if (pdf.trim() === "") {
    alert("Por favor, envie seu curriculo.");
    return false;
  }
  // Se todos os campos forem válidos, o formulário é enviado
  alert("Formulário enviado com sucesso!");
  return true;
}

const sendMailTrabalhe = (event) => {
  event.preventDefault();

  // Valida o formulário
  if (!validarTrabalheConosco()) {
    return;
  }

  // Obtém os valores dos campos
  let nome = document.getElementById("Nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  let cargo = document.getElementById("cargo").value;
  let pdf = document.getElementById("pdf").value;
  let git = document.getElementById("git").value;
  let linkedin = document.getElementById("linkedin").value;
  let mensagem = document.getElementById("mensagem").value;

  const formData = new FormData();
  formData.append("pdfPath", pdf); // Envia o caminho do arquivo

  let diretorio = pdf.substring(pdf.lastIndexOf("\\") + 1);

  // Cria a URL com os parâmetros
  let urlComParametros = `${url}/sendMailWork?name=${nome}&email=${email}&text=${mensagem}&fone=${telefone}&job=${cargo}&github=${git}&linkedin=${linkedin}&file=https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/570d75cb82bee1142b009684qr-597-gdes-carros-pontiac-02-1.jpeg?resize=1536,1008`;

  // Envia a requisição para a API
  fetch(urlComParametros, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};
