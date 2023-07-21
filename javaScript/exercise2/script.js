let user = prompt("enter the letter s,w,g");
let cpui= Math.floor(Math.random()*3);
let cpu = ['s','w','g'][cpui];

const result =(cpu,user)=>{
if(cpu == user)return ' nobuddy';
else if(cpu == 's' && user == 'w')return 'cpu';
else if(cpu == 's' && user == 'g')return 'user';
else if(cpu == 'w' && user == 's')return 'user';
else if(cpu == 'w' && user == 'g')return 'cpu';
else if(cpu == 'g' && user == 'w')return 'user';
else if(cpu == 'g' && user == 's')return 'cpu';

}
let ans = result(cpu,user);
document.write(`cpu: ${cpu} <br> user: ${user} <br> the winner is ${ans.toUpperCase()}`);