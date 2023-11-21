function ok(){
    alert("thank you  MR $("men.username input") and Mrs $("women.username input)"for your reservation I will check that this date is not reserved and I will send you an email or call you")
}

$(document).ready(function(){
var pictures = ["https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/302095634_588785312697034_6678320359643207250_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JPa5L9593jUAX_hipwV&_nc_ht=scontent.ftun4-2.fna&oh=00_AfAT9AdvIAJk52BqIHodzqSnzUHPkqSF-OKSEU2CwVwx_g&oe=655FF3FA",
"https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/288425811_5183825798329698_4438042680245423816_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NMt3MQLlit8AX_50Gvm&_nc_ht=scontent.ftun4-2.fna&oh=00_AfDL-WZmiJiWSisbDkgGwi7X9tmvM_XEVdu9e5yrATyKXg&oe=65606727"]
var picIndex =0 
$("#next").on("click",function(){
    $("#i").attr("src",pictures[picIndex])
   picIndex=(picIndex+1)%pictures.length
})
})
