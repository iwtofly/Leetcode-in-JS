/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var threeSum = function(nums) {
    var i,
        result=[];
    
    if(result.length<3){
        return result;
    }
    
    nums.sort(function(a, b){return a>b?1:-1;});
    
    for(i=0; i<nums.length-2; i++){
        if(i===0 || nums[i]>nums[i-1]){
            target = 0-nums[i];
            var j=i-1,
                k=nums.length-1;
                while(j<k){
                    if(nums[j]+nums[k]==target){
                        result.push([nums[i],nums[j],nums[k]]);
                        j++;
                        k--;
                        while(j < k && nums[j] === nums[j-1]){j++;}
                        while(j < k && nums[k] === nums[k+1]){k--;}
                    }else if(nums[j]+nums[k]<target){
                        j++;
                    }else{
                        k--;
                    }
                    
                }
            
        }
    }
    
    return result;
};
