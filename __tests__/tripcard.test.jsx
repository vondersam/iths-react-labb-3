import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TripCard from '../pages/components/tripCard';

describe('TripCard', () => {
  const trip = {
    ServiceDays: [
      {
        planningPeriodBegin: '2023-10-19',
        planningPeriodEnd: '2024-03-02',
        sDaysR: 'mån - fre',
        sDaysB: 'CF9F3E7CF9F3E7CF80007CF9F3E7CF9F3E'
      }
    ],
    LegList: {
      Leg: [
        {
          Origin: {
            name: 'Bagarmossen',
            type: 'ST',
            id: 'A=1@O=Bagarmossen@X=18131207@Y=59276272@U=74@L=400101941@',
            extId: '400101941',
            lon: 18.131207,
            lat: 59.276272,
            prognosisType: 'PROGNOSED',
            time: '16:14:00',
            date: '2024-01-18',
            track: '1',
            hasMainMast: true,
            mainMastId:
              'A=1@O=Bagarmossen (Stockholm)@X=18133508@Y=59276596@U=74@L=300109141@',
            mainMastExtId: '300109141',
            additional: false
          },
          Destination: {
            name: 'Slussen',
            type: 'ST',
            id: 'A=1@O=Slussen@X=18072219@Y=59319636@U=74@L=400101011@',
            extId: '400101011',
            lon: 18.072219,
            lat: 59.319636,
            prognosisType: 'PROGNOSED',
            time: '16:28:00',
            date: '2024-01-18',
            track: '1',
            hasMainMast: true,
            mainMastId:
              'A=1@O=Slussen (Stockholm)@X=18072453@Y=59320320@U=74@L=300109192@',
            mainMastExtId: '300109192',
            additional: false
          },
          JourneyDetailRef: {
            ref: '1|8683|0|74|18012024'
          },
          Messages: {
            Message: [
              {
                id: '132119268',
                act: true,
                head: 'Information',
                text: 'Skanstull: En hiss mot gatuplan är avstängd pga tekniskt fel. Hänvisning till andra hissar.',
                category: '0',
                priority: 60,
                products: 65535,
                sTime: '09:29:00',
                sDate: '2024-01-14',
                eTime: '10:29:00',
                eDate: '2024-01-21'
              }
            ]
          },
          JourneyStatus: 'P',
          Product: {
            name: 'tunnelbanans gröna linje 17',
            num: '11042',
            line: '17',
            catOut: 'METRO   ',
            catIn: 'MET',
            catCode: '1',
            catOutS: 'MET',
            catOutL: 'TUNNELBANA ',
            operatorCode: 'SL',
            operator: 'Storstockholms Lokaltrafik',
            admin: '100017'
          },
          Stops: null,
          idx: '0',
          name: 'tunnelbanans gröna linje 17',
          number: '11042',
          category: 'MET',
          type: 'JNY',
          reachable: true,
          redirected: false,
          direction: 'Hässelby strand'
        },
        {
          Origin: {
            name: 'Slussen',
            type: 'ST',
            id: 'A=1@O=Slussen@X=18072219@Y=59319636@U=74@L=400101011@',
            extId: '400101011',
            lon: 18.072219,
            lat: 59.319636,
            time: '16:29:00',
            date: '2024-01-18',
            hasMainMast: true,
            mainMastId:
              'A=1@O=Slussen (Stockholm)@X=18072453@Y=59320320@U=74@L=300109192@',
            mainMastExtId: '300109192',
            additional: false
          },
          Destination: {
            name: 'Slussen',
            type: 'ST',
            id: 'A=1@O=Slussen@X=18072102@Y=59319600@U=74@L=400102012@',
            extId: '400102012',
            lon: 18.072102,
            lat: 59.3196,
            time: '16:31:00',
            date: '2024-01-18',
            hasMainMast: true,
            mainMastId:
              'A=1@O=Slussen (Stockholm)@X=18072453@Y=59320320@U=74@L=300109192@',
            mainMastExtId: '300109192',
            additional: false
          },
          Stops: null,
          idx: '1',
          name: '',
          type: 'WALK',
          reachable: true,
          redirected: false,
          duration: 'PT2M',
          dist: 8,
          hide: true
        },
        {
          Origin: {
            name: 'Slussen',
            type: 'ST',
            id: 'A=1@O=Slussen@X=18072102@Y=59319600@U=74@L=400102012@',
            extId: '400102012',
            lon: 18.072102,
            lat: 59.3196,
            prognosisType: 'PROGNOSED',
            time: '16:31:00',
            date: '2024-01-18',
            track: '3',
            hasMainMast: true,
            mainMastId:
              'A=1@O=Slussen (Stockholm)@X=18072453@Y=59320320@U=74@L=300109192@',
            mainMastExtId: '300109192',
            additional: false
          },
          Destination: {
            name: 'Liljeholmen',
            type: 'ST',
            id: 'A=1@O=Liljeholmen@X=18022931@Y=59310647@U=74@L=400102604@',
            extId: '400102604',
            lon: 18.022931,
            lat: 59.310647,
            prognosisType: 'PROGNOSED',
            time: '16:39:00',
            date: '2024-01-18',
            track: '5',
            hasMainMast: true,
            mainMastId:
              'A=1@O=Liljeholmen (Stockholm)@X=18024810@Y=59310665@U=74@L=300109294@',
            mainMastExtId: '300109294',
            additional: false
          },
          JourneyDetailRef: {
            ref: '1|5982|5|74|18012024'
          },
          JourneyStatus: 'P',
          Product: {
            name: 'tunnelbanans röda linje 13',
            num: '20823',
            line: '13',
            catOut: 'METRO   ',
            catIn: 'MET',
            catCode: '1',
            catOutS: 'MET',
            catOutL: 'TUNNELBANA ',
            operatorCode: 'SL',
            operator: 'Storstockholms Lokaltrafik',
            admin: '100013'
          },
          Stops: null,
          idx: '2',
          name: 'tunnelbanans röda linje 13',
          number: '20823',
          category: 'MET',
          type: 'JNY',
          reachable: true,
          redirected: false,
          direction: 'Alby'
        }
      ]
    },
    TariffResult: {
      fareSetItem: [
        {
          fareItem: [
            {
              name: 'Enkelbiljett, 75 minuter',
              desc: 'Helt pris',
              price: 4200,
              cur: 'SEK'
            },
            {
              name: 'Enkelbiljett, 75 minuter',
              desc: 'Reducerat pris',
              price: 2600,
              cur: 'SEK'
            }
          ],
          name: 'ONEWAY',
          desc: 'SL'
        }
      ]
    },
    alternative: false,
    valid: true,
    idx: 0,
    tripId: 'C-0',
    ctxRecon:
      'T$A=1@O=Bagarmossen@L=400101941@a=128@$A=1@O=Slussen@L=400101011@a=128@$202401181614$202401181628$        $§W$A=1@O=Slussen@L=400101011@a=128@$A=1@O=Slussen@L=400102012@a=128@$202401181629$202401181631$$§T$A=1@O=Slussen@L=400102012@a=128@$A=1@O=Liljeholmen@L=400102604@a=128@$202401181631$202401181639$        $',
    duration: 'PT25M',
    return: false,
    checksum: '9A589801_4',
    transferCount: 0
  };
  it('renders a trip card', () => {
    render(<TripCard trip={trip} />);
    expect(screen.getByText('25 minutes')).toBeInTheDocument();
    expect(
      screen.getByText('Bagarmossen > Slussen > Liljeholmen')
    ).toBeInTheDocument();
  });
});
