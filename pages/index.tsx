import { Seo } from '@/components/common/seo'
import { FeaturedWork, HeroSection, RecentPost } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'
const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'Minh Phúc Blog: Trang chủ',
          description:
            'Nơi kiến thức Frontend được chia sẻ một cách đơn giản, dễ hiểu và đặc biệt là vui. Bạn đã truy cập trang này 2 lần',
          url: 'https://minhphucblog.vercel.app/',
          thumbnailUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnwAJtBWl41ZIGBQ1HESUMATk2xSl5n9PYbyP160FSuERbpDcRz5kuT0TpizPjXCfoXQ&usqp=CAU',
        }}
      />
      <HeroSection />
      <RecentPost />
      <FeaturedWork />
    </Box>
  )
}
Home.Layout = MainLayout
export default Home
