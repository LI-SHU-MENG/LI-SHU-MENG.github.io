import React from 'react'
import PanoramicViewer from '@components/PanoramicViewer'

type Lang = 'en' | 'fr' | 'cn'

const installationViews = [
  '/la-solitude-installation-01.jpg',
  '/la-solitude-installation-02.jpg',
  '/la-solitude-installation-03.jpg',
  '/la-solitude-installation-04.jpg',
]

const content = {
  en: {
    translation: 'The Solitude of Automata',
    mediaTop: 'Moving Image · Sound',
    info: 'Work Information',
    technical: 'Looped video, stereo sound · 6’39’’ · 2025',
    exhibition: 'PhotoSaintGermain 2025',
    about: 'About',
    installation: 'Installation Views',
    caption:
      'La Solitude des Automates, installation view, PhotoSaintGermain 2025',
    paragraphs: [
      `La solitude des automates was filmed on site in 2024 at Fuzhou Changle Jinyuan Textile Co., Ltd., Fujian, China, from an electric cart moving through an AI-controlled textile production line. Rather than reproducing familiar imagery of industrial misery, the film turns toward the density, precision and estrangement of the factory itself.`,

      `Presented as a single unedited sequence, the work preserves the continuous drift of mechanical labour. An original soundtrack composed by the artist moves with the machinery, while a brief string motif marks each appearance of a worker — a fragile human presence surfacing within the automated field.`,

      `From this almost dreamlike realism emerges a layered solitude: that of labour, industrial practice, the machine and automation itself. The work reflects on a contemporary condition in which global production is shaped not only by intelligence and efficiency, but also by distance, misreading and the quiet isolation of those — human or nonhuman — who remain inside the system.`,
    ],
  },

  fr: {
    translation: '',
    mediaTop: 'Image en mouvement · Son',
    info: 'Informations',
    technical: 'Vidéo en boucle, son stéréo · 6’39’’ · 2025',
    exhibition: 'PhotoSaintGermain 2025',
    about: 'À propos',
    installation: 'Vues d’exposition',
    caption:
      'La Solitude des Automates, vue d’exposition, PhotoSaintGermain 2025',
    paragraphs: [
      `La solitude des automates a été filmée en 2024 au sein de Fuzhou Changle Jinyuan Textile Co., Ltd., dans le Fujian en Chine, depuis un véhicule électrique traversant une chaîne de production textile contrôlée par intelligence artificielle. Plutôt que de reproduire l’imaginaire familier de la misère industrielle, le film se tourne vers la densité, la précision et l’étrangeté de l’usine elle-même.`,

      `Présentée sous la forme d’un plan-séquence non monté, l’œuvre conserve la continuité du travail mécanique. Une bande sonore originale composée par l’artiste accompagne le mouvement des machines, tandis qu’un bref motif de cordes signale chaque apparition d’un travailleur — présence humaine fragile surgissant dans le champ automatisé.`,

      `De ce réalisme presque onirique émerge une solitude à plusieurs niveaux : celle du travail, de la pratique industrielle, de la machine et de l’automatisation elle-même. L’œuvre interroge une condition contemporaine dans laquelle la production mondiale est façonnée non seulement par l’intelligence et l’efficacité, mais aussi par la distance, le malentendu et l’isolement silencieux de celles et ceux — humains ou non humains — qui demeurent à l’intérieur du système.`,
    ],
  },

  cn: {
    translation: '机械孤独',
    mediaTop: '动态影像 · 声音',
    info: '作品信息',
    technical: '循环影像、立体声 · 6分39秒 · 2025',
    exhibition: 'PhotoSaintGermain 2025',
    about: '关于作品',
    installation: '展览现场',
    caption:
      '《La Solitude des Automates》展览现场，PhotoSaintGermain 2025',
    paragraphs: [
      `La Solitude des Automates 于2024年拍摄于中国福建省福州市长乐锦源纺织有限公司。艺术家乘坐电动车穿行于由人工智能控制的纺织生产线，并以此完成影像拍摄。作品并未重复关于工业生产与苦难的既有视觉想象，而是转向工厂自身的密度、精确性与陌生感。`,

      `影片以未经剪辑的单一连续镜头呈现，保留机械劳动持续运行的时间感。由艺术家创作的原创声音作品与机器运动同步展开；每当工人的身影出现，一段短暂的弦乐动机会随之响起，使人的存在如同自动化场域中短暂浮现的痕迹。`,

      `在这种近乎梦境般的现实中，一种多重的孤独逐渐显现：劳动的孤独、工业实践的孤独、机器的孤独，以及自动化本身的孤独。作品由此指向一种更广泛的当代处境——全球生产不仅被智能与效率塑造，也同时受到距离、误读，以及那些仍身处系统之中的人类与非人类主体所经历的静默隔离所影响。`,
    ],
  },
} satisfies Record<Lang, any>

function ItalicizeWorkTitle({ text }: { text: string }) {
  const titleRegex = /(La solitude des automates|La Solitude des Automates)/g
  const parts = text.split(titleRegex)

  return (
    <>
      {parts.map((part, index) =>
        titleRegex.test(part) ? (
          <em key={index}>{part}</em>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </>
  )
}

export default async function LaSolitudeDesAutomatesPage({
  params,
}: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params
  const t = content[lang] ?? content.en

  

  const photography = {
    en: {
      section: 'Photography',
      series: 'Photographic series · 2025',
      medium1: 'Digital photography · 2025',
      medium2: 'Panoramic digital photography · 2025',
      description: `Developed alongside the moving-image work La Solitude des Automates, these photographs turn toward the industrial space itself. Made inside an automated textile factory in Changle, China, the series shifts attention from production toward architecture, artificial light, repetition and absence. Rather than presenting automation as a dystopian spectacle, the photographs observe how it reorganises space, perception and human presence.`,
      installation: 'Installation view, PhotoSaintGermain 2025, Beaux-Arts de Paris',
    },
    fr: {
      section: 'Photographie',
      series: 'Série photographique · 2025',
      medium1: 'Photographie numérique · 2025',
      medium2: 'Photographie panoramique numérique · 2025',
      description: `Développées parallèlement au film La Solitude des Automates, ces photographies se tournent vers l’espace industriel lui-même. Réalisée dans une usine textile automatisée à Changle, en Chine, la série déplace le regard de la production vers l’architecture, la lumière artificielle, la répétition et l’absence. Plutôt que de présenter l’automatisation comme un spectacle dystopique, les images observent la manière dont elle reconfigure l’espace, la perception et la présence humaine.`,
      installation: 'Vue d’installation, PhotoSaintGermain 2025, Beaux-Arts de Paris',
    },
    zh: {
      section: '摄影',
      series: '摄影系列 · 2025',
      medium1: '数码摄影 · 2025',
      medium2: '全景数码摄影 · 2025',
      description: `这组摄影作品与影像作品 La Solitude des Automates 平行发展，将视线进一步转向工业空间本身。作品拍摄于中国长乐的一座自动化纺织工厂，关注点从生产过程转向建筑、人工光线、重复结构与人的缺席。作品并不将自动化简单处理为一种反乌托邦景观，而是观察它如何重新组织空间、感知与人的在场。`,
      installation: '展览现场，PhotoSaintGermain 2025，Beaux-Arts de Paris',
    },
  } as const

  const p = photography[lang] ?? photography.en
return (
    <main className="min-h-screen bg-white px-6 pb-32 pt-[220px] md:px-10">
      <div className="mx-auto max-w-[1180px]">

        <header className="mb-24">
          <div className="mb-8 flex justify-between text-[11px] uppercase tracking-[0.14em] text-black/40">
            <span>2025</span>
            <span>{t.mediaTop}</span>
          </div>

          <h1
            className="max-w-[1050px] text-[clamp(4rem,9vw,9rem)] font-normal leading-[0.78] tracking-[-0.065em] text-[#0F02E6]"
            style={{
              fontFamily: 'Georgia, "Times New Roman", Times, serif',
            }}
          >
            La Solitude
            <br />
            des Automates
          </h1>

          {t.translation && (
            <p className="mt-10 text-[18px] italic text-black/55">
              {t.translation}
            </p>
          )}
        </header>

        <section className="mb-32">
          <img
            src="/la-solitude-des-automates.jpg"
            alt="La Solitude des Automates"
            className="mx-auto w-full max-w-[620px]"
          />
        </section>

        <section className="mb-28">
          <div className="mx-auto aspect-video w-full max-w-[860px] overflow-hidden bg-black">
            <iframe
              src="https://www.youtube.com/embed/q4p89zgqgKk"
              title="La Solitude des Automates"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="mb-28 grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr] md:gap-24">
          <div className="text-[11px] uppercase tracking-[0.14em] text-[#0F02E6]">
            {t.info}
          </div>

          <div className="max-w-[720px] text-[15px] leading-[1.55]">
            <p>{t.technical}</p>
            <p className="mt-2">{t.exhibition}</p>
          </div>
        </section>

        <section className="mb-36 grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr] md:gap-24">
          <div className="text-[11px] uppercase tracking-[0.14em] text-[#0F02E6]">
            {t.about}
          </div>

          <div className="max-w-[720px] space-y-7 text-justify text-[17px] leading-[1.55]">
            {t.paragraphs.map((paragraph: string, index: number) => (
              <p key={index}>
                <ItalicizeWorkTitle text={paragraph} />
              </p>
            ))}
          </div>
        </section>

        
      <section className="mb-40">
        <div className="mb-16 text-[11px] uppercase tracking-[0.14em] text-[#0F02E6]">
          {p.section}
        </div>

        <div className="mb-28">
          <div className="relative">
            <img
              src="/la-solitude-photography-01.jpg"
              alt="La Solitude des Automates I"
              className="w-full"
            />

            <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.12em] text-[#0F02E6]">
              PhotoSaintGermain 2025
            </div>
          </div>

          <div className="mt-4">
            <div className="text-[17px] italic">
              La Solitude des Automates I
            </div>
            <div className="mt-1 text-[12px]">
              {p.medium1}
            </div>
          </div>
        </div>

        <div className="mb-32 grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr] md:gap-24">
          <div className="text-[11px] uppercase tracking-[0.14em] text-[#0F02E6]">
            {p.series}
          </div>

          <div className="max-w-[720px] text-justify text-[17px] leading-[1.55]">
            <p>
              <ItalicizeWorkTitle text={p.description} />
            </p>
          </div>
        </div>

        <div className="mb-32">
          <div className="mb-5">
            <div className="text-[17px] italic">
              La Solitude des Automates II
            </div>
            <div className="mt-1 text-[12px]">
              {p.medium2}
            </div>
          </div>

          <PanoramicViewer
            src="/la-solitude-panorama.jpg"
            alt="La Solitude des Automates II"
          />

          <div className="mt-3 text-right text-[10px] uppercase tracking-[0.12em] text-[#0F02E6]">
            PhotoSaintGermain 2025
          </div>
        </div>

        <figure>
          <img
            src="/la-solitude-installation-view-01.jpg"
            alt={p.installation}
            className="w-full"
          />

          <figcaption className="mt-3 text-[11px] text-black/35">
            {p.installation}
          </figcaption>
        </figure>
      </section>

<section>
          <div className="mb-16 text-[11px] uppercase tracking-[0.14em] text-[#0F02E6]">
            {t.installation}
          </div>

          <div className="space-y-16">
            {installationViews.map((image, index) => (
              <figure key={image}>
                <img
                  src={image}
                  alt={`${t.installation} ${index + 1}`}
                  className="w-full"
                />

                <figcaption className="mt-3 text-[11px] text-black/35">
                  <ItalicizeWorkTitle text={t.caption} />
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
