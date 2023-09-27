export function sqrt(num:number):number{
    if(num < 0){
        throw new Error("Number is negative")
    }else{
        return Math.sqrt(num)
    }
}