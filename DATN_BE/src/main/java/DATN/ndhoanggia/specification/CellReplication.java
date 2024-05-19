package DATN.ndhoanggia.specification;
import java.util.*;

public class CellReplication {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();

        for (int i = 0; i < T; i++) {
            int n = scanner.nextInt();
            long k = scanner.nextLong();
            System.out.println(findCell(n, k));
        }

        scanner.close();
    }

    private static char findCell(int n, long k) {
        if (n == 1) {
            return 'X';
        }
        long mid = 1L << (n - 2);

        if (k <= mid) {
            return findCell(n - 1, k);
        } else {
            char previous = findCell(n - 1, k - mid);
            return previous == 'X' ? 'Y' : 'X';
        }
    }
}