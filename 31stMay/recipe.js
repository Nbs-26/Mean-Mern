const data=[
    {
        image:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
        title:"Chicken Biriyani",
        recipe:"The ingredients for chicken biryani include basmati rice, chicken pieces, onion, tomatoes, garlic, ginger, green chilies, plain yogurt, fresh coriander leaves, mint leaves, biryani masala powder, turmeric powder, red chili powder, cumin seeds, water, ghee or vegetable oil, and salt."
    },
    {
        image:"https://www.kuchpakrahahai.in/wp-content/uploads/2015/06/Palak-Paneer-Recipe.jpg",
        title:"Palak Paneer",
        recipe:"The ingredients for making Palak Paneer are spinach (palak), paneer (Indian cottage cheese), onions, tomatoes, ginger, garlic, green chilies, garam masala (Indian spice blend), cumin powder, turmeric powder, coriander powder, cream (optional), salt, and oil. The spinach is blanched and pureed, while paneer is lightly fried. The onions, tomatoes, ginger, and garlic are sautéed with spices, and then the pureed spinach and paneer are added, simmered, and garnished with cream (if desired)."
    },
    {
        image:"https://i.ytimg.com/vi/QGAG2o3w5fE/maxresdefault.jpg",
        title:"Chicken Do Pyaza",
        recipe:"The ingredients for making Chicken Do Pyaza are chicken, onions, tomatoes, ginger, garlic, green chilies, yogurt, red chili powder, turmeric powder, garam masala, cumin powder, coriander powder, salt, oil, and fresh coriander leaves. The chicken is marinated in a mixture of yogurt and spices. Onions are caramelized and sautéed with spices, then the marinated chicken and tomatoes are added and cooked until tender. Finally, the dish is garnished with fresh coriander leaves."
    },
    {
        image:"https://www.recipemasters.in/wp-content/uploads/2014/01/chilli-mushroom.jpg",
        title:"Mushroom Chilli",
        recipe:"The ingredients for making Mushroom Chilli are mushrooms, bell peppers, onions, garlic, ginger, green chilies, soy sauce, tomato ketchup, vinegar, cornstarch, salt, black pepper, sugar, and oil. Mushrooms and bell peppers are stir-fried with onions, garlic, ginger, and green chilies. A sauce is made using soy sauce, tomato ketchup, vinegar, cornstarch, salt, black pepper, and sugar. The sauce is then added to the stir-fried vegetables and cooked until thickened."
    },
    {
        image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg",
        title:"Kadai Paneer",
        recipe:"The ingredients for making Kadai Paneer are paneer (Indian cottage cheese), onions, tomatoes, bell peppers, ginger, garlic, green chilies, coriander seeds, cumin seeds, red chili powder, turmeric powder, garam masala, kasuri methi (dried fenugreek leaves), coriander leaves, oil, and salt. The paneer is sautéed and set aside. Onions, tomatoes, and bell peppers are cooked with spices, then the paneer is added back in and simmered. It is garnished with coriander leaves and kasuri methi."
    },
    {
        image:"https://i.ytimg.com/vi/pMCS1TR4Wyo/maxresdefault.jpg",
        title:"Chicken Chilli",
        recipe:"The ingredients for making Chicken Chilli are chicken (boneless), bell peppers (capsicum), onions, garlic, ginger, green chilies, soy sauce, vinegar, tomato ketchup, red chili sauce, cornstarch, salt, pepper, oil, and spring onions (for garnish). The chicken is marinated with soy sauce, vinegar, and cornstarch. Onions, bell peppers, garlic, ginger, and green chilies are sautéed, then the marinated chicken is added and cooked. Finally, tomato ketchup, red chili sauce, salt, and pepper are added to create the desired spicy and tangy flavor, and the dish is garnished with spring onions."
    }
];

const items=document.getElementById("show_recipe");

data.map((el)=>{
    const div=document.createElement("div");
    const image=document.createElement("img");
    const title=document.createElement("h3");
    const recipe=document.createElement("p");
    image.src=el.image;
    const button1=document.createElement("button");
    const button2=document.createElement("button");
    button1.innerText="Click to show ingredients";
    button2.innerText="Click not to show ingredients";
    button1.addEventListener("click",()=>{
        recipe.innerText=el.recipe;
    });
    button2.addEventListener("click",()=>{
        recipe.innerText="";
    });
    title.innerText=el.title;
    div.append(image,title,button1,button2,recipe);
    items.append(div);
});

// for(let i=0;i<data.length;i++){
// const div=document.createElement("div");
// const image=document.createElement("img");
// image.src=data[i].image;
// const movieTitle=document.createElement("h2");
// movieTitle.innerText=data[i].title;
// const rating=document.createElement("p");
// rating.innerText="Rating : "+data[i].rating;
// div.append(image,movieTitle,rating);
// movieBox.append(div);
// }
