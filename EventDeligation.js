// If We want to  solve Event Propogition problem we are apply Event Propogation
let container = document.getElementsByClassName("container")[0]
container.addEventListener('click',(event)=>{
    if(event.target.id === 'child'){
        console.log("Child ")    //Now it's console only Child not apply bubbling propogition and capturing propogition
    }
    else if(event.target.id === 'parent'){
        console.log("parent") //Now it's console only Child not apply bubbling propogition and capturing propogition
    }
    else if(event.target.id === 'container'){
        console.log("container")  //Now it's console only Child not apply bubbling propogition and capturing propogition
    }
})