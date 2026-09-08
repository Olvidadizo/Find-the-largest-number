import java.util.Scanner;

public class FindLargest {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);

        // Loop variable
        boolean continueLoop = true;

        while (continueLoop) {

            System.out.println("New session");

            // Declare the array of 5 integers
            int[] numbers = new int[5];

            System.out.println("Enter 5 whole numbers:");

            // Read the 5 numbers
            for (int i = 0; i < numbers.length; i++) {
                System.out.print("Number " + (i + 1) + ": ");
                numbers[i] = keyboard.nextInt();
            }

            // Find the largest without conditionals or Math.min()/Math.max()
            // Formula: max(a, b) = (a + b + |a - b|) / 2
            // |a - b| is obtained with sqrt(pow(a - b, 2)) instead of Math.abs()
            double largest = numbers[0];

            for (int i = 1; i < numbers.length; i++) {
                double diff = largest - numbers[i];
                double absDiff = Math.sqrt(Math.pow(diff, 2));
                largest = (largest + numbers[i] + absDiff) / 2;
            }

            // Show the result
            System.out.println("\nThe largest number is: " + (int) largest);

            while (true) {

                System.out.print("\nStart another cycle? (Type 'y' for yes, 'n' for no: ");
                String answer = keyboard.next();

                if (answer.equalsIgnoreCase("y")) {
                    break;
                } else if (answer.equalsIgnoreCase("n")) {
                    continueLoop = false;
                    System.out.println("Ending session.");
                    break;
                } else {
                    System.out.println(" Invalid entry, please try again.");
                }
            }
        }
        keyboard.close();
    }
}