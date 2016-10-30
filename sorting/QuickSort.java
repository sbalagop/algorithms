package sorting;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Best: O ( n log n) Worst: O (n2) -- in-place, not stable
 * 
 * @author Sivakumar Balagopalan
 * 
 */
public class QuickSort {
	public static void quicksort(int[] a, int left, int right) {
		if (left < right) {
			int index = partition(a, left, right);

			quicksort(a, left, index - 1);
			quicksort(a, index, right);
		}
	}

	private static int partition(int[] a, int left, int right) {

		int pivot = a[(right + left) / 2];

		while (left <= right) {
			while (a[left] < pivot) {
				left++;
			}
			while (a[right] > pivot) {
				right--;
			}

			if (left <= right) {
				swap(a, left, right);
				left++;
				right--;
			}

		}
		return left;
	}

	private static void swap(int[] a, int i, int j) {
		int tmp = a[i];
		a[i] = a[j];
		a[j] = tmp;
	}

	public static void main(String[] args) {
		int a[] = { 99, 78, 6, 6, 98, 5, 1, 0, 3 };
		quicksort(a, 0, a.length - 1);
		System.out.println(Arrays.toString(a));

	}
}
