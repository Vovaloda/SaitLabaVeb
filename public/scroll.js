function Laba11Arg()
    {
        document.getElementById('Laba11o').innerHTML = 'Вы ввели: ' + document.getElementById("Laba11q").value;
    } 

function Laba12Arg()
    {

        let num1 = ( document.getElementById("Laba121q").value );
        let num2 = ( document.getElementById("Laba122q").value );

        let sum = !isNaN(Number(num1)) && !isNaN(Number(num2)) ?  Number(num1) + Number(num2) : num1 + num2;

        document.getElementById('Laba12o').innerHTML = ('Сумма введённых аргументов: ' + sum);
    } 

    function Laba13Arg()
    {

        let str = ( document.getElementById("Laba13q").value );
        let arr = str.split(' ');
        
        var quadrats = arr.map(function(arg) {
            if(!isNaN(Number(arg)))
                return Math.pow(Number(arg),2);
            return 0;
          });

        document.getElementById('Laba13o').innerHTML = ('Массив квадратов аргументов: ' + quadrats);
    } 

    function Laba2startBtn(){
        const anchors = document.querySelectorAll('a[href*="#"]');

        for (let anchor of anchors){
            anchor.addEventListener("click", function(event){
                event.preventDefault();
                const blockId = anchor.getAttribute('href')
                document.querySelector('' + blockId).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            })
        }
    }

    function Modal(){
        var modal = document.getElementById("myModal");

        var btn = document.getElementById("myBtn");

        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";
        

        span.onclick = function() {
        modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    function Zaba(){
        document.getElementById("Zabaa").src ="/static/Zaba.gif"
    }

    function Light(){
        let el = document.getElementById("lght")
        el.classList.remove("bg-secondary");
        el.style.backgroundColor = '#20252a';
    }