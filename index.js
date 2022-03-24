const empties = document.querySelectorAll(".empty");
const btn = document.getElementById("btn");

const obj = [
    {id:"1",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flower_11.jpg/1200px-Flower_11.jpg"},
    {id:"2",src:"https://vid.alarabiya.net/images/2015/05/11/5013bc9c-4722-4d1b-9344-084a795cbe6f/5013bc9c-4722-4d1b-9344-084a795cbe6f.jpg?crop=4:3&width=1200"},
    {id:"3",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/2560px-Flag_of_the_Netherlands.svg.png"}

].sort(() => Math.random() - 0.5)
console.log(obj)
const myArray = [];

obj.forEach(item => {
    newImg = document.createElement("img");
    newImg.src = item.src;
    newImg.id = item.id;
    myArray.push(item.id)
   
    newImg.classList.add("vol")
    newImg.style.width = "200px"
    newImg.draggable = "true"
    newDiv = document.createElement("div");
    newDiv.appendChild(newImg);
    document.body.appendChild(newDiv);
    
})
console.log(myArray)
const vol = document.querySelectorAll(".vol")

empties.forEach(div => {
div.addEventListener("dragover",function(e){
    e.preventDefault()
    console.log("over")
})


div.addEventListener("drop",function(e){
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
})
})
console.log(vol.length)
vol.forEach(item => {
    item.addEventListener("dragstart",function(e){
        console.log("start")
        e.dataTransfer.setData("text", e.target.id);
    })
})



btn.addEventListener("click",function(){
    
   for(let i = 0; i < obj.length; i++){
    
      console.log(myArray[i])
      console.log(empties[myArray[i] - 1])
      console.log(empties[i].hasChildNodes())
      if(empties[myArray[i] - 1].children.length > 0){
       
          if(empties[myArray[i] - 1].children[0].id == obj[i].id){
            let count = i;
        
            console.log(count)
            empties[myArray[i] - 1].style.backgroundColor = "green"
            if(count == 2)
            finish()
            
            
          } else {
            empties[myArray[i] - 1].style.backgroundColor = "red"
            var audio = new Audio('error.mp3');
            audio.play();
          }
      } else {
        empties[myArray[i] - 1].style.backgroundColor = "yellow"
        var audio = new Audio('error.mp3');
        audio.play();

      }

      function finish(){
        var audio = new Audio('correct.mp3');
        audio.play();
      }
    //    if(empties[i].hasChildNodes()){
    //       if(empties[i].children[0].id == obj[i].id){
    //           empties[i].style.backgroundColor = "green"
    //       } else {
    //         empties[i].style.backgroundColor = "red"
    //     }
    //    } else {
    //     empties[i].style.backgroundColor = "green"
    //    }
   }
})
// flagIq.addEventListener("dragstart",function(e){
//     e.dataTransfer.setData("text", e.target.id);
// })
