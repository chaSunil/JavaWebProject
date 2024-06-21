<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
			<%@include file="menu/submenu-product.jsp" %>
			
		</div>
		<div id="content">
						<!-- menu=="introduce" -->
			<c:if test="${ (empty param.menu) or param.menu == 'introduce' }">
				<%@include file="content/product/introduce.jsp" %>
			</c:if>
			
			<!-- menu=="history" -->
			<c:if test="${ (empty param.menu) or param.menu == 'price' }">
				<%@include file="content/product/price.jsp" %>
			</c:if>
			
			<!-- menu=="location" -->
			<c:if test="${ (empty param.menu) or param.menu == 'QnA' }">
				<%@include file="content/product/QnA.jsp" %>
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