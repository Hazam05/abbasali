
    const navEL =document.querySelector(".navbar")
        window.addEventListener('scroll', () => {
            if(window.scrollY <= 70 && window.innerWidth>960){
               navEL.classList.add('navbar-scrolled');
            }else if(window.scrollY > 70){
                navEL.classList.remove('navbar-scrolled');
            }

           

        });

