'use client';
import Logo from '@components/Logo';
import { i18n } from '@root/i18n-config'
import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}
export default async function Home()
{
    //go to /welcome 
    redirect('/en/');

    return null; // This won't be reached after redirect
}

    