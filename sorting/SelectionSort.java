package sorting;

import java.util.Arrays;

/**
 * Best: O (n2) Worst: O (n2) -- in-place, not stable
 * @author Sivakumar Balagopalan
 *
 */
public class SelectionSort
{
    public static void selectionSort(int[] a)
    {
    	for( int i = 0; i < a.length; i++)
    	{
    		int smallest = i;
    		for (int j=i + 1 ; j < a.length; j++)
    		{
    			if (a[j] < a[smallest])
    			{
    				smallest = j; 
    			}
    		}
       		// move the smallest element to the beginning
    		if ( smallest != i)
    		{
    		  swap(a, i, smallest);
    		}
 
    	}
    }
    private static void swap(int a[], int i, int j)
    {

		int tmp = a[i];
		a[i] =  a[j];
		a[j] = tmp;
    }

	public static void main(String[] args)
	{
		int[] a = { 19,1,5, 8, 21, 6, 99, 4, 2};
		selectionSort(a);
		System.out.println(Arrays.toString(a));

	}

}
