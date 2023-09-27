import {isPalindrome} from "./code2"
import {upSort} from "./code3"
import { expect,test } from "vitest"
import { sqrt } from "./code4"
import { sumArray } from "./code5"
import { fetchUserData } from "./code6"

// test("checking palindrome",() => {
//     expect(isPalindrome("asa")).toBe(true)
// });

// let a1 = [1,5,3,2,4]
// test("sort numbers",() => {
//     expect(upSort(a1)).toBe([1,2,3,4,5])
// });

// let num = 4;
// test("sqrt number",() => {
//     expect(sqrt(num)).toBe(2)
// });

// test("checking sum of array",() => {
//     const arr2 = [1,2,3,4];
//     expect(sumArray(arr2)).toBe(10)
// })
// test("checking sum of array bigger than",() => {
//     const arr2 = [1,2,3,4];
//     expect(sumArray(arr2) > 9).toBe(true)
// });

test("Fetch checking",
    fetchUserData
);