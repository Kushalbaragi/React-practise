
var isPalindrome = function(x) {
    let num=x;
    let revNum=0;
    while(num){
    revNum=revNum*10+num%10;
     num=Math.floor(num/10);
    }

    if(revNum==x){
    return true;
    }
    else{
        return false;
    }
};

console.log(isPalindrome(112345));