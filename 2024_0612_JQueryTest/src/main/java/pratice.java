
public class pratice {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String [] strArr = {"AAA","BBB","CCC","DDD"};
		String [] answer = new String [strArr.length];
		for(int i = 0; i < strArr.length; i++) {
			if(i%2==0) {
				answer[i] = strArr[i].toLowerCase();
			} else if(i%2!=0) {
				answer[i] = strArr[i].toUpperCase();
			}
		}
		
		for(String a : answer) {
			System.out.println(a);
		}
		
		
	}
}
