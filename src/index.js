document.addEventListener("DOMContentLoaded", () => {
   const div = document.querySelector("#dog-bar");
   fetch(" http://localhost:3000/pups")
      .then((res) => res.json())
      .then((data) => handleDogData(data))
      .catch((error) => console.log(error.message));

   function handleDogData(data) {
      data.forEach((dogs) => {
         const span = document.createElement("span");
         span.textContent = dogs.name;
         span.style.cursor = "pointer";
         div.append(span);

         //  ClickEvent
         span.addEventListener("click", () => {
            const dogInfo = document.getElementById("dog-info");
            dogInfo.innerHTML = `
                        <img src=${dogs.image} />
                        <h2>${dogs.name}</h2>
                        <button>${dogs.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
                        `;
         });
      });
   }
});
