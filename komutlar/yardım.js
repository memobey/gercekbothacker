const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
	  	  let mesaj = args.slice(0).join(' ');

if (mesaj === "") {
const embed1 = new Discord.RichEmbed()
		.setTitle("**KOMUTLAR**")
		.setColor(0x00AE86)
		.setThumbnail("https://cdn0.iconfinder.com/data/icons/cosmo-multimedia/40/terminal_application-512.png")
        .addField(':arrow_right:**EĞLENCE KOMUTLARI**',`${prefix}help eğlence`, true)
        ////.addField('**MÜZİK KOMUTLARI**',`${prefix}help müzik`, true)
        .addField(':arrow_right:**YARDIMCI KOMUTLAR**', `${prefix}help yardımcı`, true)
        .addField(':arrow_right:**MODERATÖR KOMUTLARI**',`${prefix}help moderatör`, true)
		.addField(':arrow_right:**SAHİP KOMUTLARI**',`${prefix}help sahip`, true)
		.addField(':arrow_right:**MÜZİK**',`${prefix}help müzik **BAKIMDA**`, true)
message.channel.send(embed1);
}

		  ////eğlence
 if (mesaj === "eğlence") {
	const embed2 = new Discord.RichEmbed()
		.setTitle("**EĞLENCE KOMUTLARI**")
		.setColor(0x00AE86)
		.setThumbnail("https://t6.rbxcdn.com/35aaf7b5feea791a6df46401600d6ce1")
		.setDescription(`**:arrow_right:.8ball**:Sihirli 8ball sorduğunuz soruyu cevaplar.:white_check_mark:
**:arrow_right:.emojiyazı**:Mesajınızı emojiye çevirir.:white_check_mark:
**:arrow_right:.mesajküçült**:Mesajınızı küçültür.:white_check_mark:
**:arrow_right:.leet**:Mesajınızı leet haline getirir.:white_check_mark:
**:arrow_right:.stresçarkı**:Stres çarkı çevirir.:white_check_mark:
**:arrow_right:.ascii**:Mesajınızı ascii formatına çevirir.:white_check_mark:
**:arrow_right:.çekiç**:Belirtilen kişiye çekiç atar.:white_check_mark:
**:arrow_right:.yemekler**:Yemek Menüsünü Gösterir.:white_check_mark:
**:arrow_right:.gif**:Gif Paylaşıyor.:white_check_mark:
**:arrow_right:.dalgageç**:Oyuncularla Dalga Geçmenize Yarıyor.:white_check_mark:
**:arrow_right:.rank**:Rankızını Gösterir.:white_check_mark:
**:arrow_right:.gizlimesaj**:Mesajınızı gizli bir mesaja çevirir.:white_check_mark:
**:arrow_right:.dalgageç**:Başkaları ile dalga geçer.:white_check_mark:
**:arrow_right:.grandayy**:fotoya grandayy yazısı ekler.:white_check_mark:
**:arrow_right:.yazıtura**:Yazı tura atar.:white_check_mark:
**:arrow_right:.lucy**:Lucy The Axe hakkında bilgi verir.:white_check_mark:
**:arrow_right:.mesajdöndür**:Mesajınızı tersden yazar.:white_check_mark:
**:arrow_right:.yaz**:İstediğiniz şeyi bota yazdırır.:white_check_mark:
**:arrow_right:.trump**:Mesajınızı illegal hale getirir.:white_check_mark:
**:arrow_right:.woodie**:Woodie The Lumberjack hakkında bilgi verir. :white_check_mark: `)
message.channel.send(embed2);
}

if (mesaj === "müzik") {
	////müzik
	const embed3 = new Discord.RichEmbed()
		.setTitle("**MÜZİK KOMUTLARI**")
		.setColor(0x00AE86)
		.setThumbnail("https://yt3.ggpht.com/pHwZj3tkgC3SJFbuqebBoT7WtVcIwAijEmcbe9VDCauv9ZlG6uS2zjvZQUSO7SfFqa3xjYqGp_L4QbM7=s900-mo-c-c0xffffffff-rj-k-no")
		.setDescription(`**-join**:Mesajı gönderenin kanalına katılır.
**:no_entry_sign: .leave**:Mesajı gönderenin kanalından ayrılır.
**:no_entry_sign: .add**: Link/Şarkı adı ile sıraya şarkı ekler.
**:no_entry_sign: .queue**:Kuyruğu gösterir.
**:no_entry_sign: .play**:Sıradaki şarkıyı oynatır.
**BAKIMDA**
:AŞAĞIDAKI KOMUTLAR YALNIZCA PLAY KOMUTU ÇALIŞIYORKEN ÇALIŞIR:
**BAKIMDA**
**:no_entry_sign: .pause**:Müziği duraklatır.
**:no_entry_sign: .resume**:Müziği sürdürür.
**:no_entry_sign: .skip**:Çalmakta olan şarkıyı atlar.
**:no_entry_sign: .volume+(+++)**:Ses şiddetini 2%/+ kadar arttırır.
**:no_entry_sign: .volume-(---)**:Ses şiddetini 2%/- kadar azaltır.`)
	message.channel.send(embed3);
}
if (mesaj === "yardımcı") {
	////yardımcı
	const embed4 = new Discord.RichEmbed()
		.setTitle("**YARDIMCI KOMUTLAR**")
		.setColor(0x00AE86)
		.setThumbnail("https://www.acelerartech.com/wp-content/uploads/2017/01/Virtual-Assistant-single.png")
		.setDescription(`**.davet**:Botu sunucunuza davet etmeniz için davet linkini gönderir.:white_check_mark:
**:arrow_right:.avatar**:Kendi avatarımızı/Birinin avatarını görmenizi sağlar.:white_check_mark:
**:arrow_right:.botbilgi**:Bot ile ilgili bilgi verir.:white_check_mark:
**:arrow_right:.bsohbet**:Bot İle Sohbet Mesajlarını Görüntüler.:white_check_mark:
**:arrow_right:.hesapla**:Belirtilen işlemi yapar.:white_check_mark:
**:arrow_right:.ping**:Botun pingini gösterir.:white_check_mark:
**:arrow_right:.kullanıcıbilgim**:Komutu kullanan kişi hakkında bilgi verir.:white_check_mark:
**:arrow_right:.kısalt**:Linkinizi kısaltır.:white_check_mark:
**:arrow_right:.report**:Kişiyi şikayet eder.:white_check_mark:
**:arrow_right:.hesapla**:Matematik işlemi yapar.:white_check_mark:
**:arrow_right:.sunucubilgi**:Sunucu hakkında bilgi verir.:white_check_mark:
**:arrow_right:.severicon**:Sunucu Resminin Linkini Atar.:white_check_mark:
**:arrow_right:.yardım**:Tüm komutları gösterir.:white_check_mark:
**:arrow_right:.yapımcı**:Botun Yapımcısı Hakkında Bilgi Verir.:white_check_mark:
**:arrow_right:.youtube**:Youtube Hakkında Bilgi Verir.:white_check_mark:
**:arrow_right:.yenilikler**:Yenilikleri Gösterir.:white_check_mark:
**:arrow_right:.sor**:Bu komut bota soru sorar ama bakımda.:white_check_mark:
**:arrow_right:.songörülme**:oyuncunun son görülmesini gösterir.:white_check_mark:
**:arrow_right:.öneri**:Kuruculara Öneri Mesajı Atmanızı Sağlar.:white_check_mark:
**:arrow_right:.şifre**:Rastgele bir şifre oluşturur. :white_check_mark: `)
	message.channel.send(embed4);
}
if (mesaj === "moderatör") {
	////moderatör
	const embed5 = new Discord.RichEmbed()
		.setTitle("**MODERATÖR KOMUTLARI**")
		.setColor(0x00AE86)
		.setThumbnail("https://vignette.wikia.nocookie.net/club-penguin-rewritten/images/8/86/Modpin.png/revision/latest?cb=20180103214614")
		.setDescription(`**.ban**:İstediğiniz kişiyi banlar.:white_check_mark:
**:arrow_right:.kick**:İstediğiniz kişiyi sunucudan atar.:white_check_mark:
**:arrow_right:.sustur**:İstediğiniz kişiyi  susturur.:white_check_mark:
**:arrow_right:.kilit-**:İstediğiniz Kanalı Kilitler(Ama Tam Yetki Olması Lazım.):white_check_mark:
**:arrow_right:.temizle**:Belirlenen miktar mesajı siler.:white_check_mark:
**:arrow_right:.rolekle**:Rol Eklemeninizi Sağlar.:white_check_mark:
**:arrow_right:.rolsil**:Rol Silmenizi Sağlar.:white_check_mark:
**:arrow_right:.sustur**:Oyuncuyu Susturmanızı Sağlar:white_check_mark:
**:arrow_right:.unban**:İstediğiniz kişinin banını kaldırır.:white_check_mark:
**:arrow_right:.uyar**:İstediğiniz kişiyi uyarır. :white_check_mark: `)
	message.channel.send(embed5);
}
if (mesaj === "sahip") {
	////sahip
		const embed6 = new Discord.RichEmbed()
		.setTitle("**SAHİP KOMUTLARI**")
		.setColor(0x00AE86)
		.setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBffPwoNvIMDOsSu6MN0TcqFxB-7fqFeJTuQz-22v36yY3ISS")
		.setDescription(`**-eval**:Kod denemek için kullanılır.:white_check_mark: 
**:arrow_right:.load**:Yeni eklenen komutu yükler.:white_check_mark: 
**:arrow_right:.rr**:Botu yeniden başlatır.:white_check_mark: 
**:arrow_right:.reboot**: Aklından Bile Geçirme.:white_check_mark: 
**:arrow_right:.unload**:İstediğiniz bir komutu devre dışı bırakır.:white_check_mark: 
`)
	message.channel.send(embed6);
}

  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
