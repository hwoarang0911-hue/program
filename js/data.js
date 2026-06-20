const CONCERT = {
  title: "시간 위에 쌓인 소리",
  titleEn: "RESONANCE SHAPED BY TIME",
  event: "YEONEUM · 연음 창립 5주년 기념 정기연주회",
  date: "2026년 6월 27일 토요일",
  time: "오후 2시",
  venue: "서울문화예술교육센터 서초 서울체임버홀",
  intro: `'연음'은 피아노를 사랑하는 직장인들이 모여 음악을 나누고 함께 성장해가는 모임입니다. 바쁜 일상 속에서도 각자의 자리에서 피아노를 붙든 추억 속 시간을 오늘 공간에 피아노와 함께로 모였습니다. 이 무대는 여러분과 나누고 싶은 그 시간들 위에 쌓인 소리입니다.`,
  programs: [
    {
      id: "program1",
      label: "Program 1",
      pieces: [
        {
          id: "p1_01",
          composer: "L. V. BEETHOVEN",
          composerKo: "베토벤",
          title: "Piano Sonata No. 15 in D major, Op. 28",
          movement: "I. Allegro",
          description: "베토벤의 14번째 피아노 소나타로, '전원(Pastoral)'이라는 별칭으로 널리 알려진 이 작품은 작곡가 자신이 붙인 이름은 아니지만 D장조의 맑고 평온한 성격에 딱 맞는 이름입니다. 1악장은 낮고 고요한 베이스 페달 음 위로 서정적인 멜로디가 천천히 피어오르며 전원의 풍경을 그립니다. 격정보다 내면의 평화를 노래하는, 베토벤의 또 다른 얼굴입니다.",
          estimatedTime: "약 8분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p1_02",
          composer: "J. S. BACH",
          composerKo: "바흐",
          title: "Partita No. 1 in B♭ major, BWV 825",
          movement: "I. Prelude",
          description: "바흐가 1726년부터 출판하기 시작한 건반악기 파르티타 1번의 첫 악장입니다. B♭장조의 밝고 명쾌한 음색으로 시작하는 프렐류드는 바로크 음악의 정교함과 즉흥성이 공존합니다. 빠르게 흐르는 16분음표 패시지 안에 바흐 특유의 균형감과 수학적 질서가 숨어 있으며, 듣는 이로 하여금 자연스럽게 다음 음을 기다리게 만드는 흡입력이 있습니다.",
          estimatedTime: "약 3분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p1_03",
          composer: "M. RAVEL",
          composerKo: "라벨",
          title: "Sonatine, M. 40",
          movement: "II. Mouvement de menuet",
          description: "라벨이 1905년 완성한 소나티네의 2악장으로, 고전 미뉴에트의 형식을 20세기의 감각으로 재해석한 소품입니다. 라벨의 음악은 흔히 '유리 공예품'에 비유되는데, 이 악장이 그 예입니다. 섬세하고 우아한 선율 사이사이에 반짝이는 불협화음과 인상주의적 색채가 스며들어 있어, 짧지만 여운이 깊습니다.",
          estimatedTime: "약 3분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p1_04",
          composer: "R. SCHUMANN / F. LISZT",
          composerKo: "슈만 / 리스트",
          title: "Widmung, S. 566",
          movement: "",
          description: "슈만이 1840년 아내 클라라에게 헌정한 가곡 '헌정(Widmung)'을 리스트가 피아노 독주용으로 편곡한 작품입니다. 슈만 원곡의 순수한 사랑 고백을 리스트는 중간부에 화려한 오르간 풍의 음형을 더해 더욱 숭고하게 빚어냈습니다. 곡 마지막에 슈베르트의 주제가 인용되는 부분은 두 작곡가 사이의 오마주로 읽히기도 합니다.",
          estimatedTime: "약 4분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p1_05",
          composer: "F. SCHUBERT",
          composerKo: "슈베르트",
          title: "Drei Klavierstücke in E♭ major, D. 946",
          movement: "No. 2",
          description: "슈베르트가 세상을 떠나기 직전인 1828년에 작곡한 세 편의 피아노 소품 중 두 번째 곡입니다. E♭장조의 따뜻한 주제가 흐르다가 갑자기 내면으로 침잠하는 단조 에피소드가 등장하고, 다시 빛을 향해 돌아오는 구조가 반복됩니다. 슈베르트 말년의 음악이 가진 독특한 빛과 그늘의 교차, 그리고 가곡 같은 서정성이 잘 드러나는 작품입니다.",
          estimatedTime: "약 8분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p1_06",
          composer: "F. LISZT",
          composerKo: "리스트",
          title: "Les Jeux d'eau à la Villa d'Este, S. 163",
          movement: "No. 4 (Années de Pèlerinage III)",
          description: "이탈리아 티볼리의 빌라 데스테 정원에 있는 분수를 음악으로 옮긴 리스트 말년의 걸작입니다. 1877년 작곡된 이 곡은 드뷔시와 라벨의 인상주의 음악을 예고하는 선구적인 작품으로 평가받습니다. 높은 음역에서 쏟아지는 물방울 같은 아르페지오, 반짝이는 트릴, 깊은 울림의 베이스가 물과 빛의 이미지를 생생하게 그려냅니다.",
          estimatedTime: "약 8분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p1_07",
          composer: "F. CHOPIN",
          composerKo: "쇼팽",
          title: "Polonaise No. 6 in A♭ major, Op. 53",
          movement: "\"Héroïque\" (영웅)",
          description: "쇼팽의 피아노 음악 중 가장 웅장하고 강렬한 곡 중 하나로, '영웅'이라는 부제로 널리 알려진 작품입니다. 폴란드 민족 무곡인 폴로네즈 리듬 위에 조국을 향한 열정적 애국심이 폭발합니다. 중간부에 등장하는 왼손의 옥타브 행진은 말을 탄 기병대를 연상케 하며, 결말의 빛나는 A♭장조 화음은 마치 승리의 함성처럼 울려 퍼집니다.",
          estimatedTime: "약 7분",
          performerName: "",
          performerComment: ""
        }
      ]
    },
    {
      id: "program2",
      label: "Program 2",
      pieces: [
        {
          id: "p2_01",
          composer: "F. CHOPIN",
          composerKo: "쇼팽",
          title: "Nocturne in B major, Op. 9",
          movement: "No. 1",
          description: "쇼팽이 1832년 출판한 첫 번째 녹턴 모음집의 첫 곡입니다. 왼손의 넓게 펼쳐진 아르페지오 위로 오른손이 B장조의 서정적인 선율을 노래합니다. 첫 마디부터 깊은 밤의 고요함과 달빛 같은 분위기가 가득합니다. 쇼팽 특유의 장식음(ornament)이 마치 목소리로 부르는 이탈리아 오페라 선율처럼 흐르는 것이 이 곡의 매력입니다.",
          estimatedTime: "약 6분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p2_02",
          composer: "E. GRANADOS",
          composerKo: "그라나도스",
          title: "Allegro de Concierto, Op. 65",
          movement: "",
          description: "스페인의 낭만주의 작곡가 엔리케 그라나도스가 1903년 마드리드 음악원의 피아노 교수 임용 시험 과제로 작곡한 곡입니다. 협주곡의 독주 악장처럼 장대한 스케일과 화려한 피아노 기교를 요구합니다. 스페인 민속 음악의 정열적인 리듬과 색채감이 넘쳐흐르며, 서정적인 중간 주제와 불꽃 튀는 피날레가 인상적입니다.",
          estimatedTime: "약 11분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p2_03",
          composer: "F. LISZT",
          composerKo: "리스트",
          title: "La Campanella, S. 161",
          movement: "No. 3 (Grandes Études de Paganini)",
          description: "파가니니의 바이올린 협주곡 2번 마지막 악장의 주제를 리스트가 피아노용으로 편곡한 작품입니다. '라 캄파넬라'는 이탈리아어로 '작은 종'을 뜻하며, 고음역의 맑고 경쾌한 선율이 반복되는 종소리를 닮았습니다. 넓은 도약, 빠른 크로마틱 스케일, 정확한 트릴이 요구되는 이 곡은 세계에서 가장 어려운 피아노곡 중 하나로 꼽힙니다.",
          estimatedTime: "약 5분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p2_04",
          composer: "N. MEDTNER",
          composerKo: "메트너",
          title: "Reminiscenza in A minor, Op. 38",
          movement: "No. 1 (Fairy Tales)",
          description: "러시아 피아니스트이자 작곡가인 니콜라이 메트너의 '동화집 Op.38' 첫 번째 곡입니다. '회상(Reminiscenza)'이라는 제목처럼 어떤 아련한 기억의 파편들이 음악으로 흐릅니다. 라흐마니노프와 같은 시대를 살았지만 낭만주의적 어법을 더욱 깊이 파고든 메트너의 섬세한 화성 언어와 시적 감수성이 잘 드러나는 소품입니다.",
          estimatedTime: "약 4분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p2_05",
          composer: "F. CHOPIN",
          composerKo: "쇼팽",
          title: "Nocturne in C minor, Op. 48",
          movement: "No. 1",
          description: "쇼팽의 모든 녹턴 중 가장 웅장하고 비극적인 작품으로 평가받습니다. C단조의 묵직한 개시부는 단순한 야상곡의 범주를 넘어 깊은 철학적 성찰을 담고 있습니다. 중간부에 나타나는 장엄한 코랄 주제는 마치 인간이 거대한 운명 앞에 서 있는 듯한 경외감을 자아내며, 다시 C단조로 돌아오는 재현부는 어두운 필연처럼 느껴집니다.",
          estimatedTime: "약 8분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p2_06",
          composer: "J. BRAHMS",
          composerKo: "브람스",
          title: "Piano Sonata No. 3 in F minor, Op. 5",
          movement: "V. Finale: Allegro moderato",
          description: "스무 살 브람스가 완성한 세 번째 피아노 소나타의 마지막 악장입니다. F단조의 강렬한 에너지로 시작해 서정적인 제2주제가 빛을 향해 달려가는 구조입니다. 청년의 열정과 이미 완숙한 브람스의 건축적 사고가 공존하는 이 악장은 방대한 소나타 전체를 힘차게 매듭짓습니다. 마지막 화음에서 피날레의 확신이 울려 퍼집니다.",
          estimatedTime: "약 9분",
          performerName: "",
          performerComment: ""
        },
        {
          id: "p2_07",
          composer: "S. RACHMANINOFF",
          composerKo: "라흐마니노프",
          title: "Piano Sonata No. 2 in B♭ minor, Op. 36 (1931 version)",
          movement: "I. Allegro agitato",
          description: "라흐마니노프가 1913년 작곡하고 1931년 대폭 개정한 2번 소나타의 1악장입니다. B♭단조의 격렬한 개시부는 말 그대로 폭풍(Allegro agitato)입니다. 거대한 화음과 끊임없이 흐르는 16분음표의 물결이 교차하며 러시아 낭만주의의 웅장함을 만들어 냅니다. 1931년 개정판은 원곡보다 구조가 간결해졌지만 음악적 밀도는 오히려 더욱 강해진 버전입니다.",
          estimatedTime: "약 9분",
          performerName: "",
          performerComment: ""
        }
      ]
    }
  ]
};

const ADMIN_PW = "0627";

async function loadData() {
  try {
    const snap = await db.collection("concert").doc("main").get();
    const base = JSON.parse(JSON.stringify(CONCERT));
    if (snap.exists) {
      const saved = snap.data();
      base.programs.forEach(prog => {
        prog.pieces.forEach(piece => {
          if (saved[piece.id]) {
            piece.description     = saved[piece.id].description     ?? piece.description;
            piece.performerComment = saved[piece.id].performerComment ?? "";
          }
        });
      });
    }
    return base;
  } catch (e) {
    console.error("Firestore load error:", e);
    return JSON.parse(JSON.stringify(CONCERT));
  }
}

async function saveData(data) {
  const payload = {};
  data.programs.forEach(prog => {
    prog.pieces.forEach(piece => {
      payload[piece.id] = {
        description:      piece.description      || "",
        performerComment: piece.performerComment || ""
      };
    });
  });
  await db.collection("concert").doc("main").set(payload);
}
