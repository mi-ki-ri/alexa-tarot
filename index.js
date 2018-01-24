var Alexa = require('alexa-sdk');
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function(){
      const Tarot = function( name, english ,number, mean ){
          this.name = name;
          this.english = english;
          this.number = number;
          this.mean = mean;
      }

      const tarots = [
          new Tarot( '愚者', 'フール', 0, "夢想・愚行・極端・熱狂" ),
          new Tarot( '魔術師', 'マジシャン', 1, "意志・手腕・外交" ),
          new Tarot( '女教皇', 'ハイプリエステス', 2, "秘密・神秘・英知" ),
          new Tarot( '女帝', 'エンプレス', 3, "実り・行動・月日の長さ・未知" ),
          new Tarot( '皇帝', 'エンペラー', 4, "統治・堅固さ・防御・同盟" ),
          new Tarot( '教皇', 'ハイエロファント', 5, "信条・社会性・恵みと有徳" ),
          new Tarot( '恋人', 'ラバーズ', 6, "魅力・愛美" ),
          new Tarot( '戦車', 'チャリオット', 7, "援軍・摂理・勝利・復讐" ),
          new Tarot( '力', 'ストレングス', 8, "力・勇気・寛大・名誉" ),
          new Tarot( '隠者', 'ハーミット', 9, "深慮・忠告を受ける・崩壊" ),
          new Tarot( '運命の輪', 'ホウィール・オブ・フォーチュン', 10, "幸運・転機・向上" ),
          new Tarot( '正義', 'ジャスティス', 11, "平等・正しさ・正当な判決" ),
          new Tarot( '吊るされた男', 'ハングドマン', 12, "英知・慎重・試練・直観" ),
          new Tarot( '死神', 'デス', 13, "停止・損失・死と再生" ),
          new Tarot( '節制', 'テンパランス', 14, "調整・中庸・倹約・管理" ),
          new Tarot( '悪魔', 'デビル', 15, "暴力・激烈・宿命・黒魔術" ),
          new Tarot( '塔', 'タワー', 16, "悲嘆・災難・不名誉・転落" ),
          new Tarot( '星', 'スター', 17, "希望と吉兆・瞑想・放棄" ),
          new Tarot( '月', 'ムーン', 18, "隠れた敵・幻想・欺瞞・失敗" ),
          new Tarot( '太陽', 'サン', 19, "物質的な幸福・幸運な結婚" ),
          new Tarot( '審判', 'ジャッジメント', 20, "復活・位置の変化・更新" ),
          new Tarot( '世界', 'ワールド', 21, "完成・約束された成功・旅" ),
      ];

      const randomValue = Math.floor(Math.random() * tarots.length);

      const msg = '今回のカードは、' +
          tarots[randomValue].number + '番、' +
          tarots[randomValue].name + '。' +
          '英語では' + tarots[randomValue].english + 'とも呼ばれます。' +
          '暗示するのは、' + tarots[randomValue].mean;

      this.emit( ':tellWithCard', msg);
    },
    'AMAZON.CancelIntent':function(){
      this.emit('LaunchRequest');
    },
    'AMAZON.HelpIntent':function(){
      this.emit('LaunchRequest');
    },
    'AMAZON.StopIntent':function(){
      this.emit('LaunchRequest');
    },
    'AMAZON.YesIntent':function(){
      this.emit('LaunchRequest');
    },
    'Unhandled': function () {
      this.emit('LaunchRequest');

    }
};
