document.addEventListener("keyup", e=>{
    if (e.target.matches("#search")){
        document.querySelectorAll(".filtro_card" ).forEach(busca=>{
            busca.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?busca.classList.remove("filtro")
            :busca.classList.add("filtro") 
        })
    }
})