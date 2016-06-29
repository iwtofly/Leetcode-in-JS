/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //     方法一：
    // var length=nums.length,
    //     i,
    //     result=[],
    //     neededValue,
    //     map={};
    // for(i=0;i<length;i++){
    //     neededValue=target-nums[i];
    //     if(neededValue in map){
    //         result.push(map[neededValue]);
    //         result.push(i);
    //         break;
    //     }
    //     else{
    //         map[nums[i]]=i;
    //     }
        
    // }
    // return result;
    //    方法二：
    var hash = {};
    
    for(var i = 0; i < nums.length; i++){
        hash[nums[i]] = i;
    }
    
    for(i = 0; i < nums.length; i++){
        var num = nums[i];
        var diff = target - num;
        if(hash[diff] !== undefined && hash[diff] !== i){
            if(hash[diff] > i){
                return [i, hash[diff]];
            } else {
                return [hash[diff], i]
            }
        }
    }
    
    return [];
};