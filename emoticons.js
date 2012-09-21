(function() {
  document.getElementById("pagelet_chat").addEventListener('click', function (e) { 
    var srcElement = e.srcElement; 
    if(srcElement.className == "emoteTogglerImg" && srcElement.dataset['appended'] === undefined) {
      srcElement.dataset['appended'] = '1';
      var parent = srcElement.parentElement;
      var tbody = parent.getElementsByTagName('tbody')[0];

      var tr = [];
      var trIndex = 0;
      var html = "";
      var len = emoticons.length;
      for( i = 1; i <= len; i++ ) {
        if(i%7 == 1) {
          tr.push(document.createElement('tr'));
          html = "";
        }

        html += '<td class="panelCell">';
          html += '<img alt="' + emoticons[i-1].title + '" title="' + emoticons[i-1].title + '" ';
          html += 'class="emoteIcon emote_custom" ';
          html += 'src="' + emoticons[i-1].imgUrl + '"  ';
          html += 'data-custom-emoticon="true" ';
          html += 'data-value="' + emoticons[i-1].value.join('\n') + '">';
        html += "</td>"
        if(i%7==0 || i==len) {
          tr[trIndex++].innerHTML = html;
        }
      }
      for(i=0; i<tr.length; i++)
        tbody.appendChild(tr[i]);

    } else if(srcElement.dataset['customEmoticon'] == "true") {
      var textarea = srcElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByTagName('textarea')[0];
      
      var eventObject = document.createEvent('TextEvent');
      eventObject.initTextEvent('textInput',
                                true,
                                true,
                                null,
                                srcElement.dataset['value'] + '\n');
      textarea.dispatchEvent(eventObject);
    }

  });
  var emoticons = [
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-snc7/579550_174987072637909_1527885072_a.jpg",
    value: ["[[174982159305067]][[174982169305066]]","[[174982175971732]][[174982185971731]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash3/534376_174987092637907_79991669_a.jpg",
    value: ["[[174982192638397]][[174982202638396]]","[[174982209305062]][[174982225971727]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-snc6/185195_174987095971240_871635628_a.jpg",
    value: ["[[174982232638393]][[174982245971725]]","[[174982252638391]][[174982265971723]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash4/264385_174987102637906_2129408557_a.jpg",
    value: ["[[174982272638389]][[174982282638388]]","[[174982292638387]][[174982299305053]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash4/419108_174987105971239_192174687_a.jpg",
    value: ["[[174982309305052]][[174982319305051]]","[[174982329305050]][[174982335971716]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash3/552150_174987115971238_1401864213_a.jpg",
    value: ["[[174982355971714]][[174982362638380]]","[[174982372638379]][[174982379305045]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash3/601534_174987122637904_2023349921_a.jpg",
    value: ["[[174982385971711]][[174982395971710]]","[[174982405971709]][[174982415971708]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash4/393629_174987135971236_79909028_a.jpg",
    value: ["[[174982425971707]][[174982432638373]]","[[174982439305039]][[174982449305038]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-prn1/46300_174987142637902_940220451_a.jpg",
    value: ["[[174982485971701]][[174982492638367]]","[[174982505971699]][[174982519305031]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-snc7/485719_174987149304568_252813284_a.jpg",
    value: ["[[174982529305030]][[174982535971696]]","[[174982542638362]][[174982552638361]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-snc6/247806_174987152637901_1054702110_a.jpg",
    value: ["[[174982559305027]][[174982569305026]]","[[174982579305025]][[174982592638357]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash3/545390_174987169304566_614206832_a.jpg",
    value: ["[[174982605971689]][[174982612638355]]","[[174982625971687]][[174982639305019]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-prn1/60752_174987182637898_421871502_a.jpg",
    value: ["[[174982649305018]][[174982659305017]]","[[174982665971683]][[174982682638348]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-snc7/298410_174987189304564_825249831_a.jpg",
    value: ["[[174982689305014]][[174982702638346]]","[[174982722638344]][[174982729305010]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash4/301019_174987195971230_1584479009_a.jpg",
    value: ["[[174982739305009]][[174982752638341]]","[[174982759305007]][[174982765971673]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash3/527470_174987202637896_861752336_a.jpg",
    value: ["[[174982775971672]][[174982785971671]]","[[174982792638337]][[174982802638336]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash4/251098_174987209304562_1374520798_a.jpg",
    value: ["[[174982825971667]][[174982855971664]]","[[174982862638330]][[174982872638329]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash3/150098_174987215971228_157773008_a.jpg",
    value: ["[[174982882638328]][[174982895971660]]","[[174982905971659]][[174982912638325]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash3/545853_174987219304561_82996205_a.jpg",
    value: ["[[174982935971656]][[174982945971655]]","[[174982959304987]][[174982969304986]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash4/486785_174987225971227_1464458059_a.jpg",
    value: ["[[174982989304984]][[174982999304983]]","[[174983009304982]][[174983015971648]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash3/581598_174987232637893_1908404732_a.jpg",
    value: ["[[174983022638314]][[174983039304979]]","[[174983052638311]][[174983062638310]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash4/388868_174987252637891_1506385595_a.jpg",
    value: ["[[174983072638309]][[174983082638308]]","[[174983089304974]][[174983099304973]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-snc6/250075_174987259304557_839997529_a.jpg",
    value: ["[[174983109304972]][[174983129304970]]","[[174983135971636]][[174983145971635]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-ash3/550429_174987275971222_26530333_a.jpg",
    value: ["[[174983152638301]][[174983169304966]]","[[174983179304965]][[174983189304964]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-snc7/419085_174987282637888_1687681742_a.jpg",
    value: ["[[174983195971630]][[174983209304962]]","[[174983219304961]][[174983229304960]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-snc7/301123_174987299304553_353768548_a.jpg",
    value: ["[[174983239304959]][[174983249304958]]","[[174983255971624]][[174983269304956]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-snc7/408894_174987305971219_1083880333_a.jpg",
    value: ["[[174983279304955]][[174983285971621]]","[[174983292638287]][[174983299304953]]"],
    title: 'smile'
  },
  { 
    imgUrl: "https://fbcdn-photos-a.akamaihd.net/hphotos-ak-snc6/251604_174987309304552_1059666377_a.jpg",
    value: ["[[174983305971619]][[174983325971617]]","[[174983339304949]][[174983345971615]]"],
    title: 'smile'
  }
  ];

})();
  