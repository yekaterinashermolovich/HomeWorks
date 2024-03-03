let getResponse = await fetch('http://localhost:8000');

console.log(getResponse);

let nums = await getResponse.json();

console.log(nums);

const postResponse= await fetch('http://localhost:8000', {
    method: 'POST',
    body: JSON.stringify({
        data: nums.at(-1) + 1

    })
        

    }
   
)


console.log(postResponse);

const ans = await postResponse.json();

console.log(ans);

getResponse = await fetch('http://localhost:8000');

console.log(getResponse);

nums = await getResponse.json();

console.log(nums);