$(function () {

var colors = ['#EA614A', '#20649B', '#008836', '#6B96CA', '#A38456', '#A87A93', '#D19C95']

//                      4K         ANO        ČSSD        KDU        KSČM      ODA        ODS        Piráti     SPD        SPR-RSČ    STAN       SZ         TOP 09			US        Úsvit      VV         průměr
var casovaRadaColors = ['#00A366', '#2B2B5D', '#FF4C00', '#FFCA00', '#9B0000', '#003891', '#0050A1', '#000000', '#FF0000', '#FF0000', '#A8CA4B', '#5CC14C', '#8F5D76', '#9D3583', '#FF1A42', '#00B0F1', '#AAAAAA'];

var casovaRadaSvetla = [null, '#8a8aa6', '#ff9d73', '#ffe273', '#c87373', null, '#739fcb', '#737373', '#ff7373', null, '#cfe29c', null, '#c1a6b4', null, null, null, null];

var casovaRada4K = [null, null, 79.9, null, null, null, null];

var casovaRadaANO = [null, null, null, null, null, 90.1, 92.2];

var casovaRadaCSSD = [85.2, 88.1, 85.4, 83.6, 80.3, 84.5, 83.9];

var casovaRadaKDU = [88.1, 85.8, null, 76.2, null, 86.7, 90.3];

var casovaRadaKSCM = [89.6, 85.4, 85.2, 86.4, 88.8, 90.6, 88.3];

var casovaRadaODA = [84.7, null, null, null, null, null, null];

var casovaRadaODS = [86.6, 85.4, 77.7, 83.1, 87.7, 91.8, 92.1];

var casovaRadaPirati = [null, null, null, null, null, null, 92.6];

var casovaRadaSPD = [null, null, null, null, null, null, 96.7];

var casovaRadaSPR = [98.0, null, null, null, null, null, null];

var casovaRadaSTAN = [null, null, null, null, null, null, 89.5];

var casovaRadaSZ = [null, null, null, 83.5, null, null, null];

var casovaRadaTOP = [null, null, null, null, 91.3, 88.9, 89.6];

var casovaRadaUS = [null, 86.2, null, null, null, null, null];

var casovaRadaUsvit = [null, null, null, null, null, 80.1, null];

var casovaRadaVV = [null, null, null, null, 82.1, null, null];

var casovaRadaPrumer = [88.7, 86.2, 82.1, 82.6, 86.0, 87.5, 90.6];

var casovaRadaLegenda = ['1996-1998', '1998-2002', '2002-2006', '2006-2010', '2010-2013', '2013-2017', '2017-2019'];

var poslanciANOvetsina = ["Jaroslava Pokorná Jermanová","David Štolpa","Kamal Farhan","Stanislav Fridrich","Josef Bělica","Jiří Strýček","Petr Vrána","Marek Novák","Milan Pour","Milan Hnilička","Michal Ratiborský","Roman Kubíček","Miloslav Janulík","Stanislav Berkovec","Pavel Růžička","Jan Kubík","Pavel Pustějovský","Radek Zlesák","František Petrtýl","Jan Schiller","Lenka Dražilová","Jiří Bláha","Jana Pastuchová","Monika Oborná","Eva Fialová","Robert Králíček","Jaroslav Kytýr","Ivan Jáč","Andrea Babišová","Petr Sadovský","Miloslava Rutová","Jiří Hlavatý","Tomáš Kohoutek","Barbora Kořanová","Zuzana Ožanová","David Kasal","Radka Maxová","Ivo Vondrák","Jaroslav Bžoch","Marcela Melková","Andrea Brzobohatá","Taťána Malá","Karel Rais","David Pražák","Robert Pelikán","Margita Balaštíková","Rostislav Vyzula","Milan Brázdil","Aleš Juchelka","Ladislav Okleštěk","Petr Venhoda","Julius Špičák","Eva Matyášová","Přemysl Mališ","Karla Šlechtová","Monika Červíčková","Jan Řehounek","Pavel Juříček","Karel Tureček","Pavel Plzák","Richard Brabec","Jan Richter","Jaroslav Faltýnek","Věra Procházková","Milan Feranec","Jiří Mašek","Věra Adámková","Jana Mračková Vildumetzová","Klára Dostálová","Josef Kott","Martin Kolovratník","Adam Kalous","Dan Ťok","Martin Stropnický","Jan Volný","Adam Vojtěch","Pavel Staněk","Josef Hájek","Andrej Babiš","Helena Válková","Radek Vondráček","Patrik Nacher"];

var poslanciANOpredseda = ["Andrej Babiš","Jaroslava Pokorná Jermanová","Kamal Farhan","Petr Vrána","Jiří Strýček","Stanislav Fridrich","Stanislav Berkovec","Marek Novák","Michal Ratiborský","Klára Dostálová","Miloslava Rutová","Jan Kubík","Marcela Melková","Jana Pastuchová","Eva Fialová","Roman Kubíček","František Petrtýl","Jiří Hlavatý","Jaroslav Faltýnek","Radek Zlesák","Jaroslav Bžoch","Milan Pour","Tomáš Kohoutek","Monika Oborná","Jan Schiller","Karel Rais","Ivan Jáč","David Pražák","Zuzana Ožanová","Jiří Mašek","Petr Sadovský","Milan Feranec","Aleš Juchelka","Richard Brabec","Adam Kalous","David Štolpa","Josef Kott","Pavel Růžička","Andrea Brzobohatá","Lenka Dražilová","Milan Hnilička","Robert Králíček","David Kasal","Věra Procházková","Pavel Pustějovský","Eva Matyášová","Jaroslav Kytýr","Taťána Malá","Věra Adámková","Miloslav Janulík","Barbora Kořanová","Karel Tureček","Jiří Bláha","Jan Řehounek","Andrea Babišová","Jan Richter","Josef Bělica","Adam Vojtěch","Jan Volný","Josef Hájek","Milan Brázdil","Přemysl Mališ","Ivo Vondrák","Margita Balaštíková","Jana Mračková Vildumetzová","Ladislav Okleštěk","Pavel Plzák","Martin Kolovratník","Pavel Juříček","Helena Válková","Rostislav Vyzula","Dan Ťok","Pavel Staněk","Radek Vondráček","Patrik Nacher","Karla Šlechtová","Radka Maxová","Julius Špičák","Martin Stropnický","Robert Pelikán","Monika Červíčková","Petr Venhoda"];

var poslanciCSSD = ["Ondřej Veselý","Kateřina Valachová","Jan Chvojka","Alena Gajdůšková","Antonín Staněk","Jiří Běhounek","Jan Birke","Roman Onderka","Tomáš Hanzel","Lubomír Zaorálek","Milan Chovanec","Roman Sklenák","Petr Dolínek","Jan Hamáček","Jaroslav Foldyna","Bohuslav Sobotka"];

var poslanciKDU = ["Marek Výborný","Stanislav Juránek","Pavla Golasowská","Vít Kaňkovský","Jiří Mihola","Jan Bartošek","Marian Jurečka","Jan Čižinský","Ondřej Benešík","Pavel Bělobrádek"];

var poslanciKSCM = ["Daniel Pawlas","Leo Luzar","Ivo Pojezný","Alexander Černý","Jiří Valenta","Hana Aulická Jírovcová","Marie Pěnčíková","Květa Matušovská","Vladimír Koníček","Stanislav Grospič","Miroslav Grebeníček","Zdeněk Ondráček","Miloslava Vostrá","Pavel Kováčik","Jiří Dolejš","Vojtěch Filip"];

var poslanciODS = ["Jakub Janda","Jaroslav Martinů","Jiří Ventruba","Ilona Mauritzová","Stanislav Blaha","Jan Zahradník","Petr Beitl","Pavel Žáček","Ivan Adamec","Martin Baxa","Martin Kupka","Bohuslav Svoboda","Vojtěch Munzar","Karel Krejza","Jan Skopeček","Petr Fiala","Miroslava Němcová","Veronika Vrecionová","Zuzana Majerová Zahradníková","Zbyněk Stanjura","Jana Černochová","Jan Bauer","Pavel Blažek","Marek Benda","Václav Klaus"];

var poslanciPirati = ["Lukáš Černohorský","František Elfmark","Martin Jiránek","František Kopřiva","Radek Holomčík","Jan Pošvář","Ondřej Profant","Lukáš Bartoň","Olga Richterová","Mikuláš Peksa","Ondřej Polanský","Lukáš Kolářík","Lenka Kozlová","Jan Lipavský","Tomáš Vymazal","Petr Třešňák","Mikuláš Ferjenčík","Ivan Bartoš","Tomáš Martínek","Dana Balcarová","Jakub Michálek","Vojtěch Pikal"];

var poslanciSPD = ["Radek Rozvoral","Ivana Nevludová","Pavel Jelínek","Tereza Hyťhová","Miloslav Rozner","Jiří Kohoutek","Marian Bojko","Jaroslav Dvořák","Jiří Kobza","Lubomír Volný","Lucie Šafránková","Karla Maříková","Radek Koten","Jaroslav Holík","Radovan Vích","Monika Jarošová","Zdeněk Podal","Tomio Okamura","Lubomír Španěl","Jan Hrnčíř","Jana Levová","Radim Fiala"];

var poslanciSTAN = ["Jana Krutáková","Martin Půta","Jan Farský","Vít Rakušan","Věra Kovářová","Petr Gazdík","Petr Pávek"];

var poslanciTOP = ["Vlastimil Válek","František Vácha","Dominik Feri","Markéta Pekarová Adamová","Miroslav Kalousek","Karel Schwarzenberg","Helena Langšádlová"];

var hlasovaniANO = [100.0,98.2,98.1,97.0,97.0,96.9,96.4,96.3,96.2,96.1,96.1,96.0,95.8,95.4,95.3,95.3,95.3,95.3,95.2,95.1,95.0,95.0,94.7,94.7,94.7,94.5,94.4,94.4,94.3,94.3,94.2,93.8,93.7,93.6,93.4,93.2,93.1,93.1,92.9,92.9,92.7,92.6,92.6,92.4,92.3,92.2,92.2,92.1,92.1,91.7,91.3,91.3,91.2,91.1,90.9,90.7,90.6,90.4,90.4,90.3,90.2,90.2,90.1,90.0,89.9,89.9,89.5,89.3,89.0,88.6,88.3,88.2,87.8,87.3,87.1,87.0,84.8,84.4,83.6,82.8,78.7,78.4];

var hlasovaniCSSD = [87.1,86.8,86.5,86.0,86.0,85.7,85.1,84.5,84.4,84.1,83.5,82.7,80.6,77.8,71.9,66.0];

var hlasovaniKDU = [93.9,92.8,92.6,91.8,91.3,88.7,88.5,88.2,86.0,83.1];

var hlasovaniKSCM = [94.8,93.6,93.0,92.7,92.0,91.6,89.7,89.4,88.5,87.6,87.6,84.5,84.2,82.9,80.1,80.0];

var hlasovaniODS = [96.6,96.2,96.2,95.9,95.6,95.6,95.1,94.7,94.7,94.5,93.7,93.7,93.1,92.7,92.2,91.9,91.4,91.2,90.0,89.9,88.0,87.0,84.4,82.4,80.7];

var hlasovaniPirati = [95.5,95.2,95.0,94.8,94.7,94.3,94.0,93.9,93.4,93.3,93.2,92.9,92.5,92.0,91.7,91.6,91.5,90.7,90.7,89.6,89.6,87.3];

var hlasovaniSPD = [99.5,99.1,99.0,98.9,98.8,98.7,98.1,98.1,97.9,97.7,97.7,97.6,97.5,96.5,96.4,96.3,95.0,94.4,92.8,92.7,91.3,90.9];

var hlasovaniSTAN = [94.6,93.8,91.0,90.4,89.6,85.2,81.3];

var hlasovaniTOP = [91.9,91.1,90.9,90.5,87.9,87.9,85.6];

var hlasovaniBabis = [100.0,86.7,83.4,82.7,82.5,82.4,82.4,82.2,82.2,82.1,82.0,81.8,81.5,81.4,81.4,81.3,81.3,81.3,81.3,80.8,80.4,80.1,80.0,79.9,79.7,79.7,79.4,79.3,79.0,78.7,78.5,78.3,78.0,77.9,77.6,77.5,77.5,77.2,77.1,76.9,76.8,76.5,76.5,76.5,76.4,76.2,75.7,75.5,75.5,75.4,75.2,75.2,74.5,74.1,74.0,74.0,72.7,72.0,71.9,71.7,71.6,71.0,70.8,70.6,70.3,70.2,68.8,68.8,68.5,68.1,67.8,67.6,66.0,65.0,63.8,63.5,60.3,56.2,47.4,44.8,40.1,27.4];

var hlasovaniHamacek = [67.8,67.0,72.8,59.5,42.0,64.1,46.6,61.7,57.6,47.6,44.7,45.8,53.8,100.0,50.2,47.5];

var hlasovaniBelobradek = [79.3,65.7,66.2,75.1,61.7,66.7,55.9,67.7,54.1,100];

var hlasovaniFilip = [72.1,70.6,65.7,73.4,68.4,62.8,67.0,61.7,55.6,60.5,61.0,59.0,65.6,61.8,61.5,100];

var hlasovaniFiala = [86.8,87.7,86.7,72.1,72.7,84.9,67.9,75.7,71.2,83.6,82.5,71.4,84.7,71.9,72.9,100,69.1,65.6,73.7,82.1,65.0,72.0,65.7,69.3,62.7];

var hlasovaniBartos = [86.5,85.7,84.2,85.2,84.4,85.5,84.2,87.9,83.6,84.7,82.6,82.7,82.6,83.8,82.0,82.2,88.8,100,84.8,80.9,88.4,79.1];

var hlasovaniOkamura = [94.1,88.2,80.3,83.4,93.5,88.7,81.9,79.6,81.4,82.0,87.2,82.9,83.9,80.1,81.9,84.4,78.1,100,80.7,80.0,79.6,81.6];

var hlasovaniGazdik = [71.3,93.8,73.4,69.7,74.9,100,69.6];

var hlasovaniSchwarzenberg = [62.3,65.4,70.5,67.9,59.3,100,63.3];

var prumerVetsina = [null, 92.1, 82.4, 89.7, 88.3, null, 91.9, 92.6, 96.6, null, 89.4, null, 89.4, null, null, null];

var prumerPredseda = [null, 74.4, 58.0, 69.2, 66.7, null, 75.9, 85.0, 84.3, null, 79.0, null, 69.8, null, null, null];

Highcharts.setOptions({
    lang: {
        months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
        weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
        shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
        thousandsSep: ' ',
        decimalPoint:',',
        rangeSelectorZoom: 'Zobrazit'
    }
});

Highcharts.chart('casovaRada', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Jednota politických stran'
    },
    subtitle: {
        text: 'míra shody při hlasování v poslanecké sněmovně'
    },
    xAxis: {
        categories: casovaRadaLegenda
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        min: 75,
        max: 100,
        startOnTick: false,
        endOnTick: false
    },
    tooltip: {
        pointFormat: '{point.series.name}: průměrně <b>{point.y} %</b> poslanců hlasovalo stejně<br/>'
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.psp.cz',
        text: 'Zdroj: Poslanecká sněmovna Parlamentu ČR'
    },
    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            },
            lineWidth: 2
        },
        turboThreshold: 0
    },
    series: [{
        name: 'Čtyřkoalice',
        data: casovaRada4K,
        color: casovaRadaColors[0],
        visible: false
    }, {
        name: 'ANO',
        data: casovaRadaANO,
        color: casovaRadaColors[1],
        zIndex: 5
    }, {
        name: 'ČSSD',
        data: casovaRadaCSSD,
        color: casovaRadaColors[2]
    }, {
        name: 'KDU-ČSL',
        data: casovaRadaKDU,
        color: casovaRadaColors[3]
    }, {
        name: 'KSČM',
        data: casovaRadaKSCM,
        color: casovaRadaColors[4]
    }, {
        name: 'ODA',
        data: casovaRadaODA,
        color: casovaRadaColors[5],
        visible: false
    }, {
        name: 'ODS',
        data: casovaRadaODS,
        color: casovaRadaColors[6]
    }, {
        name: 'Piráti',
        data: casovaRadaPirati,
        color: casovaRadaColors[7],
        visible: false
    }, {
        name: 'SPD',
        data: casovaRadaSPD,
        color: casovaRadaColors[8]
    }, {
        name: 'SPR-RSČ',
        data: casovaRadaSPR,
        color: casovaRadaColors[9],
        visible: false
    }, {
        name: 'STAN',
        data: casovaRadaSTAN,
        color: casovaRadaColors[10],
        visible: false
    }, {
        name: 'SZ',
        data: casovaRadaSZ,
        color: casovaRadaColors[11],
        visible: false
    }, {
        name: 'TOP 09',
        data: casovaRadaTOP,
        color: casovaRadaColors[12],
        visible: false
    }, {
        name: 'Unie svobody',
        data: casovaRadaUS,
        color: casovaRadaColors[13],
        visible: false
    }, {
        name: 'Úsvit',
        data: casovaRadaUsvit,
        color: casovaRadaColors[14],
        visible: false
    }, {
        name: 'VV',
        data: casovaRadaVV,
        color: casovaRadaColors[14],
        visible: false
    }, {
        name: 'průměr',
        data: casovaRadaPrumer,
        color: casovaRadaColors[16],
        dashStyle: 'Dot'
    }]
});

Highcharts.chart('anovetsina', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jednota ANO – shoda poslance se stranickou většinou'
    },
    subtitle: {
        text: 'v poslanecké sněmovně po roce 2017'
    },
    xAxis: {
        categories: poslanciANOvetsina
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        max: 100,
        plotLines: [{
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerVetsina[1],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s většinou: ' + prumerVetsina[1] + '%',
                align: 'right',
                x: +10,
                style: {
                    textShadow: 'white'
                }
            }
        }]
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} %</b><br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.psp.cz',
        text: 'Zdroj: Poslanecká sněmovna Parlamentu ČR'
    },
    series: [{
        name: 'shoda s většinou',
        data: hlasovaniANO,
        color: casovaRadaColors[1]
    }]
});

Highcharts.chart('anopredseda', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jednota ANO - shoda poslance s Andrejem Babišem'
    },
    subtitle: {
        text: 'v poslanecké sněmovně po roce 2017'
    },
    xAxis: {
        categories: poslanciANOpredseda
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        max: 100,
        plotLines: [{
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerPredseda[1],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s předsedou: ' + prumerPredseda[1] + '%',
                align: 'right',
                x: +10
            }
        }]
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} %</b><br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.psp.cz',
        text: 'Zdroj: Poslanecká sněmovna Parlamentu ČR'
    },
    series: [{
        name: 'shoda s předsedou',
        data: hlasovaniBabis,
        color: casovaRadaSvetla[1]
    }]
});


Highcharts.chart('cssd', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jednota ČSSD'
    },
    subtitle: {
        text: 'v poslanecké sněmovně po roce 2017'
    },
    xAxis: {
        categories: poslanciCSSD
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        max: 100,
        plotLines: [{
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerVetsina[2],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s většinou: ' + prumerVetsina[2] + '%',
                align: 'right',
                x: +10
            }
        }, {
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerPredseda[2],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s předsedou: ' + prumerPredseda[2] + '%',
                align: 'right',
                x: +10
            }
        }]
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} %</b><br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.psp.cz',
        text: 'Zdroj: Poslanecká sněmovna Parlamentu ČR'
    },
    series: [{
        name: 'shoda s většinou',
        data: hlasovaniCSSD,
        color: casovaRadaColors[2]
    }, {
        name: 'shoda s předsedou',
        data: hlasovaniHamacek,
        color: casovaRadaSvetla[2]
    }]
});

Highcharts.chart('kdu', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jednota KDU-ČSL'
    },
    subtitle: {
        text: 'v poslanecké sněmovně po roce 2017'
    },
    xAxis: {
        categories: poslanciKDU
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        max: 100,
        plotLines: [{
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerVetsina[3],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s většinou: ' + prumerVetsina[3] + '%',
                align: 'right',
                x: +10
            }
        }, {
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerPredseda[3],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s předsedou: ' + prumerPredseda[3] + '%',
                align: 'right',
                x: +10
            }
        }]
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} %</b><br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.psp.cz',
        text: 'Zdroj: Poslanecká sněmovna Parlamentu ČR'
    },
    series: [{
        name: 'shoda s většinou',
        data: hlasovaniKDU,
        color: casovaRadaColors[3]
    }, {
        name: 'shoda s předsedou',
        data: hlasovaniBelobradek,
        color: casovaRadaSvetla[3]
    }]
});

Highcharts.chart('kscm', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jednota KSČM'
    },
    subtitle: {
        text: 'v poslanecké sněmovně po roce 2017'
    },
    xAxis: {
        categories: poslanciKSCM
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        max: 100,
        plotLines: [{
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerVetsina[4],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s většinou: ' + prumerVetsina[4] + '%',
                align: 'right',
                x: +10
            }
        }, {
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerPredseda[4],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s předsedou: ' + prumerPredseda[4] + '%',
                align: 'right',
                x: +10
            }
        }]
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} %</b><br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.psp.cz',
        text: 'Zdroj: Poslanecká sněmovna Parlamentu ČR'
    },
    series: [{
        name: 'shoda s většinou',
        data: hlasovaniKSCM,
        color: casovaRadaColors[4]
    }, {
        name: 'shoda s předsedou',
        data: hlasovaniFilip,
        color: casovaRadaSvetla[4]
    }]
});

Highcharts.chart('ods', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jednota ODS'
    },
    subtitle: {
        text: 'v poslanecké sněmovně po roce 2017'
    },
    xAxis: {
        categories: poslanciODS
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        max: 100,
        plotLines: [{
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerVetsina[6],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s většinou: ' + prumerVetsina[6] + '%',
                align: 'right',
                x: +10
            }
        }, {
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerPredseda[6],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s předsedou: ' + prumerPredseda[6] + '%',
                align: 'right',
                x: +10
            }
        }]
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} %</b><br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.psp.cz',
        text: 'Zdroj: Poslanecká sněmovna Parlamentu ČR'
    },
    series: [{
        name: 'shoda s většinou',
        data: hlasovaniODS,
        color: casovaRadaColors[6]
    }, {
        name: 'shoda s předsedou',
        data: hlasovaniFiala,
        color: casovaRadaSvetla[6]
    }]
});

Highcharts.chart('pirati', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jednota Pirátů'
    },
    subtitle: {
        text: 'v poslanecké sněmovně po roce 2017'
    },
    xAxis: {
        categories: poslanciPirati
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        max: 100,
        plotLines: [{
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerVetsina[7],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s většinou: ' + prumerVetsina[7] + '%',
                align: 'right',
                x: +10
            }
        }, {
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerPredseda[7],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s předsedou: ' + prumerPredseda[7] + '%',
                align: 'right',
                x: +10
            }
        }]
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} %</b><br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.psp.cz',
        text: 'Zdroj: Poslanecká sněmovna Parlamentu ČR'
    },
    series: [{
        name: 'shoda s většinou',
        data: hlasovaniPirati,
        color: casovaRadaColors[7]
    }, {
        name: 'shoda s předsedou',
        data: hlasovaniBartos,
        color: casovaRadaSvetla[7]
    }]
});

Highcharts.chart('spd', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jednota SPD'
    },
    subtitle: {
        text: 'v poslanecké sněmovně po roce 2017'
    },
    xAxis: {
        categories: poslanciSPD
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        max: 100,
        plotLines: [{
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerVetsina[8],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s většinou: ' + prumerVetsina[8] + '%',
                align: 'right',
                x: +10
            }
        }, {
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerPredseda[8],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s předsedou: ' + prumerPredseda[8] + '%',
                align: 'right',
                x: +10
            }
        }]
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} %</b><br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.psp.cz',
        text: 'Zdroj: Poslanecká sněmovna Parlamentu ČR'
    },
    series: [{
        name: 'shoda s většinou',
        data: hlasovaniSPD,
        color: casovaRadaColors[8]
    }, {
        name: 'shoda s předsedou',
        data: hlasovaniOkamura,
        color: casovaRadaSvetla[8]
    }]
});

Highcharts.chart('stan', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jednota STAN'
    },
    subtitle: {
        text: 'v poslanecké sněmovně po roce 2017'
    },
    xAxis: {
        categories: poslanciSTAN
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        max: 100,
        plotLines: [{
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerVetsina[10],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s většinou: ' + prumerVetsina[10] + '%',
                align: 'right',
                x: +10
            }
        }, {
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerPredseda[10],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s předsedou: ' + prumerPredseda[10] + '%',
                align: 'right',
                x: +10
            }
        }]
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} %</b><br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.psp.cz',
        text: 'Zdroj: Poslanecká sněmovna Parlamentu ČR'
    },
    series: [{
        name: 'shoda s většinou',
        data: hlasovaniSTAN,
        color: casovaRadaColors[10]
    }, {
        name: 'shoda s předsedou',
        data: hlasovaniGazdik,
        color: casovaRadaSvetla[10]
    }]
});

Highcharts.chart('top09', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jednota TOP 09'
    },
    subtitle: {
        text: 'v poslanecké sněmovně po roce 2017'
    },
    xAxis: {
        categories: poslanciTOP
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        max: 100,
        plotLines: [{
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerVetsina[12],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s většinou: ' + prumerVetsina[12] + '%',
                align: 'right',
                x: +10
            }
        }, {
            color: 'black',
            dashStyle: 'ShortDot',
            value: prumerPredseda[12],
            width: 1,
            zIndex: 5,
            label: {
                text: 'Ø shoda s čestným předsedou*: ' + prumerPredseda[12] + '%',
                align: 'right',
                x: +10
            }
        }]
    },
    tooltip: {
        pointFormat: '{point.series.name}: <b>{point.y} %</b><br/>',
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.psp.cz',
        text: 'Zdroj: Poslanecká sněmovna Parlamentu ČR'
    },
    series: [{
        name: 'shoda s většinou',
        data: hlasovaniTOP,
        color: casovaRadaColors[12]
    }, {
        name: 'shoda s předsedou',
        data: hlasovaniSchwarzenberg,
        color: casovaRadaSvetla[12]
    }]
});

});