document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".LoginPop").classList.add("active");
});

document.querySelector(".LoginPop .close-btn").addEventListener("click",function(){
    document.querySelector(".LoginPop").classList.remove("active");
});

function showPass(){
    var showBtn = document.getElementById("viewPass");
    var show = document.getElementById("password");

    if (show.type == "password"){
        show.type = "text";
        showBtn.style.color = "red"
        showBtn.title = "Hide password"
    }
    else{
        show.type = "password"
        showBtn.style.color = "black"
        showBtn.title = "Show password"
    }
}

function watchVid(){
    var trailer = document.getElementById("trailerVid");
    var ponyoTrailer = document.getElementById("ponyoTrailer");

    if (trailer.style.opacity == 0){
        trailer.style.opacity = 1;
        trailer.style.zIndex = 3;
        ponyoTrailer.play();
    }
}

document.addEventListener("keydown", function (board) {
    if (board.keyCode == 27) {
        // Set the trailer's opacity to 0
        var trailer = document.getElementById("trailerVid");
        trailer.style.opacity = 0;
        trailer.style.zIndex = -1;
        ponyoTrailer.pause();
    }
});

var imageList = document.querySelectorAll('.image-element');

imageList.forEach(function (element) {
    element.addEventListener('click', function (event) {
        const imgID = event.target.id;
        const synopsis = document.getElementById('synopsis');
        const movieTrailer = document.getElementById('ponyoTrailer');
        const year = document.getElementById('year');
        const title = document.getElementById('title');
        const transparent = document.getElementById('transImg');
        const background = document.getElementById('bgImg');
        const movieData = getMovieData(imgID);

        if (movieData) {
            synopsis.innerHTML = movieData.synopsis;
            movieTrailer.src = movieData.trailer;
            transparent.src = movieData.transImg;
            background.src = movieData.bgImg;
            year.innerHTML = movieData.year;
            title.innerHTML = movieData.title;
            
        }

        switch (imgID) {
            case 'nausicaa':
                title.style.fontSize = '2.5em'; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop = 0;
                break;

            case 'castleSky':
                title.style.fontSize = '4em'; 
                transparent.style.width = '34em';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break;         
        
            case 'neighborTotoro':
                title.style.fontSize = '3.3em'; 
                transparent.style.width = '20em';
                transparent.style.translate = '13em';
                document.documentElement.scrollTop= 0;
                break; 
            
            case 'deliveryService':
                title.style.fontSize = '2.7em'; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break; 

            case 'onlyYesterday':
                title.style.fontSize = '4em'; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break; 

            case 'porcoRosso':
                title.style.fontSize = '3.5em'; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break; 

            case 'pomPoko':
                title.style.fontSize = '4em'; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break; 

            case 'whisperHeart':
                title.style.fontSize = '3.5em'; 
                transparent.style.width = '31em';
                transparent.style.translate = '2.5em';
                document.documentElement.scrollTop= 0;
                break; 

            case 'princessMononoke':
                title.style.fontSize = '4em'; 
                transparent.style.width = '40em';
                transparent.style.translate = '-6.5em';
                document.documentElement.scrollTop= 0;
                break; 
                
            case 'neighborYamada':
                title.style.fontSize = '3em'; 
                transparent.style.width = '32em';
                transparent.style.translate = '1.5em';
                document.documentElement.scrollTop= 0;
                break; 
                
            case 'spiritedAway':
                title.style.fontSize = '4em'; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break; 
                
            case 'catReturn':
                title.style.fontSize = '4em'; 
                transparent.style.width = '33.5em';
                transparent.style.translate = '.1em';
                document.documentElement.scrollTop= 0;
                break; 
                
            case 'movingCastle':
                title.style.fontSize = '3em'; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break; 
                
            case 'talesEarthsea':
                title.style.fontSize = '4em'; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break; 
                
            case 'arriety':
                title.style.fontSize = '3.3em'; 
                transparent.style.width = '31em';
                transparent.style.translate = '1em';
                document.documentElement.scrollTop= 0;
                break; 
                
            case 'poppyHill':
                title.style.fontSize = '3.5em'; 
                transparent.style.width = '30em';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break; 
                
            case 'princessKaguya':
                title.style.fontSize = '3em'; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break; 
                
            case 'windRises':
                title.style.fontSize = '4em'; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break; 
                
            case 'marnie':
                title.style.fontSize = '3.1em'; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop= 0;
                break; 
                
            case 'redTurtle':
                title.style.fontSize = '4em'; 
                transparent.style.width = '40em';
                transparent.style.translate = '-6em';
                document.documentElement.scrollTop= 0;
                break; 
                
            default:
                title.style.fontSize = ''; 
                transparent.style.width = '';
                transparent.style.translate = '';
                document.documentElement.scrollTop = 0;
                break;
        }
    });
});

function getMovieData(imgID){
switch (imgID){
    case 'nausicaa':
        return{
            synopsis : `Far in the future, after an apocalyptic conflict has devastated much of the world's ecosystem, the few surviving humans live in scattered semi-hospitable environments within what has become a "toxic jungle." Young Nausicaä lives in the arid Valley of the Wind and can communicate with the massive insects that populate the dangerous jungle. Under the guidance of the pensive veteran warrior, Lord Yupa, Nausicaä works to bring peace back to the ravaged planet.`,
            trailer : `videos/nausicaa_trailer.mp4`,
            year : '1984',
            title : 'Nausicaä of the Valley of the Wind',
            transImg : 'images/transparent/nausicaa.png',
            bgImg : 'images/background/bg_nausicaa.jpg'
        };
    
    case 'castleSky':
        return{
            synopsis: "Young orphan Sheeta and her kidnapper, Col. Muska, are flying to a military prison when their plane is attacked by a gang of air pirates led by the matronly Dola. Escaping from a mid-air collision via a magic crystal around her neck, Sheeta meets fellow orphan Pazu and the pair join forces to discover the mystical floating city of Laputa while pursued by both Muska and the pirates, who lust for the city's myriad treasures.",
            trailer: 'videos/castlesky-trailer.mp4',
            year: '1986',
            title: 'Castle in the Sky',
            transImg : 'images/transparent/castle.png',
            bgImg : 'images/background/bg_skycastle.jpg'
        };
    
    case 'neighborTotoro':
        return{
            synopsis: 'This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro.',
            trailer: 'videos/neighbortotoro-trailer.mp4',
            year: '1988',
            title: 'My Neighbor Totoro',
            transImg : 'images/transparent/totoro.png',
            bgImg : 'images/background/bg_totoro.jpg'
        };
    
    case 'deliveryService':
        return{
            synopsis: "13-year-old Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village's tradition for witches in training. After learning to control her broomstick, Kiki sets up a flying courier service and soon becomes a fixture in the community. But when the insecure young witch begins questioning herself and loses her magic abilities, she must overcome her self-doubt to get her powers back.",
            trailer: 'videos/kikideliver-trailer.mp4',
            year: '1989',
            title: "Kiki's Delivery Service",
            transImg : 'images/transparent/kiki.png',
            bgImg : 'images/background/bg_kikidelivery.jpg'
        };

    case 'onlyYesterday':
        return{
            synopsis: "Unmarried career woman Taeko Okajima (Miki Imai) takes her first extended trip outside her native Tokyo when she travels to rural Yamagata to visit her sister's family during the annual safflower harvest. On the train, Taeko daydreams about her pre-adolescent self. As her vacation progresses, she has extended flashbacks about the frustrations and small pleasures of her childhood, and wonders if her stress-filled adult life is what the young Taeko would have wanted for herself.",
            trailer: 'videos/onlyyesterday-trailer.mp4',
            year: '1991',
            title: 'Only Yesterday',
            transImg : 'images/transparent/yesterday.png',
            bgImg : 'images/background/bg_onlyyesterday.jpg'
        };

    case 'porcoRosso':
        return{
            synopsis: "In Italy in the 1930s, sky pirates in biplanes terrorize wealthy cruise ships as they sail the Adriatic Sea. The only pilot brave enough to stop the scourge is the mysterious Porco Rosso (Shuichiro Moriyama), a former World War I flying ace who was somehow turned into a pig during the war. As he prepares to battle the pirate crew's American ace, Porco Rosso enlists the help of spunky girl mechanic Fio Piccolo (Akemi Okamura) and his longtime friend Madame Gina (Tokiko Kato).",
            trailer: 'videos/porcorosso-trailer.mp4',
            year: '1992',
            title: 'Porco Rosso',
            transImg : 'images/transparent/porco.png',
            bgImg : 'images/background/bg_porcorosso.jpg'
        };

    case 'pomPoko':
        return{
            synopsis: "Isao Takahata's film uses the tanuki, creatures of myth, as his heroes. Beloved folk-tale characters, they are viewed as bringers of fortune with shape-changing abilities. In this film, their forest home is threatened by urban development and, to save it, they must use all their supernatural talents.",
            trailer: 'videos/pomPoko-trailer.mp4',
            year: '1994',
            title: 'Pom Poko',
            transImg : 'images/transparent/poko.png',
            bgImg : 'images/background/bg_pompoko.jpg'
        };
   
    case 'whisperHeart':
        return{
            synopsis: 'Shizuku, an inquisitive young girl and a voracious reader, who longs to be a writer when she grows up. One day she notices that all of her library books have previously been taken out by one Seiji Amasawa. Amid chasing after a large cat, befriending an eccentric antiques dealer and writing her first novel, Shizuku aims to find this mysterious boy who may well be her soul mate.',
            trailer: 'videos/wisperheart-trailer.mp4',
            year: '1995',
            title: 'Whisper of the Heart',
            transImg : 'images/transparent/whisper.png',
            bgImg : 'images/background/bg_whisperheart.jpg'
        };

    case 'princessMononoke':
        return{
            synopsis: "In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict.",
            trailer: 'videos/mononoke-trailer.mp4',
            year: '1997',
            title: 'Princess Mononoke',
            transImg : 'images/transparent/mononoke.png',
            bgImg : 'images/background/bg_mononoke.jpg'
        };

    case 'neighborYamada':
        return{
            synopsis: 'The Yamadas are a normal Japanese family. Father Takashi and his wife Matsuke argue over a TV remote control, Grandma Shige always brightens the day with her proverbs and daughter Nanoko likes to get lost in a shopping centre.',
            trailer: 'videos/neighboryamada-trailer.mp4',
            year: '1999',
            title: 'My Neighbors the Yamadas',
            transImg : 'images/transparent/yamada.png',
            bgImg : 'images/background/bg_yamada.jpg'
        };

    case 'spiritedAway':
        return{
            synopsis: 'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.',
            trailer: 'videos/spiritedaway-trailer.mp4',
            year: '2001',
            title: 'Spirited Away',
            transImg : 'images/transparent/spirited.png',
            bgImg : 'images/background/bg_spiritedaway.jpg'
        };

    case 'catReturn':
        return{
            synopsis: "High school student Haru (Chizuru Ikewaki) rescues a cat that was about to be run over by a truck and discovers the cat is actually a prince named Lune. Out of gratitude, Lune's father, the Cat King, asks her to marry Lune. Haru is brought to the Cat Kingdom, where she starts to develop feline features. When she is prevented from leaving, the Baron (Yoshihiko Hakamada) and Toto, two statues that have magically been given life, provide assistance in gaining her freedom.",
            trailer: 'videos/catreturn-trailer.mp4',
            year: '2002',
            title: 'The Cat Returns',
            transImg : 'images/transparent/cat.png',
            bgImg : 'images/background/bg_catreturn.jpg'
        };

    case 'movingCastle':
        return{
            synopsis: "Sophie (Emily Mortimer) has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl (Christian Bale), who lives in a magical flying castle. However, the evil Witch of Waste (Lauren Bacall) takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty.",
            trailer: 'videos/movingcastle-trailer.mp4',
            year: '2004',
            title: "Howl's Moving Castle",
            transImg : 'images/transparent/howls.png',
            bgImg : 'images/background/bg_movingcastle.jpg'
        };

    case 'talesEarthsea':
        return{
            synopsis: "In the land of Earthsea, a mysterious force threatens to plunge humanity into destruction and chaos. A powerful wizard named Sparrowhawk seeks the source of his world's imbalance, and along the way rescues a runaway prince named Arren. When Sparrowhawk's powers begin to weaken, he and Arren must join forces with a former priestess and her daughter to defeat an evil foe whose quest for immortality will destroy Earthsea.",
            trailer: 'videos/earthsea-trailer.mp4',
            year: '2006',
            title: 'Tales from Earthsea',
            transImg : 'images/transparent/earthsea.png',
            bgImg : 'images/background/bg_earthsea.jpg'
        };

    case 'arriety':
        return{
            synopsis: "Arrietty, a tiny teenager, lives with her parents in the recesses of a suburban home, unbeknown to the homeowner and housekeeper. Like others of her kind, Arrietty remains hidden from her human hosts, but occasionally ventures forth from beneath the floorboards to borrow sugar cubes and other supplies. A secret friendship forms when 12-year-old Shawn meets Arrietty, but their relationship could spell danger for Arrietty's family.",
            trailer: 'videos/arriety-trailer.mp4',
            year: '2010',
            title: 'Secret World of Arriety',
            transImg : 'images/transparent/arriety.png',
            bgImg : 'images/background/bg_arriety.jpg'
        };

    case 'poppyHill':
        return{
            synopsis: "It's 1963 and Japan is in the midst of swift modernisation, leaving behind the Second World War's painful memories and focusing on a brighter future, symbolised by the coming year's Tokyo Olympics.",
            trailer: 'videos/poppyhill-trailer.mp4',
            year: '2011',
            title: 'From Up on Poppy Hill',
            transImg : 'images/transparent/poppy.png',
            bgImg : 'images/background/bg_poppyhill.jpg'
        };

    case 'princessKaguya':
        return{
            synopsis: "A tiny nymph found inside a bamboo stalk grows into a beautiful and desirable young woman. She orders her suitors to prove their love by completing a series of near-impossible tasks.",
            trailer: 'videos/kaguya-trailer.mp4',
            year: '2013',
            title: 'The Tale of Princess Kaguya',
            transImg : 'images/transparent/kaguya.png',
            bgImg : 'images/background/bg_kaguya.jpg'
        };

    case 'windRises':
        return{
            synopsis: "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi (Hideaki Anno), whose storied career includes the creation of the A6M World War II fighter plane.",
            trailer: 'videos/windrises-trailer.mp4',
            year: '2013',
            title: 'The Wind Rises',
            transImg : 'images/transparent/wind.png',
            bgImg : 'images/background/bg_windrises.jpg'
        };

    case 'marnie':
        return{
            synopsis: "A young girl is sent to the country for health reasons, where she meets an unlikely friend in the form of Marnie, a young girl with flowing blonde hair. As the friendship unravels Marnie has closer ties to the protagonist than we might expect.",
            trailer: 'videos/marnie-trailer.mp4',
            year: '2014',
            title: 'When Marnie Was There',
            transImg : 'images/transparent/marnie.png',
            bgImg : 'images/background/bg_marnie.jpg'
        };

    case 'redTurtle':
        return{
            synopsis: "A massive sea turtle destroys a stranded man's raft every time he tries to sail away from a tropical island.",
            trailer: 'videos/redturtle-trailer.mp4',
            year: '2016',
            title: 'The Red Turtle',
            transImg : 'images/transparent/turtle.png',
            bgImg : 'images/background/bg_redturtle.jpg'
        };

        default:
            return{
            synopsis: "During a forbidden excursion to see the surface world, a goldfish princess encounters a human boy named Sosuke, who gives her the name Ponyo. Ponyo longs to become human, and as her friendship with Sosuke grows, she becomes more humanlike. Ponyo's father brings her back to their ocean kingdom, but so strong is Ponyo's wish to live on the surface that she breaks free, and in the process, spills a collection of magical elixirs that endanger Sosuke's village.",
            trailer: 'videos/ponyo-trailer.mp4',
            year: '2008',
            title: 'Ponyo',
            transImg : 'images/transparent/Traponyo.png',
            bgImg : 'images/background/bgPon.jpg'
            };
    }
}
