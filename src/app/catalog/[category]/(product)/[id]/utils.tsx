import { MdPhoneAndroid } from "react-icons/md";
import { BsCpu } from "react-icons/bs";
import { LuCpu } from "react-icons/lu";
import { IoCameraOutline, IoHome } from "react-icons/io5";
import { IoIosCloudDone, IoMdReverseCamera } from "react-icons/io";
import { GiBattery75 } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { Button } from "@/components/ui";



export const sreensArr = [
    { title: 'Screen diagonal', desc: '6.7' },
    { title: 'The screen resolution', desc: '2796x1290' },
    { title: 'The screen refresh rate', desc: '120 Hz' },
    { title: 'The pixel density', desc: '460 ppi' },
    { title: 'Screen type', desc: 'OLED' },
    { title: 'Additionally', desc: 'Dynamic Island-Always-On display HDR display True Tone Wide color (P3)' }
]

interface IDetailsProps {
    styles: any
    screenSize: string
    description: string
    screenResolution: string
    screenType: string
}
export function Details({ styles, ...data }: IDetailsProps) {
    return (
        <>
            <div className={styles.details}>
                <h2 className={styles.h2}>Details</h2>
                <p className={styles.p}>{data.description}</p>
                <div className={styles.screen}>
                    <h2>Screen</h2>
                    <div className={styles.screenOptions}>
                        {sreensArr.map((el, i) => (
                            <div key={i} className={styles.separator}>
                                <p>{el.title}</p>
                                <p>{i === 0
                                    ? data.screenSize
                                    : i === 1
                                        ? data.screenResolution
                                        : i === 2
                                            ? sreensArr[2].desc
                                            : i === 3
                                                ? sreensArr[3].desc
                                                : i === 4
                                                    ? data.screenType
                                                    : i === 5
                                                        ? sreensArr[5].desc
                                                        : ''
                                }
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.cpu}>
                    <h2>CPU</h2>
                    <div className={styles.cpuOptions}>
                        {['CPU', 'Number of cores'].map((el, i) => (
                            <div key={i} className={styles.separator}>
                                <p>{el}</p>
                                <p>{i === 0 ? 'A16 Bionic' : '6'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
interface IReviewsProps {
    styles: any
    input: number
}
export function Reviews({ styles, input }: IReviewsProps) {
    return (
        <>
            <div className={styles.reviews}>
                <h1 className={styles.h1}>Reviews</h1>
                <div className={styles.rating}>
                    <div className={styles.stars}>
                        <h1>4.8</h1>
                        <p>of 125 reviews</p>
                        <div className={styles.star}>
                            {[...new Array(5)].map((_, i) => (
                                <img key={i} src={'/Star.svg'} alt="star" width={24} height={24} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.input}>
                        {['Excellent', 'Good', 'Average', 'Below Average', 'Poor'].map((el, i) => (
                            <div className={styles.inputOne} key={i}>
                                <h3>{el}</h3>
                                <div className={styles.line}>
                                    <div className={styles.lineOne}></div>
                                    <img src={'/line.svg'} alt="line" height={6} width={input} className={styles.lineTwo} />
                                </div>
                                <h4>100</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
interface ICommentsProps {
    styles: any
}
export function Comments({ styles }: ICommentsProps) {
    return (
        <>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <img src={'/icons/Icon_Gaming.png'} alt="logo" width={56} height={56} />
                    <div className={styles.info}>
                        <div className={styles.create}>
                            <h3>Grace Carey</h3>
                            <p>24 January,2023</p>
                        </div>
                        <div className={styles.stars}>
                            {[...new Array(5)].map((_, i) => (
                                <img key={i} src={'/Star.svg'} alt="star" width={24} height={24} />
                            ))}
                        </div>
                        <p>I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤</p>
                    </div>
                </div>
            </div>
        </>
    )
}