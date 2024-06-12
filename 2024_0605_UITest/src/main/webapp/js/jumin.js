/**
 * 
 */

 
 class Jumin{
	constructor(jumin_no){
		this.jumin_no = jumin_no;
	}
	
	//                  01234567891234 <- index
	// this.jumin_no = "901212-1234567";
	
	/* 
			내국인		외국인
			남  여		남  여
	1900	1   2       5    6
	2000    3   4       7    8
	1800    9   0
	 */
	// 출생년도
	getYear() {
		let year = parseInt(this.jumin_no.substr(0,2));
		let gender = parseInt(this.jumin_no.charAt(7));
		switch(gender) {
			case 1 : case 2: case 5: case 6: year += 1900; break;
			case 3 : case 4: case 7: case 8: year += 2000; break;
			default: year += 1800;
		}
		return year;
	}
	
	// 나이
	getAge() {
		// 자바스크립트에서 현재날짜 구해서 처리
		const now = new Date();
		let result = now.getFullYear();
		let age = result - this.getYear();
		return age;
	}
	
	getTti() {
		let tti = ["신(원숭이)","유(닭)","술(개)","해(돼지)","자(쥐)",
		"축(소)","인(호랑이)","묘(토끼)","진(용)","사(뱀)","오(말)","미(양)"];
		let myTti = tti[this.getYear()%12];
		return myTti;
	}
	
	getGender() {
		let gender = parseInt(this.jumin_no.charAt(7));
		let myGender = "";
		if(gender%2==1) myGender = "남자";
		else myGender = "여자";
		return myGender;	
	}
	
	getSeason() {
		let season = parseInt(this.jumin_no.substr(2,2));
		let result = "";
		switch(Math.floor(season/3)) {
			case 1: result = "봄"; break;
			case 2: result = "여름"; break;
			case 3: result = "가을"; break;
			default: result = "겨울"; break;
		}
		return result;
	}
	
	getLocal() {
		let local_num = parseInt(this.jumin_no.substr(8,2));
		let result = "";
		if(0 <= local_num && local_num <= 8) {
			result = "서울";
		} else if(local_num <= 12) {
			result = "부산";
		}
		else if(local_num <= 15) {
			result = "인천";
		}
		else if(local_num <= 25) {
			result = "경기";
		}
		else if(local_num <= 34) {
			result = "강원";
		}
		else if(local_num <= 39) {
			result = "충북";
		}
		else if(local_num <= 41) {
			result = "대전";
		}
		else if(local_num == 44 || local_num == 96) {
			result = "세종";
		}
		else if(42 <= local_num && local_num <= 47) {
			result = "충남";
		}
		else if(local_num <= 54) {
			result = "전북";
		}
		else if(local_num <= 64) {
			result = "전남";
		}
		else if(local_num <= 66) {
			result = "광주";
		}
		else if(local_num <= 69 || local_num == 76 || local_num == 77) {
			return "대구";
		}
		else if(local_num <= 75 || (78 <= local_num && local_num <= 81)) {
			result = "경북";
		}
		else if(local_num == 85 || local_num == 90) {
			result = "울산";
		}
		else if(local_num <= 84 || (86 <= local_num && local_num <= 93)) {
			result = "경남";
		} else result = "제주";
		
		
		return result ;
	}
	
	getGanji() {
		let ganji = ["갑","을","병","정","무","기","경","신","임","계"];
		let ganji2 = ganji[this.getYear() % 10];
		
		let myGanji = ganji2 + this.getTti() ;
		return myGanji;
	}
	
	//                  01234567891234 <- index
	// this.jumin_no = "901212-123456 7";
	//                  2345670892345
	
	isValid() {
		let sum  = 0;
		sum += parseInt(this.jumin_no.charAt(0))*2;
		sum += parseInt(this.jumin_no.charAt(1))*3;
		sum += parseInt(this.jumin_no.charAt(2))*4;
		sum += parseInt(this.jumin_no.charAt(3))*5;
		sum += parseInt(this.jumin_no.charAt(4))*6;
		sum += parseInt(this.jumin_no.charAt(5))*7;
		
		sum += parseInt(this.jumin_no.charAt(7))*8;
		sum += parseInt(this.jumin_no.charAt(8))*9;
		sum += parseInt(this.jumin_no.charAt(9))*2;
		sum += parseInt(this.jumin_no.charAt(10))*3;
		sum += parseInt(this.jumin_no.charAt(11))*4;
		sum += parseInt(this.jumin_no.charAt(12))*5;
		
		let check_sum = (11-(sum%11))%10;
		console.log("check_sum", check_sum);
		let last_num = parseInt(this.jumin_no.charAt(13));
		return ( last_num == check_sum );
		
	}
		
	isValid2() {
		let sum  = 0;
		let multiply = 2;
		for(let i = 0; i < 13; i++) {
			if(i==6) continue;
			sum += parseInt(this.jumin_no.charAt(i))*parseInt(multiply++);
			if(multiply==10) multiply = 2;
		}
		
		let check_sum = (11-(sum%11))%10;
		console.log("check_sum", check_sum);
		let last_num = parseInt(this.jumin_no.charAt(13));
		return ( last_num == check_sum );
		
	}
	
	
	
	
 }