import java.util.ArrayList;

public class pratice {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String myString = "AbCdEfG";
		String myString2 = myString.toLowerCase();
		
		String pat = "aBc";
		String pat2 = pat.toLowerCase();
		System.out.println(myString.contains(pat2) == true ? 1 : 0);
		int answer = myString.contains(pat2) == true ? 1 : 0;
		
	}
}