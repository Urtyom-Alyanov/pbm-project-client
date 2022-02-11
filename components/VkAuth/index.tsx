import dynamic from 'next/dynamic';

export const VkAuth = dynamic(
    () => import('./_vkAuth'),
    { loading: () => <p>...</p>, ssr: false }
  )