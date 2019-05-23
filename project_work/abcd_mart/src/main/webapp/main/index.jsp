<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="ABCD-Mart" />
<meta name="naver-site-verification" content="f245ffaf55cafcfe6bcfb852616e7dd91bb4003c"/>
<title>인덱스입니다</title>

<link rel="stylesheet" href="../css/main.css" />
<!-- advertisement -->
<link rel="stylesheet" href="../css/advertise.css">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"><!-- 중간광고용 추가 -->

<!-- best/new 상품 -->
<link rel="stylesheet" href="../css/bestaward.css"/>
<link rel="stylesheet" href="../css/slick.css"/>
<link rel="stylesheet" href="../css/slick-theme.css" />

</head>
<body>


<div id="signUpButton" style="border: 2px solid pink; height: 50px; cursor: pointer;">(임시)회원가입 버튼입니다</div>
<jsp:include page="../template/top_ads.jsp"/>
<jsp:include page="../template/newArrivals.jsp"/>

<jsp:include page="../template/mid_ads.jsp"/>


<jsp:include page="../template/bestAward.jsp"/>
<jsp:include page="../template/bestBrand.jsp"/>

<jsp:include page="../template/themeShop.jsp"/>
<jsp:include page="../template/mds_pick.jsp"/>


<jsp:include page="../template/bottom_ads.jsp"/>










</body>
<!-- advertisement -->
<script type="text/javascript" src="http://code.jquery.com/jquery-3.4.0.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>  <!-- 중간광고용 추가 -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>   <!-- 중간광고용 추가 -->
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script> <!-- 칸6개짜리 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> <!-- 칸6개짜리 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js"></script> <!-- 사진형태 중간광고 추가소스 -->
<script src="../js/advertise.js"></script>
<!-- advertisement -->
<!-- best & new -->
<script type="text/javascript" src="../js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="../js/slick.min.js"></script>
<script type="text/javascript" src="../js/bestAward.js"></script>
<script type="text/javascript" src="../js/bestBrand.js"></script>
<script type="text/javascript" src="../js/newArrivals.js"></script>
<!-- best & new -->


<script type="text/javascript" src="../js/theme.js"></script>
<script type="text/javascript" src="../js/main.js"></script>
</html>