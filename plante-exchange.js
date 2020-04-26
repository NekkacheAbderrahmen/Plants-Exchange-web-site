$(document).ready(function(){
    $(".sidenav").sidenav();
})

// const ul_list=$("#elements_list");
const ul_list =document.querySelector('#elements_list');
const create_offre_button =document.querySelector('#offre_creating');
const create_offre_card =document.querySelector('#create_offre_card');
const element_name_tag =document.querySelector('#element_name_tag');
const exchange_radio=document.querySelector('#exchange_radio');
const sale_radio =document.querySelector('#sale_radio');

function sale_diplay(doc){
    let tag_1 =document.createElement('li');
    let tag_2 =document.createElement('div');
    let tag_3 =document.createElement('div');
    let tag_5 =document.createElement('img');
    let tag_66 =document.createElement('div');
    let tag_6 =document.createElement('div');
    let tag_7 =document.createElement('p');
    let tag_8 =document.createElement('p');
    let tag_9 =document.createElement('p');
    let tag_10 =document.createElement('p');
    let tag_101 =document.createElement('p');
    let tag_11 =document.createElement('div');
    let tag_12 =document.createElement('a');

    ul_list.appendChild(tag_1);
    tag_1.appendChild(tag_2);
    tag_2.appendChild(tag_3);
    tag_3.appendChild(tag_5);
    tag_2.appendChild(tag_66);
    tag_66.appendChild(tag_6);
    tag_6.appendChild(tag_7);
    tag_6.appendChild(tag_8);
    tag_6.appendChild(tag_9);
    tag_6.appendChild(tag_10);
    tag_6.appendChild(tag_101);
    tag_66.appendChild(tag_11);
    tag_11.appendChild(tag_12);
    
    tag_1.setAttribute("class","collection-item");
    tag_2.setAttribute("class","card horizontal");
    tag_3.setAttribute("class","card-image");
    tag_5.setAttribute("src","imgs/6.jpg");
    tag_66.setAttribute("class","card-stacked");
    tag_6.setAttribute("class","card-content");
    tag_11.setAttribute("class","card-action");

    
    tag_11.setAttribute("data-id",doc.id) //set doc.id to this tag for the delete function
    tag_7.setAttribute("data-id",doc.id);
    tag_7.textContent="name : "+doc.data().name;
    tag_8.setAttribute("data-id",doc.id);
    tag_8.textContent="pays : "+doc.data().pays;
    tag_9.setAttribute("data-id",doc.id);
    tag_9.textContent="ville : "+doc.data().ville;
    tag_10.setAttribute("data-id",doc.id);
    tag_10.textContent="prix : "+doc.data().prix;
    tag_101.setAttribute("data-id",doc.id);
    tag_101.textContent="Tel : "+doc.data().tel;
    tag_12.textContent="Delete";

    tag_12.addEventListener("click",(event_obj_inf)=>{
        var data_id=event_obj_inf.target.parentElement.getAttribute("data-id");
        db.collection('sale').doc(data_id).delete();
    })


}

    
        db.collection('sale').get().then(snapshot => {
            console.log("get method start")
            snapshot.docs.forEach(doc => {
                sale_diplay(doc);
            });
        });


    if (create_offre_button){ 

        create_offre_button.addEventListener("click",(e)=>{
        console.log(create_offre_card);
        db.collection("sale").add({
            name: create_offre_card.element_name.value,
            pays: create_offre_card.contry_name.value,
            ville: create_offre_card.town_name.value,
            prix: create_offre_card.price.value,
            tel: create_offre_card.tel.value,
        });
        create_offre_card.element_name.value = '';
        create_offre_card.contry_name.value='';
        create_offre_card.town_name.value="";
        create_offre_card.price.value="";
        create_offre_card.tel.value="";
        console.log("succes");
    });
    }





    db.collection('exchange').get().then(snapshot => {
        console.log("get methode of exchange collection start")
        snapshot.docs.forEach(doc => {
            sale_diplay(doc);
        });
    });
    
    
    
    // if (create_offre_button){ 
    
    //     create_offre_button.addEventListener("click",(e)=>{
    //     console.log(create_offre_card);
    //     db.collection("exchange").add({
    //         name: create_offre_card.element_name.value,
    //         pays: create_offre_card.contry_name.value,
    //         ville: create_offre_card.town_name.value,
    //         prix: create_offre_card.price.value,
    //         tel: create_offre_card.tel.value,
    //     });
    //     create_offre_card.element_name.value = '';
    //     create_offre_card.contry_name.value='';
    //     create_offre_card.town_name.value="";
    //     create_offre_card.price.value="";
    //     create_offre_card.tel.value="";
    //     console.log("succes");
    // });
    // }
    

