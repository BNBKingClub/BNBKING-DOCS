import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'CONNECTING TO PRIVATE RPC',
      items: [
        {
          type: 'category',
          label: 'MetaMask',
          items: [
            'rpc/metamask',
            'rpc/install-metamask',
            'rpc/pc-connects-to-rpc-url',
            'rpc/mobileconnection-rpc-url',
          ],
        },
        'rpc/tokenpocket',
      ],
    },
  ],
};

export default sidebars;