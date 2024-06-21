<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
 <style>
        .container {
            width: 500px;
            height: 700px;
            border: 1px solid #222;
        }   

        .parent {
            width: 100%;
            height: 400px;
            overflow: hidden;
        }


        .child {
            width: 100%;
            height: 100%;

            transform: scale(1.0);
            -webkit-transform: scale(1.0);
            -moz-transform: scale(1.0);
            -ms-transform: scale(1.0); 
            -o-transform: scale(1.0);

            transition: transform 0.3s;
        }

        .parent:hover .child {
            transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -ms-transform: scale(1.2); /* IE 9 */
            -o-transform: scale(1.2);

            transition: transform 0.3s;
        }

        .container h1 {
            font-size: 36px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="parent">
            <img class="child" src="image/giupin.jpg"/>
        </div>
        <span style="margin-top:20px;font-size:18px;">안녕하십니까 대표 박졍환입니다.<br>
		저희 회사는 치트키, 핵을 전부 허용하는 다국적 게임 회사입니다.<br>
		현금거래, 계정거래 전부 허용하니 편안한 플레이 환경 되시길 바랍니다.</span>
    </div>

</body>
</html>