let blogParaStarus = true;
let blogPara = document.getElementById("blogPara");
document.getElementById("blog").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("entering");

  //   blogParaStarus
  //     ? 'blogPara.style.height = "max-content";'
  //     : 'blogPara.style.height = "75px"';

  if (blogParaStarus) {
    blogPara.style.height = "max-content";
    document.getElementById("blog").innerHTML = "Read Less"
    blogParaStarus = false;
  } else {
    blogPara.style.height = "75px";
    document.getElementById("blog").innerHTML = "Read More"
    blogParaStarus = true;
  }
});
