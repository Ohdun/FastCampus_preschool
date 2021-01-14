var stocks = [
    "한미약품", "알체라", "기아차", "SK", "대한항공", 
    "LG화학", "카카오", "키움증권", "삼성SDS", "코오롱글로벌", 
    "DB하이텍", "인선이엔티", "코엔텍", "바이넥스", "삼성제약",
    "녹십자랩셀", "녹십자홀딩스", "대우건설", "삼성전자", "녹십자셀"];

//1.배열의 모든 값을 문자열로 만들기
//2.문자열을 HTML 표 첫 행에 보여주기
//3. body onload="함수호출" 을 사용히여 HTML이 로드되면 문자열 보여주기
function showNotAssignedStocks() {
    var stocksString = "";
    for(var i = 0; i < stocks.length; i++) {
        stocksString +=  stocks[i];
        if(i < stocks.length - 1){
            stocksString += ", ";
        };
    }
    document.querySelector("#Not_assigned").innerHTML = stocksString;
}

//1.stocks배열 갯수가 0일 경우 return
//2.stocks배열 첫 값을 stock에 대입
//3.stocks의 값을 배열 첫번째 값부터 1개씩 삭제하고 삭제한 값을 stock에 대입
//4. 모든 값을 보여주는 함수 showAssignedStocks를 호출하여 실시간으로 남은 값을 보여줌
//5. li를 새로 만들기
//6. li에 stock 값 추가하기
//7. 값이 있는 li를 ul의 id 값을 선택하여 추가하기
//8. 각 버튼과 함수를 id 값에 맞게 연동하여 stock을 원히는 list에 추가될 수 있도록 하기
function assignStockToList(listNumber) {
    if(stocks.length === 0) return; 
    var stock = stocks[0];
    stock = stocks.splice(0,1);
    showNotAssignedStocks();    

    var li = document.createElement("li");
    li.append(stock);
    document.querySelector("#list_" + listNumber).append(li);
}
