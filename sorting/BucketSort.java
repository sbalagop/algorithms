package sorting;

import java.util.Arrays;
/**
 *  Best: O (n + k)  Worst: O (n2)  -- in-place, stable
 * @author Sivakumar Balagopalan
 *
 */
public class BucketSort
{
    public static void bucketSort(int[]a, int max)
    {
    	int[] bucket = new int[max +1];
    	
    	for (int i=0; i<a.length ; i++)
    	{
    		bucket[a[i]]++;
    	}
    	
    	int k= 0;
    	for (int i=0; i< max; i++)
    	{
    		for (int j=0; j <bucket[i]; j++)
    		{
    			a[k++] = i;
    		}
    	}
    }
	/**
	 * @param args
	 */
	public static void main(String[] args)
	{
		int a[] = {9,4,1,7,6,8,5};
		bucketSort(a, 9);
		System.out.println(Arrays.toString(a));

	}

}
