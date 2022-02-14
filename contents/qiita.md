---
title: Markdown記法 チートシート
tags: Qiita Markdown
author: github:jinno-oit
slide: false  
date: 2020-01-19T21:16:05+09:00
---  

:::note warn
Markdownパーサーの変更をベータ版としてリリースしています。
ベータ版を有効にしている方はこちらをご確認ください。
:::

https://blog.qiita.com/replace-markdown-parser-beta/

Markdown記法のチートシートです。
本ページではQiitaで使用可能なMarkdownのみ掲載しているため、一部原文と異なります。
Markdownの原文については、[Daring Fireball: Markdown Syntax Documentation]
(http://daringfireball.net/projects/markdown/syntax.php)をご覧下さい。
また、コードに関する記法は[GitHub Flavored Markdown](https://github.github.com/gfm/)に準拠しています。
Qiitaでシンタックスハイライト可能な言語一覧については、 [シンタックスハイライト可能な言語](http://qiita.com/Qiita/items/e84f5aad7757afce82ba) をご覧下さい。

## Code - コードの挿入

たとえば、Rubyで記述したコードをファイル名「qiita.rb」として投稿したいときは、 **バッククオート** を使用して以下のように投稿するとシンタックスハイライトが適用されます。 
**コードブロック上下に空行を挿入しないと正しく表示されないことがあります。**


> (空行)
> \`\`\`
> puts 'The best way to log and share programmers knowledge.'
> \`\`\`
> (空行)

**結果**

```ruby:rb.py
puts 'The best way to log and share programmers knowledge.'
```

現状では、ファイル名部分には半角スペースを直接使うことができません。
全角スペースか、`&#x20;` のようなHTML文字参照で代用できます。

> \`\`\
> puts 'The best way to log and share programmers knowledge.'
> \`\`\`

**結果**

```ruby
puts 'The best way to log and share programmers knowledge.'
```

また、コードをインライン表示することも可能です。

> \` puts 'Qiita'` はプログラマのための技術情報共有サービスです。

**結果**

` puts 'Qiita'` はプログラマのための技術情報共有サービスです。

インラインコードがn個連続するバッククオートを含む場合、n+1連続のバッククオートで囲みます。

> \`\` \`バッククオート\` \`\` や \`\`\` \`\`2連続バッククオート\`\` \`\`\` も記述できます。

**結果**

`` `バッククオート` `` や ``` ``2連続バッククオート`` ``` も記述できます。

インラインコードの中身が [CSS の `<color>` 型](https://developer.mozilla.org/ja/docs/Web/CSS/color_value)の RGB 16進数表記, `rgb()`, `rgba()`, `hsl()`, `hsla()` 場合横にその色が表示されます。

> \`#ffce44\`
> \`rgb(255,0,0)\`
> \`rgba(0,255,0,0.4)\`
> \`hsl(100, 10%, 10%)\`
> \`hsla(100, 24%, 40%, 0.5)\`

**結果**

`#ffce44`
`rgb(255,0,0)`
`rgba(0,255,0,0.4)`
`hsl(100, 10%, 10%)`
`hsla(100, 24%, 40%, 0.5)`

### ~~Gist連携について~~ → 2019年1月8日提供終了
[記事投稿時におけるGist連携の提供終了のお知らせ](https://blog.qiita.com/close-gist-coordination/)
<details><summary>提供終了以前のGist連携についての概要</summary><div>
##### GitHubアカウントでQiitaにログインされている場合

投稿時、Octocatアイコンにチェックを入れていただくと連携を行います。
コードを含むアイテムを投稿するとコード部分を抽出し、同じ内容がGistにも投稿される仕組みになっています。

Gistとの連携は、

* コードの投稿
* Qiita側でのコードの編集

の２点について連携しています。
Gist側でコードを編集されても、 **Qiitaには反映されません** のでご注意下さい。
</div></details>
## Format Text - テキストの装飾

### Headers - 見出し

* \# これはH1タグです
* \## これはH2タグです
* \###### これはH6タグです

### Emphasis - 強調・強勢

```markdown
_ か * で囲むとHTMLのemタグになります。Qiitaでは*イタリック体*になります。
__ か ** で囲むとHTMLのstrongタグになります。Qiitaでは**太字**になります。
```

_ か * で囲むとHTMLのemタグになります。Qiitaでは*イタリック体*になります。
__ か ** で囲むとHTMLのstrongタグになります。Qiitaでは**太字**になります。

### Strikethrough - 打ち消し線

```markdown
打ち消し線を使うには ~~ で囲みます。 ~~打ち消し~~
```

打ち消し線を使うには ~~ で囲みます。 ~~打ち消し~~

イタリックや太文字と同様に前後に **半角スペース** か **改行文字** が必要です。

### Details - 折りたたみ

```markdown
追加情報としたい内容を、detailsタグで囲みます。そして、要約として表示したい文章をsummaryタグで記載します。

Qiitaとは

<details><summary>Qiita(キータ)は、プログラマのための技術情報共有サービスです。</summary>プログラミングに関することをどんどん投稿して、知識を記録、共有しましょう。
Qiitaに投稿すると、自分のコードやノウハウを見やすい形で残すことができます。
技術情報はテキストファイルへのメモではなく、タグを付けた文章、シンタックスハイライトされたコードで保存することで初めて再利用可能な知識になる、そうQiitaでは考えています。</details>
```

追加情報としたい内容を、detailsタグで囲みます。そして、要約として表示したい文章をsummaryタグで記載します。

Qiitaとは

<details><summary>Qiita(キータ)は、プログラマのための技術情報共有サービスです。</summary>
プログラミングに関することをどんどん投稿して、知識を記録、共有しましょう。
Qiitaに投稿すると、自分のコードやノウハウを見やすい形で残すことができます。
技術情報はテキストファイルへのメモではなく、タグを付けた文章、シンタックスハイライトされたコードで保存することで初めて再利用可能な知識になる、そうQiitaでは考えています。</details>

折りたたんだ部分で Markdown を使いたい場合は、折りたたまれる部分全体を `<div>` で囲ってください。（\\\` は実際は \\ を含みません。また `<div>` とコードブロックの間には空白行が一つ以上必要です。）

```markdown
<details><summary>サンプルコード</summary><div>

\```rb
puts 'Hello, World'
\```
</div></details>
```

<details><summary>サンプルコード</summary><div>

```rb
puts 'Hello, World'
```
</div></details>

### Note - 補足説明
```markdown
目を引く形で補足説明をしたい場合、補足したい内容を`:::note info`と `:::` で囲みます。
補足したい内容と`:::note info` と `:::` はそれぞれ別の行にする必要があります。
noteの後のinfoは省略可能です。
また、 noteの後にwarnをつけると警告メッセージに、alertをつけるとより強い警告メッセージとして表現することができます。

:::note info
インフォメーション
infoは省略可能です。
:::

:::note warn
警告
○○に注意してください。
:::

:::note alert
より強い警告
○○しないでください。
:::
```

目を引く形で補足説明をしたい場合、補足したい内容を`:::note info`と `:::` で囲みます。
補足したい内容と`:::note info` と `:::` はそれぞれ別の行にする必要があります。
noteの後のinfoは省略可能です。
また、 noteの後にwarnをつけると警告メッセージとして、alertをつけるとより強い警告メッセージとして表現することができます。

:::note info
インフォメーション
infoは省略可能です。
:::

:::note warn
警告
○○に注意してください。
:::

:::note alert
より強い警告
○○しないでください。
:::

## Lists - リスト

### Disc型

* 文頭に「*」「+」「-」のいずれかを入れるとDisc型リストになります
* 要点をまとめる際に便利です
* リストを挿入する際は、 **リストの上下に空行がないと正しく表示されません。また「*」「+」「-」の後にはスペースが必要です**

### Decimal型

1.  文頭に「数字.」を入れるとDecimal型リストになります
2.  後からの挿入/移動を考慮して、1. 2. 3. と順番にするのではなく、1. 1. 1. という風に同じ数字にしておくといい具合です。
3.  リストを挿入する際は、 **リストの上下に空行がないと正しく表示されません。また「数字.」の後にはスペースが必要です**

### Definition型

HTMLの`<dl>`タグをそのまま使うことで実現できます。

```html
<dl>
  <dt>リンゴ</dt>
  <dd>赤いフルーツ</dd>
  <dt>オレンジ</dt>
  <dd>橙色のフルーツ</dd>
</dl>
```
次のようになります。

<dl>
<dt>リンゴ</dt>
<dd>赤いフルーツ</dd>
<dt>オレンジ</dt>
<dd>橙色フルーツ</dd>
</dl>

注意するべきは、Definition型のリスト内ではMarkdown記法が使えないということです。例えば以下のように書いてはなりません。

```html
<dl>
  <dt>リンゴ</dt>
  <dd> とても **赤い** フルーツ </dd>
</dl>
```

次のようになってしまいます。

<dl>
  <dt>リンゴ</dt>
  <dd> とても **赤い** フルーツ </dd>
</dl>

Definition型リスト内ではMarkdown記法ではなくて、HTMLタグを使って修飾しなければならないので、正しくは次のようになります。

```html
<dl>
  <dt>リンゴ</dt>
  <dd> とても<strong>赤い</strong>フルーツ </dd>
</dl>
```

<dl>
  <dt>リンゴ</dt>
  <dd> とても<strong>赤い</strong>フルーツ</dd>
</dl>

Markdown記法とHTMLタグの対応は次のようになっています。

|    修飾    |   Markdown      |     HTML                 |
|:----------:|:---------------:|:------------------------:|
| ボールド   | `**  **`        | `<strong></strong>`      |
| イタリック | `_  _`          | `<em></em>`              |
| コード     | <code>``</code> | `<code></code>`          |
| リンク     | `[text](url)`   | `<a href="url">text</a>` |

### Checkbox型

Disc型の記述の後ろに[ ]を入れるとチェックボックスが生成されます。
チェックが入った状態のボックスを生成する場合は[x]を入力します。
**前後にスペースが必要です。**

```md
- [ ] タスク1
- [x] タスク2
```

- [ ] タスク1
- [x] タスク2




## Blockquotes - 引用

> \> 文頭に>を置くことで引用になります。
> \> 複数行にまたがる場合、改行のたびにこの記号を置く必要があります。
> \> **引用の上下にはリストと同じく空行がないと正しく表示されません**
> \> 引用の中に別のMarkdownを使用することも可能です。

> > これはネストされた引用です。

## Horizontal rules - 水平線

下記は全て水平線として表示されます

> \* * *
> \***
> \*****
> \- - -
> \---------------------------------------

## Links - リンク

* \[リンクテキスト](URL "タイトル") 
    * タイトル付きのリンクを投稿できます。  
      (タイトルは、リンク上にマウスホバーすることで表示されます。)

**例**

> *Markdown:* \[Qiita]\(http://qiita.com "Qiita Home")
> *結果:* [Qiita](http://qiita.com "Qiita Home")

* \[リンクテキスト](URL) 
    * こちらはタイトル無しのリンクになります。

**例**

> *Markdown:* \[Qiita]\(http://qiita.com)
> *結果:* [Qiita](http://qiita.com)

- \[リンクテキスト]\[名前]
- \[名前]:URL
    - 同じURLへのリンクを複数箇所に設定することができます

**例**

>
*Markdown:*
\[ここ]\[link-1] と \[この]\[link-1] リンクは同じになります。
\[link-1][\] も可能です。
\[link-1]:http://qiita.com/drafts/c686397e4a0f4f11683d
> 
*結果:*
[ここ][link-1] と [この][link-1] リンクは同じになります。
[link-1][] も可能です。
[link-1]:http://qiita.com/drafts/c686397e4a0f4f11683d

## Images - 画像埋め込み

* \![代替テキスト]\(画像のURL)
    * タイトル無しの画像を埋め込む
* \![代替テキスト]\(画像のURL "画像タイトル")
    * タイトル有りの画像を埋め込む

**例**

> *Markdown:* \![Qiita]\(https://qiita-image-store.s3.amazonaws.com/0/45617/015bd058-7ea0-e6a5-b9cb-36a4fb38e59c.png "Qiita")

> *結果:*

> ![Qiita](https://qiita-image-store.s3.amazonaws.com/0/45617/015bd058-7ea0-e6a5-b9cb-36a4fb38e59c.png "Qiita")

## テーブル記法
### 入力補完を利用する場合
![入力補完を利用する場合](http://cdn.qiita.com/assets/table-dd5879120ce2f80c8443515d9f864ef3e52c1032c0682333daa0008b3f29c563.gif)

### 手動で入力する場合
```
| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       | This        | This         |
| column     | column      | column       |
| will       | will        | will         |
| be         | be          | be           |
| left       | right       | center       |
| aligned    | aligned     | aligned      |
```

上記のように書くと，以下のように表示されます．

| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       | This        | This         |
| column     | column      | column       |
| will       | will        | will         |
| be         | be          | be           |
| left       | right       | center       |
| aligned    | aligned     | aligned      |

## 数式の挿入

コードブロックの言語指定に "math" を指定することでTeX記法を用いて数式を記述することができます。

> \`\`\`math
> \left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
> \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
> \`\`\`

```math
\left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
\left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
```

`$2^3$` のように数式を "$" で挟むと行中に数式を埋め込むこともできます。

> x^2 + y^2 = 1 をインライン表示すると $x^2 + y^2 = 1$ になります。

ただしインライン数式の中でコントロールシンボル（`\{`のような、バックスラッシュの後に記号が続くもの）を使うと、後述のバックスラッシュによるMarkdownのエスケープと衝突してしまいます。

```
$a = \{1, 2, 3\}$
```

> $a = \{1, 2, 3\}$

なので次のように二つのバックスラッシュを使います。

```
$a = \\{1, 2, 3\\}$
```

> $a = \\{1, 2, 3\\}$

## 目次(TOC)の自動挿入

目次は記事内の見出しを元に自動生成し、右上に自動挿入されます。詳細は[目次機能の紹介記事](http://blog.qiita.com/post/77055935852/qiita-toc)をご覧ください。

## 脚注
本文中に`[^1]`や`[^example]`の[^2]ように文字列を記述することで、脚注へのリンクを表現できます。注釈内容は、同じく本文中に `[^1]: ...` というように記述します[^1]。
  
バカなんですか？[^2]  

[^1]: 注釈内容を記述する位置は、本文の途中でも末尾でも構いません。
[^2]: 注釈内容を記述する位置は、本文の途中でも末尾でも構いません。

## 絵文字
厳密には Markdown 記法の外ですが、`:` で囲って、絵文字を埋め込めます。

**例**

```
\:kissing_closed_eyes: chu☆
```

> \:kissing_closed_eyes: chu☆


絵文字チートシート
http://www.emoji-cheat-sheet.com/

## リンクカード

URLをリンクカードとして表示します。URLの前後に改行が必要です。

**例**

> (空行)
> https://qiita.com/Qiita/items/c686397e4a0f4f11683d
> (空行)

**結果**


https://qiita.com/Qiita/items/c686397e4a0f4f11683d

## コンテンツの埋め込み

以下のサービスの埋め込みスクリプト/Embedタグが利用可能です。

- [Twitter](https://twitter.com)
- [Asciinema](https://asciinema.org/)
- [CodePen](https://codepen.io/)
- [YouTube](https://www.youtube.com/)
- [SlideShare](https://www.slideshare.net/)
- [Google Slide](https://www.google.com/intl/ja_jp/slides/about/)
- [Speaker Deck](https://speakerdeck.com/)

### Twitter

```html:twitter
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Qiita Advent Calendar 2020 開催のお知らせ🎅<br><br>おかげさまで今年で開催10周年となりました！<br>今年は例年以上に楽しんでいただけるようにお楽しみ企画を多数ご用意しています🎄<br>詳細はBlogよりご覧ください。<br><br>みなさんのご参加お待ちしています🚀<a href="https://t.co/zR5SdARdbB">https://t.co/zR5SdARdbB</a></p>&mdash; Qiita (キータ) 公式 (@Qiita) <a href="https://twitter.com/Qiita/status/1323176042425540614?ref_src=twsrc%5Etfw">November 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Qiita Advent Calendar 2020 開催のお知らせ🎅<br><br>おかげさまで今年で開催10周年となりました！<br>今年は例年以上に楽しんでいただけるようにお楽しみ企画を多数ご用意しています🎄<br>詳細はBlogよりご覧ください。<br><br>みなさんのご参加お待ちしています🚀<a href="https://t.co/zR5SdARdbB">https://t.co/zR5SdARdbB</a></p>&mdash; Qiita (キータ) 公式 (@Qiita) <a href="https://twitter.com/Qiita/status/1323176042425540614?ref_src=twsrc%5Etfw">November 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

URL入力でもウィジェット表示できるようになりました。 

> (空行)
> https://twitter.com/Qiita/status/1365218441011990531
> (空行)

https://twitter.com/Qiita/status/1365218441011990531

### Asciinema

```html:Asciinema
<script id="asciicast-7592" src="https://asciinema.org/a/7592.js" async></script>
```

<script id="asciicast-7592" src="https://asciinema.org/a/7592.js" async></script>

### CodePen

```html:CodePen
<p data-height="265" data-theme-id="0" data-slug-hash="dJgNLK" data-default-tab="js,result" data-user="tomoasleep" data-embed-version="2" data-pen-title="dJgNLK" class="codepen">See the Pen <a href="https://codepen.io/tomoasleep/pen/dJgNLK/">dJgNLK</a> by Tomoya Chiba (<a href="https://codepen.io/tomoasleep">@tomoasleep</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
```

<p data-height="512" data-theme-id="0" data-slug-hash="dJgNLK" data-default-tab="js,result" data-user="tomoasleep" data-embed-version="2" data-pen-title="dJgNLK" class="codepen">See the Pen <a href="https://codepen.io/tomoasleep/pen/dJgNLK/">dJgNLK</a> by Tomoya Chiba (<a href="https://codepen.io/tomoasleep">@tomoasleep</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### YouTube

```html:YouTube
<iframe width="560" height="315" src="https://www.youtube.com/embed/M7lc1UVf-VE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/M7lc1UVf-VE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### SlideShare

```html:SlideShare
<iframe src="//www.slideshare.net/slideshow/embed_code/key/B6SfqHFrWhihpr" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> 
```
<iframe src="//www.slideshare.net/slideshow/embed_code/key/B6SfqHFrWhihpr" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> 

### Google Slide

```html:Google_Slide
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQGCGO4BKNKmsm3Oml53J5vTzK7dRBqXHoABnftOb5n3HLiixWzNCMmwc2w7InQig/embed?start=false&loop=false&delayms=3000" frameborder="0" width="500" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
```

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQGCGO4BKNKmsm3Oml53J5vTzK7dRBqXHoABnftOb5n3HLiixWzNCMmwc2w7InQig/embed?start=false&loop=false&delayms=3000" frameborder="0" width="500" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

### Speaker Deck

```html:Speaker_Deck
<script async class="speakerdeck-embed" data-id="f41af42d719b40529cdd96e393c410e6" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
```

<script async class="speakerdeck-embed" data-id="f41af42d719b40529cdd96e393c410e6" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

## その他

バックスラッシュ[\\]をMarkdownの前に挿入することで、Markdownをエスケープ(無効化)することができます。

**例**

> \# H1
> エスケープされています

また本文では一部のHTMLタグも利用可能です。


## QiitaのMarkdown記法の改善について
QiitaのMarkdown記法は

https://github.com/increments/qiita-markdown

でOSSとして公開されています。
埋め込みコンテンツの追加や記法の追加などご要望があれば、このリポジトリにIssueやPRをいただければ検討することができます。
