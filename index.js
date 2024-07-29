// By default it's apply Event bubbling(Inner prapogation to outer) if we can set true then it's apply capturing(Outer to inner)

let container = document.getElementsByClassName("container")[0]
container.addEventListener('click',()=>{
    console.log("container")
})

let parent = document.getElementsByClassName("parent")[0]
parent.addEventListener('click',()=>{
    console.log("parent")
})


let child = document.getElementsByClassName("child")[0]
child.addEventListener('click',()=>{
    console.log("child")
})