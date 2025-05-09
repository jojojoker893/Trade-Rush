**Trade Rush**

**TradeRush (トレードラッシュ)**<br>
トレードの興奮とスピード感を体験！

**システム概要**<br>
- ユーザがFXのチャートをリアルタイムで見ながら予測しベットする<br>
- ユーザはベットした金額が増えるか減るか予測し、その結果を体験することでFXのシミュレーションをする

**要件**<br>
- ワクワク感の提供<br>
- 「予測できない結果」や「ドキドキ感」「緊張感」を投資と掛け合わせることで演出<br>
- FXを遊び感覚で体験<br>
- ゲーム、シミュレーションのようにして実際の取引やFXを通じて社会情勢や金融に対する興味を引き起こす

**システム要件**<br>
- 為替リアルタイム更新<br>
- シミュレーション上の資産管理<br>
- ユーザごとの資産状況を保存、更新<br>
- 入出金管理<br>
- 注文の種類<br>
- 成行注文（現在の価格で即時約定）<br>
- 指値注文（指定した価格で買い・売り）<br>
- 逆指値注文（損切りなどのためのストップ注文）

**業務フロー**<br>
- チャートを見て為替を予測<br>
- ベットする金額を入力<br>
- チャートの動くからホールドか売却する<br>
- チャート、ユーザの選択によって金額が増減する<br>

**技術アーキテクチャ**<br>
- Docker<br>
- React<br>
- Next.js<br>
- Rails API<br>
- MySQL<br>
- API GMOコイン<br>
https://api.coin.z.com/fxdocs/#ticker

## 環境構築
```bash
$ docker-compose build
$ docker-compose run backend rails db:create
$ docker-compose run backend rails db:create RAILS_ENV=test
$ docker-compose up -d
```
