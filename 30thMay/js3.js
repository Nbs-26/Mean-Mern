const button1=document.getElementById("clickable1");
const button2=document.getElementById("clickable2");

const table=document.querySelector("tbody");

button1.addEventListener("click",()=>{
  const tr=document.createElement("tr");
  const td1=document.createElement("td");
  td1.innerText="1";
  const td2=document.createElement("td");
  td2.innerText="Sai";
  const td3=document.createElement("td");
  td3.innerText="Male";
  tr.append(td1,td2,td3);
  table.append(tr);
});

button2.addEventListener("click",()=>{
    window.location.reload();
});

const button3=document.getElementById("clickable3");
const button4=document.getElementById("clickable4");
const textarea1=document.getElementById("tarea");
button3.addEventListener("click",()=>{
    textarea1.innerText="This is my textarea";
});
button4.addEventListener("click",()=>{
    textarea1.innerText="";
});
const button5=document.getElementById("clickable5");
button5.addEventListener("click",()=>{
    const div=document.getElementById("showable");
    const image=document.createElement(img);
    doc.src="https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000"
    div.append(image);

});