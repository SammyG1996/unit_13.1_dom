//1

$('document').ready(()=> {
  console.log('Let’s get ready to party with jQuery!')
})

//2

$('img').addClass('image-center');

//3

$('p').last().remove();

//4

$('h1').css('font-size', ()=> {
  return `${Math.floor(Math.random() * 101)}px`;
})

//5

$('<li>Hello World</li>').appendTo($('ol'));

//6 

$('ol').remove()
$('aside').append('<p>I am so sorry for the list that was here. That was a terrible idea.</p>')

//7

$('input').on('click',  ()=>{
  const color = `rgb(${$('input').eq(0).val()}, ${$('input').eq(1).val()}, ${$('input').eq(2).val()})`
  $('body').css('background-color', color)
}) 

//8 

$('img').on('click', () => {
  $('img').remove()
})


