/**
 * 
 */

 class Person{
	constructor(name,age,tel){
		this.name = name;
		this.age = age;
		this.tel = tel;
	}
	
	toJSON(){
		// Person 객체가 가지고 있는 Data를 JSON 형태로 출력하는 메소드
		return `{"name":"${this.name}", "age":${this.age}, "tel":"${this.tel}"}`;
	}
	
	// setter
	set age(nai) {
		if(nai<0) {
			console.log("올바른 나이 값이 아닙니다.")
		}
		// 내부에서만 사용하는 이름에는 _언더바를 붙인다.
		this._age = nai;
	}
	
	// getter(this.age라고 표기하면 age() 메서드를 재귀함수처럼 반복해서 호출한다)
	get age() {
		return this._age;
	}
	
	
	
 }