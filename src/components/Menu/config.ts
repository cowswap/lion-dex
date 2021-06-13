import { MenuEntry } from '@pancakeswap-libs/uikit'
import { isMainnet } from 'constants/index'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Airdrop',
    icon: 'AirdropIcon',
    href: '/',
  },
  {
    label: 'Presale',
    icon: 'PresaleIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: isMainnet ? 'https://cowswap.finance/farms' : 'https://testnet.cowswap.finance/farms',
    status: {
      color: "failure", text: "LIVE"
    }
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: isMainnet ? 'https://cowswap.finance/pools' : 'https://testnet.cowswap.finance/pools',
  },
  // {
  //   label: 'Prediction',
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  //   status: {
  //     text: 'BETA',
  //     color: 'warning',
  //   },
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/',
    status: {
      text: 'COMMING',
      color: 'warning',
    },
  },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  {
    label: 'NFT',
    icon: 'TeamBattleIcon',
    href: '/',
    status: {
      text: 'COMMING',
      color: 'warning',
    },
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    href: '/',
    // items: [
    //   {
    //     label: 'Leaderboard',
    //     href: '/teams',
    //   },
    //   {
    //     label: 'Task Center',
    //     href: '/profile/tasks',
    //   },
    //   {
    //     label: 'Your Profile',
    //     href: '/profile',
    //   },
    // ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: '/',
    // items: [
    //   {
    //     label: 'Overview',
    //     href: 'https://cowswap.info',
    //   },
    //   {
    //     label: 'Tokens',
    //     href: 'https://cowswap.info/tokens',
    //   },
    //   {
    //     label: 'Pairs',
    //     href: 'https://cowswap.info/pairs',
    //   },
    //   {
    //     label: 'Accounts',
    //     href: 'https://cowswap.info/accounts',
    //   },
    // ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/',
    status: {
      text: 'COMMING',
      color: 'warning',
    },
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    href: '/',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/cowswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.cowswap.finance',
      },
      {
        label: 'Gouda Contract',
        href: 'https://bscscan.com/address/0x90c2b27f2a71550714e14f4c882d908cdd46aa4b',
      },
    ],
  },
]

export default config
