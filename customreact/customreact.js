function customRender(reactElement, container)// (what, where)
{
//    const domElememnt = document.createElement(reactElement.type) // thrw react elmnt
//  domElememnt.innerHTML =reactElement.children  // injct in ner elemnt
//  domElememnt.setAttribute('href',reactElement.props.href)
//  domElememnt.setAttribute('target',reactElement.props.target)

//  container.appendChild(domElememnt)
const domElememnt=document.createElement(reactElement.type)
domElememnt.innerHTML=reactElement.children
for(const prop in reactElement.props){
   if (prop==children)continue;
   domElememnt.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(domElememnt)
}



const reactElement ={            //create elemnt
   type: 'a',// type of element ie div or h or a
   props: {                   // props is an object to add prprty
    href:'http://google.com', // prpty 1
    target:'_blank'              // prprty2
   },
    children:'Click me to visit google '
   
}

const mainContainer=document.querySelector('#root')// root grab,and store at variable cld main cntnr

customRender(reactElement, mainContainer)// (what to enject , whr 2 injct) will render
