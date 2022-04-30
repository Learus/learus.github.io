import { ReactNode } from "react";
import styles from './Project.module.scss'

export interface ProjectProps
{
    image: string,
    description: ReactNode,
    title: string,
    subtitle?: ReactNode,
    technology: string[],
    color: string,
    link?: string,
    footer?: ReactNode,
    position?: 'left' | 'right' | 'center'
}

export function Project({ image, subtitle, description, title, technology, color, link, footer, position = 'left' }: ProjectProps)
{
    return (
        <div className={`${styles.Project} ${styles.black}`} >

            <div
                className={styles.Images}
                style={{

                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover'
                }}
            />

            <div className={styles.ContentWrapper}>
                <div className={styles.Content} style={{ float: position === 'center' ? 'unset' : position, margin: position === 'center' ? '0 auto' : undefined }}>
                    <div className={styles.Title}>
                        <h1>
                            {title}
                        </h1>
                        <p className={styles.Subtitle}>{subtitle}</p>
                        <p className={styles.Technology}>
                            {technology.map((t, i, a) =>
                            {
                                return <span key={`${title}-technology-${i}`}>{t}{i !== a.length - 1 && <span className={styles.divider}> | </span>}</span>
                            })}
                        </p>
                    </div>

                    {/* keywords */}
                    <div className={styles.Body}>
                        <div className={styles.Description}>
                            {/* description  */}
                            {description}
                        </div>


                    </div>

                    <div className={styles.Footer}>
                        {footer ? footer :
                            <a href={link} target='_blank' rel='noreferrer'>
                                <button>
                                    Check it out!
                                </button>
                            </a>
                        }
                    </div>

                    {/* images */}

                </div>
            </div>
        </div>
    )
}