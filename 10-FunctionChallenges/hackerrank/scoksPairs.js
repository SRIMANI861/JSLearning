function sockMerchant(n, ar) {
    // Write your code here
    let count = 0;
        for(let num in ar){
            for(let num2 in ar){
                if(ar[num] === ar[num2]){
                    count++;
                    num2++;              
                }
                num++;  
                break;  
                   
            }
        }
    return count;
}

console.log(sockMerchant(9,[10,20,20,10,10,30,50,10,20]));