var containsDuplicate = function(nums) {
    let unique = new Set();

    for (let num of nums) {
        if (unique.has(num)) {
            return true;
        }

        unique.add(num);
    }

    return false;
};


var moveZeroes = function(nums) {
    let index = 0;

    for (let num of nums) {
        if (num !== 0) {
            nums[index] = num;
            index++;
        }
    }

    while (index < nums.length) {
        nums[index] = 0;
        index++;
    }
};

var isAnagram = function(s, t) {
    let first = s.split("").sort().join("");
    let second = t.split("").sort().join("");

    return first === second;
};

var canConstruct = function(ransomNote, magazine) {
    let count = {};

    for (let char of magazine) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (!count[char]) {
            return false;
        }

        count[char]--;
    }

    return true;
};

var majorityElement = function(nums) {
    let count = {};

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;

        if (count[num] > nums.length / 2) {
            return num;
        }
    }
};

var threeSum = function(nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let map = { 0: 1 };

    for (let num of nums) {
        sum += num;

        if (map[sum - k]) {
            count += map[sum - k];
        }

        map[sum] = (map[sum] || 0) + 1;
    }

    return count;
};

var topKFrequent = function(nums, k) {
    let count = {};

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    let numbers = Object.keys(count);

    numbers.sort((a, b) => count[b] - count[a]);

    return numbers.slice(0, k).map(Number);
};

var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            if (length > longest) {
                longest = length;
            }
        }
    }

    return longest;
};

var sortColors = function(nums) {
    let left = 0;
    let i = 0;
    let right = nums.length - 1;

    while (i <= right) {
        if (nums[i] === 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
            i++;
        } else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            i++;
        }
    }
};