$(function(){

    $("input").keyup(function(){

        var noChk = $(this).val();   // chk => checkm

        if (isNaN(noChk)) {
            alert("숫자만 가능합니다.");
            $(this).val("").focus();   // 커서가 해당위치에 표시됨
        }

    });

    /* 전화번호 입력 시작 */

    /* 입력란1번에서 2번으로 포커스 자동 변경(=자동 이동) */
    $("#tel1").keyup(function(){
        var noLen = $(this).val().length;  // len = length, 개수
        if (noLen == 3) {
            $("#tel2").focus();   // 첫번째 입력란에 숫자 3개 입력되면 포커스 자동 이동
        }
    });

    /* 입력란2번에서 3번으로 포커스 자동 변경(=자동 이동) */
    $("#tel2").keyup(function(){
        var noLen = $(this).val().length;  // len = length, 개수
        if (noLen == 4) {
            $("#tel3").focus();   // 첫번째 입력란에 숫자 3개 입력되면 포커스 자동 이동
        }
    });

    /* 전화번호 입력 끝 */


    /* 전화번호 재입력 시작 */

    $("button").click(function(){
        var retVal = confirm("전화번호를 수정 하시겠습니까?");
        // return value => retVal, 반환값

        if(retVal) {
            $("input").val("");   // 모든 input요소의 내용을 공백으로 만듦.
            $("#tel1").focus();
            /*alert("확인을 누르셨어요!");*/
        } else {
            alert("취소를 누르셨어요!");
        }
    });

    /* 전화번호 재입력 끝 */

});
