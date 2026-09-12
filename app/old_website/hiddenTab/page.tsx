'use client';

import { useRouter } from 'next/navigation';

export default function Secret() {
    const router = useRouter();

    return(
        <div>
            <link rel="icon" type="image/png" href='/secretIcon.png'/>
            <title>Secret! | Leo Teeuwen</title>
            <a onClick={() => router.back()}>Go back!</a>
            <p>Insert something cool!</p>
            <p>Yo Waddup Chain</p>
        </div>
    )
}