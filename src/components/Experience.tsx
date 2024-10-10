import Image from "next/image"
import { IoDiamondOutline } from "react-icons/io5";
import { TimeLine } from "./TimeLine";

const Experience = () => {
    return (
        <div id="experience">
            <h1 className='font-bold text-3xl mb-8 sm:mb-12'>Experience</h1>
            <div className="flex flex-col sm:flex-row items-center justify-between ">
                <TimeLine
                    verticalSpacing={24}
                    timelineItems={[
                        <div key={0} className="flex gap-4">
                            <a href="https://switchlinkafrica.co.ke" target="_blank" className="h-fit">
                                <Image src="/switchlinklogo.jpg" width={40} height={40} alt="Switchlink logo" />
                            </a>
                            <div>
                                <div>
                                    <p className="font-bold">Senior Software Engineer: C#/Golang</p>
                                    <p>SwitchLink Africa Limited</p>
                                    <p className="text-sm">June 2024- Present. 5 mos</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mt-6 font-bold">
                                    <p><IoDiamondOutline /></p>
                                    <p>React.js/ Redux</p>,
                                    <p>Golang</p>
                                    <p>C# & ASPNET</p>,
                                    <p>Azure Pipelines, Docker, Kubernetes, Terraform</p>
                                </div>
                            </div>
                        </div>,
                        <div key={1} className="flex gap-4">
                            <a href="" className="h-fit">
                                <Image src="/GriifinLogo.png" width={40} height={40} alt="Griffin logo" />
                            </a>
                            <div>
                                <div>
                                    <p className="font-bold"> Software Engineer: React ,C#,Java</p>
                                    <p>Griffin Global Technologies </p>
                                    <p className="text-sm">March 2023- May 2024. 1year 1 mos</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mt-6 font-bold">
                                    <p><IoDiamondOutline /></p>
                                    <p>Amazon Web Services(AWS)</p>,
                                    <p>Next.js</p>,
                                    <p>C# & ASPNET</p>,
                                    <p>Java ,GRPC</p>
                                </div>
                            </div>
                        </div>,
                        <div key={2} className="flex gap-4">
                            <a href="https://coretecafrica.com/" target="_blank" className="h-fit">
                                <Image src="/Corectec-n-logo.png" width={40} height={40} alt="Coretec-Logo" />
                            </a>
                            <div>
                                <div>
                                    <p className="font-bold">Mpesa Api Software Engineer</p>
                                    <p>Coretec Systems And Solutions</p>
                                    <p className="text-sm">June 2022- Dec 2022 . 8 mos</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mt-6 font-bold">
                                    <p><IoDiamondOutline /></p>
                                    <p>Mpesa Api</p>,
                                    <p>Node.Js</p>,
                                    <p>Java</p>,
                                    <p>Kotlin</p>
                                </div>
                            </div>
                        </div>,
                        <div key={2} className="flex gap-4">
                            <a href="https://thejitu.com/" target="_blank" className="h-fit">
                                <Image src="/thejitu_com_logo.jpeg" width={40} height={40} alt="Pesira logo" />
                            </a>
                            <div>
                                <div>
                                    <p className="font-bold">Full Stack Software Engineer</p>
                                    <p>THEJituKenya</p>
                                    <p className="text-sm">July 2022 - Feb 2023 . 7 mos</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mt-6 font-bold">
                                    <p><IoDiamondOutline /></p>
                                    <p>Node.js</p>,
                                    <p>Typescript</p>,
                                    <p>Angular</p>,
                                    <p>Python</p>
                                </div>
                            </div>
                        </div>,
                    ]} />
                <div>
                    <Image src="/steps.svg" width={400} height={400} alt="Pesira logo" />
                </div>
            </div>
        </div>

    )
}

export default Experience
