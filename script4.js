/* Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, 
а безделушка – 112 г. Напишите программу,запрашивающую у пользователя количество тех и других покупок,
 после чего выведите на экран общий вес посылки.*/

 let gramSouvenirs=75;
 let gramTrinkets=112;

 let countSouvenirs= Number (prompt("How many souvenirs were sold?"));
 let countTrinkets= Number (prompt("How many trinkets were sold?"));

 let totalWeight = countSouvenirs * gramSouvenirs + countTrinkets * gramTrinkets;
 console.log("The total weight is - ${totalWeight} gram!")


