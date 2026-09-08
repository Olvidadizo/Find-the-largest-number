import java.util.Scanner;

public class FindLargest {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);

        // loop variable
        boolean continueLoop= true;

        while (continueLoop) {

            System.out.println("New session");

            // Declare the array of 5 integers
            int[] numbers = new int[5];

            System.out.println("Enter 5 whole numbers:");

            // Read the 5 integers
            for (int i = 0; i < numbers.length; i++) {
                System.out.print("Number " + (i + 1) + ": ");
                numbers[i] = keyboard.nextInt();
            }

            // Initializelargest
            int largest = Integer.MIN_VALUE;

            // Find the largest in the array
            for (int num : numbers) {
                if (num > largest) {
                    largest = num;
                }
            }

            // Show the result
            System.out.println("\nThe largest number is: " + largest);

            while (true) {

                System.out.print("\nStart another cycle? (Type'y' for yes, 'n' for no: ");
                String answer = keyboard.next();

                if (answer.equalsIgnoreCase("s")) {
                    break;
                } else if (answer.equalsIgnoreCase("n")) {
                    continueLoop = false;
                    System.out.println("Finish session.");
                    break;
                } else {
                    System.out.println(" Invalid entry, please try again.");
                }
            }
        }
      keyboard.close();
    }
}