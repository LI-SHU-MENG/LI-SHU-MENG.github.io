import { getDictionary } from "@root/get-dictionary";
import { Locale } from "@root/i18n-config";
import '@styles/home.css';
import BlurText from '@components/BlurText';

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-[180px]">
            <div className="flex w-full items-center justify-center p-8 lg:px-8">
                <div
                    className={`mx-auto flex w-[92vw] items-center justify-center whitespace-nowrap text-center gap-[clamp(0.5rem,1.4vw,2rem)] ${
                        lang === 'fr'
                            ? 'text-[clamp(2.2rem,3.1vw,3.4rem)]'
                            : lang === 'en'
                                ? 'text-[clamp(2.6rem,3.6vw,4rem)]'
                                : 'text-6xl'
                    }`}
                >
                    <BlurText text={dictionary.sidebar[0]} link="../pages/biblio" float={true} blur={true}/>
                    <BlurText text={dictionary.sidebar[1]} link="../pages/works" float={true} blur={true}/>
                    <BlurText text={dictionary.sidebar[2]} link="../pages/cv" float={true} blur={true}/>
                    <BlurText text={dictionary.sidebar[3]} link="../pages/media" float={true} blur={true}/>
                    <BlurText text={dictionary.sidebar[4]} link="../pages/contact" float={true} blur={true}/>
                </div> 
            </div>
        </div>
    );
}
    