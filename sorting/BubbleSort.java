package sorting;

import java.util.Arrays;

/**
 * Best: O (n2) Worst: O (n2) -- in-place, stable
 * @author Sivakumar Balagopalan
 *
 */
public class BubbleSort {

	public static void bubblesort(int[] a)
	{
       int n = a.length;
       
		for (int i = 0; i< n; i++)
       {
    	   for (int j = 0; j < n - 1 - i ; j++)
    	   {
    		   if (a[j] > a[j+1])
    		   {
    			   int tmp = a[j];
    			   a[j] = a [j+1];
    			   a[j+1] = tmp;
    		   }
    	   }
       }
	}

	public static void main(String[] args)
	{
		int a[] = { 10, 56, 99,7,2,77,88,0,12,9};
		bubblesort(a);
		System.out.println(Arrays.toString(a));
	}
}
