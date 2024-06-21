import java.util.ArrayList;

public class pratice {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String [] my_strings = {"progressive", "hamburger", "hammer", "ahocorasick"};
		
		int [][] parts = { 
				{0,4},
				{1,2},
				{3,5},
				{7,7} };
		
		StringBuilder sb = new StringBuilder();
		int result = 0;
		
		System.out.println(my_strings[result++].substring(parts[0][0],parts[0][1]+1));
		System.out.println(parts[3][1]);
		sb.append(my_strings[0].substring(parts[0][0],parts[0][1]+1));
		sb.append(my_strings[1].substring(parts[1][0],parts[1][1]+1));
		sb.append(my_strings[2].substring(parts[2][0],parts[2][1]+1));
		sb.append(my_strings[3].substring(parts[3][0],parts[3][1]+1));
		
		
		for(int i = 0; i < my_strings.length; i++) {
			for(int k = 0; k < parts[i].length-1; k++) {
			sb.append(my_strings[i].substring(parts[i][k],(parts[i][k+1])+1));
			}
		}
		
		System.out.println(sb);
		
	}
}