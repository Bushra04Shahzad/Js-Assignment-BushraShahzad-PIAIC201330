function missingno(arr, N)
{
	let x = arr[0] - 0;
    console.log("Missing Numbers Are:");
	for(let i = 0; i < N; i++)
	{
		if (arr[i] - i !=x)
		{
			while (x < arr[i] - i)
			{
				console.log((i + x) + " ");
				x++;
			}
		}
	}
}
	// Given array arr[]
	let arr = [11, 15, 17, 18, 19];

	let N = arr.length;
	console.log("Length of an Array:" +N);
	missingno(arr, N);