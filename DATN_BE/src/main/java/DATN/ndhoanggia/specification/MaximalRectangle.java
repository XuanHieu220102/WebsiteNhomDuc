package DATN.ndhoanggia.specification;

import java.util.*;

public class MaximalRectangle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        int M = scanner.nextInt();
        int[][] matrix = new int[N][M];

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                matrix[i][j] = scanner.nextInt();
            }
        }

        System.out.println(maximalRectangle(matrix));
        scanner.close();
    }

    public static int maximalRectangle(int[][] matrix) {
        if (matrix.length == 0) return 0;
        int n = matrix.length;
        int m = matrix[0].length;
        int[] heights = new int[m + 1]; // Extra element to avoid empty stack issue
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (matrix[i][j] == 1) {
                    heights[j] += 1;
                } else {
                    heights[j] = 0;
                }
            }

            Stack<Integer> stack = new Stack<>();
            for (int j = 0; j <= m; j++) {
                while (!stack.isEmpty() && heights[stack.peek()] > heights[j]) {
                    int h = heights[stack.pop()];
                    int w = stack.isEmpty() ? j : j - stack.peek() - 1;
                    maxArea = Math.max(maxArea, h * w);
                }
                stack.push(j);
            }
        }

        return maxArea;
    }
}