import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Pagess from '@/components/Pagess'
import AiSearch from '@/components/AiSearch'
import HomeUi from '@/components/HomeUi'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const imageUrl =
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-4 bg-white">
      {/* <Navbar/> */}
      <Pagess />
      <AiSearch />
      <HomeUi />
    </main>
  );
}
