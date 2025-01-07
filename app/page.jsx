'use client';
import '@styles/home.css';
import { redirect } from 'next/navigation'

export default function Home() {
        //go to /welcome 
        redirect('/welcome')

    return (
        <></>
    );
}
    