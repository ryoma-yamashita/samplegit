$(function () {
  // 検索ワードに変化のない場合の変数
  let contSearch = '';
  // ページカウントの初期値
  let pageCount = 1;
  // 検索ボタンをクリックした時に以下の処理を行う
  $('.search-btn').on('click', function() {
    // 検索ワード欄に入力された値をsearchWordへ代入
    const searchWord = $('#search-input').val();
    // 検索ワードの値が同じだった場合
    if (searchWord === contSearch) {
      // ページカウントを+1し次の20件のデータを表示する
      pageCount ++;

      // 検索ワードが異なる場合
    } else {
      // .listsの要素を空にする
      $('.lists').empty();
      // ページカウントを1に戻す
      pageCount = 1;
      // contSeachへ検索ワード欄に入力された値を代入
      contSearch = searchWord;
    }
    // API
    // 変数settingsに設定情報などを格納
    const settings = {
      // 実行するURL。実行するURLのことをエンドポイントと言います。
      'url': `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      // サーバーに送るメソッド
      'method': 'GET'
    };
    // Ajaxの実行
    // .doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取っている
    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      displayResult(result);
      // .failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取っている。
    }).fail(function (err) {
      displayError(err);
    });
  });

  // .listsクラスに書籍データの一覧を表示させる
  function displayResult(res) {
    // .messageクラスの削除
    $('.message').remove();
    // res = res[0].itemsがundefined、または配列に中身がなければエラーメッセージの表示
    if (res[0].items == undefined || res[0].items.length == 0) {
      // エラーメッセージの定義
      const noResult = '<div class = "message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>';
      // listsクラスの前にエラーメッセージの挿入
      $('.lists').before(noResult);
    } else {
      // resultの中のitems配列の中身を個別に取り出し処理を行う
      $.each(res[0].items, function (index) {
        // 配列の中の値をそれぞれ定義
        // タイトル
        let title = res[0].items[index].title;
        // 作者
        let creator = res[0].items[index]['dc:creator'];
        // 出版社
        let publisher = res[0].items[index]['dc:publisher'];
        // 書籍情報
        const id = res[0].items[index]['@id'];
        // 値がundefinedだった時、それぞれを不明と表示
        title == undefined ?
          title = 'タイトル不明' :
          title;
        creator == undefined ?
          creator = '作者不明' :
          creator;
        publisher == undefined ?
          publisher = '出版社不明' :
          publisher;
        // それぞれの値をリストの一覧として表示させるHTML要素を定義
        const listItems = `<li class = "lists-item"><div class = "list-inner"><p>タイトル：${title}</p><p>作者：${creator}</p><p>出版社：${publisher}</p><a href = "${id}" target="_blank">書籍情報</a></div></li>`;
        // listsクラスに追加し表示させる処理
        $('.lists').prepend(listItems);
      });
    }
  }
  // エラーメッセージ表示の処理
  function displayError(err) {
    // .listsの要素を空にする
    $('.lists').empty();
    // .messageの要素を削除
    $('.message').remove();
    // 想定されるエラーメッセージを定義しそれぞれ代入する
    const errorConnect = '<div class = "message">正常に通信できませんでした。<br>インターネットの接続を確認してください。</div>';
    const errorText = '<div class = "message">検索ワードが有効ではありません。<br>1文字以上で検索してください。</div>';
    const errorMessage = '<div class = "message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>';
    // エラーステータスコードが0の場合はerrorConnectを表示
    if (err.status === 0) {
      $('.lists').before(errorConnect);
      // エラーステータスコードが400の場合はerrorTextを表示
    } else if (err.status === 400) {
      $('.lists').before(errorText);
      // それ以外のエラーステータスコードの場合はerrorMessageを表示
    } else {
      $('.lists').before(errorMessage);
    }
  }
  // リセットボタンの機能
  $('.reset-btn').on('click', function () {
    // .message要素を削除
    $('.message').remove();
    // .lists要素を空にする
    $('.lists').empty();
    // 検索ワード欄を空にする
    $('#search-input').val('');
    // ページカウントを初期値へ
    pageCount = 1;
  });
});
