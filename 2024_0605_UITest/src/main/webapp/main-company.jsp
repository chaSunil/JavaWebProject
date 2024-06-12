<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- JSTL Core Library 사용 설정 -->
<!-- 제어문: if/forEach/Choose/set/.. -->
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/main-menu.css">
<link rel="stylesheet" href="css/sub-menu.css">
</head>

<body>
	<div id="main-box">
		<div id="header">
			<!-- header.jsp include -->
			<%@include file="header/header.jsp" %>
		</div>
		<div id="aside">
			<%@include file="menu/submenu-company.jsp" %>
		</div>
		<div id="content">
			<!-- main-company.jsp 처음 접속시에 비어있음
				 main-company.jsp?menu=introduce
				 main-company.jsp?menu=history
				 main-company.jsp?menu=location
				 
				 menu <- parameter
			 -->
			<!-- menu=="introduce" -->
			<c:if test="${ (empty param.menu) or param.menu == 'introduce' }">
				<%@include file="content/company/introduce.jsp" %>
			</c:if>
			
			<!-- menu=="history" -->
			<c:if test="${ (empty param.menu) or param.menu == 'history' }">
				<%@include file="content/company/history.jsp" %>
			</c:if>
			
			<!-- menu=="location" -->
			<c:if test="${ (empty param.menu) or param.menu == 'location' }">
				<%@include file="content/company/location.jsp" %>
			</c:if>
			
		</div>
		<div id="aside2">
			<%@include file="menu/submenu-banner.jsp" %>
		</div>
		<div id="footer">
			<%@include file="footer/footer.jsp" %>
		</div>
	</div>
</body>
</html>
