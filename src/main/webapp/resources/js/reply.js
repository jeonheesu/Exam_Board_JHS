$(function() {


	replyShow();


})


function replyShow() {
	var r_writer = $("#r_writer").val();
	var r_boardNum = $("#r_boardNum").val();
	
	
	$.ajax({
		url: '/replyShow',      // 컨트롤러에서 대기중인 URL 주소이다.
		type: "POST",            // HTTP method type(GET, POST) 형식이다.
		data: {
			r_boardNum: r_boardNum,
			// Json 형식의 데이터이다.
		},
		success: function(data) { // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'res'는 응답받은 데이터이다.
			console.log(data);
      	   var replyTBL = "<table border='1'><tr><td>작성자</td><td>작성내용</td><td>삭제</td></tr>";
			$(data).each(function() {
				if(r_writer == this.r_writer){
								  replyTBL += "<tr><td>"+this.r_writer+"</td><td>"
							  + this.r_content + "</td><td><button onclick='replyDelete("+this.r_no+")'>삭제하기</button></td></tr>";
							  }else{
								 replyTBL += "<tr><td>"+this.r_writer+"</td><td>"
							  + this.r_content + "</td><td></td></tr>";
							  }
			});
          replyTBL += "</table>";
				  $('#replyShowZone').html(replyTBL);
							
							  
						   
						   
						 

		},
		error: function(request, status, error) {
			alert("code:" + request.status + "\n" + "message:"
				+ request.responseText + "\n" + "error:" + error);
		}
	})
}




//답글 달기 ajax
$("#replyRegistBtn").click(function() {

	var r_boardNum = $("#r_boardNum").val();
	var r_writer = $("#r_writer").val();
	var r_content = $("#r_content").val();

	if (r_content == "") {
		alert("내용을 작성해주세요")
		return;
	}

	$.ajax({
		url: '/replyInsert',      // 컨트롤러에서 대기중인 URL 주소이다.
		type: "POST",            // HTTP method type(GET, POST) 형식이다.
		data: {
			r_boardNum: r_boardNum,
			r_writer: r_writer,
			r_content: r_content,   // Json 형식의 데이터이다.
		},


		success: function(data) { // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'res'는 응답받은 데이터이다.
			if (data == "success") {
				alert("댓글 등록 완료");
				$("#r_content").val("");
				replyShow();
			} else {
				alert("댓글 실패");
			}

		},
		error: function(request, status, error) {
			alert("code:" + request.status + "\n" + "message:"
				+ request.responseText + "\n" + "error:" + error);
		}



	})


})



function replyDelete(r_no){
	
	
	$.ajax({
		url: '/replyDelete',      // 컨트롤러에서 대기중인 URL 주소이다.
		type: "POST",            // HTTP method type(GET, POST) 형식이다.
		data: {
			r_no: r_no,
		                   	// Json 형식의 데이터이다.
		},
		success: function(data) { // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'res'는 응답받은 데이터이다.
			
			if(data="success"){
				alert("댓글 삭제 완료")
				$('#replyShowZone').html("");
				replyShow();
			}
						   
						
		},
		error: function(request, status, error) {
			alert("code:" + request.status + "\n" + "message:"
				+ request.responseText + "\n" + "error:" + error);
		}
	})
	
	
}



