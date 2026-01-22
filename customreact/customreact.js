function customRender(reactElement, container)// (what, where)
{
   const domElememnt = document.createElement//creating dom  element inject
   (reactElement) // thrw react elmnt
 domElememnt.innerHTML =mreactElement.children  // injct inner elemnt
 domElememnt.setAttribute('href,reactElement.props.href')
 domElememnt.setAttribute('target, reactElement.props.target')
 
 container. appendChild(domElement)
}

const reactElement ={
   type: 'a',
   props: {
    href:'http://google.com',
    target:'_blank'
    ,
    children:'Click me to visit google '
   } 
}

const mainContainer=document.querySelector('#root')// root grab,and store at variable cld main cntnr

customRender(reactElement, mainContainer)// (what to enject , whr 2 injct)
