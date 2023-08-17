//variaveis
let screenSize = window.innerWidth;
const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".menu-links");
const arrow = document.querySelector(".arrow");

// Hover para mostrar texto do serviços
const pages = document.querySelectorAll(".box-item");

if (screenSize >= 768) {
  pages.forEach((page) => {
    page.addEventListener("click", function () {
      if (page.classList.contains("selected")) {
        return;
      }

      selectedPage(page);
    });
  });

  function selectedPage(page) {
    const pageSelected = document.querySelector(".box-item.selected");

    if (pageSelected) {
      pageSelected.classList.remove("selected");
    }

    page.classList.add("selected");

    return;
  }
}
// mascara no telefone
function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}
function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id("telefone").onkeyup = function () {
    mascara(this, mtel);
  };
};
// Menu responsivo

menuToggle.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
  alterColor();
});

menuLinks.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});

const alterColor = () => {
  if (menuLinks.classList.contains("show")) {
    menuToggle.style.color = "#E3AF11";
    arrow.style.transform = "rotate(0deg)";
  } else {
    menuToggle.style.color = "white";
    arrow.style.transform = "rotate(180deg)";
  }
};

if (screenSize < 768) {
  // Função para abrir o modal e exibir as informações da div
  function openModal(divId) {
    let id = divId;
    const modal = document.getElementById("myModal");
    const divContent = document.getElementById(id).innerHTML;

    document.getElementById("modalContent").innerHTML = divContent;
    modal.style.display = "block";
  }

  // Função para fechar o modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
}
document.cookie = "exemploCookie=meuValor; SameSite=None; Secure";
document.getElementById("accept-cookies").addEventListener("click", function() {
  // Cria um cookie temporário ao clicar em "Aceitar"
  var dataExpiracao = new Date();
  dataExpiracao.setDate(dataExpiracao.getDate() + 30); // Define a expiração para 30 dias no futuro
  document.cookie = "cookieAceito=true; expires=" + dataExpiracao.toUTCString();

  // Oculta a mensagem de permissão
  document.getElementById("cookie-banner").style.display = "none";
});
window.addEventListener("load", function() {
  if (document.cookie.indexOf("cookieAceito=true") !== -1) {
      document.getElementById("cookie-banner").style.display = "none";
  }
});
