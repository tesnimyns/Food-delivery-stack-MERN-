import burger from'./burger.jpg'
import brawnis from  './brawnis.jpg'
import  crepesale from './crepe sale.jpg'
import crepesucre from './crepe sucre.jpg'
import donuts from './donuts.jpg'
import fàb5c10a7da9d3 from './f0b5c10a7da9d3a78c30d974a7620880.jpg'
import gateauchoc from'./gateau choc.jpg'
import hotdog from './hot dog.jpg'
import lasagne from './lasagne.jpg'
import logo from './logo.png'
import pasta_salad from './pasta salad.jpg'
import pasta2 from './pasta2.jpg'
import pasta3 from './pasta3.jpg'
import pizza from './pizza.jpg'
import qiche from './qiche.jpg'
import riz from './riz.jpg'
import riz2 from './riz2.jpg'
import tartefruits from './tarte au fruits.jpg'
import tartecaramel from './tarte caramel.jpg'
import tiramissau from './tiramissau.jpg'
import back2 from './back2.jpg'
import background from './background.jpg'
import appstore from './appstore.png'
import playstore from './playstore.png'
import toast from './toast.jpg'
import tacos from './tacos.jpg'
import veg_salad from './veg salad.jpg'
import salad_nicoise from './salad nioise.jpg'
import riz_salad from './riz salad.jpg'
import greek_salad from './greek salad.jpg'
import noddels from './noddels.jpg'
import seaFoodpasta from './sea fruits pasta.jpg'
import sandwich from './sandwich.jpg'
import croissant from './croissant sale.jpg'
import plat from './plat.png'
import delivery from './delivery.png'
import tasty from './tasty.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png' 
import parcel_icon from './parcel_icon.png'



const assets ={
    burger ,
    brawnis ,
    crepesale, 
    crepesucre, 
    donuts ,
    gateauchoc ,
    hotdog  ,
    lasagne ,
    logo ,
    pasta_salad ,
    pasta2 ,
    pasta3 ,
    pizza ,
    qiche ,
    riz ,
    riz2 ,
    tartefruits ,
    tartecaramel,
    tiramissau,
    back2,
    background,
    fàb5c10a7da9d3,
    appstore,
    playstore,
    toast ,
    tacos , 
    veg_salad ,
    salad_nicoise,
    riz_salad ,
    greek_salad,
    plat,
    tasty,
    delivery,
    profile_icon,
    bag_icon,
    logout_icon,
    parcel_icon
};
export default assets;





export const menu_list =[
    {
        menu_name:"salad",
        menu_image:salad_nicoise
    },
    {
        menu_name:"Sandwich",
        menu_image:hotdog
    },
    {
        menu_name:"Pasta",
        menu_image:pasta2
    },
    {
        menu_name:"Cake",
        menu_image:brawnis
    },
    
    {
        menu_name:"Pizza",
        menu_image:pizza
    },
    {
        menu_name:"Deserts",
        menu_image:crepesucre
    },
    {
        menu_name:"Rolls",
        menu_image:tacos
    },
]




export const food_list = [
    {

        _id : "1",
        name : "Greek salad",
        image : greek_salad,
        price:12,
        description : "   contains Tomatoes,Cucumbers,Red Onions ,Green Bell Peppers , Olives , Feta Cheese .",
        category : "salad",
    },
    {

        _id : "2",
        name : "Vegetarian Salad",
        image : veg_salad,
        price:18,
        description : "A Vegetarian Salad contains lettuce, tomatoes, cucumbers, carrots, red bell peppers, red onions, avocado, chickpeas, and sunflower seeds. ",
        category : "salad",
    },
    {

        _id : "3",
        name : "Rice Salad",
        image : riz_salad,
        price:20,
        description : "A Rice Salad contains cooked rice, cherry tomatoes, cucumbers, bell peppers, red onions, sweet corn, black beans, and chopped parsley.",
        category : "salad",
    },
    {

        _id : "4",
        name : "Pasta Salad",
        image : pasta_salad,
        price:19,
        description : "A Pasta Salad contains cooked pasta, cherry tomatoes, cucumbers, bell peppers, red onions, black olives, and mozzarella cheese. ",
        category : "salad",
    },
    {

        _id : "5",
        name : "Niçoise Salad",
        image : salad_nicoise,
        price:18,
        description : "A Niçoise Salad contains lettuce, cherry tomatoes, green beans, boiled potatoes, hard-boiled eggs, tuna, olives, and anchovies.",
        category : "salad",
    },
    {

        _id : "6",
        name : "lasagne",
        image : lasagne,
        price:27,
        description :"Lasagna, consists of layers  alternating with various ingredients such as tomato sauce, meat, ricotta cheese, mozzarella cheese, and Parmesan cheese. " ,
        category : "Pasta",
    },    
    {

        _id : "7",
        name : "Pesto Pasta ",
        image : pasta3,
        price: 35,
        description :"The pesto sauce is made with fresh basil leaves, pine nuts, garlic, Parmesan cheese, and olive oil, blended to a smooth consistency. " ,
        category : "Pasta",
    },    
    {

        _id : "8",
        name : "Pasta Alfredo",
        image :pasta2 ,
        price: 23,
        description : "the Pasta is coated in a rich Alfredo sauce. The sauce itself is made from butter, heavy cream, and Parmesan cheese.",
        category : "Pasta",
    },
    {

        _id : "9",
        name : "SeaFood Pasta",
        image : seaFoodpasta,
        price:12,
        description :"The seafood is  sautéed with garlic, olive oil. Cherry tomatoes, bell peppers, and spinach, and finished with a sprinkle of Parmesan cheese." ,
        category : "Pasta",
    },
    {

        _id : "10",
        name : "Noodles",
        image : noddels,
        price:27,
        description : " Typically made from unleavened dough that is stretched, rolled flat, and cut into long strips or strands.",
        category : "Pasta",
    },
    {

        _id : "11",
        name : "Tacos",
        image :tacos ,
        price:14,
        description : "  The filling options are diverse . For meat lovers, tacos can be filled with  beef, grilled chicken, or marinated seafood like shrimp or fish. ",
        category : "Rolls",
    },
    {

        _id : "12",
        name : "Sandwich ",
        image : sandwich,
        price:17,
        description :"protein  turkey or tofu, accompanied by cheese, fresh vegetables like lettuce and tomatoes, and condiments like mayo or mustard. " ,
        category : "Sandwich",
    },
    {
        _id : "13",
        name : "Hot dog",
        image : hotdog,
        price:25,
        description :"The sausage can be made from various meats, including beef, chicken, and may be seasoned with spices like garlic or paprika." ,
        category : "Sandwich",
    },
    {
        _id : "14",
        name : "Toast",
        image :toast ,
        price:9,
        description :" The bread is spread with butter and sprinkled with sea salt . additional herbs parsley or thyme is added for extra aroma and taste.",
        category : "Sandwich",
    },
    {
        _id : "15",
        name : "Burger",
        image : burger,
        price:25,
        description :"A burger consists of a grilled or fried patty made from ground beef, seasoned with salt and pepper for flavor. ",
        category : "Sandwich",
    },
    {
        _id : "16",
        name : "Sweet crepe",
        image : crepesucre,
        price:25,
        description :"It can be filled with options such as Nutella, fresh fruits like strawberries, bananas, or blueberries, and topped with whipped cream ",
        category : "Deserts",
    },
    {
        _id : "17",
        name : "Donuts",
        image :donuts ,
        price:4,
        description :"With a crisp exterior that gives way to a soft, airy each bite offers a burst of sugary satisfaction. ",
        category : "Deserts",
    },
    {
        _id : "18",
        name : "Choclate Cake",
        image : gateauchoc,
        price:5,
        description :"",
        category : "Deserts",
    },
    
]
