function customRender(reactElement, container){}
const reactElement ={
   type: 'a',
   props: {
    href:'http://google.com'
    target:'_blank
    ,
    children:'Click me to visit google '
   } 
}

const mainContainer=document.querySelector('#root')// root grab,and store at variable cld main cntnr

customRender(reactElement, mainContainer)
