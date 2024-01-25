///<reference types ="../@types/jquery"/>


/* start sidebar*/
let width = $('.sidebar').outerWidth(); 
 

console.log(width)

$('.open-sidebar').on('click',function(){
    let offsetLeft = $('.sidebar').offset().left;
    if (offsetLeft < 0) {
        $('.sidebar').css('left', '0px');
        
        $('.open-sidebar').css('left', `${width}px`); 
    }else{
        $('.sidebar').css('left', `-${width}px`);
        
        $('.open-sidebar').css('left', `0px`); 
    }

})
$('.close-btn').on('click',function () {
    $('.sidebar').css('left', `-${width}px`);
        
    $('.open-sidebar').css('left', `0px`); 
    
})

/*start scroll navbar*/

$('.linkItem').on('click', function (e) {
    
    let anchers =e.target.getAttribute('href')
    
    let offsetTop = $(anchers).offset().top;
   
    
    $('body , html').animate({ scrollTop: offsetTop } , 2000);
    
})






/*start duration*/



$('.head-item').on('click',function () {
    

  $(this).next().slideToggle();

 $('.item div').not($('.head-item')).not($(this).next()).slideUp();;

  
})




/* start details*/

let countDown = new Date('dec 31,2024').getTime();

console.log(countDown)
let counters = setInterval(()=>{
let dateNow = new Date().getTime()

let diffDate = countDown - dateNow;

let Days = Math.floor(diffDate/(1000*60*60*24))
let hours = Math.floor(diffDate %(1000*60*60*24)/(1000*60*60));
let min =  Math.floor(diffDate %(1000*60*60)/(100*60));
let second =  Math.floor(diffDate %(1000*60)/1000);


$('.day').html(Days);
$('.hour').html(hours);
$('.min').html(min);
$('.second').html(second);
if(diffDate = 0){
    clearInterval()
}
},1000)
/*end details*/
/*start contact*/
let maxCount =100;
$('.limited-textarea').on('keydown',function (e) {
  if(maxCount == 0){
    e.preventDefault();
    return;
  }
    maxCount = maxCount -1; 

    $('.counter').html(maxCount);
 
})
/*end contact*/