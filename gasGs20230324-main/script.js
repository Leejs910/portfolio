// .tire-rotate{animation: tire-rotate .4s linear infinite ; }

// .carmovin{animation: carmovin 1s linear infinite; }
// @keyframes tire-rotate {
//     0%{transform: rotate(0);}
//     100%{transform: rotate(360deg);}
    
// }

// @keyframes carmovin {
//     0%{transform: translateY(0);}
//     50%{transform: translateY(-4%);}
//     100%{transform: translateY(0%);}
    
// }

// 타이어 움직임 
let tiremovin =[
    {transform: 'rotate(0)'},
    {transform: 'rotate(360deg)'}
]
let tiremovinTiming = {
    duration: 500,
    iterations: Infinity   
}

let tire = document.querySelectorAll('.tire')

let tireleft = tire[0].animate(
    tiremovin,
    tiremovinTiming
)
let tireright = tire[1].animate(
    tiremovin,
    tiremovinTiming
)

// 차  위 아래 움직임

let carmovin =[
    {transform: 'translateY(0)'},
    {transform: 'translateY(1%)', offset:0.4},
    {transform: 'translateY(0%)'}
]

let carmovinanime = document.querySelector('.carbody').animate(
    carmovin,
    {duration:1000,
    iterations: Infinity}
)

// 배경 움직임 

// let bgmovin = [
//     {backgroundPosition: '0% center' }, 
//     {backgroundPosition: '78% center'} 
//     ]

// document.querySelector('.bg').animate(
//     bgmovin,
//     {duration:1500,
//     iterations: Infinity}
// )

let bgmovin2 = document.querySelector('.bg').animate(
[{backgroundPosition: '0% center'},
{backgroundPosition: '78% center'}
],{
    duration:1500,
    iterations: Infinity
});
    

        

// 배경 움직임 2
                                    
let btnStart = document.querySelector('.btnview');

function carstop(){
    bgmovin2.pause();
    // 차가 멈추는 애니메이션 
    let bgmovin3 = document.querySelector('.bg').animate(
        [
        {backgroundPosition: '0% center'},
        {backgroundPosition: '100% center'}
        ],
        { duration:650,
            easing: "ease-in-out",
            iterations: Infinity
        }
        );
    
        setTimeout(() => bgmovin3.pause(), 500);
        // setTimeout(() => carmovinanime.pause(), 500);
        setTimeout(() => tireleft.pause(), 500);
        setTimeout(() => tireright.pause(), 500);
        // 내용 사라지는 애니메이션 
        let eraseContent = document.querySelector('.section').animate(
            [
                { opacity: 1},
                { opacity: 0}
            ],
            {   
                
                delay:500, 
                duration:1000,
                easing: 'ease-out'
            }
            )
            setTimeout(() => eraseContent.play(), 500);
            // 애니메이션 완성 그리고 페이지이동 
            eraseContent.finished.then(function() {
            // 
             let section = document.querySelector('.section');
             section.style.display = 'none'
             let link = 'index2.html';
             location.href= link;
             location.replace(link);
            });
}

btnStart.addEventListener("mousedown", carstop, {once:true});
btnStart.addEventListener("touchstart", carstop,{ once:true});




