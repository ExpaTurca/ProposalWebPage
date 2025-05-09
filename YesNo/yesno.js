        const noButton = document.getElementById("noButton");        
        let text = noButton.innerHTML;
        let deniedCount = 0;

        //noButton.addEventListener("mouseover", moveButton);
        //noButton.addEventListener("touchstart", moveButton); // Mobil için
        
        

        function moveButton() {  
            deniedCount++;
            if(deniedCount==2){
               text = "Hayır, müsait değilim.";
            }else if(deniedCount==3){
                   text = "Hayır, başkasına sözüm var.";
            }else if(deniedCount == 5){
                text = "İstemiyorum, uzatma.";
            }else if(deniedCount==10){
                noButton.setAttribute("disabled",'');
                text = "Tamam pes ediyorum. Sen kazandın. 🏳";
                alert("Artık bu 'Evet' sayılır! 💍");
                showHearts();
            }

            noButton.innerHTML = `🙈 ${text} + ${deniedCount}`;
        }

        function showHearts() {
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement("div");
                heart.classList.add("heart");
                heart.style.left = Math.random() * window.innerWidth + "px";
                heart.style.top = Math.random() * window.innerHeight + "px";
                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 1500);
            }

            setTimeout(() => {
                gizli.setAttribute("value",`${deniedCount} kez reddetti.`);
                teklif.submit();
            }, 2000);
        }