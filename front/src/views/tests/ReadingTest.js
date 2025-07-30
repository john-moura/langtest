import React from 'react'

import TestView from './TestView';
import { useParams } from 'react-router-dom'

const ReadingTest = () => {

    const { id } = useParams()

    const testInfo = 
        {
          id: 1,
          name: 'Reading Test 123',
          category: 'Lesenverstehen',
          description: 'A beautiful comment here. Mussum Ipsum, cacilds vidis litro abertis.  A ordem dos tratores não altera o pão duris.',
          weight: '0.25',
          image: '',
          duration: 90,
        }

    const testParts = [
      {
        id: '1',
        partType: 'decriptionAndText', // decriptionAndText, textAndMultipleChoice, descriptionAndAds
        title: 'Lesen Sie die Überschriften A-J und anschließend die Texte auf der nächsten Seite. Ordnen Sie dann jedem Text die passende Überschrift zu. Jede Überschrift dürfen Sie nur einmal benutzen.',
        descriptions: {
            1: {
                id: '1',
                index: 'A',
                text: 'Wassersport: Teures Hobby - günstiger Einstieg',
            },
            2: {
                id: '2',
                index: 'B',
                text: 'Digitales Lesen treibt den Buchverkauf an',
            },
            3: {
                id: '3',
                index: 'C',
                text: 'Mehr Zeit zum Lesen: Die Regierung verordnet mehr Lesezeit in Schulen',
            },
            4: {
                id: '4',
                index: 'D',
                text: 'Mit weniger Kaffee mehr vom Leben - Programme gegen die Sucht',
            },
            5: {
                id: '5',
                index: 'E',
                text: 'Worauf sie beim Fahrradkauf achten sollten',
            },
            6: {
                id: '6',
                index: 'F',
                text: 'Mehr Urlaubstage für Arbeitnehmer',
            },
            7: {
                id: '7',
                index: 'G',
                text: 'Warum auf die Malediven fliegen? In Deutschland ist’s doch genauso schön.',
            },
            8: {
                id: '8',
                index: 'H',
                text: 'Gefährliche Cyborgs: immer weniger Menschen denken selbst',
            },
            9: {
                id: '9',
                index: 'I',
                text: 'Bildung in Not: Warum unsere Kinder immer weniger in den Grundschulen lernen',
            },
            10: {
                id: '10',
                index: 'J',
                text: 'Mopsdiebstahl in der Stadt - Eine Autorin referiert über effiziente Kommunikation',
            },
        },
        questions: {
            1: {
                id: '1',
                index: '1',
                header: '',
                subheader: '',
                text: 'Wenn es um Drogen geht, denkt man gleich an Kokain, Marihuana, doch wenigensKonsumenten ist bewusst: die weltweit am meisten verbreitete und akzeptierte Drogesist Koffein. Viele Menschen unterschätzen die Suchtwirkung des braunen Gebräus.sTatsächlich sagen 8 von zehn Kaffeetrinkern, es würde ihnen schwer fallen, von heutesauf morgen keinen Kaffee mehr zu trinken. Das Bundesgesundheitsministerium startetseine Aufklärungskampagne zur Entwöhnung und zur gesunden Lebensgestaltung undsveranstaltet eine Vortragsreihe mit Medizinern und Ernährungsexperten.',
                answers: {
                    1: {
                        id: '1',
                        text: 'A',
                        isCorrect: true,
                    },
                    2: {
                        id: '2',
                        text: 'B',
                        isCorrect: '',
                    },
                    3: {
                        id: '3',
                        text: 'C',
                        isCorrect: '',
                    },
                    4: {
                        id: '4',
                        text: 'D',
                        isCorrect: '',
                    },
                    5: {
                        id: '5',
                        text: 'E',
                        isCorrect: '',
                    },
                    6: {
                        id: '6',
                        text: 'F',
                        isCorrect: '',
                    },
                    7: {
                        id: '7',
                        text: 'G',
                        isCorrect: '',
                    },
                    8: {
                        id: '8',
                        text: 'H',
                        isCorrect: '',
                    },
                    9: {
                        id: '9',
                        text: 'I',
                        isCorrect: '',
                    },
                    10: {
                        id: '10',
                        text: 'J',
                        isCorrect: '',
                    },
                },
            },
            2: {
                id: '2',
                index: '2',
                header: '',
                subheader: '',
                text: 'Trotz erschwinglicher Flugpreise, mittlerweile auch für Flüge in Überseegebiete,sbevorzugen es immer mehr Menschen in Deutschland, Urlaub im eigenen Land zusmachen. Bisher wurden Urlaubsziele in Brandenburg, im Harz und im Schwarzwaldsunterschätzt. Umso mehr steigt jetzt deren Attraktivität insbesondere bei unters40-jährigen, die sich immer mehr als Entdecker der heimischen Natur- undsKulturlandschaft betrachten. Im Vergleich mit Urlaubsfotos aus den Malediven steht diesBrandenburgische Seenplatte in nichts nach.',
                answers: {
                    1: {
                        id: '11',
                        text: 'A',
                        isCorrect: true,
                    },
                    2: {
                        id: '12',
                        text: 'B',
                        isCorrect: '',
                    },
                    3: {
                        id: '13',
                        text: 'C',
                        isCorrect: '',
                    },
                    4: {
                        id: '14',
                        text: 'D',
                        isCorrect: '',
                    },
                    5: {
                        id: '15',
                        text: 'E',
                        isCorrect: '',
                    },
                    6: {
                        id: '16',
                        text: 'F',
                        isCorrect: '',
                    },
                    7: {
                        id: '17',
                        text: 'G',
                        isCorrect: '',
                    },
                    8: {
                        id: '18',
                        text: 'H',
                        isCorrect: '',
                    },
                    9: {
                        id: '19',
                        text: 'I',
                        isCorrect: '',
                    },
                    10: {
                        id: '20',
                        text: 'J',
                        isCorrect: '',
                    },
                },
            },
            3: {
                id: '3',
                index: '3',
                header: '',
                subheader: '',
                text: 'Freizeit auf dem Wasser muss nicht teuer sein. Viele Freizeitsportler wissen nicht, wiesgünstig beispielsweise ein Segelkurs sein kann. Während einige Segelschulen bis zus1000 € für einen Segelschein verlangen, kann man schon für wenige hundert Euro ansden deutschen Universitäten auf seine Kosten kommen. Wer sich auf die Suche machtsund die Anmeldungstermine auf den Seiten des Hochschulsports beachtet, sitztsvielleicht schon bald mit Studenten in einem Boot und setzt die Segel. Für Mitgliedersbieten Unis auch günstigen Bootsverleih an.',
                answers: {
                    1: {
                        id: '21',
                        text: 'A',
                        isCorrect: true,
                    },
                    2: {
                        id: '22',
                        text: 'B',
                        isCorrect: '',
                    },
                    3: {
                        id: '23',
                        text: 'C',
                        isCorrect: '',
                    },
                    4: {
                        id: '24',
                        text: 'D',
                        isCorrect: '',
                    },
                    5: {
                        id: '25',
                        text: 'E',
                        isCorrect: '',
                    },
                    6: {
                        id: '26',
                        text: 'F',
                        isCorrect: '',
                    },
                    7: {
                        id: '27',
                        text: 'G',
                        isCorrect: '',
                    },
                    8: {
                        id: '28',
                        text: 'H',
                        isCorrect: '',
                    },
                    9: {
                        id: '29',
                        text: 'I',
                        isCorrect: '',
                    },
                    10: {
                        id: '30',
                        text: 'J',
                        isCorrect: '',
                    },
                },
            },
            4: {
                id: '4',
                index: '4',
                header: '',
                subheader: '',
                text: 'Bildungsforscher alarmieren: immer mehr Grundschulen müssen ihresLeistungsmaßstäbe heruntersetzen. Kurzfristig wollen sie damit ihre Erfolgsquotenshalten - welche Schule brüstet sich schon damit, dass 20 % der Schüler ein Jahrsnachholen müssen. Es ist nachvollziehbar, dass Schulen mehr Erfolg “generieren”swollen, indem sie immer weniger von dern Schülern verlangen. Langfristig wird damitsjedoch ein großes Bildungsloch bei einer Generation gegraben, die eh schon sehr kleinsist.',
                answers: {
                    1: {
                        id: '31',
                        text: 'A',
                        isCorrect: true,
                    },
                    2: {
                        id: '32',
                        text: 'B',
                        isCorrect: '',
                    },
                    3: {
                        id: '33',
                        text: 'C',
                        isCorrect: '',
                    },
                    4: {
                        id: '34',
                        text: 'D',
                        isCorrect: '',
                    },
                    5: {
                        id: '35',
                        text: 'E',
                        isCorrect: '',
                    },
                    6: {
                        id: '36',
                        text: 'F',
                        isCorrect: '',
                    },
                    7: {
                        id: '37',
                        text: 'G',
                        isCorrect: '',
                    },
                    8: {
                        id: '38',
                        text: 'H',
                        isCorrect: '',
                    },
                    9: {
                        id: '39',
                        text: 'I',
                        isCorrect: '',
                    },
                    10: {
                        id: '40',
                        text: 'J',
                        isCorrect: '',
                    },
                },
            },
            5: {
                id: '5',
                index: '5',
                header: '',
                subheader: '',
                text: 'E-Book Reader werden immer beliebter. Auch wenn Menschen sich nur langsam vonsphysischen Büchern trennen wollen, so hat eine Umfrage der deutschen Verlagswesensskürzlich gezeigt, dass ein potenzieller Käufer eines E-Book-Readers bis zu zwei Jahreslang erwägt sich ein digitales Lesegerät anzuschaffen. Jedoch kaufen diejenigen, die sichseinmal gegen die Papierform des Buchs entscheiden auch meistens nur noch diesdigitalen Buchversionen. Der Buchmarkt erlebt dadurch ein Hoch - denn die Kauflustssteigt enorm, wenn man mit einem Klick das Buch haben kann, anstatt zum Buchladenszu gehen, oder auf die Lieferung zu warten.',
                answers: {
                    1: {
                        id: '41',
                        text: 'A',
                        isCorrect: true,
                    },
                    2: {
                        id: '42',
                        text: 'B',
                        isCorrect: '',
                    },
                    3: {
                        id: '43',
                        text: 'C',
                        isCorrect: '',
                    },
                    4: {
                        id: '44',
                        text: 'D',
                        isCorrect: '',
                    },
                    5: {
                        id: '45',
                        text: 'E',
                        isCorrect: '',
                    },
                    6: {
                        id: '46',
                        text: 'F',
                        isCorrect: '',
                    },
                    7: {
                        id: '47',
                        text: 'G',
                        isCorrect: '',
                    },
                    8: {
                        id: '48',
                        text: 'H',
                        isCorrect: '',
                    },
                    9: {
                        id: '49',
                        text: 'I',
                        isCorrect: '',
                    },
                    10: {
                        id: '50',
                        text: 'J',
                        isCorrect: '',
                    },
                },
            },
        },
      },
      {
        id: '2',
        partType: 'textAndMultipleChoice', // decriptionAndText, textAndMultipleChoice, descriptionAndAds
        title: 'Lesen Sie den Text und beantworten Sie anschließend die Fragen auf der nächsten Seite. Die Aufgaben haben manchmal eine andere Reihenfolge als die Informationen im Text.',
        descriptions: {
            1: {
                id: '1',
                index: '',
                header: 'Eine neue Arbeitswelt: Coworking Spaces',
                subheader: 'Immer mehr Menschen suchen eine kreative Bürogemeinschaft - wie in der NOIZE FABRIK in Berlin',
                text: 'Um 10 Uhr kommt Joschi ins Büro. An der Rezeption gibt er an einem Computer an,sdass er da ist. Nach einem netten Plausch mit seiner Kollegin Ina, geht er an seinen Platzsund packt seinen Laptop aus. Joshi ist 34 und Softwareingeneur. Ina, seinesTischnachbarin ist Grafikerin und baut heute ihre Webseite neu. Beide könnten ebensosgut zu Hause bleiben, anstatt in ein Büro zu gehen.<br></br>Dank Internet und der Möglichkeit über Chats und andere Kommunikationsprogrammesmit Kollegen am anderen Ende der Welt permament verbunden zu sein, könnten vielesMenschen heutzutage einfach zu Hause bleiben. Doch obwohl immer mehr Jobs keinesPräsenz mehr an einem bestimmten Arbeitsort verlangen, finden sich immer mehrsMenschen im Coworking Spaces zusammen. Besonders in Großstädten werden immersmehr solcher Gemeinschaften gegründet. Viele werden dabei nicht nur tagsüber alssBüros genutzt, sondern auch abends für Veranstaltungen.<br>s“Wir haben unseren Coworking Space gegründet, weil wir kreative Menschenszusammenbringen wollen”s, sagt Gabriel Moss, Gründer der Bürogemeinschaft.s“Gerade,swenn man in unterschiedlichen Branchen arbeitet, kann ein Austausch sehr erfrischendssein. Aber wir möchten auch aktiv etwas für die Kultur tun und veranstalten Konzerte insunseren Räumen und vermieten sie auch für andere Events an andere, um Geldsreinzuholen.s”<br>sJosha und Ina machen in der Küche eine Pause. Gérome, ein Koch, beginnt geradesGemüse klein zu schneiden. Einmal pro Woche wird nämlich für alle gekocht und auchsGäste, also solche, die noch keinen Platz in der NOIZE FABRIK haben, sind eingeladen,smitzuspeisen.<br>s“Bevor ich mir einen Platz gemietet habe, habe ich hier erstmal mit den Leuten zusMittag gegessen. Ich wollte sie erstmal kennenlernen, bevor ich mich entscheide, jedensTag unter ihnen zu sein”s, sagt Josha,s“ich bin heilfroh, dass ich mich so schnell hierseingefunden habe. Zu Hause ist mir die Decke auf den Kopf gefallen.s”',
            },
        },
        questions: {
            1: {
                id: '6',
                index: '6',
                header: '',
                subheader: '',
                text: 'Für immer mehr Jobs heutzutage',
                answers: {
                    1: {
                        id: '51',
                        index: 'a)',
                        text: 'muss man zu Hause bleiben.',
                        isCorrect: true,
                    },
                    2: {
                        id: '52',
                        index: 'b)',
                        text: 'braucht man mehr Chat- und Kommunikationsprogramme.',
                        isCorrect: '',
                    },
                    3: {
                        id: '53',
                        index: 'c)',
                        text: 'muss man nicht mehr in eine Firma gehen.',
                        isCorrect: '',
                    },
                },
            },
            2: {
                id: '7',
                index: '7',
                header: '',
                subheader: '',
                text: 'Der Gründer der Bürogemeinschaft vermietet die Räume, weil er',
                answers: {
                    1: {
                        id: '54',
                        index: 'a)',
                        text: 'kreative Menschen zusammenbringen möchte.',
                        isCorrect: true,
                    },
                    2: {
                        id: '55',
                        index: 'b)',
                        text: 'die Bürogemeinschaft so besser finanzieren kann.',
                        isCorrect: '',
                    },
                    3: {
                        id: '56',
                        index: 'c)',
                        text: 'gerne etwas für die Kultur macht.',
                        isCorrect: '',
                    },
                },
            },
            3: {
                id: '8',
                index: '8',
                header: '',
                subheader: '',
                text: 'Einmal pro Woche',
                answers: {
                    1: {
                        id: '57',
                        index: 'a)',
                        text: 'gibt es eine Veranstaltung.',
                        isCorrect: true,
                    },
                    2: {
                        id: '58',
                        index: 'b)',
                        text: 'essen alle zusammen zu Mittag.',
                        isCorrect: '',
                    },
                    3: {
                        id: '59',
                        index: 'c)',
                        text: 'kommt der Gründer der Bürogemeinschaft.',
                        isCorrect: '',
                    },
                },
            },
            4: {
                id: '9',
                index: '9',
                header: '',
                subheader: '',
                text: 'Einmal die Woche können auch Menschen in die NOIZE FABRIK kommen,',
                answers: {
                    1: {
                        id: '60',
                        index: 'a)',
                        text: 'die noch keinen Platz in der NOIZE FABRIK haben.',
                        isCorrect: true,
                    },
                    2: {
                        id: '61',
                        index: 'b)',
                        text: 'die noch keine Arbeit haben.',
                        isCorrect: '',
                    },
                    3: {
                        id: '62',
                        index: 'c)',
                        text: 'die noch nicht gegessen haben.',
                        isCorrect: '',
                    },
                },
            },
            5: {
                id: '10',
                index: '10',
                header: '',
                subheader: '',
                text: 'Die Gäste können',
                answers: {
                    1: {
                        id: '63',
                        index: 'a)',
                        text: 'mit den anderen Kreativen ein Konzert machen.',
                        isCorrect: true,
                    },
                    2: {
                        id: '64',
                        index: 'b)',
                        text: 'mit dem Koch zusammen das Mittagessen zubereiten.',
                        isCorrect: '',
                    },
                    3: {
                        id: '65',
                        index: 'c)',
                        text: 'mit den Mietern in der NOIZEFABRIK essen.',
                        isCorrect: '',
                    },
                },
            },
        },
      },
      {
        id: '3',
        partType: 'descriptionAndAds', // decriptionAndText, textAndMultipleChoice, descriptionAndAds
        title: 'Lesen Sie die Situationen 11-20 und die Anzeigen auf dem folgenen Blatt. Finden Sie für jede Situation die passende Anzeige. Zu einer Situation gibt es keine passende Anzeige. Schreiben Sie in dem Fall einfach ein x ins Lösungsblatt.',
        descriptions: {
            1: {
                id: '11',
                index: '11',
                header:'',
                subheader: '',
                text: 'Ihre Freundin ist sehr musikalisch und sucht jemanden, der mit ihr Popsongs singt.',
            },
            2: {
                id: '12',
                index: '12',
                header:'',
                subheader: '',
                text: 'Ihre junge Nachbarin möchte nach dem Abitur ein Praktikum machen. Sie liebt Kinder und interessiert sich für Natur.',
            },
            3: {
                id: '13',
                index: '13',
                header:'',
                subheader: '',
                text: 'Ein Freund von Ihnen kocht gerne, er ist freundlich zu anderen Menschen und suchteinen Nebenjob.',
            },
            4: {
                id: '14',
                index: '14',
                header:'',
                subheader: '',
                text: 'Ihre Arbeitskollegin hat ein leidenschaftiches Hobby: sie stellt Schmuck aus Metall her. Sie würde gerne etwas verkaufen, aber sie weiß nicht wo.',
            },
            5: {
                id: '15',
                index: '15',
                header:'',
                subheader: '',
                text: 'Seit seinem Burnout als Broker interessiert sich ihr Freund für Meditation. Er möchte auch anderen Menschen Meditation beibringen. Vielleicht haben Sie einen Tipp für ihn?',
            },
            6: {
                id: '16',
                index: '16',
                header:'',
                subheader: '',
                text: 'Ihre Nachbarin möchte ein besserer Mensch werden und erzählt Ihnen, dass sie sich gerne sozial engagieren möchte. Vielleicht haben Sie eine Idee, wo sie beginnen könnte?',
            },
            7: {
                id: '17',
                index: '17',
                header:'',
                subheader: '',
                text: 'Ein Freund von Ihnen sucht einen gebrauchten Computer. Er hat nicht viel Geld, deshalb darf der Computer nicht viel kosten.',
            },
            8: {
                id: '18',
                index: '18',
                header:'',
                subheader: '',
                text: 'Sie sind gerade nach Berlin gezogen und brauchen Hilfe bei der Anmeldung und Wohnungsfindung.',
            },
            9: {
                id: '19',
                index: '19',
                header:'',
                subheader: '',
                text: 'Sie besitzen einen alten Laptop. Er funktioniert noch, aber er ist nichts mehr wert. Sie wollen ihn trotzdem nicht wegschmeißen.',
            },
            10: {
                id: '20',
                index: '20',
                header:'',
                subheader: '',
                text: 'Ihr Nachbar lebt allein und fühlt sich einsam. Er hätte gerne einen Hund, aber für ihn alleine ist es auf Dauer zu viel Arbeit.',
            },
        },
        questions: {
            1: {
                id: '11',
                index: '',
                image: 'https://spaces-cdn.clipsafari.com/r8qjutbatmp377wukreee3buybtd',
                text: 'Anzeige A',
                answers: {
                    1: {
                        id: '54',
                        index: '',
                        text: '11',
                        isCorrect: true,
                    },
                    2: {
                        id: '55',
                        index: '',
                        text: '12',
                        isCorrect: '',
                    },
                    3: {
                        id: '56',
                        index: '',
                        text: '13',
                        isCorrect: '',
                    },
                    4: {
                        id: '57',
                        index: '',
                        text: '14',
                        isCorrect: '',
                    },
                    5: {
                        id: '58',
                        index: '',
                        text: '15',
                        isCorrect: '',
                    },
                    6: {
                        id: '59',
                        index: '',
                        text: '16',
                        isCorrect: '',
                    },
                    7: {
                        id: '60',
                        index: '',
                        text: '17',
                        isCorrect: '',
                    },
                    8: {
                        id: '61',
                        index: '',
                        text: '18',
                        isCorrect: '',
                    },
                    9: {
                        id: '62',
                        index: '',
                        text: '19',
                        isCorrect: '',
                    },
                    10: {
                        id: '63',
                        index: '',
                        text: '20',
                        isCorrect: '',
                    },
                },
            },
            2: {
                id: '12',
                index: '',
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8zMzMvLy9BQUErKyuGhoYoKCiLi4uCgoIfHx8uLi4iIiIcHBwaGhr29vYhISEWFhbm5ubv7+9OTk7Ly8uurq7e3t6oqKi7u7vY2NjQ0NBvb289PT1ISEjDw8MTExNZWVlXV1eSkpKgoKCYmJhjY2NsbGx6enoAAADExMTLkoefAAAGaElEQVR4nO2d6XLyOgxAa2NSspRA0pR96UL79f1f8EJLGiCLY1uu1Ds6vxmcMwmKLcnm7o5hGIZhGIZhGIYxJx/8ddYaw0EUyT9NJHSGUvx12JAN6cOGZ0MZqD+GNDOU+XA0/Fs8mxkGQ83n6PGizAxHv3JVkNwHbPgNG9KFDUvYkC5sWMKGdGHDEjakCxuWsCFd2LCEDenChiU+DZ+K4WEz2OxHxZOHb0c3HM/yMA4iKaQK4jifjaEHwDYs1mEkKqJUvgKPgGs43SS1akG8gX1WUQ0/o+jW74hSW8hBMA3naXO5R4ZzwFEQDZe71nrW7hFuGDzDTDQ9oue7KKZg4+AZroJWweNv8R1sHDTDx6RDUIgHsGiDZvjc/oyeiHKogbAMF5NOweNNXAKNhGU47PoVgo6EZbjRdT7IAdBISIbTVCMoRAL0wkAy1ETSL0OgaIpkONffw7iAGQrJcKYLNMehgJZRWIbx/92wCPWGM5ihkAw/9ZEmBVpCYb0t9PcwXMAMhWQ4Xmt7HSVQTgprTvOhC6ZqBTQSluHng+4hhcpkoK2e1t2rJ6GgBkIz1LwvUqB3BWYWI++KNXALYETDRde0JoVa/6JmE2e7VsEJYGofMyP80jaxSe4BR0HN6r81KyZvkIPgVmbmD6rmp3ZAC8MzyNW1bJVcO6rJO1y6+wvs+uHdYqXCUlKlwQEuiJ5BNzyuM4rVIJxMdul6VQDfvxMEDE+Ms2nm55upGHqEDUvYkC5sWMKGdGHDEjakCxuWsOENQDUHCPwYzv8BNqY54sVwmUTKR0OzFT4MMyFFlPta75niw3B/ykoEB4jLA8CD4bnpMIVMejoAb/hWZusT2KygLeCG26olLyYRUKENF5etQLGH1JkxwIbZ1VlEKgffH2IOsOHzdXk+gCrGOwBr+HFbEwzxAyqo4Wu9cv0AuXXCCkjDbVNpPgYvRBgCaPhU38MkYLdOWAFnmLX0j0Qb2Cs2Bc7wUC92foMcUMEMa2G0InwBvmgjoAyLrnZK0L1opgAZfnZ3OE0Qsxowhk+qKYxWYAZUEMOxrg1PqGe0GSqIYWsYrQg+PFx8LyAMh/rNE9BtQAYAGM70PdsnoDrTTXE3XOq6fUsCnIDqbKgLoxUyQkkwuhqOc32UKVF7jIDqanjQb2CqiDHqOo6G9/2iTEmIEFDdDIu+UaYk+fSn0oKT4aN+B9otwa9XbFwMp+aCQq5/O6A6GI5z3Wy0iWjvU6cBB8POYx/aCX/5SHB7Q8MwWjEB2w7TC2vDuWkYrYhBT9jRYWu4jO3/LEHGPgPq7XdbGk6t9U5EA38B9WN3o2hpaDAbbcJfCfw+VuvrjImdYUfqsB+pp4D6dowOcnP1hFgZvtiG0Qo/AXX2Ff7U5nINY2M4dxc8vhY9lMCLczolOFwoWhg+2b8nrgBPMD7+XNhlIcHc8NQPBEG0Bl4PX56XklaKpobDu2e3MFoRwJ3ndWJxdYBfVXw2NFQvI7vZaBOgJfCpvH60frKXhoZiDSd4VITrKZrWDmlIXu0MYUmgSuBZw0puMidgKCRQQM2bHq10S8Aw2kAE1HFLxu/rnYtsCBJQx6u2SWS8wDeEKIGPWmfJ8vgrQDcUE9eAet8xx4pEZvivZB6QgVtAfe08kCnKR+iGjhUb3Zla8uc1gmfo1KQ5/9d7GERDoaxL4FuDpTimoYgtKzbLwOCyUA3FzqoEvghNrgrX0KoEXp9td4JsaFGxyQZmdRNkQ6FMmzQz00vCNhSxWUAd701XquiGP0vWfhg1EHyBb2jU9f5unmsgYGhQAh9apGwpGPau2LSeEtYFBcO+FZu3Pq2CNUgY9mvSLHQn1jdDw1Ck+oBqW30mYljmANvZ2vwGT1AxlJpd4EtbQTKGmopN/2bPGmQMheoIqC79A3QMO0rgmdl66RpChiJpKYGbtOvWoWTY8n9PY7fSJSlD0RhQjddL19AyFIN6QG2tTvSEmGF9hjpy7QAhZlir2Lj38FAzvDlWo7s60QtyhiK5CKidGzh7Qs9QBD8l8B5/vKOHoGFUVmwe7RaENxA0LEvgS4g7SNPw+5yiBVCbGUnD03o4k0BD0zQU8XwA1UdH1FCYVAi7oWoIBxuyIX3YkA3pw4ZsSB82ZEP6sCEb0ocN2ZA+bMiG9GFDm9N2SCF1htgX6IrU3UOGYRiGYRiGYRimif8AdAiGQq98e8UAAAAASUVORK5CYII=',
                text: 'Anzeige B',
                answers: {
                    1: {
                        id: '64',
                        index: '',
                        text: '11',
                        isCorrect: true,
                    },
                    2: {
                        id: '65',
                        index: '',
                        text: '12',
                        isCorrect: '',
                    },
                    3: {
                        id: '66',
                        index: '',
                        text: '13',
                        isCorrect: '',
                    },
                    4: {
                        id: '67',
                        index: '',
                        text: '14',
                        isCorrect: '',
                    },
                    5: {
                        id: '68',
                        index: '',
                        text: '15',
                        isCorrect: '',
                    },
                    6: {
                        id: '69',
                        index: '',
                        text: '16',
                        isCorrect: '',
                    },
                    7: {
                        id: '70',
                        index: '',
                        text: '17',
                        isCorrect: '',
                    },
                    8: {
                        id: '71',
                        index: '',
                        text: '18',
                        isCorrect: '',
                    },
                    9: {
                        id: '72',
                        index: '',
                        text: '19',
                        isCorrect: '',
                    },
                    10: {
                        id: '73',
                        index: '',
                        text: '20',
                        isCorrect: '',
                    },
                },
            },
            3: {
                id: '13',
                index: '',
                image: 'https://spaces-cdn.clipsafari.com/r8qjutbatmp377wukreee3buybtd',
                text: 'Anzeige C',
                answers: {
                    1: {
                        id: '74',
                        index: '',
                        text: '11',
                        isCorrect: true,
                    },
                    2: {
                        id: '75',
                        index: '',
                        text: '12',
                        isCorrect: '',
                    },
                    3: {
                        id: '76',
                        index: '',
                        text: '13',
                        isCorrect: '',
                    },
                    4: {
                        id: '77',
                        index: '',
                        text: '14',
                        isCorrect: '',
                    },
                    5: {
                        id: '78',
                        index: '',
                        text: '15',
                        isCorrect: '',
                    },
                    6: {
                        id: '79',
                        index: '',
                        text: '16',
                        isCorrect: '',
                    },
                    7: {
                        id: '80',
                        index: '',
                        text: '17',
                        isCorrect: '',
                    },
                    8: {
                        id: '81',
                        index: '',
                        text: '18',
                        isCorrect: '',
                    },
                    9: {
                        id: '82',
                        index: '',
                        text: '19',
                        isCorrect: '',
                    },
                    10: {
                        id: '83',
                        index: '',
                        text: '20',
                        isCorrect: '',
                    },
                },
            },
            4: {
                id: '14',
                index: '',
                image: 'https://spaces-cdn.clipsafari.com/r8qjutbatmp377wukreee3buybtd',
                text: 'Anzeige D',
                answers: {
                    1: {
                        id: '84',
                        index: '',
                        text: '11',
                        isCorrect: true,
                    },
                    2: {
                        id: '85',
                        index: '',
                        text: '12',
                        isCorrect: '',
                    },
                    3: {
                        id: '86',
                        index: '',
                        text: '13',
                        isCorrect: '',
                    },
                    4: {
                        id: '87',
                        index: '',
                        text: '14',
                        isCorrect: '',
                    },
                    5: {
                        id: '88',
                        index: '',
                        text: '15',
                        isCorrect: '',
                    },
                    6: {
                        id: '89',
                        index: '',
                        text: '16',
                        isCorrect: '',
                    },
                    7: {
                        id: '90',
                        index: '',
                        text: '17',
                        isCorrect: '',
                    },
                    8: {
                        id: '91',
                        index: '',
                        text: '18',
                        isCorrect: '',
                    },
                    9: {
                        id: '92',
                        index: '',
                        text: '19',
                        isCorrect: '',
                    },
                    10: {
                        id: '93',
                        index: '',
                        text: '20',
                        isCorrect: '',
                    },
                },
            },
            5: {
                id: '15',
                index: '',
                image: 'https://spaces-cdn.clipsafari.com/r8qjutbatmp377wukreee3buybtd',
                text: 'Anzeige E',
                answers: {
                    1: {
                        id: '94',
                        index: '',
                        text: '11',
                        isCorrect: true,
                    },
                    2: {
                        id: '95',
                        index: '',
                        text: '12',
                        isCorrect: '',
                    },
                    3: {
                        id: '96',
                        index: '',
                        text: '13',
                        isCorrect: '',
                    },
                    4: {
                        id: '97',
                        index: '',
                        text: '14',
                        isCorrect: '',
                    },
                    5: {
                        id: '98',
                        index: '',
                        text: '15',
                        isCorrect: '',
                    },
                    6: {
                        id: '99',
                        index: '',
                        text: '16',
                        isCorrect: '',
                    },
                    7: {
                        id: '100',
                        index: '',
                        text: '17',
                        isCorrect: '',
                    },
                    8: {
                        id: '101',
                        index: '',
                        text: '18',
                        isCorrect: '',
                    },
                    9: {
                        id: '102',
                        index: '',
                        text: '19',
                        isCorrect: '',
                    },
                    10: {
                        id: '103',
                        index: '',
                        text: '20',
                        isCorrect: '',
                    },
                },
            },
            6: {
                id: '16',
                index: '',
                image: 'https://spaces-cdn.clipsafari.com/r8qjutbatmp377wukreee3buybtd',
                text: 'Anzeige F',
                answers: {
                    1: {
                        id: '104',
                        index: '',
                        text: '11',
                        isCorrect: true,
                    },
                    2: {
                        id: '105',
                        index: '',
                        text: '12',
                        isCorrect: '',
                    },
                    3: {
                        id: '106',
                        index: '',
                        text: '13',
                        isCorrect: '',
                    },
                    4: {
                        id: '107',
                        index: '',
                        text: '14',
                        isCorrect: '',
                    },
                    5: {
                        id: '108',
                        index: '',
                        text: '15',
                        isCorrect: '',
                    },
                    6: {
                        id: '109',
                        index: '',
                        text: '16',
                        isCorrect: '',
                    },
                    7: {
                        id: '110',
                        index: '',
                        text: '17',
                        isCorrect: '',
                    },
                    8: {
                        id: '111',
                        index: '',
                        text: '18',
                        isCorrect: '',
                    },
                    9: {
                        id: '112',
                        index: '',
                        text: '19',
                        isCorrect: '',
                    },
                    10: {
                        id: '113',
                        index: '',
                        text: '20',
                        isCorrect: '',
                    },
                },
            },
            7: {
                id: '17',
                index: '',
                image: 'https://spaces-cdn.clipsafari.com/r8qjutbatmp377wukreee3buybtd',
                text: 'Anzeige G',
                answers: {
                    1: {
                        id: '114',
                        index: '',
                        text: '11',
                        isCorrect: true,
                    },
                    2: {
                        id: '115',
                        index: '',
                        text: '12',
                        isCorrect: '',
                    },
                    3: {
                        id: '116',
                        index: '',
                        text: '13',
                        isCorrect: '',
                    },
                    4: {
                        id: '117',
                        index: '',
                        text: '14',
                        isCorrect: '',
                    },
                    5: {
                        id: '118',
                        index: '',
                        text: '15',
                        isCorrect: '',
                    },
                    6: {
                        id: '119',
                        index: '',
                        text: '16',
                        isCorrect: '',
                    },
                    7: {
                        id: '120',
                        index: '',
                        text: '17',
                        isCorrect: '',
                    },
                    8: {
                        id: '121',
                        index: '',
                        text: '18',
                        isCorrect: '',
                    },
                    9: {
                        id: '122',
                        index: '',
                        text: '19',
                        isCorrect: '',
                    },
                    10: {
                        id: '123',
                        index: '',
                        text: '20',
                        isCorrect: '',
                    },
                },
            },
            8: {
                id: '18',
                index: '',
                image: 'https://spaces-cdn.clipsafari.com/r8qjutbatmp377wukreee3buybtd',
                text: 'Anzeige H',
                answers: {
                    1: {
                        id: '124',
                        index: '',
                        text: '11',
                        isCorrect: true,
                    },
                    2: {
                        id: '125',
                        index: '',
                        text: '12',
                        isCorrect: '',
                    },
                    3: {
                        id: '126',
                        index: '',
                        text: '13',
                        isCorrect: '',
                    },
                    4: {
                        id: '127',
                        index: '',
                        text: '14',
                        isCorrect: '',
                    },
                    5: {
                        id: '128',
                        index: '',
                        text: '15',
                        isCorrect: '',
                    },
                    6: {
                        id: '129',
                        index: '',
                        text: '16',
                        isCorrect: '',
                    },
                    7: {
                        id: '130',
                        index: '',
                        text: '17',
                        isCorrect: '',
                    },
                    8: {
                        id: '131',
                        index: '',
                        text: '18',
                        isCorrect: '',
                    },
                    9: {
                        id: '132',
                        index: '',
                        text: '19',
                        isCorrect: '',
                    },
                    10: {
                        id: '133',
                        index: '',
                        text: '20',
                        isCorrect: '',
                    },
                },
            },
            9: {
                id: '19',
                index: '',
                image: 'https://spaces-cdn.clipsafari.com/r8qjutbatmp377wukreee3buybtd',
                text: 'Anzeige I',
                answers: {
                    1: {
                        id: '134',
                        index: '',
                        text: '11',
                        isCorrect: true,
                    },
                    2: {
                        id: '135',
                        index: '',
                        text: '12',
                        isCorrect: '',
                    },
                    3: {
                        id: '136',
                        index: '',
                        text: '13',
                        isCorrect: '',
                    },
                    4: {
                        id: '137',
                        index: '',
                        text: '14',
                        isCorrect: '',
                    },
                    5: {
                        id: '138',
                        index: '',
                        text: '15',
                        isCorrect: '',
                    },
                    6: {
                        id: '139',
                        index: '',
                        text: '16',
                        isCorrect: '',
                    },
                    7: {
                        id: '140',
                        index: '',
                        text: '17',
                        isCorrect: '',
                    },
                    8: {
                        id: '141',
                        index: '',
                        text: '18',
                        isCorrect: '',
                    },
                    9: {
                        id: '142',
                        index: '',
                        text: '19',
                        isCorrect: '',
                    },
                    10: {
                        id: '143',
                        index: '',
                        text: '20',
                        isCorrect: '',
                    },
                },
            },
            10: {
                id: '20',
                index: '',
                image: 'https://spaces-cdn.clipsafari.com/r8qjutbatmp377wukreee3buybtd',
                text: 'Anzeige J',
                answers: {
                    1: {
                        id: '144',
                        index: '',
                        text: '11',
                        isCorrect: true,
                    },
                    2: {
                        id: '145',
                        index: '',
                        text: '12',
                        isCorrect: '',
                    },
                    3: {
                        id: '146',
                        index: '',
                        text: '13',
                        isCorrect: '',
                    },
                    4: {
                        id: '147',
                        index: '',
                        text: '14',
                        isCorrect: '',
                    },
                    5: {
                        id: '148',
                        index: '',
                        text: '15',
                        isCorrect: '',
                    },
                    6: {
                        id: '149',
                        index: '',
                        text: '16',
                        isCorrect: '',
                    },
                    7: {
                        id: '150',
                        index: '',
                        text: '17',
                        isCorrect: '',
                    },
                    8: {
                        id: '151',
                        index: '',
                        text: '18',
                        isCorrect: '',
                    },
                    9: {
                        id: '152',
                        index: '',
                        text: '19',
                        isCorrect: '',
                    },
                    10: {
                        id: '153',
                        index: '',
                        text: '20',
                        isCorrect: '',
                    },
                },
            },
        },
      },
    ]

    return(
        <>
            <TestView testInfo={testInfo} testParts={testParts} />  
        </>
    )

}

export default ReadingTest