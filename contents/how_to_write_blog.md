---
title: 記事のメタ情報の書き方
tags: Markdown
author: github:stu-idichi-syoya  
description : "MarkDownのメタ情報を書いてSEO対策する"
date: 2022-02-15T21:17:05+09:00  
img: https://media.geeksforgeeks.org/wp-content/uploads/20190713215633/python4.png
---  

# 執筆者はGithubと紐づけできる    
下記のようにMarkdownファイルの先頭部に`github:{ユーザ名}`を入れることで，ユーザ名のプロフィール画像と名前を紐づけできる，
```markdown  
---
title: 記事のメタ情報の書き方
tags: Markdown
author: github:stu-idichi-syoya  ←これ
description : "執筆者のGithubと紐づける" 
slide: false  
date: 2022-02-15T21:17:05+09:00  
img: https://media.geeksforgeeks.org/wp-content/uploads/20190713215633/python4.png
---
```  
  
# 紐づけをしないこともできる  
紐づけをしたくなければ，authorに名前を書けばよい．   
```markdown    
---
title: 記事のメタ情報の書き方
tags: Markdown
author: 伊地知翔也 ← これ
description : "執筆者のGithubと紐づける"
slide: false  
date: 2022-02-15T21:17:05+09:00  
img: https://media.geeksforgeeks.org/wp-content/uploads/20190713215633/python4.png
---
```  
  
# 説明は書こう．    
説明は`description`の項目で，検索サイトにひっかけるためには必須の項目である．  
そして，ユーザにどのような内容なのかを一目で知らせることができる．
``` markdown      
---
title: 記事のメタ情報の書き方
tags: Markdown
author: 伊地知翔也 ← これ
description : "執筆者のGithubと紐づける" ←これ
slide: false  
date: 2022-02-15T21:17:05+09:00  
img: https://media.geeksforgeeks.org/wp-content/uploads/20190713215633/python4.png
---
```  
  
# tagsもつける  
タグ情報もあるほうが，記事の検索に便利だ．  
``` markdown      
---
title: 記事のメタ情報の書き方
tags: Markdown Blog ←これ ['MarkDown','Blog']でもOK
author: 伊地知翔也 
description : "執筆者のGithubと紐づける" 
slide: false  
date: 2022-02-15T21:17:05+09:00  
img: https://media.geeksforgeeks.org/wp-content/uploads/20190713215633/python4.png
---
```    
複数の入力には`半角スペース`でタグを区切る．    
また，`['MarkDown','Blog']`といった配列形式での表現も受け付けている．  
そして，タグは小文字，大文字を区別しないので，好きな入力形式でよい．  
  
# サムネイルをつける  
サムネイルは`img`項で指定できる  
