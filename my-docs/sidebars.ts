import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'CONNECTING TO PRIVATE RPC',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'MetaMask',
          collapsed: false,
          items: [
            'rpc/metamask/metamask',
            'rpc/metamask/install-metamask',
            'rpc/metamask/pc-connects-to-rpc-url',
            'rpc/metamask/mobileconnection-rpc-url',
          ],
        },
        {
          type: 'category',
          label: 'TokenPocket',
          collapsed: false,
          items: [
            'rpc/tokenpocket/tokenpocket',
            'rpc/tokenpocket/install-tokenpocket',
            'rpc/tokenpocket/connecting-to-rpc-url',
          ],
        },
        // {
        //   type: 'category',
        //   label: 'MetaMask',
        //   collapsed: false,
        //   items: [
        //     'zh-CN/rpc/metamask/metamask',
        //     'zh-CN/rpc/metamask/install-metamask',
        //     'zh-CN/rpc/metamask/pc-connects-to-rpc-url',
        //     'zh-CN/rpc/metamask/mobileconnection-rpc-url',
        //   ],
        // },
        // {
        //   type: 'category',
        //   label: 'TokenPocket',
        //   collapsed: false,
        //   items: [
        //     'zh-CN/rpc/tokenpocket/tokenpocket',
        //     'zh-CN/rpc/tokenpocket/install-tokenpocket',
        //     'zh-CN/rpc/tokenpocket/connecting-to-rpc-url',
        //   ],
        // },
      ],
    },
  ],
};

export default sidebars;