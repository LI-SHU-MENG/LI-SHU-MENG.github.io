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
        <div className="h-full flex items-center justify-center flex-auto bg-white">
            <div className="flex items-center justify-center p-8 lg:px-8">
                <div className="text-6xl w-70vw lg:blur_grid">
                    <BlurText text={dictionary.sidebar[0]} link="pages/biblio" float={true} blur={true}/>
                    <BlurText text={dictionary.sidebar[1]} link="pages/works" float={true} blur={true}/>
                    <BlurText text={dictionary.sidebar[2]} link="pages/cv" float={true} blur={true}/>
                    <BlurText text={dictionary.sidebar[3]} link="pages/contact" float={true} blur={true}/>
                </div> 
            </div>
        </div>
    );
}
    