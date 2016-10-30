package sorting;

import java.util.Arrays;

/**
 * Best: O ( n log n)  Worst: O (n log n)  -- not-in place, stable
 * @author Sivakumar Balagopalan
 *
 */
public class MergeSort
{
    // O( n log n) 
	public static void mergeSort(int a[], int p, int r)
	{
		if (p < r)
		{
			int q = (p + r) / 2;
			// O (log n)
			mergeSort(a, p, q);
			mergeSort(a,q+1,r);
			merge(a,p,q,r);
		}
	}
	
	public static void merge(int a[], int p, int q, int r)
	{
		
		int n1 = q - p + 1;
		int n2 = r - q;
		
		int[] left = new int[n1];
		int[] right = new int[n2];
		
		// O (n)
		for ( int i = 0; i< n1; i++)
		{
			left[i] = a[p + i ];
		}
		for ( int i = 0; i< n2; i++)
		{
			right[i] = a[q + i +1  ];
		}
		
		int i = 0;
		int j = 0;
		int k = p;
		while (i < n1 && j < n2)
		{
			if (left[i] < right[j])
			{
			  a[k] = left[i];
			  i++;
			}
			else
			{
			  a[k] = right[j];
			  j++;
			}
			k++;
		}
		
		while ( i < n1)
		{
			  a[k] = left[i];
			  i++;
			  k++;
		}
     }
	

	
	public static void main(String[] args)
	{
		int[] a = {6, 1, 3, 7, 9, 2};
		
		mergeSort(a, 0, a.length -1);
		System.out.println(Arrays.toString(a));
	}
}
