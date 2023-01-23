export type Transcript = {
  confidence: number;
  end: number;
  speaker: string;
  start: number;
  text: string;
  words: Omit<Transcript, 'words'>[];
};

export const transcript: Transcript[] = [
  {
    confidence: 0.9885085714285715,
    end: 11436,
    speaker: 'B',
    start: 8120,
    text: 'Thank you for calling Nissan. My name is Lauren. Can I have your name?',
    words: [
      {
        text: 'Thank',
        start: 8120,
        end: 8236,
        confidence: 0.997,
        speaker: 'B'
      },
      { text: 'you', start: 8258, end: 8396, confidence: 0.9986, speaker: 'B' },
      { text: 'for', start: 8418, end: 8556, confidence: 0.9998, speaker: 'B' },
      {
        text: 'calling',
        start: 8578,
        end: 8812,
        confidence: 0.99977,
        speaker: 'B'
      },
      {
        text: 'Nissan.',
        start: 8866,
        end: 9384,
        confidence: 0.94522,
        speaker: 'B'
      },
      { text: 'My', start: 9432, end: 9596, confidence: 0.99915, speaker: 'B' },
      {
        text: 'name',
        start: 9618,
        end: 9756,
        confidence: 0.99998,
        speaker: 'B'
      },
      { text: 'is', start: 9778, end: 9916, confidence: 0.99699, speaker: 'B' },
      {
        text: 'Lauren.',
        start: 9938,
        end: 10344,
        confidence: 0.96385,
        speaker: 'B'
      },
      {
        text: 'Can',
        start: 10392,
        end: 10556,
        confidence: 0.98706,
        speaker: 'B'
      },
      { text: 'I', start: 10578, end: 10668, confidence: 0.97, speaker: 'B' },
      {
        text: 'have',
        start: 10674,
        end: 10796,
        confidence: 0.98941,
        speaker: 'B'
      },
      {
        text: 'your',
        start: 10818,
        end: 11004,
        confidence: 0.99239,
        speaker: 'B'
      },
      {
        text: 'name?',
        start: 11042,
        end: 11436,
        confidence: 0.9999,
        speaker: 'B'
      }
    ]
  },
  {
    confidence: 0.92139,
    end: 13340,
    speaker: 'A',
    start: 11538,
    text: 'Yeah. My name is John Smith.',
    words: [
      {
        text: 'Yeah.',
        start: 11538,
        end: 11756,
        confidence: 0.56218,
        speaker: 'A'
      },
      {
        text: 'My',
        start: 11778,
        end: 11916,
        confidence: 0.99671,
        speaker: 'A'
      },
      {
        text: 'name',
        start: 11938,
        end: 12076,
        confidence: 0.99998,
        speaker: 'A'
      },
      { text: 'is', start: 12098, end: 12284, confidence: 0.999, speaker: 'A' },
      {
        text: 'John',
        start: 12322,
        end: 12524,
        confidence: 0.97395,
        speaker: 'A'
      },
      {
        text: 'Smith.',
        start: 12562,
        end: 13340,
        confidence: 0.99652,
        speaker: 'A'
      }
    ]
  },
  {
    confidence: 0.9763725,
    end: 15948,
    speaker: 'B',
    start: 14000,
    text: 'Thank you, John. How can I help you?',
    words: [
      {
        text: 'Thank',
        start: 14000,
        end: 14316,
        confidence: 0.99822,
        speaker: 'B'
      },
      {
        text: 'you,',
        start: 14338,
        end: 14476,
        confidence: 0.99973,
        speaker: 'B'
      },
      {
        text: 'John.',
        start: 14498,
        end: 14732,
        confidence: 0.97325,
        speaker: 'B'
      },
      {
        text: 'How',
        start: 14786,
        end: 14956,
        confidence: 0.99967,
        speaker: 'B'
      },
      {
        text: 'can',
        start: 14978,
        end: 15068,
        confidence: 0.99922,
        speaker: 'B'
      },
      { text: 'I', start: 15074, end: 15148, confidence: 0.99, speaker: 'B' },
      {
        text: 'help',
        start: 15154,
        end: 15324,
        confidence: 0.85162,
        speaker: 'B'
      },
      {
        text: 'you?',
        start: 15362,
        end: 15948,
        confidence: 0.99927,
        speaker: 'B'
      }
    ]
  },
  {
    confidence: 0.9906952631578947,
    end: 20412,
    speaker: 'A',
    start: 16114,
    text: 'I was just calling about to see how much it would cost to update the map in my car.',
    words: [
      { text: 'I', start: 16114, end: 16396, confidence: 1, speaker: 'A' },
      {
        text: 'was',
        start: 16418,
        end: 16508,
        confidence: 0.98839,
        speaker: 'A'
      },
      {
        text: 'just',
        start: 16514,
        end: 16636,
        confidence: 0.99219,
        speaker: 'A'
      },
      {
        text: 'calling',
        start: 16658,
        end: 16892,
        confidence: 0.99863,
        speaker: 'A'
      },
      {
        text: 'about',
        start: 16946,
        end: 17212,
        confidence: 0.98323,
        speaker: 'A'
      },
      { text: 'to', start: 17266, end: 17484, confidence: 0.98, speaker: 'A' },
      {
        text: 'see',
        start: 17522,
        end: 17772,
        confidence: 0.9999,
        speaker: 'A'
      },
      {
        text: 'how',
        start: 17826,
        end: 17996,
        confidence: 0.99998,
        speaker: 'A'
      },
      {
        text: 'much',
        start: 18018,
        end: 18156,
        confidence: 0.99998,
        speaker: 'A'
      },
      {
        text: 'it',
        start: 18178,
        end: 18268,
        confidence: 0.99875,
        speaker: 'A'
      },
      {
        text: 'would',
        start: 18274,
        end: 18396,
        confidence: 0.99574,
        speaker: 'A'
      },
      {
        text: 'cost',
        start: 18418,
        end: 18652,
        confidence: 0.99612,
        speaker: 'A'
      },
      { text: 'to', start: 18706, end: 18876, confidence: 1, speaker: 'A' },
      {
        text: 'update',
        start: 18898,
        end: 19176,
        confidence: 0.99967,
        speaker: 'A'
      },
      { text: 'the', start: 19208, end: 19356, confidence: 1, speaker: 'A' },
      {
        text: 'map',
        start: 19378,
        end: 19576,
        confidence: 0.99672,
        speaker: 'A'
      },
      {
        text: 'in',
        start: 19608,
        end: 19708,
        confidence: 0.89777,
        speaker: 'A'
      },
      {
        text: 'my',
        start: 19714,
        end: 19884,
        confidence: 0.99688,
        speaker: 'A'
      },
      {
        text: 'car.',
        start: 19922,
        end: 20412,
        confidence: 0.99926,
        speaker: 'A'
      }
    ]
  },
  {
    confidence: 0.9055237499999998,
    end: 24092,
    speaker: 'B',
    start: 20546,
    text: "I'd be happy to help you with that today. Did you receive a mailer from us?",
    words: [
      {
        text: "I'd",
        start: 20546,
        end: 20888,
        confidence: 0.5562,
        speaker: 'B'
      },
      {
        text: 'be',
        start: 20904,
        end: 20988,
        confidence: 0.99907,
        speaker: 'B'
      },
      {
        text: 'happy',
        start: 20994,
        end: 21164,
        confidence: 0.94445,
        speaker: 'B'
      },
      { text: 'to', start: 21202, end: 21356, confidence: 0.96, speaker: 'B' },
      {
        text: 'help',
        start: 21378,
        end: 21564,
        confidence: 0.99991,
        speaker: 'B'
      },
      {
        text: 'you',
        start: 21602,
        end: 21708,
        confidence: 0.99928,
        speaker: 'B'
      },
      {
        text: 'with',
        start: 21714,
        end: 21836,
        confidence: 0.99817,
        speaker: 'B'
      },
      { text: 'that', start: 21858, end: 22044, confidence: 1, speaker: 'B' },
      {
        text: 'today.',
        start: 22082,
        end: 22380,
        confidence: 0.94,
        speaker: 'B'
      },
      {
        text: 'Did',
        start: 22450,
        end: 22636,
        confidence: 0.97195,
        speaker: 'B'
      },
      {
        text: 'you',
        start: 22658,
        end: 22844,
        confidence: 0.54853,
        speaker: 'B'
      },
      {
        text: 'receive',
        start: 22882,
        end: 23144,
        confidence: 0.94941,
        speaker: 'B'
      },
      { text: 'a', start: 23192, end: 23356, confidence: 0.94, speaker: 'B' },
      {
        text: 'mailer',
        start: 23378,
        end: 23656,
        confidence: 0.94557,
        speaker: 'B'
      },
      {
        text: 'from',
        start: 23688,
        end: 23836,
        confidence: 0.97584,
        speaker: 'B'
      },
      { text: 'us?', start: 23858, end: 24092, confidence: 0.76, speaker: 'B' }
    ]
  },
  {
    confidence: 0.99473125,
    end: 26508,
    speaker: 'A',
    start: 24146,
    text: 'I did. Do you need the customer number?',
    words: [
      { text: 'I', start: 24146, end: 24316, confidence: 1, speaker: 'A' },
      {
        text: 'did.',
        start: 24338,
        end: 24860,
        confidence: 0.98998,
        speaker: 'A'
      },
      {
        text: 'Do',
        start: 25010,
        end: 25276,
        confidence: 0.99442,
        speaker: 'A'
      },
      {
        text: 'you',
        start: 25298,
        end: 25388,
        confidence: 0.9971,
        speaker: 'A'
      },
      {
        text: 'need',
        start: 25394,
        end: 25516,
        confidence: 0.9997,
        speaker: 'A'
      },
      { text: 'the', start: 25538, end: 25724, confidence: 0.98, speaker: 'A' },
      {
        text: 'customer',
        start: 25762,
        end: 26060,
        confidence: 0.99956,
        speaker: 'A'
      },
      {
        text: 'number?',
        start: 26130,
        end: 26508,
        confidence: 0.99709,
        speaker: 'A'
      }
    ]
  },
  {
    confidence: 0.9959199999999999,
    end: 27372,
    speaker: 'B',
    start: 26594,
    text: 'Yes, please.',
    words: [
      {
        text: 'Yes,',
        start: 26594,
        end: 26844,
        confidence: 0.99786,
        speaker: 'B'
      },
      {
        text: 'please.',
        start: 26882,
        end: 27372,
        confidence: 0.99398,
        speaker: 'B'
      }
    ]
  },
  {
    confidence: 0.857456,
    end: 31460,
    speaker: 'A',
    start: 27506,
    text: "Okay, it's 5243 thank you.",
    words: [
      {
        text: 'Okay,',
        start: 27506,
        end: 27996,
        confidence: 0.90897,
        speaker: 'A'
      },
      {
        text: "it's",
        start: 28098,
        end: 28720,
        confidence: 0.42637,
        speaker: 'A'
      },
      {
        text: '5243',
        start: 28840,
        end: 30390,
        confidence: 0.98,
        speaker: 'A'
      },
      {
        text: 'thank',
        start: 30840,
        end: 31156,
        confidence: 0.99715,
        speaker: 'A'
      },
      {
        text: 'you.',
        start: 31178,
        end: 31460,
        confidence: 0.97479,
        speaker: 'A'
      }
    ]
  },
  {
    confidence: 0.9700444444444444,
    end: 33584,
    speaker: 'B',
    start: 31530,
    text: 'And the year, make and model of your vehicle?',
    words: [
      { text: 'And', start: 31530, end: 31812, confidence: 0.91, speaker: 'B' },
      { text: 'the', start: 31866, end: 32036, confidence: 0.99, speaker: 'B' },
      {
        text: 'year,',
        start: 32058,
        end: 32196,
        confidence: 0.98497,
        speaker: 'B'
      },
      {
        text: 'make',
        start: 32218,
        end: 32404,
        confidence: 0.98589,
        speaker: 'B'
      },
      { text: 'and', start: 32442, end: 32548, confidence: 0.99, speaker: 'B' },
      {
        text: 'model',
        start: 32554,
        end: 32724,
        confidence: 0.87444,
        speaker: 'B'
      },
      { text: 'of', start: 32762, end: 32916, confidence: 1, speaker: 'B' },
      {
        text: 'your',
        start: 32938,
        end: 33028,
        confidence: 0.99908,
        speaker: 'B'
      },
      {
        text: 'vehicle?',
        start: 33034,
        end: 33584,
        confidence: 0.99602,
        speaker: 'B'
      }
    ]
  },
  {
    confidence: 0.9337471428571428,
    end: 37280,
    speaker: 'A',
    start: 33712,
    text: 'Yeah, I have a 2009 Nissan Altima.',
    words: [
      {
        text: 'Yeah,',
        start: 33712,
        end: 34004,
        confidence: 0.90635,
        speaker: 'A'
      },
      { text: 'I', start: 34042, end: 34196, confidence: 1, speaker: 'A' },
      {
        text: 'have',
        start: 34218,
        end: 34404,
        confidence: 0.99871,
        speaker: 'A'
      },
      { text: 'a', start: 34442, end: 34596, confidence: 0.94, speaker: 'A' },
      {
        text: '2009',
        start: 34618,
        end: 35636,
        confidence: 0.78,
        speaker: 'A'
      },
      {
        text: 'Nissan',
        start: 35738,
        end: 36304,
        confidence: 0.96859,
        speaker: 'A'
      },
      {
        text: 'Altima.',
        start: 36352,
        end: 37280,
        confidence: 0.94258,
        speaker: 'A'
      }
    ]
  },
  {
    confidence: 0.86917,
    end: 38612,
    speaker: 'B',
    start: 37440,
    text: 'Oh, nice car.',
    words: [
      { text: 'Oh,', start: 37440, end: 37764, confidence: 0.61, speaker: 'B' },
      {
        text: 'nice',
        start: 37802,
        end: 38052,
        confidence: 0.99909,
        speaker: 'B'
      },
      {
        text: 'car.',
        start: 38106,
        end: 38612,
        confidence: 0.99842,
        speaker: 'B'
      }
    ]
  },
  {
    confidence: 0.9646114285714287,
    end: 40916,
    speaker: 'A',
    start: 38746,
    text: 'Yeah, thank you. We really enjoy it.',
    words: [
      {
        text: 'Yeah,',
        start: 38746,
        end: 39140,
        confidence: 0.82549,
        speaker: 'A'
      },
      {
        text: 'thank',
        start: 39210,
        end: 39396,
        confidence: 0.99479,
        speaker: 'A'
      },
      {
        text: 'you.',
        start: 39418,
        end: 39556,
        confidence: 0.99876,
        speaker: 'A'
      },
      {
        text: 'We',
        start: 39578,
        end: 39716,
        confidence: 0.99727,
        speaker: 'A'
      },
      {
        text: 'really',
        start: 39738,
        end: 39924,
        confidence: 0.99666,
        speaker: 'A'
      },
      {
        text: 'enjoy',
        start: 39962,
        end: 40212,
        confidence: 0.99999,
        speaker: 'A'
      },
      {
        text: 'it.',
        start: 40266,
        end: 40916,
        confidence: 0.93932,
        speaker: 'A'
      }
    ]
  },
  {
    confidence: 0.9470347368421052,
    end: 46552,
    speaker: 'B',
    start: 41098,
    text: 'Okay, I think I found your profile here. Can I have you verify your address and phone number, please?',
    words: [
      {
        text: 'Okay,',
        start: 41098,
        end: 41444,
        confidence: 0.96162,
        speaker: 'B'
      },
      { text: 'I', start: 41482, end: 41636, confidence: 0.97, speaker: 'B' },
      {
        text: 'think',
        start: 41658,
        end: 41796,
        confidence: 0.99969,
        speaker: 'B'
      },
      { text: 'I', start: 41818, end: 41956, confidence: 1, speaker: 'B' },
      {
        text: 'found',
        start: 41978,
        end: 42164,
        confidence: 0.99896,
        speaker: 'B'
      },
      {
        text: 'your',
        start: 42202,
        end: 42368,
        confidence: 0.99573,
        speaker: 'B'
      },
      {
        text: 'profile',
        start: 42394,
        end: 42804,
        confidence: 0.99995,
        speaker: 'B'
      },
      { text: 'here.', start: 42852, end: 43256, confidence: 1, speaker: 'B' },
      {
        text: 'Can',
        start: 43358,
        end: 43576,
        confidence: 0.99715,
        speaker: 'B'
      },
      { text: 'I', start: 43598, end: 43688, confidence: 0.99, speaker: 'B' },
      {
        text: 'have',
        start: 43694,
        end: 43768,
        confidence: 0.98828,
        speaker: 'B'
      },
      {
        text: 'you',
        start: 43774,
        end: 43896,
        confidence: 0.88937,
        speaker: 'B'
      },
      {
        text: 'verify',
        start: 43918,
        end: 44292,
        confidence: 0.9977,
        speaker: 'B'
      },
      {
        text: 'your',
        start: 44356,
        end: 44584,
        confidence: 0.99925,
        speaker: 'B'
      },
      {
        text: 'address',
        start: 44622,
        end: 44968,
        confidence: 0.99996,
        speaker: 'B'
      },
      { text: 'and', start: 45054, end: 45352, confidence: 0.55, speaker: 'B' },
      {
        text: 'phone',
        start: 45406,
        end: 45624,
        confidence: 0.77921,
        speaker: 'B'
      },
      {
        text: 'number,',
        start: 45662,
        end: 45960,
        confidence: 0.87718,
        speaker: 'B'
      },
      {
        text: 'please?',
        start: 46030,
        end: 46552,
        confidence: 0.99961,
        speaker: 'B'
      }
    ]
  },
  {
    confidence: 0.9085194444444444,
    end: 58030,
    speaker: 'A',
    start: 46686,
    text: "Yes, it's 1255 North Research Way. That's in Oram, Utah. 84097. And my phone number is 801431 1000.",
    words: [
      {
        text: 'Yes,',
        start: 46686,
        end: 47320,
        confidence: 0.98296,
        speaker: 'A'
      },
      {
        text: "it's",
        start: 47470,
        end: 47892,
        confidence: 0.88461,
        speaker: 'A'
      },
      {
        text: '1255',
        start: 47956,
        end: 48792,
        confidence: 0.75,
        speaker: 'A'
      },
      {
        text: 'North',
        start: 48846,
        end: 49332,
        confidence: 0.97992,
        speaker: 'A'
      },
      {
        text: 'Research',
        start: 49396,
        end: 49768,
        confidence: 0.97467,
        speaker: 'A'
      },
      {
        text: 'Way.',
        start: 49854,
        end: 50488,
        confidence: 0.79225,
        speaker: 'A'
      },
      {
        text: "That's",
        start: 50654,
        end: 51028,
        confidence: 0.97641,
        speaker: 'A'
      },
      {
        text: 'in',
        start: 51044,
        end: 51224,
        confidence: 0.74379,
        speaker: 'A'
      },
      {
        text: 'Oram,',
        start: 51262,
        end: 51604,
        confidence: 0.56291,
        speaker: 'A'
      },
      {
        text: 'Utah.',
        start: 51652,
        end: 52132,
        confidence: 0.99623,
        speaker: 'A'
      },
      {
        text: '84097.',
        start: 52196,
        end: 53720,
        confidence: 0.89,
        speaker: 'A'
      },
      { text: 'And', start: 53870, end: 54136, confidence: 0.92, speaker: 'A' },
      {
        text: 'my',
        start: 54158,
        end: 54344,
        confidence: 0.99424,
        speaker: 'A'
      },
      {
        text: 'phone',
        start: 54382,
        end: 54536,
        confidence: 0.99987,
        speaker: 'A'
      },
      {
        text: 'number',
        start: 54558,
        end: 54840,
        confidence: 0.99951,
        speaker: 'A'
      },
      {
        text: 'is',
        start: 54910,
        end: 55144,
        confidence: 0.99598,
        speaker: 'A'
      },
      {
        text: '801431',
        start: 55182,
        end: 55612,
        confidence: 0.95,
        speaker: 'A'
      },
      {
        text: '1000.',
        start: 55666,
        end: 58030,
        confidence: 0.96,
        speaker: 'A'
      }
    ]
  },
  {
    confidence: 0.9482558333333334,
    end: 74610,
    speaker: 'B',
    start: 58400,
    text: 'Thanks. John, I located your information. The newest version we have available for your vehicle is version 7.7, which was released in March of 2012. The price of the new map is $99, plus shipping and tax. Let me go ahead and set up this order for you.',
    words: [
      {
        text: 'Thanks.',
        start: 58400,
        end: 58812,
        confidence: 0.99961,
        speaker: 'B'
      },
      {
        text: 'John,',
        start: 58866,
        end: 59084,
        confidence: 0.96811,
        speaker: 'B'
      },
      { text: 'I', start: 59122, end: 59276, confidence: 1, speaker: 'B' },
      {
        text: 'located',
        start: 59298,
        end: 59624,
        confidence: 0.99881,
        speaker: 'B'
      },
      {
        text: 'your',
        start: 59672,
        end: 59836,
        confidence: 0.99847,
        speaker: 'B'
      },
      {
        text: 'information.',
        start: 59858,
        end: 60430,
        confidence: 0.993,
        speaker: 'B'
      },
      { text: 'The', start: 61040, end: 61356, confidence: 1, speaker: 'B' },
      {
        text: 'newest',
        start: 61378,
        end: 61656,
        confidence: 0.9988,
        speaker: 'B'
      },
      {
        text: 'version',
        start: 61688,
        end: 61976,
        confidence: 0.5244,
        speaker: 'B'
      },
      {
        text: 'we',
        start: 62008,
        end: 62156,
        confidence: 0.9974,
        speaker: 'B'
      },
      {
        text: 'have',
        start: 62178,
        end: 62316,
        confidence: 0.99908,
        speaker: 'B'
      },
      {
        text: 'available',
        start: 62338,
        end: 62668,
        confidence: 0.9976,
        speaker: 'B'
      },
      {
        text: 'for',
        start: 62754,
        end: 62956,
        confidence: 0.99972,
        speaker: 'B'
      },
      {
        text: 'your',
        start: 62978,
        end: 63116,
        confidence: 0.99651,
        speaker: 'B'
      },
      {
        text: 'vehicle',
        start: 63138,
        end: 63384,
        confidence: 0.99959,
        speaker: 'B'
      },
      {
        text: 'is',
        start: 63432,
        end: 63644,
        confidence: 0.56237,
        speaker: 'B'
      },
      {
        text: 'version',
        start: 63682,
        end: 64024,
        confidence: 0.98794,
        speaker: 'B'
      },
      {
        text: '7.7,',
        start: 64072,
        end: 65020,
        confidence: 0.99,
        speaker: 'B'
      },
      {
        text: 'which',
        start: 65090,
        end: 65324,
        confidence: 0.99973,
        speaker: 'B'
      },
      {
        text: 'was',
        start: 65362,
        end: 65564,
        confidence: 0.99956,
        speaker: 'B'
      },
      {
        text: 'released',
        start: 65602,
        end: 66120,
        confidence: 0.99919,
        speaker: 'B'
      },
      {
        text: 'in',
        start: 66200,
        end: 66396,
        confidence: 0.99943,
        speaker: 'B'
      },
      {
        text: 'March',
        start: 66418,
        end: 66744,
        confidence: 0.83,
        speaker: 'B'
      },
      { text: 'of', start: 66792, end: 67052, confidence: 0.99, speaker: 'B' },
      {
        text: '2012.',
        start: 67106,
        end: 68316,
        confidence: 0.99,
        speaker: 'B'
      },
      { text: 'The', start: 68498, end: 68796, confidence: 1, speaker: 'B' },
      {
        text: 'price',
        start: 68818,
        end: 69004,
        confidence: 0.99978,
        speaker: 'B'
      },
      { text: 'of', start: 69042, end: 69196, confidence: 0.62, speaker: 'B' },
      { text: 'the', start: 69218, end: 69308, confidence: 1, speaker: 'B' },
      { text: 'new', start: 69314, end: 69436, confidence: 1, speaker: 'B' },
      {
        text: 'map',
        start: 69458,
        end: 69656,
        confidence: 0.99536,
        speaker: 'B'
      },
      {
        text: 'is',
        start: 69688,
        end: 69884,
        confidence: 0.99066,
        speaker: 'B'
      },
      {
        text: '$99,',
        start: 69922,
        end: 70700,
        confidence: 0.88,
        speaker: 'B'
      },
      {
        text: 'plus',
        start: 70770,
        end: 71004,
        confidence: 0.98275,
        speaker: 'B'
      },
      {
        text: 'shipping',
        start: 71042,
        end: 71288,
        confidence: 0.99483,
        speaker: 'B'
      },
      { text: 'and', start: 71304, end: 71448, confidence: 0.78, speaker: 'B' },
      {
        text: 'tax.',
        start: 71474,
        end: 72096,
        confidence: 0.99819,
        speaker: 'B'
      },
      {
        text: 'Let',
        start: 72278,
        end: 72576,
        confidence: 0.99945,
        speaker: 'B'
      },
      {
        text: 'me',
        start: 72598,
        end: 72736,
        confidence: 0.99996,
        speaker: 'B'
      },
      {
        text: 'go',
        start: 72758,
        end: 72848,
        confidence: 0.99996,
        speaker: 'B'
      },
      {
        text: 'ahead',
        start: 72854,
        end: 73024,
        confidence: 0.91667,
        speaker: 'B'
      },
      { text: 'and', start: 73062, end: 73168, confidence: 1, speaker: 'B' },
      {
        text: 'set',
        start: 73174,
        end: 73296,
        confidence: 0.99989,
        speaker: 'B'
      },
      {
        text: 'up',
        start: 73318,
        end: 73408,
        confidence: 0.98065,
        speaker: 'B'
      },
      {
        text: 'this',
        start: 73414,
        end: 73584,
        confidence: 0.5592,
        speaker: 'B'
      },
      {
        text: 'order',
        start: 73622,
        end: 73824,
        confidence: 0.99975,
        speaker: 'B'
      },
      {
        text: 'for',
        start: 73862,
        end: 74016,
        confidence: 0.99997,
        speaker: 'B'
      },
      {
        text: 'you.',
        start: 74038,
        end: 74610,
        confidence: 0.99989,
        speaker: 'B'
      }
    ]
  },
  {
    confidence: 0.9891166666666665,
    end: 79010,
    speaker: 'A',
    start: 74980,
    text: "Well, can we wait just a second? I'm not really sure if I can afford it right now.",
    words: [
      {
        text: 'Well,',
        start: 74980,
        end: 75584,
        confidence: 0.96081,
        speaker: 'A'
      },
      {
        text: 'can',
        start: 75702,
        end: 75936,
        confidence: 0.99954,
        speaker: 'A'
      },
      {
        text: 'we',
        start: 75958,
        end: 76048,
        confidence: 0.99008,
        speaker: 'A'
      },
      {
        text: 'wait',
        start: 76054,
        end: 76224,
        confidence: 0.99882,
        speaker: 'A'
      },
      {
        text: 'just',
        start: 76262,
        end: 76416,
        confidence: 0.96839,
        speaker: 'A'
      },
      { text: 'a', start: 76438, end: 76528, confidence: 0.99, speaker: 'A' },
      {
        text: 'second?',
        start: 76534,
        end: 76704,
        confidence: 1,
        speaker: 'A'
      },
      {
        text: "I'm",
        start: 76742,
        end: 76956,
        confidence: 0.94468,
        speaker: 'A'
      },
      {
        text: 'not',
        start: 76988,
        end: 77136,
        confidence: 0.99997,
        speaker: 'A'
      },
      {
        text: 'really',
        start: 77158,
        end: 77296,
        confidence: 0.99952,
        speaker: 'A'
      },
      { text: 'sure', start: 77318, end: 77456, confidence: 1, speaker: 'A' },
      {
        text: 'if',
        start: 77478,
        end: 77616,
        confidence: 0.99964,
        speaker: 'A'
      },
      { text: 'I', start: 77638, end: 77728, confidence: 1, speaker: 'A' },
      {
        text: 'can',
        start: 77734,
        end: 77808,
        confidence: 0.99847,
        speaker: 'A'
      },
      {
        text: 'afford',
        start: 77814,
        end: 78044,
        confidence: 0.96081,
        speaker: 'A'
      },
      {
        text: 'it',
        start: 78092,
        end: 78256,
        confidence: 0.99452,
        speaker: 'A'
      },
      {
        text: 'right',
        start: 78278,
        end: 78416,
        confidence: 0.99885,
        speaker: 'A'
      },
      { text: 'now.', start: 78438, end: 79010, confidence: 1, speaker: 'A' }
    ]
  },
  {
    confidence: 0.9681640476190475,
    end: 91412,
    speaker: 'B',
    start: 79380,
    text: "All right, well, here are a few reasons to consider purchasing today. It looks as though you haven't updated your vehicle for three years. So that would be the equivalent of getting three years worth of updates for the price of one.",
    words: [
      { text: 'All', start: 79380, end: 79648, confidence: 0.97, speaker: 'B' },
      {
        text: 'right,',
        start: 79654,
        end: 79872,
        confidence: 0.9467,
        speaker: 'B'
      },
      {
        text: 'well,',
        start: 79926,
        end: 80192,
        confidence: 0.9847,
        speaker: 'B'
      },
      { text: 'here', start: 80246, end: 80464, confidence: 1, speaker: 'B' },
      {
        text: 'are',
        start: 80502,
        end: 80656,
        confidence: 0.99979,
        speaker: 'B'
      },
      { text: 'a', start: 80678, end: 80768, confidence: 1, speaker: 'B' },
      {
        text: 'few',
        start: 80774,
        end: 80944,
        confidence: 0.99996,
        speaker: 'B'
      },
      {
        text: 'reasons',
        start: 80982,
        end: 81356,
        confidence: 0.99929,
        speaker: 'B'
      },
      { text: 'to', start: 81388, end: 81488, confidence: 1, speaker: 'B' },
      {
        text: 'consider',
        start: 81494,
        end: 81808,
        confidence: 0.55678,
        speaker: 'B'
      },
      {
        text: 'purchasing',
        start: 81894,
        end: 82492,
        confidence: 0.99944,
        speaker: 'B'
      },
      { text: 'today.', start: 82556, end: 83170, confidence: 1, speaker: 'B' },
      {
        text: 'It',
        start: 83640,
        end: 83908,
        confidence: 0.99801,
        speaker: 'B'
      },
      {
        text: 'looks',
        start: 83914,
        end: 84084,
        confidence: 0.86676,
        speaker: 'B'
      },
      {
        text: 'as',
        start: 84122,
        end: 84276,
        confidence: 0.96547,
        speaker: 'B'
      },
      {
        text: 'though',
        start: 84298,
        end: 84436,
        confidence: 0.99953,
        speaker: 'B'
      },
      {
        text: 'you',
        start: 84458,
        end: 84596,
        confidence: 0.99947,
        speaker: 'B'
      },
      {
        text: "haven't",
        start: 84618,
        end: 84816,
        confidence: 0.99118,
        speaker: 'B'
      },
      {
        text: 'updated',
        start: 84848,
        end: 85232,
        confidence: 0.99605,
        speaker: 'B'
      },
      {
        text: 'your',
        start: 85296,
        end: 85428,
        confidence: 0.99922,
        speaker: 'B'
      },
      {
        text: 'vehicle',
        start: 85434,
        end: 85744,
        confidence: 0.98612,
        speaker: 'B'
      },
      {
        text: 'for',
        start: 85792,
        end: 86004,
        confidence: 0.99937,
        speaker: 'B'
      },
      { text: 'three', start: 86042, end: 86292, confidence: 1, speaker: 'B' },
      {
        text: 'years.',
        start: 86346,
        end: 86900,
        confidence: 0.99994,
        speaker: 'B'
      },
      {
        text: 'So',
        start: 87050,
        end: 87364,
        confidence: 0.92253,
        speaker: 'B'
      },
      { text: 'that', start: 87402, end: 87556, confidence: 1, speaker: 'B' },
      {
        text: 'would',
        start: 87578,
        end: 87716,
        confidence: 0.9989,
        speaker: 'B'
      },
      {
        text: 'be',
        start: 87738,
        end: 87924,
        confidence: 0.99979,
        speaker: 'B'
      },
      { text: 'the', start: 87962, end: 88116, confidence: 1, speaker: 'B' },
      {
        text: 'equivalent',
        start: 88138,
        end: 88544,
        confidence: 0.92792,
        speaker: 'B'
      },
      { text: 'of', start: 88592, end: 88756, confidence: 1, speaker: 'B' },
      {
        text: 'getting',
        start: 88778,
        end: 89012,
        confidence: 0.99991,
        speaker: 'B'
      },
      { text: 'three', start: 89066, end: 89236, confidence: 1, speaker: 'B' },
      {
        text: 'years',
        start: 89258,
        end: 89444,
        confidence: 0.97776,
        speaker: 'B'
      },
      {
        text: 'worth',
        start: 89482,
        end: 89684,
        confidence: 0.99977,
        speaker: 'B'
      },
      { text: 'of', start: 89722, end: 89876, confidence: 1, speaker: 'B' },
      {
        text: 'updates',
        start: 89898,
        end: 90144,
        confidence: 0.98546,
        speaker: 'B'
      },
      {
        text: 'for',
        start: 90192,
        end: 90356,
        confidence: 0.89322,
        speaker: 'B'
      },
      { text: 'the', start: 90378, end: 90516, confidence: 1, speaker: 'B' },
      {
        text: 'price',
        start: 90538,
        end: 90724,
        confidence: 0.99985,
        speaker: 'B'
      },
      { text: 'of', start: 90762, end: 90916, confidence: 1, speaker: 'B' },
      { text: 'one.', start: 90938, end: 91412, confidence: 0.7, speaker: 'B' }
    ]
  },
  {
    confidence: 0.90274,
    end: 92228,
    speaker: 'A',
    start: 91546,
    text: 'Okay.',
    words: [
      {
        text: 'Okay.',
        start: 91546,
        end: 92228,
        confidence: 0.90274,
        speaker: 'A'
      }
    ]
  },
  {
    confidence: 0.945977037037037,
    end: 102352,
    speaker: 'B',
    start: 92394,
    text: "In addition, special offers like the current promotion don't come around too often. I would definitely recommend taking advantage of the extra $50 off before it expires.",
    words: [
      {
        text: 'In',
        start: 92394,
        end: 92724,
        confidence: 0.9997,
        speaker: 'B'
      },
      {
        text: 'addition,',
        start: 92762,
        end: 93120,
        confidence: 0.97992,
        speaker: 'B'
      },
      {
        text: 'special',
        start: 93200,
        end: 93540,
        confidence: 0.91704,
        speaker: 'B'
      },
      {
        text: 'offers',
        start: 93610,
        end: 93968,
        confidence: 0.99957,
        speaker: 'B'
      },
      {
        text: 'like',
        start: 93984,
        end: 94164,
        confidence: 0.71,
        speaker: 'B'
      },
      { text: 'the', start: 94202, end: 94308, confidence: 1, speaker: 'B' },
      {
        text: 'current',
        start: 94314,
        end: 94532,
        confidence: 0.83008,
        speaker: 'B'
      },
      {
        text: 'promotion',
        start: 94586,
        end: 95152,
        confidence: 0.84798,
        speaker: 'B'
      },
      {
        text: "don't",
        start: 95216,
        end: 95456,
        confidence: 0.77471,
        speaker: 'B'
      },
      {
        text: 'come',
        start: 95488,
        end: 95636,
        confidence: 0.99941,
        speaker: 'B'
      },
      {
        text: 'around',
        start: 95658,
        end: 95892,
        confidence: 0.99921,
        speaker: 'B'
      },
      {
        text: 'too',
        start: 95946,
        end: 96164,
        confidence: 0.99693,
        speaker: 'B'
      },
      {
        text: 'often.',
        start: 96202,
        end: 96788,
        confidence: 0.99997,
        speaker: 'B'
      },
      { text: 'I', start: 96954, end: 97236, confidence: 1, speaker: 'B' },
      {
        text: 'would',
        start: 97258,
        end: 97492,
        confidence: 0.65794,
        speaker: 'B'
      },
      {
        text: 'definitely',
        start: 97546,
        end: 97860,
        confidence: 0.99988,
        speaker: 'B'
      },
      {
        text: 'recommend',
        start: 97930,
        end: 98308,
        confidence: 0.99982,
        speaker: 'B'
      },
      {
        text: 'taking',
        start: 98394,
        end: 98692,
        confidence: 0.99973,
        speaker: 'B'
      },
      {
        text: 'advantage',
        start: 98746,
        end: 99136,
        confidence: 0.99786,
        speaker: 'B'
      },
      { text: 'of', start: 99168, end: 99316, confidence: 1, speaker: 'B' },
      { text: 'the', start: 99338, end: 99476, confidence: 1, speaker: 'B' },
      {
        text: 'extra',
        start: 99498,
        end: 99780,
        confidence: 0.99978,
        speaker: 'B'
      },
      { text: '$50', start: 99850, end: 100580, confidence: 1, speaker: 'B' },
      {
        text: 'off',
        start: 100650,
        end: 100932,
        confidence: 0.89583,
        speaker: 'B'
      },
      {
        text: 'before',
        start: 100986,
        end: 101204,
        confidence: 0.99969,
        speaker: 'B'
      },
      {
        text: 'it',
        start: 101242,
        end: 101444,
        confidence: 0.97036,
        speaker: 'B'
      },
      {
        text: 'expires.',
        start: 101482,
        end: 102352,
        confidence: 0.96597,
        speaker: 'B'
      }
    ]
  },
  {
    confidence: 0.9507233333333334,
    end: 104556,
    speaker: 'A',
    start: 102496,
    text: 'Yeah, that does sound pretty good.',
    words: [
      {
        text: 'Yeah,',
        start: 102496,
        end: 102852,
        confidence: 0.7628,
        speaker: 'A'
      },
      {
        text: 'that',
        start: 102906,
        end: 103124,
        confidence: 0.98,
        speaker: 'A'
      },
      {
        text: 'does',
        start: 103162,
        end: 103316,
        confidence: 0.99409,
        speaker: 'A'
      },
      {
        text: 'sound',
        start: 103338,
        end: 103524,
        confidence: 0.9885,
        speaker: 'A'
      },
      {
        text: 'pretty',
        start: 103562,
        end: 103836,
        confidence: 0.99889,
        speaker: 'A'
      },
      {
        text: 'good.',
        start: 103898,
        end: 104556,
        confidence: 0.98006,
        speaker: 'A'
      }
    ]
  },
  {
    confidence: 0.9678042424242422,
    end: 113580,
    speaker: 'B',
    start: 104738,
    text: "If I set this order up for you now, it'll ship out today, and for $50 less. Do you have your credit card handy and I can place this order for you now?",
    words: [
      {
        text: 'If',
        start: 104738,
        end: 105036,
        confidence: 0.96473,
        speaker: 'B'
      },
      { text: 'I', start: 105058, end: 105148, confidence: 1, speaker: 'B' },
      {
        text: 'set',
        start: 105154,
        end: 105324,
        confidence: 0.99679,
        speaker: 'B'
      },
      {
        text: 'this',
        start: 105362,
        end: 105516,
        confidence: 0.99491,
        speaker: 'B'
      },
      {
        text: 'order',
        start: 105538,
        end: 105724,
        confidence: 0.99968,
        speaker: 'B'
      },
      {
        text: 'up',
        start: 105762,
        end: 105916,
        confidence: 0.98715,
        speaker: 'B'
      },
      {
        text: 'for',
        start: 105938,
        end: 106028,
        confidence: 0.99936,
        speaker: 'B'
      },
      {
        text: 'you',
        start: 106034,
        end: 106156,
        confidence: 0.98008,
        speaker: 'B'
      },
      { text: 'now,', start: 106178, end: 106508, confidence: 1, speaker: 'B' },
      {
        text: "it'll",
        start: 106594,
        end: 106856,
        confidence: 0.60156,
        speaker: 'B'
      },
      {
        text: 'ship',
        start: 106888,
        end: 107096,
        confidence: 0.97642,
        speaker: 'B'
      },
      {
        text: 'out',
        start: 107128,
        end: 107324,
        confidence: 0.9989,
        speaker: 'B'
      },
      {
        text: 'today,',
        start: 107362,
        end: 107852,
        confidence: 1,
        speaker: 'B'
      },
      {
        text: 'and',
        start: 107986,
        end: 108284,
        confidence: 0.93,
        speaker: 'B'
      },
      {
        text: 'for',
        start: 108322,
        end: 108524,
        confidence: 0.99422,
        speaker: 'B'
      },
      { text: '$50', start: 108562, end: 109180, confidence: 1, speaker: 'B' },
      {
        text: 'less.',
        start: 109250,
        end: 109964,
        confidence: 0.99716,
        speaker: 'B'
      },
      {
        text: 'Do',
        start: 110162,
        end: 110476,
        confidence: 0.99801,
        speaker: 'B'
      },
      {
        text: 'you',
        start: 110498,
        end: 110588,
        confidence: 0.99853,
        speaker: 'B'
      },
      {
        text: 'have',
        start: 110594,
        end: 110668,
        confidence: 0.99986,
        speaker: 'B'
      },
      {
        text: 'your',
        start: 110674,
        end: 110796,
        confidence: 0.98321,
        speaker: 'B'
      },
      {
        text: 'credit',
        start: 110818,
        end: 111004,
        confidence: 0.99993,
        speaker: 'B'
      },
      {
        text: 'card',
        start: 111042,
        end: 111244,
        confidence: 0.99983,
        speaker: 'B'
      },
      {
        text: 'handy',
        start: 111282,
        end: 111624,
        confidence: 0.99018,
        speaker: 'B'
      },
      {
        text: 'and',
        start: 111672,
        end: 111884,
        confidence: 0.96,
        speaker: 'B'
      },
      { text: 'I', start: 111922, end: 112028, confidence: 1, speaker: 'B' },
      {
        text: 'can',
        start: 112034,
        end: 112156,
        confidence: 0.8994,
        speaker: 'B'
      },
      {
        text: 'place',
        start: 112178,
        end: 112364,
        confidence: 0.99856,
        speaker: 'B'
      },
      {
        text: 'this',
        start: 112402,
        end: 112556,
        confidence: 0.98177,
        speaker: 'B'
      },
      {
        text: 'order',
        start: 112578,
        end: 112764,
        confidence: 0.99879,
        speaker: 'B'
      },
      {
        text: 'for',
        start: 112802,
        end: 112908,
        confidence: 0.99714,
        speaker: 'B'
      },
      {
        text: 'you',
        start: 112914,
        end: 113036,
        confidence: 0.72137,
        speaker: 'B'
      },
      {
        text: 'now?',
        start: 113058,
        end: 113580,
        confidence: 0.99,
        speaker: 'B'
      }
    ]
  },
  {
    confidence: 0.9062227272727273,
    end: 118410,
    speaker: 'A',
    start: 113730,
    text: "Yeah, let's go ahead and use a Visa. My number is.",
    words: [
      {
        text: 'Yeah,',
        start: 113730,
        end: 114430,
        confidence: 0.86711,
        speaker: 'A'
      },
      {
        text: "let's",
        start: 115360,
        end: 115768,
        confidence: 0.91437,
        speaker: 'A'
      },
      {
        text: 'go',
        start: 115784,
        end: 115868,
        confidence: 0.99927,
        speaker: 'A'
      },
      {
        text: 'ahead',
        start: 115874,
        end: 115948,
        confidence: 0.99474,
        speaker: 'A'
      },
      {
        text: 'and',
        start: 115954,
        end: 116076,
        confidence: 0.66,
        speaker: 'A'
      },
      {
        text: 'use',
        start: 116098,
        end: 116236,
        confidence: 0.99563,
        speaker: 'A'
      },
      { text: 'a', start: 116258, end: 116348, confidence: 0.91, speaker: 'A' },
      {
        text: 'Visa.',
        start: 116354,
        end: 117100,
        confidence: 0.99865,
        speaker: 'A'
      },
      {
        text: 'My',
        start: 117520,
        end: 117884,
        confidence: 0.69878,
        speaker: 'A'
      },
      {
        text: 'number',
        start: 117922,
        end: 118220,
        confidence: 0.99543,
        speaker: 'A'
      },
      {
        text: 'is.',
        start: 118290,
        end: 118410,
        confidence: 0.93447,
        speaker: 'A'
      }
    ]
  }
];
