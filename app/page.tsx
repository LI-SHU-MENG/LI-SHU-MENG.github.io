'use client';
import { redirect } from 'next/navigation';

export default async function Home()
{
    //go to /welcome 
    redirect('/en/');

    return null; // This won't be reached after redirect
}

    