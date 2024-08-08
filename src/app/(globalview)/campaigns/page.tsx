
import CampaignCo from '@/components/Campaign/campaigndisplay';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, PhoneIncoming, PhoneOutgoing } from 'lucide-react';
const campaigns = [
  {
    CampaignName: 'Agent Red for Slack Comm',
    CampaignDescription:
      'For team communication and real-time collab. Payment from stock investments. For team communi and realfukyu dytun6en',
    CampaignType: 'OutBound',
    StartedOn: '22 Dec 2020',
    EndsOn: '22 Dec 2024',
    CompletedCalls: 9000,
    ScheduledCalls: 6000,
    AnsweredCalls: 2000,
    TotalCalls: 6000,
  },
  {
    CampaignName: 'BlueWave for Team Connect',
    CampaignDescription:
      'Enhancing team communication through innovative solutions. Focused on real-time updates and seamless integration.',
    CampaignType: 'InBound',
    StartedOn: '10 Jan 2021',
    EndsOn: '10 Jan 2025',
    CompletedCalls: 8500,
    ScheduledCalls: 5000,
    AnsweredCalls: 3000,
    TotalCalls: 5000,
  },
  {
    CampaignName: 'GreenLight for Growth',
    CampaignDescription:
      'Boosting business growth through targeted outreach and strategic planning.',
    CampaignType: 'OutBound',
    StartedOn: '15 Feb 2021',
    EndsOn: '15 Feb 2025',
    CompletedCalls: 7000,
    ScheduledCalls: 4500,
    AnsweredCalls: 2500,
    TotalCalls: 4500,
  },
  {
    CampaignName: 'YellowBrick Roadmap',
    CampaignDescription:
      'Creating a clear path to success with our comprehensive roadmap services.',
    CampaignType: 'InBound',
    StartedOn: '20 Mar 2021',
    EndsOn: '20 Mar 2025',
    CompletedCalls: 9200,
    ScheduledCalls: 5800,
    AnsweredCalls: 3400,
    TotalCalls: 5800,
  },
  {
    CampaignName: 'OrangeHorizon Expansion',
    CampaignDescription:
      'Expanding horizons with innovative solutions and strategic outreach.',
    CampaignType: 'OutBound',
    StartedOn: '25 Apr 2021',
    EndsOn: '25 Apr 2025',
    CompletedCalls: 8000,
    ScheduledCalls: 5500,
    AnsweredCalls: 2500,
    TotalCalls: 5500,
  },
  {
    CampaignName: 'PurplePeak Performance',
    CampaignDescription:
      'Maximizing performance through effective communication and collaboration.',
    CampaignType: 'InBound',
    StartedOn: '30 May 2021',
    EndsOn: '30 May 2025',
    CompletedCalls: 8800,
    ScheduledCalls: 5200,
    AnsweredCalls: 3600,
    TotalCalls: 5200,
  },
  {
    CampaignName: 'BlackBox Solutions',
    CampaignDescription:
      'Offering innovative solutions to complex problems through strategic planning.',
    CampaignType: 'OutBound',
    StartedOn: '05 Jun 2021',
    EndsOn: '05 Jun 2025',
    CompletedCalls: 7500,
    ScheduledCalls: 4800,
    AnsweredCalls: 2700,
    TotalCalls: 4800,
  },
  {
    CampaignName: 'WhiteWave Collaboration',
    CampaignDescription:
      'Facilitating collaboration and communication through state-of-the-art tools.',
    CampaignType: 'InBound',
    StartedOn: '10 Jul 2021',
    EndsOn: '10 Jul 2025',
    CompletedCalls: 9300,
    ScheduledCalls: 6100,
    AnsweredCalls: 3200,
    TotalCalls: 6100,
  },
  {
    CampaignName: 'RedRock Strategies',
    CampaignDescription:
      'Developing strategies for business growth and market expansion.',
    CampaignType: 'OutBound',
    StartedOn: '15 Aug 2021',
    EndsOn: '15 Aug 2025',
    CompletedCalls: 7800,
    ScheduledCalls: 4900,
    AnsweredCalls: 2900,
    TotalCalls: 4900,
  },
  {
    CampaignName: 'BlueSky Networking',
    CampaignDescription:
      'Enhancing networking opportunities through innovative solutions.',
    CampaignType: 'InBound',
    StartedOn: '20 Sep 2021',
    EndsOn: '20 Sep 2025',
    CompletedCalls: 8600,
    ScheduledCalls: 5700,
    AnsweredCalls: 2900,
    TotalCalls: 5700,
  },
  {
    CampaignName: 'GreenField Expansion',
    CampaignDescription:
      'Expanding market reach with strategic outreach and communication.',
    CampaignType: 'OutBound',
    StartedOn: '25 Oct 2021',
    EndsOn: '25 Oct 2025',
    CompletedCalls: 7200,
    ScheduledCalls: 4600,
    AnsweredCalls: 2600,
    TotalCalls: 4600,
  },
  {
    CampaignName: 'YellowStone Initiative',
    CampaignDescription:
      'Initiating strategic plans to enhance business growth and communication.',
    CampaignType: 'InBound',
    StartedOn: '30 Nov 2021',
    EndsOn: '30 Nov 2025',
    CompletedCalls: 9400,
    ScheduledCalls: 6000,
    AnsweredCalls: 3400,
    TotalCalls: 6000,
  },
  {
    CampaignName: 'OrangeSunrise Solutions',
    CampaignDescription:
      'Providing innovative solutions for business communication and growth.',
    CampaignType: 'OutBound',
    StartedOn: '05 Dec 2021',
    EndsOn: '05 Dec 2025',
    CompletedCalls: 8100,
    ScheduledCalls: 5400,
    AnsweredCalls: 2700,
    TotalCalls: 5400,
  },
  {
    CampaignName: 'PurpleWave Performance',
    CampaignDescription:
      'Enhancing performance through effective communication and collaboration.',
    CampaignType: 'InBound',
    StartedOn: '10 Jan 2022',
    EndsOn: '10 Jan 2026',
    CompletedCalls: 8700,
    ScheduledCalls: 5900,
    AnsweredCalls: 2800,
    TotalCalls: 5900,
  },
  {
    CampaignName: 'BlackRock Strategies',
    CampaignDescription:
      'Developing innovative strategies for market expansion and business growth.',
    CampaignType: 'OutBound',
    StartedOn: '15 Feb 2022',
    EndsOn: '15 Feb 2026',
    CompletedCalls: 7900,
    ScheduledCalls: 5300,
    AnsweredCalls: 2600,
    TotalCalls: 5300,
  },
  {
    CampaignName: 'WhiteStar Collaboration',
    CampaignDescription:
      'Facilitating effective collaboration and communication through advanced tools.',
    CampaignType: 'InBound',
    StartedOn: '20 Mar 2022',
    EndsOn: '20 Mar 2026',
    CompletedCalls: 9100,
    ScheduledCalls: 6200,
    AnsweredCalls: 2900,
    TotalCalls: 6200,
  },
  {
    CampaignName: 'RedRiver Expansion',
    CampaignDescription:
      'Expanding business reach with strategic outreach and innovative solutions.',
    CampaignType: 'OutBound',
    StartedOn: '25 Apr 2022',
    EndsOn: '25 Apr 2026',
    CompletedCalls: 7600,
    ScheduledCalls: 5100,
    AnsweredCalls: 2500,
    TotalCalls: 5100,
  },
  {
    CampaignName: 'BlueOcean Networking',
    CampaignDescription:
      'Enhancing networking opportunities through strategic planning and communication.',
    CampaignType: 'InBound',
    StartedOn: '30 May 2022',
    EndsOn: '30 May 2026',
    CompletedCalls: 8500,
    ScheduledCalls: 5800,
    AnsweredCalls: 2700,
    TotalCalls: 5800,
  },
  {
    CampaignName: 'GreenMountain Growth',
    CampaignDescription:
      'Boosting growth with strategic outreach and innovative communication.',
    CampaignType: 'OutBound',
    StartedOn: '05 Jun 2022',
    EndsOn: '05 Jun 2026',
    CompletedCalls: 7100,
    ScheduledCalls: 4700,
    AnsweredCalls: 2400,
    TotalCalls: 4700,
  },
  {
    CampaignName: 'YellowSea Initiative',
    CampaignDescription:
      'Initiating innovative plans for business communication and growth.',
    CampaignType: 'InBound',
    StartedOn: '10 Jul 2022',
    EndsOn: '10 Jul 2026',
    CompletedCalls: 9300,
    ScheduledCalls: 6000,
    AnsweredCalls: 3300,
    TotalCalls: 6000,
  },
];
export default function CampaignPageCo() {
  return (
    <div className='w-full  max-w-full flex flex-col items-start justify-start py-5 px-8 box-border gap-5 leading-[normal] tracking-[normal] text-left text-sm text-text-sub-500 font-label-x-small'>
      <Tabs defaultValue='all'>
        <TabsList className='grid w-[620px] grid-cols-3'>
          <TabsTrigger value='all'>All Campaigns</TabsTrigger>
          <TabsTrigger value='inbound'>Inbound Campaigns</TabsTrigger>
          <TabsTrigger value='outbound'>Outbound Campaigns</TabsTrigger>
        </TabsList>
        <TabsContent value='all'>
          <div className='my-5 self-stretch flex flex-row flex-wrap items-center justify-start gap-3.5 max-w-full text-lg text-text-main-900'>
            <div className='h-12 w-12 rounded-full bg-bg-weak-100 overflow-hidden shrink-0 flex flex-row items-center justify-center p-3 box-border'>
              <Phone className='w-[18px] h-[18px] stroke-prime-dark' />
            </div>
            <div className='flex-1 flex flex-col items-start justify-start gap-1 min-w-[684px] max-w-full mq800:min-w-full'>
              <h3 className='m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[24px] font-medium font-[inherit]'>
                All Campaigns
              </h3>
              <div className='self-stretch relative text-sm tracking-[-0.01em] leading-[20px] text-text-sub-500'>
                Manage your integrations to enhance and automate your workflow.
              </div>
            </div>
          </div>
          <section className=' self-stretch flex flex-col items-start justify-start max-w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2  3xl:grid-cols-4  gap-4  flex-row flex-wrap items-start justify-start  box-border gap-x-5 gap-y-[22px] min-h-[340px] max-w-full'>
              {campaigns.map((campaign, index) => (
                <CampaignCo
                  key={index}
                  CampaignName={campaign.CampaignName}
                  CampaignDescription={campaign.CampaignDescription}
                  CampaignType={campaign.CampaignType}
                  StartedOn={campaign.StartedOn}
                  EndsOn={campaign.EndsOn}
                  CompletedCalls={campaign.CompletedCalls}
                  ScheduledCalls={campaign.ScheduledCalls}
                  AnsweredCalls={campaign.AnsweredCalls}
                  TotalCalls={campaign.TotalCalls}
                />
              ))}
            </div>
          </section>
        </TabsContent>
        <TabsContent value='inbound'>
          <div className=' my-5 self-stretch flex flex-row flex-wrap items-center justify-start gap-3.5 max-w-full text-lg text-text-main-900'>
            <div className='h-12 w-12 rounded-full bg-bg-weak-100 overflow-hidden shrink-0 flex flex-row items-center justify-center p-3 box-border'>
              <PhoneIncoming className='w-[18px] h-[18px] stroke-prime-dark' />
            </div>
            <div className='flex-1 flex flex-col items-start justify-start gap-1 min-w-[684px] max-w-full mq800:min-w-full'>
              <h3 className='m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[24px] font-medium font-[inherit]'>
                Inbound
              </h3>
              <div className='self-stretch relative text-sm tracking-[-0.01em] leading-[20px] text-text-sub-500'>
                Manage your integrations to enhance and automate your workflow.
              </div>
            </div>
          </div>
          <section className='self-stretch flex flex-col items-start justify-start max-w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2  3xl:grid-cols-4  gap-4  flex-row flex-wrap items-start justify-start  box-border gap-x-5 gap-y-[22px] min-h-[340px] max-w-full'>
              {campaigns.map((campaign, index) => (
                <CampaignCo
                  key={index}
                  CampaignName={campaign.CampaignName}
                  CampaignDescription={campaign.CampaignDescription}
                  CampaignType={campaign.CampaignType}
                  StartedOn={campaign.StartedOn}
                  EndsOn={campaign.EndsOn}
                  CompletedCalls={campaign.CompletedCalls}
                  ScheduledCalls={campaign.ScheduledCalls}
                  AnsweredCalls={campaign.AnsweredCalls}
                  TotalCalls={campaign.TotalCalls}
                />
              ))}
            </div>
          </section>
        </TabsContent>
        <TabsContent value='outbound'>
          <div className=' my-5 self-stretch flex flex-row flex-wrap items-center justify-start gap-3.5 max-w-full text-lg text-text-main-900'>
            <div className='h-12 w-12 rounded-full bg-bg-weak-100 overflow-hidden shrink-0 flex flex-row items-center justify-center p-3 box-border'>
              <PhoneOutgoing className='w-[18px] h-[18px] stroke-prime-dark' />
            </div>
            <div className='flex-1 flex flex-col items-start justify-start gap-1 min-w-[684px] max-w-full mq800:min-w-full'>
              <h3 className='m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[24px] font-medium font-[inherit]'>
                Outbound
              </h3>
              <div className='self-stretch relative text-sm tracking-[-0.01em] leading-[20px] text-text-sub-500'>
                Manage your integrations to enhance and automate your workflow.
              </div>
            </div>
          </div>
          <section className='self-stretch flex flex-col items-start justify-start max-w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2  3xl:grid-cols-4  gap-4  flex-row flex-wrap items-start justify-start  box-border gap-x-5 gap-y-[22px] min-h-[340px] max-w-full'>
              {campaigns.map((campaign, index) => (
                <CampaignCo
                  key={index}
                  CampaignName={campaign.CampaignName}
                  CampaignDescription={campaign.CampaignDescription}
                  CampaignType={campaign.CampaignType}
                  StartedOn={campaign.StartedOn}
                  EndsOn={campaign.EndsOn}
                  CompletedCalls={campaign.CompletedCalls}
                  ScheduledCalls={campaign.ScheduledCalls}
                  AnsweredCalls={campaign.AnsweredCalls}
                  TotalCalls={campaign.TotalCalls}
                />
              ))}
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
