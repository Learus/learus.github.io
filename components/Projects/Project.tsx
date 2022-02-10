import Image from "next/image";
import { ReactNode } from "react";
import styles from './Project.module.scss'

interface ProjectProps
{
    images: string[],
    description: ReactNode,
    title: string,
    technology: string[],
    color: string
}

export function Project({ images, description, title, technology, color }: ProjectProps)
{
    return (
        <div className={`${styles.Project} ${styles[color]}`} >

            <div
                className={styles.Images}
                style={{

                    backgroundImage: `url(${images[0]})`,
                    backgroundColor: 'green',
                    backgroundSize: 'cover'
                }}
            />

            <div className={styles.ContentWrapper}>
                <div className={styles.Content}>
                    <div style={{ zIndex: 1 }}>
                        <h1>
                            {title}
                        </h1>
                    </div>
                    {/* keywords */}
                    <div className={styles.Technology}>
                        {technology.map(t =>
                        {
                            return (
                                <li key={t}>{t}</li>
                            )
                        })}
                        <br />
                        <div className={styles.description}>
                            {/* description  */}
                            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                        </div>

                        <a>
                            <button>
                                Check it out!
                            </button>
                        </a>
                    </div>

                    {/* images */}

                </div>
            </div>



        </div>
    )
}